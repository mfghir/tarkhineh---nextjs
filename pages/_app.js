import Layout from '@/components/modules/Layout';
import 'swiper/swiper.css';
import '@/styles/globals.css';
import createStore from '@/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  const [store] = createStore();

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
