/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	pathPrefix: `/`,
	siteMetadata: {
		title: "YOKKU",
		titleTemplate: ``,
		description: `Ensemble créons le monde de demain, menons à bien vos projets digitaux et innovants. Pour nous la satisfaction client est une priorité absolue. Nous savons que la reussite d'un projet depend avant tout de la personne qui le porte, c'est pour cela que nous plaçons toujours l'humain au premier plan`,
		author: `@Yokku`,
		twitterUsername: `@Yokku`,
		image: 'bg-image-1.jpg',
		siteUrl: 'https://yokku.fr/',
		form_url: "https://getform.io/f/3ef8122e-5143-46dc-845b-433df3bc031e",
		contact: {
			address: '1350 Avenue Albert Einstein, <br/> 34000 Montpellier France.',
			email: 'contact@yokku.fr',
			company_email: 'contact@yokku.fr',
			company_address: '1350 Avenue Albert Einstein, 34000 Montpellier France.',
			phone: '0659452684',
			social: {
				twitter: 'https://twitter.com',
				linkedin: 'https://www.linkedin.com/company/yokku/',
				dribbble: 'https://dribbble.com'
			}
		},
		copyright: "YOKKU. All Rights Reserved"
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		"gatsby-plugin-image",
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-json`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Yokku`,
				short_name: `Yokku`,
				start_url: `/`,
				background_color: `#333333`,
				theme_color: `#001c43`,
				display: `standalone`,
				"icons": [
					{
						"src": "/icons/icon-16x16.png",
						"sizes": "72x72",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-32x32.png",
						"sizes": "96x96",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-192x192.png",
						"sizes": "192x192",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-512x512.png",
						"sizes": "512x512",
						"type": "image/png"
					}
				]
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'http://thern.rainbowit.net/',
				sitemap: 'http://thern.rainbowit.net/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1920
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/img/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: "G-9GPE2HB9JD",
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: true,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: ["/preview/**", "/do-not-track/me/too/"],
				// Delays sending pageview hits on route update (in milliseconds)
				pageTransitionDelay: 0,
				// Any additional optional fields
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				cookieDomain: "example.com",
			},
		},
	]
}
