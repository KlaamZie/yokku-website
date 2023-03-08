import React from "react"
import Seo from '../components/seo';
import Layout from '../containers/layout/layout'
import Hero from '../containers/home/hero'
import Story from '../containers/home/story'
import ProjectSection from '../containers/home/project'
import TestimonialSection from '../containers/home/testimonial'
import ClientSection from '../containers/home/clients'
import VideoSection from '../containers/home/video'
import BlogSection from '../containers/home/blog'

const HomeParticlePage = () => (
	<Layout>
		<Seo title="Yokku - Votre agence web à Montpellier" />
		<Hero />
		<Story />
		<ProjectSection />
		<TestimonialSection />
		<ClientSection />
		{/*<VideoSection />*/}
		{/*<BlogSection />*/}
	</Layout>
)

export default HomeParticlePage;