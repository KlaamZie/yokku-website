import React from 'react'
import PropTypes from 'prop-types'
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import { useStaticQuery, graphql, Link } from "gatsby"
import Particles from "react-tsparticles";
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import Button from '../../../components/shared/button'
import Anchor from '../../../components/shared/link'
import {
	HeroArea,
	HeroBg,
	ContetnTop,
	ContentWrapper,
	ContentBottom,
	ContentBottomInner,
	ContentBottomLeft,
	ContentBottomRight,
	ClientWrap,
	ClientItem
} from './hero.style';

const Hero = (props) => {
	const heroQueryData = useStaticQuery(graphql`
		query ParticleHeroDataQuery {
			homedataJson(section: {eq: "hero_section_content"}) {
				title
				date
				btn_link
				clients{
					id
					link
					image {
						publicURL
					}
				}
				bg_image {
					childImageSharp {
						gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: TRACED_SVG)
					}
				}
			}
		}  
  	`);
	const heroData = heroQueryData.homedataJson;
	const imageData = heroData.bg_image;
	const image = getImage(imageData)
	const bgImage = convertToBgImage(image)
	const { title, date, btn_link, clients } = heroData;
	const particleOpt = {
		particles: {
			number: {
				value: 20,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: ["#fff"],
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#000000",
				},
				polygon: {
					nb_sides: 4,
				},
				image: {
					src: "img/github.svg",
					width: 100,
					height: 100,
				},
			},
			opacity: {
				value: 0.8,
				random: true,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				value: 4,
				random: true,
				anim: {
					enable: false,
					speed: 40,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: false,
				distance: 150,
				color: "#ffffff",
				opacity: 0.4,
				width: 1,
			},
			move: {
				enable: true,
				speed: 3,
				direction: "none",
				random: false,
				straight: false,
				out_mode: "out",
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: true,
					mode: "repulse",
				},
				onclick: {
					enable: true,
					mode: "push",
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1,
					},
				},
				bubble: {
					distance: 800,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3,
				},
				repulse: {
					distance: 200,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		retina_detect: true,
		config_demo: {
			hide_card: false,
			background_color: "#b61924",
			background_image: "",
			background_position: "50% 50%",
			background_repeat: "no-repeat",
			background_size: "cover",
		},
	}
	const { descStyle, headingStyle } = props
	return (
		<HeroArea>
			<HeroBg {...bgImage} />
			<Particles className="particle" options={particleOpt} />
			<ContentWrapper>
				<ContetnTop>
					<div className="col-3 offset-1">
						{date && <Text {...descStyle}>{date}</Text>}
						{title && <Heading {...headingStyle}>{title}</Heading>}
						{btn_link && <Button as={Link} to={btn_link} layout={2}>Nos projets <i className="ti-arrow-right"></i></Button>}
					</div>
				</ContetnTop>
				<ContentBottom>
					<div className="col-4 offset-1">
						<ContentBottomInner>
							<ContentBottomLeft>
								<Text {...descStyle} mb="0">NOS PARTENAIRES...</Text>
							</ContentBottomLeft>
							<ContentBottomRight>
								{clients && (
									<ClientWrap>
										{clients.map(client => (
											<ClientItem key={client.id}>
												<Anchor path={client.link}>
													<img src={client.image.publicURL} alt="client" />
												</Anchor>
											</ClientItem>
										))}
									</ClientWrap>
								)}
							</ContentBottomRight>
						</ContentBottomInner>
					</div>
				</ContentBottom>
			</ContentWrapper>
		</HeroArea>
	)
}

Hero.propTypes = {
	descStyle: PropTypes.object,
	headingStyle: PropTypes.object,
	buttonStyle: PropTypes.object
}

Hero.defaultProps = {
	descStyle: {
		color: '#fff',
		fontweight: 300,
		fonSize: '16px',
		texttransform: 'uppercase',
		letterspacing: '2px',
		mb: '12px'
	},
	headingStyle: {
		as: 'h1',
		color: '#fff',
		fontSize: '48px',
		mb: '55px',
		responsive: {
			xlarge: {
				fontSize: '33px'
			},
			large: {
				fontSize: '25px',
				mb: '40px'
			},
			medium: {
				fontSize: '20px'
			}
		}
	},
}

export default Hero
