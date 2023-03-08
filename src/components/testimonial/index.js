import React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from "gatsby-plugin-image"
import Heading from '../shared/heading'
import Text from '../shared/text'
import Image from "../image";
import { TestimonialWrap, Content, ClientInfo, ClientThumb, ClientDetails, StyledReview } from './testimonial.stc'

const Testimonial = ({ author_name, author_role, company, country, author_image, review, ...restProps }) => {
	const { HeadingStyle, TextStyle, reviewStyle, reviewSpanStyle, ...restStyles } = restProps
	return (
		<TestimonialWrap {...restStyles}>
			<Content>
				{review && (
					<StyledReview>
						<Text {...reviewStyle}>
							{review}
						</Text>
						<StaticImage src="../../assets/img/icons/quote.png" alt="quote" />
					</StyledReview>
				)}
				<ClientInfo>
					{author_image && (
						<ClientThumb>
							<Image src={author_image} alt={author_name} />
						</ClientThumb>
					)}
					<ClientDetails>
						{author_name && <Heading {...HeadingStyle}>{author_name}</Heading>}
						{(author_role || company || country) && (
							<Text {...TextStyle}>
								{author_role && <Text as="span">{author_role}</Text>}
								{company && <Text as="span"> , {company}</Text>}
								{country && <Text as="span"> , {country}</Text>}
							</Text>
						)}
					</ClientDetails>
				</ClientInfo>
			</Content>
		</TestimonialWrap>
	)
}

Testimonial.propTypes = {
	HeadingStyle: PropTypes.object,
	TextStyle: PropTypes.object,
	textalign: PropTypes.string
}

Testimonial.defaultProps = {
	textalign: 'center',
	reviewStyle: {
		color: '#001c43',
		align: 'center',
		fontSize: '36px',
		lineHeight: '60px',
		p: '0 30%',
		position: 'relative',
		mb: '34px',
		zindex: 2,
		responsive: {
			xlarge: {
				fontSize: '28px',
				lineHeight: '48px',
				p: '0 25%',
				mb: '30px'
			},
			large: {
				fontSize: '20px',
				lineHeight: '35px',
				p: '80px 20%',
				mb: 0
			},
			small: {
				fontSize: '16px',
				lineHeight: '28px',
				p: '0 0 10vw 0'
			}
		}
	},
	HeadingStyle: {
		as: 'h6',
		color: '#001c43',
		fontweight: 700,
		fontSize: '16px',
		mb: '10px',
		responsive: {
			small: {
				fontweight: 500,
				fontSize: '14px'
			}
		}
	},
	TextStyle: {
		color: '#000000',
		letterspacing: '1px',
		fontweight: 300,
		fontSize: '12px',
		mb: 0
	}
}

export default Testimonial
