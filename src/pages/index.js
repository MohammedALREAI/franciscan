/* global initTabs */
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import dynamic from 'next/dynamic';
import React from 'react';
import { logPageView } from '../utils/analytics';

import squiggly3 from "@/images/squiggly3-reverse.png";

import { Section } from '@/components/Section';
import Image from "next/image";

const TextCard = dynamic(() => import("@/components/TextCard"), {
  ssr: false,
  suspense: true,
});
const TextRevealImageCard = dynamic(
  () => import("@/components/TextRevealImageCard"),
  {
    ssr: false,
    suspense: true,
  }
);


export default class extends React.Component {


  render () {
    return (

      <Layout
        headerType="interior"
        title="Home | Catechetical Institute at Franciscan University"
        description="The Catechetical Institute at Franciscan University exists to train and support the key catechists in any situation—priests, deacons, parents, or laity, whether professional or volunteer. Through conferences, online workshops, videos, audio, personal mentorship, and a wealth of resources produced by Franciscan University, all involved in the work of catechesis will find new ideas, new approaches, new techniques, and a new confidence to do the work of catechesis."
      >
        <Section className=" flex flex-col">
        <Hero />
          <div
            style={{
              position: "relative",
              height: "0",
              overflow: "hidden",
              paddingBottom: "56.25%",
            }}
          >
            <iframe
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
              }}
              src="https://www.youtube.com/embed/MfHhqMMQVBQ?&modestbranding=1&rel=0&loop=1"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </Section>
        <div
          className="section banner valign-wrapper red-background-flourish"
          id="banner"
        >
          <div className="valign container">
            <div className="row center">
              <h2 className="light flourish-white white-text">
                <Image
                  src={squiggly3}
                  style={{
                    marginBottom: "10px",
                    width: "63px",
                    marginRight: "8px",
                  }}
                  layout="fixed"
                />
                Formation
                <Image
                  src={squiggly3}
                  style={{
                    marginBottom: "10px",
                    width: "63px",
                    marginRight: "8px",
                  }}
                />
              </h2>
            </div>
            <div className="row light">
              {this.props.data
                ?.filter((post) => post.type === "formation-card")
                .map((post) => (
                  <div className="col s12 m6">
                    <TextRevealImageCard
                      cardTitle={post.title.rendered}
                      cardImg={
                        post.featured_media !== 0
                          ? post.better_featured_image.source_url
                          : ""
                      }
                      cardContent={post.content.rendered}
                      url={post.acf.link}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div
          className="section valign-wrapper white-text black"
          id="san-damiano"
          style={{padding: "0"}}
        >
          <div className="valign container">
            <div className="row light flow-text">
              <div className="col s12 l6" />
              <div className="col s12 l6">
                {this.props.data
                  ?.filter((post) => post.slug === "home-black-banner")
                  .map((post) => (
                    <blockquote
                      className="flow-text"
                      style={{borderLeft: "5px solid #a61f26"}}
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered,
                      }}
                      key={post.id}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="section valign-wrapper black-text white-background-flourish"
          id="news"
        >
          <div className="valign container">
            <div className="row">
              <div className="col s12">
                <ul className="tabs" style={{backgroundColor: "transparent"}}>
                  <li className="tab col s6">
                    <a href="#announcements" className="active">
                      Announcements
                    </a>
                  </li>
                  <li className="tab col s6">
                    <a href="#news-tab">Newest Additions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div  id="announcements">
                             <div className="grid  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

              {this.props.data
                ?.filter((post) => post.type === "post")
                .filter((post) => post.acf.type === "announcement")
                .map((post) => (
                  <div key={post.id}>
                    <TextCard
                      title={post.title.rendered}
                      content={post.acf.excerpt}
                      url={
                        post.acf.hasOwnProperty("url")
                          ? post.acf.url
                          : `/news/${post.slug}`
                      }
                    />
                  </div>
                ))}
                </div>
            </div>
            <div className="row" id="news-tab">
              {this.props.data
                .filter((post) => post.type === "post")
                .filter((post) => post.acf.type === "news")
                .map((post) => (
                  <div className="col s12 m6 l4 xl3" key={post.id}>
                    <TextCard
                      title={post.title.rendered}
                      content={post.acf.excerpt}
                      url={
                        post.acf.hasOwnProperty("url")
                          ? post.acf.url
                          : `/news/${post.slug}`
                      }
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

      </Layout>
    );
  }
}
export async function getServerSideProps(context) {
  const {pathname} = context;


              logPageView(pathname);


    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params =
      'multiple-post-type?per_page=100&type[]=post&type[]=page&type[]=formation-card'
    const res = await fetch(apiUrl + params)

    const data = await res.json()
    console.log("🚀 ~ file: index.js ~ line 219 ~ extends ~ getInitialProps ~ data", data)

  return {
    props: {data},
  };
}
