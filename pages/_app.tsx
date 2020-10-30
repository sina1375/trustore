import { AppProps } from 'next/app'
import '../css/site.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'rc-slider/assets/index.css';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { useState } from 'react';
import CartContextProvider from '../contexts/cartContext';

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeStart', () => startLoading());
  Router.events.on('routeChangeComplete', () => stopLoading());
  Router.events.on('routeChangeError', () => stopLoading());

  const [isLoading, setLoading] = useState(false);

  function startLoading() {
    NProgress.start();
    setLoading(true);
  }

  function stopLoading() {
    NProgress.done();
    setLoading(false);
  }

  return <React.Fragment>
    <div className={isLoading ? "loading start" : "loading"} >
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </div>
  </React.Fragment>
}

export default MyApp