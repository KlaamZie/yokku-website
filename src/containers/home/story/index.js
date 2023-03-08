import React from 'react'
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import SectionTitle from '../../../components/shared/section-title'
import Text from '../../../components/shared/text'
import Button from '../../../components/shared/button'
import { StorySection, StoryInner, Content, StoryImgWrap, StoryImage } from './story.stc'
import { Controller, Scene } from 'react-scrollmagic';

const Story = ({ section, paragraph, paragraphTwo, button, imageStyle }) => {
	const storyQueryData = useStaticQuery(graphql`
        query ParticleStoryDataQuery {
            homedataJson(section: {eq: "story_section_contnet"}) {
                id
                title
                subtitle
                path
                content
				image {
					childImageSharp {
					  	gatsbyImageData(width: 960, height: 950, layout: CONSTRAINED, quality: 100, placeholder: TRACED_SVG)
					}
				}
            }
        }      
    `)
	const storyData = storyQueryData.homedataJson;
	const { title, subtitle, path, content } = storyData;
	const imageData = storyData.image;
	const image = getImage(imageData)
	const bgImage = convertToBgImage(image)

	return (
		<StorySection {...section}>
			<div className="row">
				<div className="col-1 offset-1">
					<div id="trigger" />
					<Controller>
						<Scene classToggle="animated" triggerElement="#trigger" triggerHook="onCenter">
							<StoryImgWrap className="rn_surface story-image">
								<StoryImage {...bgImage} background-position={'center'}/>
							</StoryImgWrap>
						</Scene>
					</Controller>
				</div>
				<div className="col-2 offset-1">
					<StoryInner>
						<SectionTitle
							title={title}
							subtitle={subtitle}
						/>
						<Content>
							{content.map((textData, i) => <Text key={`story-text-${i}`} {...paragraph}>{textData}</Text>)}
							{/*<Button as={Link} to={path} {...button}>NOUS DÉCOUVRIR</Button>*/}
						</Content>
					</StoryInner>
				</div>
			</div>
		</StorySection>
	)
}

Story.propTypes = {
	paragraph: PropTypes.object,
	paragraphTwo: PropTypes.object,
	button: PropTypes.object,
	section: PropTypes.object,
	imageStyle: PropTypes.object
}

Story.defaultProps = {
	section: {
		backgroundColor: '#f8f8f8'
	},
	paragraph: {
		color: '#000000',
		fontSize: '14px',
		lineHeight: '26px'
	},
	paragraphTwo: {
		mt: '31px'
	},
	button: {
		mt: '34px'
	},
	imageStyle: {
		backgroundPosition: '-78px 0px'
	}
}

export default Story
