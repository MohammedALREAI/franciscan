import Accordion from '@/components/Accordion'
import Layout from '@/components/Layout'
import { Section } from '@/components/Section'
import TeamCard from '@/components/TeamCard'
import Title from '@/components/Title'
import React from 'react'

export default class extends React.Component {
  render () {
    return (
      <Layout
        headerType="interior"
        title="Team | Catechetical Institute at Franciscan University"
        description="The Catechetical Institute brings together the world-class faculty of Franciscan University’s Catechetics Program with key collaborators from all levels of ministry. These skilled professionals teach our Franciscan at Home online courses and speak at our St. John Bosco Conference, academic conferences, and other events around the country."
      >
        <Section className=" flex flex-col" id="team">
          <Title title="Team" imgPath="/static/img/campus-7.jpg" posY="-44vh" />
          <div className="white-background-flourish">
            <div className="container mx-auto">
              <div className="flex text-base font-extralight md:text-xl">
                {this.props.data
                  .filter((post) => post.slug === "team-intro")
                  .map((post) => (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered,
                      }}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="container mx-auto  ">
            <Accordion title="Franciscan University Catechetics Faculty and Staff">
              <div className="row light">
                {this.props.data
                  .filter((post) => post.type === "team-member")
                  .filter((post) => post.acf.category[0] === "fus-staff")
                  .map((post) => (
                    <div className="col s12 l6" key={post.id}>
                      <TeamCard
                        name={post.acf.name}
                        title={post.acf.title}
                        org={post.acf.organization}
                        cat={post.acf.category}
                        imgUrl={
                          post.better_featured_image !== null
                            ? post.better_featured_image.source_url
                            : ""
                        }
                        content={post.content.rendered}
                        slug={post.slug}
                      />
                    </div>
                  ))}
              </div>
            </Accordion>
            <Accordion
              title="St. John Bosco Conference Track Managers and Online Workshop
                    Presenters"
            >
              <div className="row my-2">
                {this.props.data
                  .filter((post) => post.type === "team-member")
                  .filter((post) => post.acf.category[0] === "conf-staff")
                  .map((post) => (
                    <div className="col s12 l6" key={post.id}>
                      <TeamCard
                        name={post.acf.name}
                        title={post.acf.title}
                        org={post.acf.organization}
                        cat={post.acf.category}
                        imgUrl={
                          post.better_featured_image !== null
                            ? post.better_featured_image.source_url
                            : ""
                        }
                        content={post.content.rendered}
                        slug={post.slug}
                      />
                    </div>
                  ))}
              </div>
            </Accordion>

            <Accordion title="Catechetical Institute Staff">
              <div className="row light">
                {this.props.data
                  .filter((post) => post.type === "team-member")
                  .filter((post) => post.acf.category[0] === "ci-staff")
                  .map((post) => (
                    <div className="col s12 l6" key={post.id}>
                      <TeamCard
                        name={post.acf.name}
                        title={post.acf.title}
                        org={post.acf.organization}
                        cat={post.acf.category}
                        imgUrl={
                          post.better_featured_image !== null
                            ? post.better_featured_image.source_url
                            : ""
                        }
                        content={post.content.rendered}
                        slug={post.slug}
                      />
                    </div>
                  ))}
              </div>
            </Accordion>
          </div>
        </Section>
      </Layout>
    );
  }
}


export async function getServerSideProps(context) {
  const apiUrl = "https://wp.catechetics.com/wp-json/wp/v2/";
  const params =
    "multiple-post-type?per_page=100&filter[order]=ASC&type[]=team-member&type[]=page";
  const res = await fetch(apiUrl + params);
  const data = await res.json();
 return {
   props: {data},
 };
 }
