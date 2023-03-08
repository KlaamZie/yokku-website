import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import Image from '../image'
import { ProjectWrapper, Thumb, ProjectBtnWrap, ProjectBtn, ProjectType } from './project.stc'
import Heading from '../shared/heading'
import Text from '../shared/text'
import { Controller, Scene } from 'react-scrollmagic';

const Project = ({ image, id, title, client, sector, isEven, ...restProps }) => {
	const { HeadingStyle, TextStyle, ...restStyles } = restProps


	return (
		<ProjectWrapper {...restStyles}>
			<div className={`col-4 offset-${isEven ? 1 : 2}`}>
				<Thumb>
					<div id={id}></div>
					<Controller>
						<Scene classToggle="animated" triggerElement={`#${id}`} triggerHook="onCenter">
							<div className="rn_surface">
								<Link to={`/project/${id}`}>
									<Image src={image} alt={title} />
								</Link>
							</div>
						</Scene>
					</Controller>
					<ProjectBtnWrap>
						<ProjectBtn to={`/project/${id}`}>
							<i className="ti-arrow-right"></i>
						</ProjectBtn>
					</ProjectBtnWrap>
				</Thumb>
			</div>
			<div className={`col-3 offset-${isEven ? 1 : 2}`}>
				<div className="content row">
					{title && (
						<ProjectType className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
							<Heading {...HeadingStyle}>NOM</Heading>
							<Text {...TextStyle}>{title}</Text>
						</ProjectType>
					)}
					{client && (
						<ProjectType className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
							<Heading {...HeadingStyle}>CLIENT</Heading>
							<Text {...TextStyle}>{client}</Text>
						</ProjectType>
					)}
					{sector && (
						<ProjectType className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
							<Heading {...HeadingStyle}>SECTEUR</Heading>
							<Text {...TextStyle}>{sector}</Text>
						</ProjectType>
					)}
				</div>
			</div>
		</ProjectWrapper>
	)
}

Project.propTypes = {
	HeadingStyle: PropTypes.object,
	TextStyle: PropTypes.object
}

Project.defaultProps = {
	HeadingStyle: {
		as: 'h6',
		color: '#001c43',
		fontSize: '12px',
		fontweight: 700,
		letterspacing: '2px',
		mb: '12px',
		responsive: {
			small: {
				letterspacing: '1px',
				mb: '5px'
			}
		}
	},
	TextStyle: {
		fontSize: '12px',
		letterspacing: '1px',
		mb: 0
	}
}

export default Project;