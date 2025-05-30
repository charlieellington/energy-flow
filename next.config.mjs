// This is the Next.js config file for your project. It sets up Nextra as the documentation theme and configures the theme settings.
// For a no-code user: This file tells Next.js to use the Nextra documentation system and where to find its settings.
//
// NOTE: This file is now using ESM (modern JavaScript module syntax) because Nextra requires it.

import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
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
