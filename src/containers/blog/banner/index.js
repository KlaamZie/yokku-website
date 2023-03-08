import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Image from '../../../components/image'

const Banner = () => {
	const BlogSecQueryData = useStaticQuery(graphql`
        query BlogSecDataQuery {
            pagedataJson(section: {eq: "blog_page_data"}) {
				banner_img {
					childImageSharp {
					  	gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: TRACED_SVG)
					}
				}
            }
        }
    `);
	const { banner_img } = BlogSecQueryData.pagedataJson
	return (
		<div className="banner-area">
			<Image src={banner_img} alt="Blog Banner" />
		</div>
	)
}

export default Banner
