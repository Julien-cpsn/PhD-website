// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {PluginOptions} from "@easyops-cn/docusaurus-search-local";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Julien C.',
  tagline: 'Archives de mon doctorat',
  favicon: 'img/student_hat.ico',

  // Set the production url of your site here
  url: 'https://phd.julien-cpsn.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Julien-cpsn', // Usually your GitHub org/user name.
  projectName: 'PhD-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },

  themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          language: ['en', 'fr'],
          docsRouteBasePath: 'courses'
        }),
      ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Julien-cpsn/PhD-website/tree/main/',
          routeBasePath: "courses",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Julien-cpsn/PhD-website/tree/main/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Julien CAPOSIENA`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          }
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Julien C.',
        logo: {
          alt: 'Mon logo',
          src: 'img/student_hat.svg',
        },
        items: [
          {
            href: '/',
            label: 'Accueil',
            position: 'left'
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'coursesSidebar',
            label: 'Cours',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: '/publications',
            label: 'Publications',
            position: 'left'
          },
          {
            to: '/cv',
            label: 'Curriculum Vitae',
            position: 'left'
          },
          {
            type: 'localeDropdown',
            position: 'right',
            queryString: '?persistLocale=true'
          },
          {
            href: 'https://github.com/Julien-cpsn/',
            position: 'right',
            className: 'github-link',
            'aria-label': 'Profil GitHub',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Cours',
            items: [
              {
                label: 'PHP',
                to: '/courses/PHP'
              }
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Julien-cpsn/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/julien-caposiena-54555a195/'
              },
              {
                label: 'ORCID',
                href: 'https://orcid.org/0009-0002-0684-7221'
              }
            ],
          },
          {
            title: 'Autres',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Publications',
                to: '/publications',
              },
              {
                label: 'Curriculum Vitae',
                to: '/cv',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Julien CAPOSIENA, Inc. Built with Docusaurus.`,
      },
      tableOfContents: {
        maxHeadingLevel: 4,
      },
      prism: {
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['bash', 'c', 'css', 'csv', 'json', 'php', 'sql', 'http'],
      },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgba(215, 215, 215, 0.95)',
          dark: 'rgba(50, 50, 50, 0.95)'
        },
      },
    }),

  plugins: [
    'docusaurus-plugin-sass',
    'docusaurus-plugin-image-zoom',
    '@saucelabs/theme-github-codeblock',
    [
      'docusaurus-graph',
      {
        path: 'docs',
      },
    ],
  ]
};

export default config;
