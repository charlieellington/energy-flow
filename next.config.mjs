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

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [remarkFrontmatter, addTitleIfMissing],
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
