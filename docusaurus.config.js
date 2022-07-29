// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Midtown Playbook',
  tagline: 'Midtown Rulers basketball practice playbook',
  url: 'https://playbook.midtownrulers.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Midtown Playbook',
        logo: {
          alt: 'Midtown Rulers logo',
          src: 'img/logo.png',
        },
        items: [
	  {
            to: "/docs/intro",
	    label: "Playbook",
	    position: 'left'
	  },
          {
            href: 'https://midtownrulers.org',
            label: 'Main website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Home',
                to: '/',
              },
	      {
		label: 'Playbook',
		to: '/docs/intro'
	      }
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Main website',
                href: 'https://midtownrulers.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Midtown Rulers. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
