const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '	rgb(120, 120, 120)' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};