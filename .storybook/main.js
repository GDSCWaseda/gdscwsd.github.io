const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-addon-material-ui'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, '../src/components'),
      pages: path.resolve(__dirname, '../src/pages'),
      assets: path.resolve(__dirname, '../src/assets')
    }

    return config
  }
}
