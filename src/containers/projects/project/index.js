import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from '../../../components/shared/section-title'
import Project from '../../../components/project'
import { ProjectSectionWrap } from './project.stc'

const ProjectSection = ({ section, project }) => {
	const projectQueryData = useStaticQuery(graphql`
		query ProjectPageDataQuery {
			homedataJson(section: {eq: "project_section_content"}) {
				title
				subtitle
			}
			allProjectsJson {
				edges {
					node {
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
	const projectsData = projectQueryData.allProjectsJson.edges;
	return (
		<ProjectSectionWrap {...section}>
			<div className="project-container">
				<div className="col-1 offset-1">
					<SectionTitle
						title={"Découvrez nos projets"}
						subtitle={"Portfolio"}
					/>
				</div>

				<div className="project-wrapper">
					{projectsData.map((data, i) => {
						let isEven = i % 2 === 0;
						return (
							<Project
								{...project}
								isEven={isEven}
								key={data.node.jsonId}
								id={data.node.jsonId}
								image={data.node.featured_image}
								title={data.node.title}
								client={data.node.client}
								sector={data.node.sector}
							/>
						)
					})}
				</div>
			</div>
		</ProjectSectionWrap>
	)
}

ProjectSection.propTypes = {
	section: PropTypes.object,
	project: PropTypes.object
}

ProjectSection.defaultProps = {
	section: {
		backgroundColor: '#f8f8f8'
	},
	project: {
		mt: '100px',
		responsive: {
			medium: {
				mt: '50px'
			}
		}
	}
}

export default ProjectSection
