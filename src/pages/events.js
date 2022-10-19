import { Container } from "@/components/Container";
import EventSection from "@/components/EventSection";
import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import Title from "@/components/Title";
import React from "react";

export default class extends React.Component {
  state = {
    data: [],
    dateSort: "asc",
    dateAsc: null,
    dateDesc: null,
    dateIsAsc: true,
    userLat: null,
    userLong: null,
  };


  componentDidMount = () => {
    this.setState({
      data: this.props.data
        .filter((post) => post.type === "nearby-event")
        .filter((post) => post.acf.date >= this.getTodaysDate())
        .sort((a, b) => a.acf.date - b.acf.date),
    });
//     hScroller();
//     logPageView();
  };

  getTodaysDate = () => {
    const date = new Date();
    const dateToday = parseInt(
      "" +
        date.getFullYear() +
        this.makeTwoDigits(date.getMonth() + 1) +
        this.makeTwoDigits(date.getDate())
    );
    return dateToday;
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        userLat: position.coords.latitude,
        userLong: position.coords.longitude,
      });
      this.compareLocation();
    });
  };

  compareLocation = () => {
    const newData = this.state.data
      .map((event) => {
        const eventCloned = {...event};
        eventCloned.distanceToEvent = eventCloned.acf.hasOwnProperty(
          "location_map"
        )
          ? this.state.userLat -
            eventCloned.acf.location_map.lat +
            (this.state.userLong - eventCloned.acf.location_map.lng)
          : Infinity;
        return eventCloned;
      })
      // Make sure to set a distanceToEvent value for events that do not have lat and lon. Set to Infinity
      .sort((a, b) => a.distanceToEvent - b.distanceToEvent);
    this.setState({data: newData});
  };

  sortDate = () => {
    const newData = this.state.data.sort((a, b) =>
      this.state.dateSort === "desc"
        ? a.acf.date - b.acf.date
        : b.acf.date - a.acf.date
    );
    this.setState({
      data: newData,
      dateSort: this.state.dateSort === "asc" ? "desc" : "asc",
    });
  };

  handleSort = (sortBy) => {
    switch (sortBy) {
      case "date":
        this.sortDate();
        break;

      case "location":
        this.getLocation();
        break;

      default:
        this.sortDate();
    }
  };

  makeTwoDigits(n) {
    return n.toString().length <= 1 ? "0" + n : n;
  }

  render() {
     const  {data} =this.props
     console.log("🚀 ~ file: events.js ~ line 103 ~ extends ~ render ~ data", data)
    return (
      <Layout
        headerType="interior"
        title="Events | Catechetical Institute at Franciscan University"
        description="Upcoming events from the Catechetical Institute at Franciscan University of Steubenville"
      >
        <Section id="events">
          <Title title="Events" />
          <div className="white-background-flourish">
            <Container>
              {data?.filter((post) => post.slug === "events-intro")
                .map((post) => (
                  <div
                    key={post.id}
                    className="col s12 flow-text"
                    dangerouslySetInnerHTML={{
                      __html: post.content.rendered,
                    }}
                  />
                ))}
            </Container>
          </div>

          {data?.filter((post) => post.type === "major-event")
            .map((post, i) => (
              <EventSection
                index={i}
                title={post.title.rendered}
                content={post.acf.short_description}
                key={post.id}
                img={
                  post.featured_media !== 0
                    ? post.better_featured_image.source_url
                    : ""
                }
                imgAlt={
                  post.featured_media !== 0
                    ? post.better_featured_image.alt_text
                    : ""
                }
                imgTitle={post.featured_media !== 0 ? post.title.rendered : ""}
                registrationLink={post.acf.registration_link}
                flyerLink={post.acf.flyer}
                embed={post.acf.youtube_embed}
                eventDate={post.acf.event_date}
              />
            ))}

          <div className="section valign-wrapper black-text white-background-flourish">
            <div className="valign wide-container container">
              <Title title="Find a Nearby Event" className="text-base md:text-xl" />
              <div className="row light">
                <table className="table responsive-table">
                  <thead>
                    <tr>
                      <th onClick={() => this.handleSort("date")}>Date</th>
                      <th>Presenter</th>
                      <th>Event/Title</th>
                      <th onClick={this.getLocation}>Location</th>
                      <th>Event Email</th>
                      <th>Presenter Email</th>
                      <th>Link</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data?.map(function (post, i) {
                         console.log("🚀 ~ file: events.js ~ line 170 ~ extends ~ post", post)

                      return (
                        <tr key={i}>
                          <td>{post.title.rendered}</td>
                          <td>{post.acf.presenter}</td>
                          <td
                            dangerouslySetInnerHTML={{
                              __html: post.title.rendered,
                            }}
                          />
                          <td>{post.acf.location}</td>
                          <td class="event-email-td">
                            <a href={`mailto:${post.acf.event_email}`}>
                              {post.acf.event_email}
                            </a>
                          </td>
                          <td class="presenter-email-td">
                            <a href={`mailto:${post.acf.presenter_email}`}>
                              {post.acf.presenter_email}
                            </a>
                          </td>
                          <td>
                            <a
                              href={post.acf.link}
                              title={post.title.rendered}
                              target="_blank"
                            >
                              {post.acf.link ? "More Info" : ""}
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="flex space-x-3">
                    <div>
                  <svg
                    id="scrollLeft"
                    fill="#000000"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{transform: "rotate(180deg)"}}
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>

                    </div>
                    <div>
                  <svg
                    id="scrollRight"
                    fill="#000000"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>

                    </div>
                </div>
              </div>
            </div>
          </div>

        </Section>
      </Layout>
    );
  }
}

// GETSERVERSIDEPROPS
export async function getServerSideProps() {

    const apiUrl = "https://wp.catechetics.com/wp-json/wp/v2/";
    const params =
      "multiple-post-type?per_page=100&type[]=nearby-event&filter[orderby]=acf.date&filter[order]=ASC&fields=title,acf,slug,content,type,better_featured_image&type[]=page,&type[]=major-event";
    const res = await fetch(apiUrl + params);
    const data = await res.json();
    console.log("🚀 ~ file: events.js ~ line 274 ~ extends ~ getServerSideProps ~ data", data)

    return {
          props: {
               data,
          },
     };
  }

