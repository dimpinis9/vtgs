import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import Link from "next/link";

const { Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function AppFooter() {
  return (
    <Footer
      style={{
        background: "#333333",
        padding: "40px 50px",
      }}
    >
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Title level={4} style={{ color: "#fff" }}>
            Σύνδεσμοι
          </Title>
          <Space direction="vertical">
            <Link
              href="/"
              style={{
                color: "#e0e0e0",
                fontSize: "1rem",
                lineHeight: 1.5,
                textDecoration: "none",
              }}
            >
              Αρχική
            </Link>
            <Link
              href="/policies"
              style={{
                color: "#e0e0e0",
                fontSize: "1rem",
                lineHeight: 1.5,
                textDecoration: "none",
              }}
            >
              Οι Πολιτικές μας
            </Link>
            <Link
              href="/services"
              style={{
                color: "#e0e0e0",
                fontSize: "1rem",
                lineHeight: 1.5,
                textDecoration: "none",
              }}
            >
              Οι Υπηρεσίες μας
            </Link>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Title level={4} style={{ color: "#fff" }}>
            Επικοινωνία
          </Title>
          <Paragraph style={{ margin: 0, color: "#e0e0e0" }}>
            <Text strong style={{ color: "#fff" }}>
              Email:
            </Text>{" "}
            vtgsike@yahoo.com
          </Paragraph>
          <Paragraph style={{ margin: 0, color: "#e0e0e0" }}>
            <Text strong style={{ color: "#fff" }}>
              Τηλέφωνο:
            </Text>{" "}
            213-0314047
          </Paragraph>
        </Col>
      </Row>

      <div style={{ textAlign: "center", marginTop: 32 }}>
        <Text style={{ color: "#999999" }}>
          © {new Date().getFullYear()} VTGS ΙΚΕ. All rights reserved.
        </Text>
      </div>
    </Footer>
  );
}
