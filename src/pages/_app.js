import Content from "@/components/Content";
import "../styles/globals.css";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Content />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
