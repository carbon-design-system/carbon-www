/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-unresolved */
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');

const rimraf = require('rimraf');

exports.onCreateWebpackConfig = ({ actions }) => {
  // Allows importing html files for component code examples
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          loaders: ['html-loader', 'markdown-loader'],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

// Generate docgen info from carbon-components-react
exports.onPreBootstrap = () => {
  const { sep } = path;
  const tmpDir = fs.mkdtempSync(`.cache${sep}`);
  const babelPlugins = `babel-plugin-react-docgen,transform-es2015-modules-commonjs`;

  execSync(
    `babel ./node_modules/carbon-components-react/es --out-dir ${tmpDir} --plugins=${babelPlugins}`
  );

  const CarbonComponentsReact = require(`./${tmpDir}`);

  const components = Object.keys(CarbonComponentsReact);
  const docgen = {};

  components.forEach(component => {
    // eslint-disable-next-line no-underscore-dangle
    docgen[component] = CarbonComponentsReact[component].__docgenInfo;
  });

  fs.writeFileSync(
    'src/data/docgen/react-docgen.json',
    JSON.stringify(docgen, null, 2)
  );

  rimraf.sync(tmpDir);
};
