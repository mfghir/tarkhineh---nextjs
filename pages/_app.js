import Layout from '@/components/modules/Layout';
import 'swiper/swiper.css';
import '@/styles/globals.css';

import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
