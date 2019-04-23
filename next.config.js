const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');

const root = path.resolve(__dirname);
const dev = process.env.NODE_ENV !== 'production';

const conf = withImages(withCss(withSass(withTypescript({
  env: {
    HOST: '0.0.0.0',
    GRAPHQL: 'http://127.0.0.1:4002/graphql',
    WS_SUBSCRIPTIONS: 1,
    LOCAL_STORAGE_KEY: 'reactql'
  },
  generateBuildId: () => {
    return dev ? 'development' : Math.random().toString(32).slice(2)
  },
  cssModules: false,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]--[hash:base64:5]'
  },
  lessLoaderOptions: {
    importLoaders: 1,
    javascriptEnabled: true,
  },
  pageExtensions: ['tsx', 'ts'],
  webpack: (config, options) => {
    // config.target = "web";
    // config.resolve.extensions.push('.less');
    // config.resolve.extensions.push('.css');
    config.resolve.alias['@'] = path.resolve(root, "src");
    config.plugins.push(new webpack.DefinePlugin({
      GRAPHQL: JSON.stringify(process.env.GRAPHQL),
      SERVER: true,
      WS_SUBSCRIPTIONS: JSON.stringify(process.env.WS_SUBSCRIPTIONS),
      LOCAL_STORAGE_KEY: JSON.stringify(process.env.LOCAL_STORAGE_KEY)
    }));
    if (config.externals && config.externals.length && config.externals.length === 1) {
      const older = config.externals[0];
      const fn = (context, request, callback) => {
        if (request.startsWith('red-agate-') || request.endsWith('.less')) {
          return callback();
        } else {
          return older.call(null, context, request, callback);
        }
      };
      config.externals[0] = fn;
    }
    const isServer = options.isServer;

    config.module.rules.push({
      test: /\.less$/,
      include: /global/,
      use: isServer ? ['ignore-loader'] : [
        !isServer && dev && 'extracted-loader',
        !isServer && MiniCssExtractPlugin.loader,
        {
          loader: isServer ? 'css-loader/locals' : 'css-loader',
          options: {
            modules: false,
            minimize: !dev,
            sourceMap: dev,
            importLoaders: 1
          },
        },
        {
          loader: 'less-loader',
          options: {
            importLoaders: 1,
            javascriptEnabled: true,
            cssModules: false,
          }
        }
      ].filter(Boolean)
    });

    config.module.rules.push({
      test: /\.less$/,
      exclude: /global/,
      use: [
        !isServer && dev && 'extracted-loader',
        !isServer && MiniCssExtractPlugin.loader,
        {
          loader: isServer ? 'css-loader/locals' : 'css-loader',
          options: {
            modules: true,
            minimize: !dev,
            sourceMap: dev,
            importLoaders: 1,
            localIdentName: '[path]_[name]_[local]_[hash:base64:2]',
          },
        },
        {
          loader: 'less-loader',
          options: {
            importLoaders: 1,
            javascriptEnabled: true,
            // cssModules: true,
          }
        }
      ].filter(Boolean)
    });

    // console.log('☞☞☞ 9527 index 116', (config as any).module!.rules);
    return config;
  },
}))));

module.exports = conf;