import dynamic from 'next/dynamic';
import { Component } from 'react';
import { initGA } from '../utils/analytics';
import Head from './Head';
import Nav from './Nav';
import StickyNav from './StickyNav';


const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});


export default class Layout extends Component {
  componentDidMount () {
    if (!window.GA_INTIALIZED) {
      initGA()
      window.GA_INTIALIZED = true
    }
  }
  render () {
    const { title, description, headerType, children } = this.props

    return (
      <div className=" flex flex-col bg-green-200 ">
        <Head title={title} description={description} />
        <Nav headerType={headerType} />
        <div className="w-full">
          <StickyNav />
        </div>
        <div className="">{children}</div>
        <DynamicFooter />
      </div>
    );
  }
}








