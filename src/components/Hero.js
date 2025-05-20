// components/Hero.js
import { motion } from "framer-motion";
import { Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      style={{
        background: `url(/background.jpg) center/cover no-repeat`,
        padding: "120px 0",
        textAlign: "center",
        color: "#fff",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 0,
        }}
      />

      <motion.div
        style={{ position: "relative", zIndex: 2 }}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Title
          level={1}
          style={{
            color: "#fff",
            textShadow: "0 2px 8px rgba(0,0,0,0.7)",
            letterSpacing: "0.05em",
          }}
        >
          Καλωσήρθατε στην VTGS
        </Title>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <Paragraph
            style={{
              maxWidth: 600,
              margin: "16px auto",
              fontSize: "1.25rem",
              lineHeight: 1.8,
              letterSpacing: "0.03em",
              textShadow: "0 2px 6px rgba(0,0,0,0.7)",
              color: "#fff",
            }}
          >
            Η εταιρεία παροχής ολοκληρωμένων συμβουλευτικών και εκπαιδευτικών
            υπηρεσιών.
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button
            type="primary"
            size="large"
            style={{
              marginTop: 24,
              backgroundColor: "#000",
              borderColor: "#000",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "transform .2s ease, box-shadow .2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => (window.location.href = "/services")}
          >
            Μάθε Περισσότερα
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
