/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = async ({page, actions}) => {
	const {createPage} = actions

	//page.matchPath is a special key that's used for matching pages 
	//only on the client.
	if (page.path.match(/^\/blog/)) {
		page.matchPath = '/blog/*'
		
		//Update the page.
		createPage(page)
	}
}
