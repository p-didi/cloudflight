const withTM = require('next-transpile-modules')([
	'three',
], {
	//debug: true,
	//resolveSymlinks: false
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const withPlugins = require('next-compose-plugins')
module.exports = withPlugins([
  withBundleAnalyzer,
  withTM, // wants to be the last plugin in this list
], {
  poweredByHeader: false,
  reactStrictMode: true,

  //to ignore TS errors during build (for now)
  typescript: { ignoreBuildErrors: true },
  images: {
    domains: [
    	'images.unsplash.com',
    	'github.com',
	],
  },

  /* defaults you might want to overwrite
  reactStrictMode: false, // in dev mode only - https://nextjs.org/docs/api-reference/next.config.js/react-strict-mod
  poweredByHeader: true, // false => to disable the x-powered-by
  generateEtags: true, // false => to disable ETag generation
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  */

  i18n: {
    locales: [
        //'de',
        'en',
    ],
    defaultLocale: 'en',
    //localeDetection: false
  },


  // TODO: check if this disables/forces anything optimization wise
  async headers() {
    return [
      {
        //source: '/(.*)',
        source: '/((?!api$|api/).*)',
        headers: [
          {
            key: 'X-Clacks-Overhead',
            value: 'GNU Terry Pratchett',
          },
        ],
      },
    ]
  },

})
