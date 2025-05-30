import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import SidebarToggle from './components/SidebarToggle'

// Helper: turn "my-folder_name" → "My Folder Name"
const humanize = (slug: string) =>
  slug
    .replace(/[-_]/g, ' ') // dashes/underscores → spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()) // capitalise each word

const config: DocsThemeConfig = {
  logo: <span>🌈 Energy Flow by Charlie Ellington</span>,
  project: {
    link: 'https://github.com/charlieellington/energy-flow',
  },
  chat: {
    link: 'https://www.linkedin.com/in/charlie-ellington/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="12" fill="#0A66C2" />
        <path
          d="M8.25 9.75h2.25v7.5H8.25v-7.5zM9.375 7.5c.75 0 1.125-.5 1.125-1.125S10.125 5.25 9.375 5.25 8.25 5.75 8.25 6.375 8.625 7.5 9.375 7.5zM12 9.75h2.15v1.15h.03c.3-.575 1.05-1.15 2.15-1.15 2.3 0 2.75 1.5 2.75 3.45v4.05h-2.25v-3.6c0-.85-.02-2.05-1.3-2.05-1.3 0-1.5.95-1.5 1.95v3.7H12v-7.55z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  docsRepositoryBase: 'https://github.com/charlieellington/energy-flow',
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  footer: {
    text: (
      <span style={{ fontSize: '0.8rem' }}>
        Made with ❤️ by Charlie Ellington with help from friends
      </span>
    ),
  },
  components: {
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img
        {...props}
        style={{ width: '100%', height: 'auto', display: 'block', margin: '1rem 0' }}
      />
    ),
  },
  sidebar: {
    // Render nicer labels in the sidebar without requiring _meta.json files per folder
    titleComponent: ({ title }: { title: string }) => <span>{humanize(title)}</span>,
    toggleButton: true,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Energy Flow',
      defaultTitle: '🌈 Energy Flow by Charlie Ellington',
      description:
        'Personal knowledge base for Energy Flow: challenging, skill-building work that creates wealth in wellbeing, community, fitness, health, and evergreen assets.',
      additionalMetaTags: [
        {
          name: 'keywords',
          content:
            'Charlie Ellington, Energy Flow, deep work, flow state, well-being, community, fitness, health, Evergreen assets, productivity systems',
        },
      ],
      openGraph: {
        type: 'website',
        title: '🌈 Energy Flow by Charlie Ellington',
        description:
          'Chronicling projects, processes and systems for a balanced life of energy flow, creative freedom and compassionate productivity.',
        url: 'https://energy-flow-eight.vercel.app',
        images: [
          {
            url: 'https://energy-flow-eight.vercel.app/og.jpg',
            width: 1200,
            height: 630,
            alt: '🌈 Energy Flow by Charlie Ellington',
          },
        ],
      },
    }
  },
  head: (
    <>
      <meta name="theme-color" content="#000000" />
      {/* Rainbow emoji favicon */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      {/* Hide sidebar helper class */}
      <style>{`@media (min-width:1024px){body.ef-hide-sidebar nav,body.ef-hide-sidebar aside{display:none!important;}body.ef-hide-sidebar main{margin-left:0!important;}}`}</style>
    </>
  ),
  navbar: {
    extraContent: <SidebarToggle />,
  },
}

export default config
