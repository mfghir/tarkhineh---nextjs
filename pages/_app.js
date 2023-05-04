import Layout from "@/components/modules/Layout";
import 'swiper/swiper.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
