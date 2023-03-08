import React from "react"
import Layout from '../containers/layout/layout'
import Banner from '../containers/blog/banner'
import Blog from '../containers/blog/blog-area'

const BlogPage = () => (
	<Layout>
		<Banner />
		<Blog />
	</Layout>
)

export default BlogPage