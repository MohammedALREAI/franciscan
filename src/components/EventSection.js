import { Component } from 'react';

class EventSection extends Component {
  isEven = () => this.props.index % 2 === 0

  TitleSection = ({ title, registrationLink, flyerLink, eventDate }) => {
    return (
      <div className=" my-2">
        <h2
          className="md:tex-2xl  hover:-translate-y-0.8 m-0 p-0 text-center font-semibold  transition  delay-150 duration-300 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-inner  motion-reduce:transition-none motion-reduce:hover:transform-none md:py-4"
          dangerouslySetInnerHTML={{__html: title}}
        />

        <span
          className="sub-heading center"
          dangerouslySetInnerHTML={{__html: eventDate}}
        />
        <div className="center" style={{marginBottom: "16px"}}>
          {registrationLink && (
            <a
              href={registrationLink}
              title={`Register for the ${title}`}
              target="_blank"
            >
              <button className="transform rounded-lg bg-[] px-5 py-3 text-base font-medium text-white shadow-sm transition duration-300 hover:-rotate-6 hover:scale-110 hover:bg-red-600">
                Register
              </button>
            </a>
          )}
          {flyerLink && (
            <a href={flyerLink} title={`${title} Flyer PDF`} target="_blank">
              <button
                className="btn waves-effect waves-light"
                style={{marginLeft: "8px"}}
              >
                Flyer
              </button>
            </a>
          )}
        </div>
      </div>
    );
  }

  ImageSection = ({ img, imgAlt, imgTitle, embed }) => {
    return (
      <div className=''>
        <img
          className='responsive-img w-100'
          src={img}
          alt={imgAlt}
          title={imgTitle}
        />
        {embed &&
          <div className='video-container' style={{ marginTop: '24px' }}>
            <iframe
              width='1092'
              height='665'
              src={`https://www.youtube.com/embed/${embed}`}
              frameBorder='0'
              allowFullScreen
            />
          </div>}

      </div>
    )
  }

  TextSection = ({
    extraClasses,
    registrationLink,
    title,
    content,
    flyerLink
  }) => {
    return (
      <div className='col s12 m6 valign flow-text order-2'>
        <span
          class='content-section'
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {registrationLink &&
          <a
            href={registrationLink}
            title={`Register for the ${title}`}
            target='_blank'
          >
            <button className='btn waves-effect waves-light'>
              Register
            </button>
          </a>}

        {flyerLink &&
          <a
            href={flyerLink}
            title={`${title} ${!this.isEven() ? 'Schedule PDF' : 'Flyer PDF'}`}
            target='_blank'
          >
            <button
              className='btn waves-effect waves-light'
              style={{ marginLeft: '8px' }}
            >
              {!this.isEven() ? 'Schedule' : 'Flyer'}
            </button>
          </a>}

      </div>
    )
  }

  render () {
    const ImageSection = this.ImageSection
    const TextSection = this.TextSection
    const TitleSection = this.TitleSection
    const hasImage = !!this.props.img // !! is boolean coercion
    const moreClasses = !hasImage ? 'valign order-2' : '' // text only section gets these
    const bgClass = this.isEven()
      ? 'white-background-flourish'
      : 'red-background-flourish white-text'
    return (
      <div className={`section ${bgClass}`}>
        <div className='container wide-container'>
          <TitleSection {...this.props} />

          <div className='row valign-wrapper'>
            {hasImage && this.isEven() && <ImageSection {...this.props} />}
            <TextSection extraClasses={moreClasses} {...this.props} />
            {hasImage && !this.isEven() && <ImageSection {...this.props} />}

          </div>
        </div>

      </div>
    )
  }
}

export default EventSection
