/* eslint-env node */
// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'index',
    'start',
    {
      'DayPicker Basics': [
        'basics/navigation',
        'basics/customization',
        'basics/selecting-days',
        'basics/modifiers',
        'basics/styling',
        'basics/localization',
        'basics/keyboard'
      ]
    },
    {
      Guides: [
        'guides/formatters',
        'guides/custom-components',
        'guides/input-fields',
        'guides/upgrading'
      ]
    }
  ],
  developmentSidebar: [
    'development/index',
    'development/source',
    'development/docs',
    'development/code-of-conduct',
    'changelog',
    'license'
  ],
  apiSidebar: [
    'reference',
    {
      type: 'autogenerated',
      dirName: 'api'
    }
  ]
};

module.exports = sidebars;
