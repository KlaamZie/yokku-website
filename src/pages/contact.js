import React from "react"
import Seo from '../components/seo';
import Layout from '../containers/layout/layout'
import ContactFormSection from '../containers/contact/contact-form'
import ContactInfoSection from '../containers/contact/contact-info'

const ContactPage = () => (
	<Layout headerStyle="darkHeader">
		<Seo title="Yokku - Contactez-nous" />
		<ContactFormSection />
		<ContactInfoSection />
	</Layout>
)

export default ContactPage;