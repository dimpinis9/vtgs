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
          colorPrimary: "#000000",
          colorText: "#333333",
          colorBorder: "#e0e0e0",
          colorBgLayout: "#ffffff",
          colorBgContainer: "#fafafa",
          borderRadius: 4,
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
