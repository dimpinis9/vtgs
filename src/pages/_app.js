// pages/_app.js
import "antd/dist/reset.css"; // AntD v5
import "../styles/globals.css";
import { ConfigProvider, theme } from "antd";

export default function MyApp({ Component, pageProps }) {
  const { defaultAlgorithm } = theme;
  return (
    <ConfigProvider
      theme={{
        algorithm: defaultAlgorithm,
        token: {
          // Κύρια χρώματα
          colorPrimary: "#000000", // μαύρο
          colorText: "#333333", // σκούρο γκρι
          colorBorder: "#e0e0e0", // ανοιχτό γκρι
          colorBgLayout: "#ffffff", // λευκό background για Layout
          colorBgContainer: "#fafafa", // πολύ ανοιχτό γκρι containers
          borderRadius: 4, // ή ό,τι value θες
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
