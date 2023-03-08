import React from "react"
import Seo from '../components/seo';
import Layout from '../containers/layout/layout'
import Banner from '../containers/projects/banner'
import Project from '../containers/projects/project'

const ProjectPage = () => (
	<Layout>
		<Seo title="Yokku - Nos Projets" />
		<Banner />
		<Project />
	</Layout>
)

export default ProjectPage