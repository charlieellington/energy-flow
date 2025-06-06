// This is the Next.js config file for your project. It sets up Nextra as the documentation theme and configures the theme settings.
// For a no-code user: This file tells Next.js to use the Nextra documentation system and where to find its settings.
//
// NOTE: This file is now using ESM (modern JavaScript module syntax) because Nextra requires it.

import nextra from 'nextra';
import remarkFrontmatter from 'remark-frontmatter';
import { visit } from 'unist-util-visit';

// Custom remark plugin to auto-generate titles for pages without front-matter
function addTitleIfMissing() {
  return (tree, file) => {
    let hasFrontmatter = false;
    let hasTitle = false;

    // Check if the page has front-matter and a title
    visit(tree, 'yaml', (node) => {
      hasFrontmatter = true;
      if (node.value && node.value.includes('title:')) {
        hasTitle = true;
      }
    });

    // If no front-matter exists, or front-matter exists but no title, add/update it
    if (!hasFrontmatter || !hasTitle) {
      // Extract filename without extension and convert to readable title
      const fileName = file.basename || file.history[0]?.split('/').pop() || 'Untitled';
      const cleanFileName = fileName.replace(/\.(md|mdx)$/, '');
      const generatedTitle = cleanFileName
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());

      if (!hasFrontmatter) {
        // Add new front-matter block at the beginning
        const frontmatterNode = {
          type: 'yaml',
          value: `title: ${generatedTitle}`
        };
        tree.children.unshift(frontmatterNode);
      } else if (!hasTitle) {
        // Add title to existing front-matter
        visit(tree, 'yaml', (node) => {
          if (!node.value.includes('title:')) {
            node.value = `title: ${generatedTitle}\n${node.value}`;
          }
        });
      }

      // After updating front matter, also make sure there is a top-level heading so the page shows a proper title in content and so Nextra registers it for the sidebar.
      const hasHeading = tree.children.some((n) => n.type === 'heading' && n.depth === 1)
      if (!hasHeading) {
        tree.children.unshift({
          type: 'heading',
          depth: 1,
          children: [{ type: 'text', value: generatedTitle }]
        })
      }
    }
  };
}

// Custom remark plugin to transform bare YouTube links into embedded iframes
function embedYouTubeLinks() {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      // Look for paragraphs containing only text that looks like a YouTube URL
      if (node.type === 'paragraph' && node.children && node.children.length === 1) {
        const child = node.children[0];
        
        // Check if it's a text node with a YouTube URL
        if (child.type === 'text') {
          const url = child.value.trim();
          const match = url.match(
            /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})(?:\S+)?$/
          );

          if (match) {
            const videoId = match[1];

            // Replace the paragraph with JSX that MDX will process
            parent.children[index] = {
              type: 'mdxJsxFlowElement',
              name: 'iframe',
              attributes: [
                { type: 'mdxJsxAttribute', name: 'width', value: '560' },
                { type: 'mdxJsxAttribute', name: 'height', value: '315' },
                { type: 'mdxJsxAttribute', name: 'src', value: `https://www.youtube.com/embed/${videoId}` },
                { type: 'mdxJsxAttribute', name: 'title', value: 'YouTube video' },
                { type: 'mdxJsxAttribute', name: 'frameBorder', value: '0' },
                { type: 'mdxJsxAttribute', name: 'allow', value: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' },
                { type: 'mdxJsxAttribute', name: 'allowFullScreen', value: null }
              ],
              children: []
            };
          }
        }
      }
    });
  };
}

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [remarkFrontmatter, addTitleIfMissing, embedYouTubeLinks],
  },
});

export default withNextra({
  pageExtensions: ['md', 'mdx', 'tsx', 'ts'],
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/',
        permanent: false,
      },
    ];
  },
});
