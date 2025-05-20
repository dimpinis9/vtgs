// components/HighlightsCarousel.js

import Link from "next/link";
import { Carousel, Typography, Grid } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const slides = [
  {
    key: "services",
    title: "Υπηρεσίες",
    subtitle: "Τι προσφέρουμε στη VTGS",
    href: "/services",
  },
  {
    key: "policies",
    title: "Πολιτικές",
    subtitle: "Οι δεσμεύσεις μας",
    href: "/policies",
  },
];

const arrowStyle = {
  fontSize: "1.5rem",
  color: "#fff", // άσπρα βελάκια για contrast
  zIndex: 2,
};

export default function HighlightsCarousel() {
  const screens = useBreakpoint();

  return (
    <div style={{ maxWidth: 800, margin: "48px auto" }}>
      <Carousel
        autoplay
        autoplaySpeed={5000}
        arrows
        prevArrow={<LeftOutlined style={arrowStyle} />}
        nextArrow={<RightOutlined style={arrowStyle} />}
        dotPosition="bottom"
        style={{ borderRadius: 8, overflow: "hidden" }}
        dots={{
          className: "custom-dots",
          activeDotStyle: { background: "#00adb5" },
        }}
      >
        {slides.map((slide) => (
          <Link key={slide.key} href={slide.href}>
            <div
              style={{
                display: "block",
                position: "relative",
                cursor: "pointer",
              }}
            >
              {/* Σκούρο γκρι φόντο */}
              <div
                style={{
                  background: "#333333",
                  height: screens.md ? 320 : 200,
                }}
              />
              {/* Μαύρο διάφανο overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
                }}
              />
              {/* Κείμενο */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "#fff",
                  padding: "0 16px",
                }}
              >
                <Title
                  level={screens.md ? 2 : 3}
                  style={{ color: "#fff", margin: 0 }}
                >
                  {slide.title}
                </Title>
                <Text
                  style={{
                    fontSize: "1.15rem",
                    display: "block",
                    marginTop: 8,
                    color: "#e0e0e0",
                  }}
                >
                  {slide.subtitle}
                </Text>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
