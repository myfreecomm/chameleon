module.exports = {
  stories: ['../stories/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register'
  ]
};
