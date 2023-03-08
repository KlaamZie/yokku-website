import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from '../../../components/image'
import { BannerWrap } from './banner.stc'


const Banner = () => {
	const projectHeroQueryData = useStaticQuery(graphql`
        query ProjectHeroDataQuery {
            pagedataJson(section: {eq: "single_project_page_data"}) {
				banner_img {
					childImageSharp {
						gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: TRACED_SVG)
					}
				}
            }
        }  
    `);
	const banngerImg = projectHeroQueryData.pagedataJson.banner_img;
	return (
		<BannerWrap>
			<Image src={banngerImg} alt="Project Banner" />
		</BannerWrap>
	)
}

export default Banner;