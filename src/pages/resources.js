
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import debounce from 'lodash.debounce'
import React from 'react'

import Layout from '../components/Layout'
import MaterialSelect from '../components/MaterialSelect'
import ResourceRow from '../components/ResourceRow'
import Title from '../components/Title'
import { getJSON } from '../utils/fetch'

export default class extends React.Component {
  state = {
    activeTab: 'all',
    data: [],
    price: 'all',
    category: 15,
    type: 'all',
    categories: []
  }

  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params =
      'multiple-post-type?per_page=100&type[]=resource&fields=title,acf,better_featured_image,date,resource-category,type,content,slug,id&type[]=page'
    const res = await fetch(apiUrl + params)
    const data = await res.json().then(data => {
      let stringified = JSON.stringify(data)
      stringified = stringified.replace(/&amp;/gm, '&')
      data = JSON.parse(stringified)
      return data
    })
    return { data }
  }

  componentDidMount = () => {
    this.setState({
      data: this.props.data.filter(post => post.type === 'resource')
    })
//     initTabs()
//     logPageView()
    this.getCategories()
  }

  getCategories = () => {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params = `resource-category`
    getJSON(apiUrl + params).then(categories => this.setState({ categories }))
  }

  /**
   * Make api call based on searchTerm
   * Render cards from api data
   */
  fetchSearchTerm = searchTerm => {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params = `resource?search=${searchTerm}&per_page=100&fields=title,acf,better_featured_image`
    getJSON(apiUrl + params).then(data => this.setState({ data }))
  }

  // Get a new function that is debounced when called
  debouncedSearch = debounce(this.fetchSearchTerm, 700)

  /**
   * Called onSubmit event
   */
  formGetResults = e => {
    e.preventDefault()
    const { search } = e.target
    // unfocusing input makes soft keyboard to close
    window.outerWidth < 1024 && search.blur()
    // cancel any pending search
    this.debouncedSearch.cancel()
    this.fetchSearchTerm(search.value)
  }

  /**
   * Called onChange event
   */
  getSearchResults = e => {
    var { value } = e.target
    if (value.length < 3) return
    this.debouncedSearch(value)
  }

  pricePicker = e => {
    const freeVal = document.getElementById('free').checked
    const paidVal = document.getElementById('paid').checked

    if ((freeVal && paidVal) || (!freeVal && !paidVal)) {
      this.setState({ price: 'all' })
    } else if (freeVal) {
      this.setState({ price: 'free' })
    } else {
      this.setState({ price: 'paid' })
    }
  }

  priceFilter = post => {
    if (this.state.price === 'all') {
      return true
    } else if (post.acf.price === this.state.price) {
      return true
    } else {
      return false
    }
  }

  filterByCategory = post => {
    if (this.state.category === 0) {
      return true
    } else if (post['resource-category'] !== undefined) {
      return post['resource-category'].some(
        category => category === this.state.category
      )
    } else {
      return false
    }
  }

  setCategory = catNum => {
    this.setState({ category: parseInt(catNum) })
  }

  render () {
    const { activeTab } = this.state
    const tabs = {
      all: 'All',
      audio: 'Audio',
      text: 'Text',
      video: 'Video'
    }

    return (
      <Layout
        headerType="interior"
        title="Resources | Catechetical Institute at Franciscan University"
        description="Franciscan University has produced a prodigious amount of material over the years that can help you be a better catechist. Here you will find videos, audio clips, magazines, books, brochures, and other resources produced by University faculty, conference speakers, and an array of collaborators."
      >
        <Section id="resources">
          <Title title="Resources" />
          <div className="white-background-flourish">
            <Container className="row light flow-text">
              {this.props.data
                .filter((post) => post.slug === "resources-intro")
                .map((post) => (
                  <div
                    className="text-center  text-base font-light md:text-xl"
                    dangerouslySetInnerHTML={{
                      __html: post.content.rendered,
                    }}
                    key={post.id}
                  />
                ))}
            </Container>
          </div>
          <div className="red-background-flourish py-2">
            <div className="container-wide container">
              <div className="flex flex-col  items-center  justify-between md:flex-row">
                <MaterialSelect
                  categories={this.state.categories}
                  setCategory={(catNum) => {
                    this.setCategory(catNum);
                  }}
                  category={this.state.category}
                />

                <div className="input-field  order-none  md:order-1 w-full flex-1">
                  <form onSubmit={this.formGetResults}>
                    <div className="flex flex-1 justify-center lg:justify-end">
                      <div className="w-full px-2 lg:px-6">
                        <label htmlFor="search" className="sr-only">
                          Search projects
                        </label>
                        <div className="relative text-indigo-200 focus-within:text-gray-400">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400"
                            >
                              <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
                            </svg>
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="block w-full rounded-md border border-transparent bg-indigo-400 bg-opacity-25 py-2 pl-10 pr-3 leading-5 text-indigo-100 placeholder-indigo-200 focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                            placeholder="Search projects"
                            type="search"
                            onChange={this.getSearchResults}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class=" flex space-x-2">
                  <input
                    type="checkbox"
                    id="free"
                    onChange={this.pricePicker}
                  />
                  <label for="free">Free</label>

                  <input
                    type="checkbox"
                    id="paid"
                    onChange={this.pricePicker}
                  />
                  <label for="paid">Paid</label>
                </div>
              </div>
              <div className="row" style={{marginBottom: "0"}}>
                <div className="col s12">
                  <ul className="tabs" style={{backgroundColor: "transparent"}}>
                    {Object.keys(tabs).map((tabKey) => (
                      <li
                        className="tab col s3 'border-indigo-500  whitespace-nowrap border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300
                hover:text-gray-700"
                        key={tabKey + "li"}
                      >
                        <a
                          key={tabKey}
                          href={"#" + tabKey}
                          className={tabKey === activeTab && "active"}
                          onClick={() => this.setState({activeTab: tabKey})}
                          style={{color: "#fff"}}
                        >
                          {tabs[tabKey]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section white-background-flourish"
            style={{minHeight: "500px"}}
          >
            <div className="container-wide container">
              {this.state.category === 15 ? (
                <div className="row" style={{marginBottom: "0"}}>
                  <div className="col s12">
                    <h4>Featured Resources</h4>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* For each tab, we generate a row */}
              {Object.keys(tabs).map((tabKey) => (
                <div className="row" id={tabKey} key={tabKey}>
                  {this.state.data
                    .filter((post) => this.priceFilter(post))
                    .filter((post) => this.filterByCategory(post))
                    .filter(
                      (post) =>
                        activeTab === "all" || activeTab === post.acf.type
                    )
                    .map((post, idx) => (
                      <div key={idx}>
                        <ResourceRow
                          title={post.title.rendered}
                          type={post.acf.type}
                          author={
                            post.acf.hasOwnProperty("author")
                              ? post.acf.author
                              : ""
                          }
                          content={post.acf.description}
                          url={post.acf.url}
                          price={post.acf.price}
                          img={
                            post.better_featured_image !== null
                              ? post.better_featured_image.source_url
                              : ""
                          }
                        />
                        {idx + 1 !== this.state.data.length && (
                          <hr className="resource-divider" />
                        )}
                      </div>
                    ))}
                </div>
              ))}
              {this.state.category === 15 ? (
                <div class="row">
                  <div class="col s12">
                    <span
                      onClick={() => this.setState({category: 0})}
                      style={{color: "#8e1b21", cursor: "pointer"}}
                    >
                      View All Resources
                    </span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </Section>
      </Layout>
    );
  }
}
