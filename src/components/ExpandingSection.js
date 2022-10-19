import { Component } from 'react'
import ClickHeading from '../components/ClickHeading'
import OutLink from '../components/OutLink'

class ExpandingSection extends Component {
  state = {
    displayContent: this.props.expanded
  }

  clickHandler = () => {
    this.setState({
      displayContent: !this.state.displayContent
    })
  }

  isEven = () => this.props.index % 2 === 0

  ImageSection = ({ img, imgText, imgTitle }) => {
    return (
      <div className='col s12 m6 order-1'>
        <img
          className='responsive-img z-depth-1'
          src={img}
          alt={imgText}
          title={imgTitle}
        />
      </div>
    )
  }

  TextSection = ({ extraClasses, url, title, content }) => {
    return (
      <div className={`col s12 flow-text ${extraClasses}`}>
        <span dangerouslySetInnerHTML={{ __html: content }} />
        {url &&
          <OutLink to={url} title={title} label={`linkTo${url}`}>
            <button
              className='btn waves-effect waves-light'
              style={{ marginBottom: '16px' }}
            >
              Learn More
            </button>
          </OutLink>}
      </div>
    )
  }

  render () {
    const ImageSection = this.ImageSection
    const TextSection = this.TextSection
    const hasImage = !!this.props.img
    const moreClasses = !hasImage ? 'valign order-2' : '' // text only section gets these

    return (
      <div className="sub-section  m-2 p-2">
        <ClickHeading
          clickHandler={this.clickHandler}
          displayContent={this.state.displayContent}
          title={this.props.title}
        />

        {this.state.displayContent && (
          <div className="row valign-wrapper hover:-translate-y-0.8 hover:scale-102 m-0 flex items-center overflow-hidden  py-2 text-xl transition delay-150 duration-400 ease-in-out  hover:opacity-90 hover:shadow-sm motion-reduce:transition-all motion-reduce:hover:transform-gpu">
            {hasImage && this.isEven() && <ImageSection {...this.props} />}
            <TextSection extraClasses={moreClasses} {...this.props} />
            {hasImage && !this.isEven() && <ImageSection {...this.props} />}
          </div>
        )}
      </div>
    );
  }
}

export default ExpandingSection
