import Content from "@/components/Content";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Content />
      <Component {...pageProps} />
    </div>
  );
}
