const { description } = require('../../package')

module.exports = {




  locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        lang: 'en-US', // this will be set as the lang attribute on <html>
        title: 'Rocket Pool',
        },
      '/fr/': {
        lang: 'fr-FR',
        title: 'Rocket Pool',
        }
    },






  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#e57147' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * ref：https://v1.vuepress.vuejs.org/config/#theme
   */
  theme: 'default-prefers-color-scheme',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {





    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
      //  editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
      //  serviceWorker: {
      //    updatePopup: {
      //      message: "New content is available.",
      //      buttonText: "Refresh"
      //    }
      //  },
        // algolia docsearch options for current locale
      //  algolia: {},
      //  nav: [
      //    { text: 'Nested', link: '/nested/' , ariaLabel: 'Nested' }
      //  ],
      //  sidebar: {
      //    '/': [/* ... */],
      //    '/nested/': [/* ... */]
      //  }


      repo: 'filosofiaha/docs.rocketpool.net',
      editLinks: true,
      docsDir: 'src',
      docsBranch: 'main',
      editLinkText: '',
      lastUpdated: false,
      logo: '/images/logo-small.png',
      smoothScroll: true,
      nav: [
      {
          text: 'Overview',
          link: '/overview/',
        },
        {
          text: 'Guides',
          link: '/guides/'
        },
        {
          text: 'For Developers',
          link: '/developers/'
        },
        {
          text: 'Website',
          link: 'https://www.rocketpool.net'
        }
      ],
      sidebar: {
        '/overview/': [
          {
            title: 'Overview',
            collapsable: false,
            children: [
              '',
              'explainer-series',
              'faq',
              'glossary',
            ]
          }
        ],
        '/guides/': [
          {
            title: 'Guides',
            sidebarDepth: 2,
            collapsable: false,
            children: [
                '',
                {
                  title: 'Staking with Rocket Pool',
                  sidebarDepth: 1,
                  collapsable: true,
                  children: [
                      'staking/overview',
                      'staking/via-rp',
                      'staking/via-l1',
                      'staking/via-l2'
                  ]
                },
                {
                  title: 'Running a Rocket Pool Node',
                  sidebarDepth: 2,
                  collapsable: true,
                  children: [
                      'node/responsibilities',
                      'node/platform',
                      {
                        title: 'Preparing a Local Node',
                        sidebarDepth: 2,
                        collapsable: true,
                        children: [
                            'node/local/hardware',
                            'node/local/prepare-pc',
                            'node/local/prepare-pi',
                            'node/ssh'
                        ]
                      },
                      {
                        title: 'Preparing a Cloud (VPS) Node',
                        sidebarDepth: 2,
                        collapsable: true,
                        children: [
                            'node/vps/providers',
                            'node/vps/os'
                        ]
                      },
                      {
                        title: 'Installing Rocket Pool',
                        sidebarDepth: 2,
                        collapsable: true,
                        children: [
                            'node/eth-clients',
                            'node/install-modes',
                            'node/docker',
                            'node/hybrid',
                            'node/native',
                        ]
                      },
                      'node/securing-your-node',
                      'node/starting-rp',
                      'node/cli-intro',
                      'node/prepare-node',
                      'node/create-validator',
                      {
                        title: 'Monitoring and Maintenance',
                        sidebarDepth: 2,
                        collapsable: true,
                        children: [
                            'node/performance',
                            'node/grafana',
                            'node/updates',
                            'node/backups',
                            'node/geth-pruning'
                        ]
                      },
                      'node/rewards',
                      'node/troubleshooting',
                      'node/faq'
                  ]
                },
                {
                  title: 'Testing Rocket Pool with the Prater Test Network',
                  sidebarDepth: 2,
                  collapsable: true,
                  children: [
                    'testnet/overview',
                    'testnet/upgrading',
                  ]
                },
                'node/mainnet',
            ]
          }
        ],
        '/developers/': [
          {
            title: 'For Developers',
            sidebarDepth: 2,
            collapsable: false,
            children: [
              '',
              {
                title: 'Integration Usage and Examples',
                sidebarDepth: 2,
                collapsable: true,
                children: [
                  'usage/contracts/contracts',
                  'usage/go/go',
                  'usage/js/js',
                ]
              },
              {
                title: 'API Reference',
                sidebarDepth: 2,
                collapsable: true,
                children: [
                    'api/contracts',
                    {
                      title: 'Go Bindings',
                      sidebarDepth: 2,
                      collapsable: true,
                      children: [
                        'api/go/auction',
                        'api/go/contracts',
                        {
                          title: 'dao',
                          children: [
                            'api/go/dao',
                            'api/go/dao-protocol',
                            'api/go/dao-trustednode',

                          ]
                        },
                        'api/go/deposit',
                        'api/go/minipool',
                        'api/go/network',
                        'api/go/node',
                        'api/go/rewards',
                        'api/go/rocketpool',
                        {
                          title: 'settings',
                          sidebarDepth: 2,
                          collapsable: true,
                          children: [
                            'api/go/settings-protocol',
                            'api/go/settings-trustednode',
                          ]
                        },
                        'api/go/storage',
                        'api/go/tokens',
                        'api/go/types',
                        {
                          title: 'utils',
                          children: [
                            'api/go/utils',
                            'api/go/utils-eth',
                            'api/go/utils-strings',
                          ]
                        }
                      ]
                    },
                    {
                        title: 'JS Reference',
                        sidebarDepth: 2,
                        collapsable: true,
                        children: [
                            {
                                title: 'Auction',
                                children: [
                                    'api/js/Auction',
                                ]
                            },
                            {
                                title: 'Contracts',
                                children: [
                                    'api/js/Contracts',
                                ]
                            },
                            {
                                title: 'DAO',
                                children: [
                                    'api/js/DAONodeTrusted',
                                    'api/js/DAONodeTrustedActions',
                                    'api/js/DAONodeTrustedProposals',
                                    'api/js/DAONodeTrustedSettings',
                                    'api/js/DAOProposal',
                                ]
                            },
                            {
                                title: 'Deposit',
                                children: [
                                    'api/js/Deposit',
                                ]
                            },
                            {
                                title: 'Minipool',
                                children: [
                                    'api/js/Minipool',
                                    'api/js/MinipoolContract',
                                ]
                            },
                            {
                                title: 'Network',
                                children: [
                                    'api/js/Network',
                                ]
                            },
                            {
                                title: 'Node',
                                children: [
                                    'api/js/Node',
                                ]
                            },
                            {
                                title: 'Rewards',
                                children: [
                                    'api/js/Rewards',
                                    'api/js/Pool',
                                ]
                            },
                            {
                                title: 'Settings',
                                children: [
                                    'api/js/AuctionSettings',
                                    'api/js/DepositSettings',
                                    'api/js/MinipoolSettings',
                                    'api/js/NetworkSettings',
                                    'api/js/NodeSettings',
                                ]
                            },
                            {
                                title: 'Tokens',
                                children: [
                                    'api/js/ERC20',
                                    'api/js/LegacyRPL',
                                    'api/js/RETH',
                                    'api/js/RPL',
                                ]
                            },
                            {
                                title: 'Vault',
                                children: [
                                    'api/js/Vault',
                                ]
                            },
                            {
                                title: 'Rocketpool',
                                children: [
                                    'api/js/RocketPool',
                                ]
                            },
                        ]
                    },
                ]
              },
            ]
          },
        ],
      }







      },





      '/fr/': {
        selectText: 'Langues',
        label: 'Français',

        repo: 'filosofiaha/docs.rocketpool.net',
        editLinks: true,
        docsDir: 'fr',
        docsBranch: 'main',
        editLinkText: '',
        lastUpdated: false,
        logo: '/images/logo-small.png',
        smoothScroll: true,
        nav: [
        {
            text: 'Aperçu',
            link: '/fr/overview/',
          },
          {
            text: 'Guides',
            link: '/fr/guides/'
          },
          {
            text: 'Pour les développeurs',
            link: '/fr/developers/'
          },
          {
            text: 'Site web',
            link: 'https://www.rocketpool.net'
          }
        ],
        sidebar: {
          '/fr/overview/': [
            {
              title: 'Aperçu',
              collapsable: false,
              children: [
                '',
                'explainer-series',
                'faq',
                'glossary',
              ]
            }
          ],
          '/fr/guides/': [
            {
              title: 'Guides',
              sidebarDepth: 2,
              collapsable: false,
              children: [
                  '',
                  {
                    title: 'Staker avec Rocket Pool',
                    sidebarDepth: 1,
                    collapsable: true,
                    children: [
                        'staking/overview',
                        'staking/via-rp',
                        'staking/via-l1',
                        'staking/via-l2'
                    ]
                  },
                  {
                    title: 'Exécution d\'un noeud Rocket Pool',
                    sidebarDepth: 2,
                    collapsable: true,
                    children: [
                        'node/responsibilities',
                        'node/platform',
                        {
                          title: 'Préparation d\'un noeud local',
                          sidebarDepth: 2,
                          collapsable: true,
                          children: [
                              'node/local/hardware',
                              'node/local/prepare-pc',
                              'node/local/prepare-pi',
                              'node/ssh'
                          ]
                        },
                        {
                          title: 'Preparation d\'un noeud dans le cloud (VPS)',
                          sidebarDepth: 2,
                          collapsable: true,
                          children: [
                              'node/vps/providers',
                              'node/vps/os'
                          ]
                        },
                        {
                          title: 'Installation de Rocket Pool',
                          sidebarDepth: 2,
                          collapsable: true,
                          children: [
                              'node/eth-clients',
                              'node/install-modes',
                              'node/docker',
                              'node/hybrid',
                              'node/native',
                          ]
                        },
                        'node/securing-your-node',
                        'node/starting-rp',
                        'node/cli-intro',
                        'node/prepare-node',
                        'node/create-validator',
                        {
                          title: 'Suivi et maintenance',
                          sidebarDepth: 2,
                          collapsable: true,
                          children: [
                              'node/performance',
                              'node/grafana',
                              'node/updates',
                              'node/backups',
                              'node/geth-pruning'
                          ]
                        },
                        'node/rewards',
                        'node/troubleshooting',
                        'node/faq'
                    ]
                  },
                  {
                    title: 'Tester Rocket Pool avec le réseau Testnet Prater',
                    sidebarDepth: 2,
                    collapsable: true,
                    children: [
                      'testnet/overview',
                      'testnet/upgrading',
                    ]
                  },
                  'node/mainnet',
              ]
            }
          ],
          '/fr/developers/': [
            {
              title: 'Pour les développeurs',
              sidebarDepth: 2,
              collapsable: false,
              children: [
                '',
                {
                  title: 'Exemples d\'utilisation et d\'intégration',
                  sidebarDepth: 2,
                  collapsable: true,
                  children: [
                    'usage/contracts/contracts',
                    'usage/go/go',
                    'usage/js/js',
                  ]
                },
                {
                  title: 'Référence API',
                  sidebarDepth: 2,
                  collapsable: true,
                  children: [
                      'api/contracts',
                      {
                        title: 'Go Bindings',
                        sidebarDepth: 2,
                        collapsable: true,
                        children: [
                          'api/go/auction',
                          'api/go/contracts',
                          {
                            title: 'dao',
                            children: [
                              'api/go/dao',
                              'api/go/dao-protocol',
                              'api/go/dao-trustednode',

                            ]
                          },
                          'api/go/deposit',
                          'api/go/minipool',
                          'api/go/network',
                          'api/go/node',
                          'api/go/rewards',
                          'api/go/rocketpool',
                          {
                            title: 'settings',
                            sidebarDepth: 2,
                            collapsable: true,
                            children: [
                              'api/go/settings-protocol',
                              'api/go/settings-trustednode',
                            ]
                          },
                          'api/go/storage',
                          'api/go/tokens',
                          'api/go/types',
                          {
                            title: 'utils',
                            children: [
                              'api/go/utils',
                              'api/go/utils-eth',
                              'api/go/utils-strings',
                            ]
                          }
                        ]
                      },
                      {
                          title: 'Référence JS',
                          sidebarDepth: 2,
                          collapsable: true,
                          children: [
                              {
                                  title: 'Auction',
                                  children: [
                                      'api/js/Auction',
                                  ]
                              },
                              {
                                  title: 'Contracts',
                                  children: [
                                      'api/js/Contracts',
                                  ]
                              },
                              {
                                  title: 'DAO',
                                  children: [
                                      'api/js/DAONodeTrusted',
                                      'api/js/DAONodeTrustedActions',
                                      'api/js/DAONodeTrustedProposals',
                                      'api/js/DAONodeTrustedSettings',
                                      'api/js/DAOProposal',
                                  ]
                              },
                              {
                                  title: 'Deposit',
                                  children: [
                                      'api/js/Deposit',
                                  ]
                              },
                              {
                                  title: 'Minipool',
                                  children: [
                                      'api/js/Minipool',
                                      'api/js/MinipoolContract',
                                  ]
                              },
                              {
                                  title: 'Network',
                                  children: [
                                      'api/js/Network',
                                  ]
                              },
                              {
                                  title: 'Node',
                                  children: [
                                      'api/js/Node',
                                  ]
                              },
                              {
                                  title: 'Rewards',
                                  children: [
                                      'api/js/Rewards',
                                      'api/js/Pool',
                                  ]
                              },
                              {
                                  title: 'Settings',
                                  children: [
                                      'api/js/AuctionSettings',
                                      'api/js/DepositSettings',
                                      'api/js/MinipoolSettings',
                                      'api/js/NetworkSettings',
                                      'api/js/NodeSettings',
                                  ]
                              },
                              {
                                  title: 'Tokens',
                                  children: [
                                      'api/js/ERC20',
                                      'api/js/LegacyRPL',
                                      'api/js/RETH',
                                      'api/js/RPL',
                                  ]
                              },
                              {
                                  title: 'Vault',
                                  children: [
                                      'api/js/Vault',
                                  ]
                              },
                              {
                                  title: 'Rocketpool',
                                  children: [
                                      'api/js/RocketPool',
                                  ]
                              },
                          ]
                      },
                  ]
                },
              ]
            },
          ],
        }





      }
    }







  },

  // Import markdown plugins
  markdown: {
    extendMarkdown: md => {
      // Import include plugin, ref: https://www.npmjs.com/package/markdown-it-include
      md.use( require( 'markdown-it-include' ), {
        root: `${ __dirname }/../`,
      } )
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    ['vuepress-plugin-zooming', {
      options: {
          bgColor: 'black',
          zIndex: 10000,
      }
    }
    ],
    ['vuepress-plugin-code-copy', {
        color: '#ffbca5',
        staticIcon: true,
        backgroundColor: '#ffbca5'
        }
    ],
    'vuepress-plugin-element-tabs'
  ]
}
