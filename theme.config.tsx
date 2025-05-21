import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Energy Flow by Charlie Ellington</span>,
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
        fill="currentColor"
      >
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.8 2.65 4.8 6.1V24h-4v-8.4c0-2-.04-4.6-2.8-4.6-2.8 0-3.23 2.2-3.23 4.47V24h-4V8z" />
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
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Energy Flow',
      defaultTitle: 'Energy Flow by Charlie Ellington',
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
        title: 'Energy Flow by Charlie Ellington',
        description:
          'Chronicling projects, processes and systems for a balanced life of energy flow, creative freedom and compassionate productivity.',
        url: 'https://energy-flow-eight.vercel.app',
        images: [
          {
            url: 'https://energy-flow-eight.vercel.app/og.jpg',
            width: 1200,
            height: 630,
            alt: 'Energy Flow by Charlie Ellington',
          },
        ],
      },
    }
  },
  head: (
    <>
      <meta name="theme-color" content="#000000" />
    </>
  ),
}

export default config
