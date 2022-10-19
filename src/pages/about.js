import CardItem from '@/components/CardItem';
import { Section } from '@/components/Section';
import degree from "@/images/degree.jpg";
import frathan from "@/images/fr-nathan.jpg";
import onlineImage from "@/images/online-learning-700w.jpg";
import petroc from "@/images/petroc-about.jpg";
import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import StickyNav from '../components/StickyNav';
import Title from '../components/Title';

import { logPageView } from '../utils/analytics';


const data = [
  {
    title: "Fr. Nathan Malavolti, TOR",
    description:
      "The Franciscan University Catechetical Institute forms Catholics who form others in the faith. Through courses, conferences, advice, and resources, the institute supports clergy, parents, and all those responsible for the work of catechesis and evangelization, as they carry out Christ’s command to make disciples of all nations.",
    image: petroc,
    potion: "Catechetical Institute",
    alt: "Description of Image",
    office: "Catechetical Institute",
  },
  {
    title: "Petroc Willey, STL, PhD",
    description:
      "The Franciscan University Catechetical Institute forms Catholics who form others in the faith. Through courses, conferences, advice.",
    image: frathan,
    potion: "Director",
    alt: "Description of Image",
    office: `Catechetical Institute, Office of Catechetics`,
  },
  {
    title: "Willey, Petroc, PhD",
    description:
      "The Franciscan University Catechetical Institute forms Catholics who form others in the faith. Through courses, conferences, advice.",
    image: petroc,
    potion: "CTO",
    alt: "Description of Image",
    office: `CTO Institute, Office of Catechetics`,
  },
];





export default class extends React.Component {


  componentDidMount = () => {
    logPageView()
  }

  render () {
    return (
      <Layout
        headerType="interior"
        title="About | Catechetical Institute at Franciscan University"
        description="The Catechetical Institute at Franciscan University exists to train and support the key catechists in any situation—priests, deacons, parents, or laity, whether professional or volunteer. Through conferences, online workshops, videos, audio, personal mentorship, and a wealth of resources produced by Franciscan University, all involved in the work of catechesis will find new ideas, new approaches, new techniques, and a new confidence to do the work of catechesis."
      >
        <Section className=" flex flex-col">
          <Title title="About" />
          <div className="container m-auto py-4">
            {this.props.data
              .filter((post) => post.slug === "about-intro")
              .map((post) => (
                <div
                  key={post.id}
                  className="text-center md:text-xl text-base font-extralight"
                  dangerouslySetInnerHTML={{
                    __html: post.content.rendered,
                  }}
                />
              ))}
          </div>
          <div className="red-background-flourish  text-white">
            <div className=" container mx-auto py-4 ">
              <div className="flex items-center">
                {this.props.data
                  .filter((post) => post.slug === "about-section-2")
                  .map((post) => (
                    <div
                      className="col s12 flow-text"
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered,
                      }}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="container m-auto py-4">
              <Title
                className="text-sm md:text-lg"
                title="An Online Hub for Local Learning"
              />
            </div>
            <div className="container mx-auto grid  max-h-[800px] grid-cols-1 gap-4 overflow-hidden md:grid-cols-2">
              <div className="max-h-[80%] overflow-hidden bg-center">
                <Image
                  className="rounded"
                  src={onlineImage}
                  layout="responsive"
                  alt="A woman sitting at a table working on a computer."
                  title="Online Learning"
                />
              </div>
              {this.props.data
                .filter((post) => post.slug === "about-section-3")
                .map((post) => (
                  <div
                    className="col s12 m6 valign flow-text order-2"
                    dangerouslySetInnerHTML={{
                      __html: post.content.rendered,
                    }}
                  />
                ))}
            </div>
          </div>
          <div className="my-4 mb-[50px] h-auto bg-black pt-4 text-white ">
            <div className=" container mx-auto grid h-full   grid-cols-1 gap-x-4   text-white  md:grid-cols-2">
              <div className=" m-0  h-[70%] overflow-hidden  bg-center p-0 ">
                <Image
                  className=" m-0 object-cover p-0"
                  src={degree}
                  layout="responsive"
                  alt="A woman sitting at a table working on a computer."
                  title="Online Learning"
                />
              </div>
              <div className="align-items-center m-0   flex h-full justify-items-center p-0">
                {this.props.data
                  .filter((post) => post.slug === "about-quote-banner")
                  .map((post) => (
                    <blockquote
                      className="leading-0 flex  justify-items-center  text-3xl  font-semibold"
                      style={{
                        borderLeft: "5px solid #a61f26",
                        display: "flex",
                        "align-items": "center",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered,
                      }}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="section white-background-flourish  my-2 py-2">
            <div className="wide-container container">
              <div className="row">
                <div className="col s12 center">
                  <Title title="Institute Leadership" className="text-base" />
                </div>
              </div>
              <div className=" container  mx-auto  grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
                {data?.map((item) => (
                  <CardItem key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>

          {this.props.data.some((post) => post.type === "pdf-page") ? (
            <div className="section pdf-links red-background-flourish white-text">
              <div className="wide-container container">
                <div className="row center" style={{marginBottom: "0"}}>
                  <h2
                    className="light flourish-white"
                    style={{marginBottom: "0"}}
                  >
                    Information
                  </h2>
                </div>
                <div className="row valign-wrapper center">
                  <div className="col s12 m6">
                    <ul>
                      {this.props.data
                        .filter((post) => post.type === "pdf-page")
                        .filter((post, i) => i % 2 === 0)
                        .map((post) => (
                          <li key={post.id} className="list-disc">
                            <a
                              className="white-text space-x-3 text-lg"
                              href={`/i/${post.slug}`}
                              dangerouslySetInnerHTML={{
                                __html: post.title.rendered,
                              }}
                            />
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="col s12 m6">
                    <ul>
                      {this.props.data
                        .filter((post) => post.type === "pdf-page")
                        .filter((post, i) => i % 2 === 1)
                        .map((post) => (
                          <li key={post.id}>
                            <a
                              href={`/i/${post.slug}`}
                              dangerouslySetInnerHTML={{
                                __html: post.title.rendered,
                              }}
                            />
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="white-background-flourish container">
            <div className="">
              <Title className="text-sm md:text-lg" title="Collaborators" />

              <div className=" container mx-auto  grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-4">
                {this.props.data
                  .filter((post) => post.type === "collaborator")
                  .map((post) => (
                    <div key={post.id}>
                      <div className="pointer container mx-auto  bg-slate-50 shadow-md">
                        <div className="container  mx-auto flex items-center py-2 ">
                          <a
                            href={post.acf.url}
                            title={post.title.rendered}
                            target="_blank"
                            className="flex w-full items-center justify-center"
                          >
                            {console.log(
                              "better_featured_image",
                              post.better_featured_image
                            )}
                            <img
                              lazy="true"
                              width={"100%"}
                              height={"100%"}
                              src={
                                post.better_featured_image &&
                                post.better_featured_image.source_url &&
                                post.better_featured_image.source_url
                              }
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div>
                <Title
                  className="text-sm md:text-lg"
                  title="Prayer Intercessors"
                />
                <div className="flex justify-center my-2 md:text-2xl text-base light flow-text">
                  <ul>
                    {this.props.data
                      .filter((post) => post.type === "prayer-intercessor")
                      .map((post) => (
                        <li key={post.id}>
                          <a
                            style={{color: "rgb(142, 27, 33)"}}
                            href={post.acf.url}
                            dangerouslySetInnerHTML={{
                              __html: post.title.rendered,
                            }}
                          />
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    );
  }
}


export async function getServerSideProps(context) {
      const apiUrl = "https://wp.catechetics.com/wp-json/wp/v2/";
      const params =
        "multiple-post-type?per_page=100&type[]=pdf-page&type[]=page&type[]=collaborator&type[]=prayer-intercessor";
      const res = await fetch(apiUrl + params);
      const data = await res.json();
      return {
        props: {data},
      };

}
