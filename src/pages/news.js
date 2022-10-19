import { Section } from '@/components/Section'
import React from 'react'
import Blog from '../components/Blog'
import Layout from '../components/Layout'
import Title from '../components/Title'

export default class extends React.Component {


  render () {
    return (
      <Layout
        headerType='interior'
        title='News | Catechetical Institute at Franciscan University'
        description='The latest news and announcements from the Catechetical Institute at Franciscan University of Steubenville.'
      >
        <Section id='news'>
          <Title
            title='News'
          />
          <div className='container'>
            <div className='section'>
              {this.props.data.map(function (post, i) {
                return (
                  <Blog
                    slug={post?.slug}
                    title={post?.title?.rendered}
                    content={post?.content?.rendered}
                    excerpt={post?.acf?.excerpt}
                    date={new Date(post.date)}
                    homepageOnly={post?.acf?.homepage_only}
                    url={post?.acf?.url}
                    key={i}
                  />
                )
              })}
            </div>
          </div>
          {/* Finish this when there is enough content to justify it.
            <div className='section' style={{ backgroundColor: '#000' }}>
              <div className='container'>
            <div className='row white-text'>
            <div className='col s12 m4'>
            <h5>Categories</h5>
            <ul>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            </ul>
            </div>
            <div className='col s12 m4'>
            <h5>Tags</h5>
            <ul>
            <li>Tag</li>
            <li>Tag</li>
            <li>Tag</li>
            </ul>
            </div>
            <div className='col s12 m4'>
            <h5>Archives</h5>
            <ul>
            <li>May</li>
            <li>April</li>
            <li>March</li>
            </ul>
            </div>
            </div>
              </div>

            </div>
          */}

        </Section>
      </Layout>
    )
  }
}

export async function getServerSideProps(context) {
   const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params = 'posts'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    console.log("🚀 ~ file: news.js ~ line 84 ~ getServerSideProps ~ data", data)
 return {
   props: {data},
 };
 }

