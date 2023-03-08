import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import parse from 'html-react-parser'
import Image from '../../../components/image'
import { HeroWrapper, HeroInner, HeroContent, HeroImages, HeroImageInner } from './hero.stc'

const Hero = () => {
	const heroQuery = useStaticQuery(graphql`
        query PreviewHeroQuery {
            previewdataJson(section: {eq: "preview-hero-data"}) {
                title
				laptop {
					childImageSharp {
					  gatsbyImageData(width: 1040, height: 662, layout: CONSTRAINED, quality: 100, placeholder: TRACED_SVG)
					}
				}
				tablet {
					childImageSharp {
					  gatsbyImageData(width: 416, height: 569, layout: CONSTRAINED, quality: 100, placeholder: TRACED_SVG)
					}
				}
				phone {
					childImageSharp {
					  gatsbyImageData(width: 229, height: 427, layout: CONSTRAINED, quality: 100, placeholder: TRACED_SVG)
					}
				}
            }
        }      
    `);

	const { title, laptop, tablet, phone } = heroQuery.previewdataJson;
	return (
		<HeroWrapper>
			<HeroInner>
				<HeroContent>
					{title && <h1>{parse(title)}</h1>}
				</HeroContent>
				<HeroImages>
					<HeroImageInner>
						{laptop && (
							<div className="laptop wow newfadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
								<Image src={laptop} alt="laptop" />
							</div>
						)}
						{tablet && (
							<div className="tablet wow newFadeInRight" data-wow-delay="1000ms" data-wow-duration="1000ms">
								<Image src={tablet} alt="tablet" />
							</div>
						)}
						{phone && (
							<div className="phone wow newFadeInRight" data-wow-delay="1000ms" data-wow-duration="1000ms">
								<Image src={phone} alt="phone" />
							</div>
						)}
					</HeroImageInner>
				</HeroImages>
			</HeroInner>
		</HeroWrapper>
	)
}

export default Hero;