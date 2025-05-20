// pages/index.js
import Head from "next/head";
import dynamic from "next/dynamic";
import { Layout } from "antd";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import AppFooter from "../components/Footer";

const { Header, Content } = Layout;
const shouldShowCarousel =
  process.env.NODE_ENV === "development" ||
  process.env.NEXT_PUBLIC_ENABLE_CAROUSEL === "true";

const HighlightsCarousel = shouldShowCarousel
  ? dynamic(() => import("../components/HighlightsCarousel"), {
      ssr: false,
      loading: () => null,
    })
  : () => null;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>VTGS - Home</title>
        <meta
          name="description"
          content="VTGS ΙΚΕ: Ολοκληρωμένες συμβουλευτικές και εκπαιδευτικές υπηρεσίες"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#333333",
          padding: "0 50px",
        }}
      >
        {/* Flex wrapper για logo + nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            VTGS ΙΚΕ
          </div>
          <Navbar />
        </div>
      </Header>

      <Content style={{ margin: 0, padding: 0 }}>
        {/* Hero Section */}
        <Hero />
        {/* ——— Highlights Carousel ——— */}
        <HighlightsCarousel />
        {/* About Section */}
        <About />
      </Content>

      <AppFooter />
    </Layout>
  );
}
