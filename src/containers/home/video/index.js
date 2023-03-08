import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Controller, Scene } from 'react-scrollmagic';
import Image from '../../../components/image'
import { VideoSectionWrap } from './video.stc'

const VideoSection = () => {
	const videoQueryData = useStaticQuery(graphql`
        query ParticleVideoDataQuery {
            homedataJson(section: {eq: "banner_section_content"}) {
				banner_image {
					childImageSharp {
					  	gatsbyImageData(width: 1280, height: 550, layout: CONSTRAINED, quality: 100, placeholder: TRACED_SVG)
					}
				}
            }
        }      
    `);
	const bannerImg = videoQueryData.homedataJson.banner_image;
	return (
		<VideoSectionWrap>
			<div className="col-4 offset-1">
				<div className="video-content">
					<Controller>
						<Scene classToggle="animated" triggerElement=".video-content" triggerHook="onCenter">
							<div className="thumb rn_surface">
								<Image src={bannerImg} alt="creative agency" />
							</div>
						</Scene>
					</Controller>
				</div>
			</div>
		</VideoSectionWrap>
	)
}

VideoSection.propTypes = {
	section: PropTypes.object
}

VideoSection.defaultProps = {
	section: {
		backgroundColor: '#f8f8f8'
	},
}

export default VideoSection;