export default {
	production: `https://graphql.contentful.com/content/v1/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}?access_token=${process.env.GATSBY_CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN}`,
	development: `${process.env.GATSBY_URL}/graphql`
}