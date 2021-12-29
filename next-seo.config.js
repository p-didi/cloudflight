export default {
	titleTemplate: '%s | example.com',

	openGraph: {
		type: 'website',
		locale: 'en',
		//url: 'https://www.example.com/',
		url: `${process.env.NEXT_PUBLIC_HOST}/`,
		site_name: `${process.env.NEXT_PUBLIC_DOMAIN}`,
	},

	// Allows to add a meta tag that is not documented here
	//additionalMetaTags: {
	//
	//}
}
