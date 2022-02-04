import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
//import UploadProductPage from './views/UploadProductPage/UploadProductPage'
//import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import DetailCompPage from './views/DetailCompPage/DetailCompPage';
import HomePage from './views/HomePage/HomePage';
import RecommendPage from './views/RecommendPage/RecommendPage.js';
import ReportPage from './views/ReportPage/ReportPage.js';
import EsgRatingPage from './views/EsgRatingPage/EsgRatingPage.js';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(HomePage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          {/* <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} /> */}
          <Route exact path="/rating" component={Auth(LandingPage, null)}/>
          <Route exact path="/esgrating" component={Auth(EsgRatingPage, null)}/>
          {/* <Route exact path="/rating/:compId" component={Auth(DetailCompPage, null)} /> */}
          <Route exact path="/rating/:compTicker" component={Auth(DetailCompPage, null)} />
          <Route exact path="/report" component={Auth(ReportPage, null)} />
          <Route exact path="/recommend" component={Auth(RecommendPage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
