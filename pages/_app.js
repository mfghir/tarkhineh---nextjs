import Layout from '@/components/modules/Layout';
import 'swiper/swiper.css';
import '@/styles/globals.css';
import createStore from '@/store';
import { Provider } from 'react-redux';
import {useState} from "react";

export default function App({ Component, pageProps }) {
  const [store] = useState(() => createStore());

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
