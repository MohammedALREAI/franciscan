import "@/static/css/tailwind.css";
import App from "next/app";

import {GlobalStyle} from "@/components/styled";
class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {pageProps};
  }
  render() {
    const {Component, pageProps} = this.props;

    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
