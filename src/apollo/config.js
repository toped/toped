export default {
	production: `https://graphql.contentful.com/content/v1/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}`,
	development: `${process.env.GATSBY_URL}/graphql`
}