import { Section } from '@/components/Section'
import { CompleteSections } from '@/sections/ComplateSections'
import { CoursesSections } from '@/sections/CoursesSections'
import { MinistrySection } from '@/sections/MinstorySection'
import React from 'react'
import Layout from '../components/Layout'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params =
      'multiple-post-type?per_page=100&type[]=page&type[]=track&type[]=program'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount () {
//     initCourseSections()
    logPageView()
  }

  render () {
    return (
      <Layout
        headerType="interior"
        title="Courses | Catechetical Institute at Franciscan University"
        description="There are many avenues through which catechists can get formal training. Our principal training vehicle, Franciscan at Home, draws together the best of the Franciscan University Catechetics Program, the St. John Bosco Conference, and the latest in online education. There also are opportunities for homeschool families, online graduate studies, and more from Franciscan University of Steubenville."
      >
        <Section id="courses">
          <CoursesSections data={this.props.data} />
          <MinistrySection data={this.props.data} />
         <CompleteSections data={this.props.data} />
        </Section>
      </Layout>
    );
  }
}
