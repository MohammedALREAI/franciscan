import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("UA-5819863-21");
};
export const logPageView = (pathname) => {
         ReactGA.set({page:pathname});
         ReactGA.pageview(pathname);
       };
