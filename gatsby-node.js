const path = require(`path`)
const { slugify } = require('./src/utils/utilFunctions')

exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === 'MarkdownRemark') {
		const slugFromTitle = slugify(node.frontmatter.title);
		createNodeField({
			node,
			name: 'slug',
			value: slugFromTitle
		})
	}
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const singleBlog = path.resolve("./src/templates/blog-template/blog-template.js");
	const blogList = path.resolve("./src/templates/blog-list/blog-list.js");
	const singleProject = path.resolve("./src/templates/project-template/project-template.js");

	const result = await graphql(`
        {
            allMarkdownRemark{
                edges {
                  node {
                    fields{
                        slug
                    }
                  }
                }
            }  
            allProjectsJson {
                edges {
                    node {
                        jsonId
                    }
                    next {
                        jsonId
                        title
                        sector
                        client
						featured_image {
							childImageSharp {
								gatsbyImageData(width: 1060, height: 600, layout: CONSTRAINED, quality: 100, placeholder: TRACED_SVG)
							}
						}
                    }
                    previous {
                        jsonId
                        title
                        sector
                        client
						featured_image {
							childImageSharp {
								gatsbyImageData(width: 1060, height: 600, layout: CONSTRAINED, quality: 100, placeholder: TRACED_SVG)
							}
						}
                    }
                }
            }     
        }
    `);
	const posts = result.data.allMarkdownRemark.edges
	posts.forEach(({ node }) => {
		createPage({
			path: "/blog/" + node.fields.slug,
			component: singleBlog,
			context: {
				slug: node.fields.slug
			}
		})
	})

	const postsPerPage = 4;
	const numberOfPages = Math.ceil(posts.length / postsPerPage);

	Array.from({ length: numberOfPages }).forEach((_, index) => {
		const isFirstPage = index === 0;
		const currentPage = index + 1;
		if (isFirstPage) return;
		createPage({
			path: `blog/page/${currentPage}`,
			component: blogList,
			context: {
				limit: postsPerPage,
				skip: index * postsPerPage,
				currentPage,
				numberOfPages
			}
		})
	})

	result.data.allProjectsJson.edges.forEach(({ node, next, previous }) => {
		createPage({
			path: `project/${node.jsonId}`,
			component: singleProject,
			context: {
				id: node.jsonId,
				next,
				previous
			}
		})
	})
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html") {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /bad-module/,
						use: loaders.null(),
					},
				],
			},
		})
	}
}