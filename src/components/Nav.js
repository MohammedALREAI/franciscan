import { Component } from 'react';
import OutLink from '../components/OutLink';

import { LitsItem } from './LitsItem';
import { Logo } from "./Logo";
import { NavStyles } from './styled';


class Nav extends Component {

  render () {
    return (
      <header className={this.props.headerType}>
        <div className='bg-white'>
          <NavStyles className="main-nav search-nav">
            <div className="nav-wrapper">
              <OutLink
                className="fus-branding"
                label="toMainSiteBrandingLink"
                to="https://www.franciscan.edu"
                title="Franciscan University of Steubenville"
              >
                Franciscan University of Steubenville
              </OutLink>

            <Logo/>

              <a
                href="#"
                data-activates="mobile-demo"
                className="button-collapse"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="#fff"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              </a>
            </div>
          </NavStyles>
        </div>
        <ul className="side-nav" id="mobile-demo" style={{width: "300px"}}>
          <li className="logo">
           <Logo/>
          </li>
         
        </ul>
      </header>
    );
  }
}

export default Nav
