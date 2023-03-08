import React from "react"
import Seo from '../components/seo';
import Layout from '../containers/layout/layout'
import Banner from '../containers/company/banner'
import About from '../containers/company/about'
// import Team from '../containers/company/team'
// import JoinOurTeam from '../containers/company/join-our-team'
import Testimonial from '../containers/company/testimonial'

const CompanyPage = () => (
	<Layout>
		<Seo title="Company" />
		<Banner />
		<About />
		{/*<Team />*/}
		{/*<JoinOurTeam />*/}
		<Testimonial />
	</Layout>
)

export default CompanyPage;