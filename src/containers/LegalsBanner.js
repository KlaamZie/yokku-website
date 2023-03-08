import React from 'react'
import Image from '../components/image'
import {graphql, useStaticQuery} from "gatsby";

const LegalsBanner = () => {
    const bannerQueryData = useStaticQuery(graphql`
        query LegalsBannerQuery {
            pagedataJson(section: {eq: "legals_page_data"}) {
				banner_img {
					childImageSharp {
						gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: TRACED_SVG)
					}
				}
            }
        }      
    `);
    const imageData = bannerQueryData.pagedataJson.banner_img
    return (
        <div className="banner-area">
            <Image src={imageData} alt="Legals Banner" />
        </div>
    )
}

export default LegalsBanner
