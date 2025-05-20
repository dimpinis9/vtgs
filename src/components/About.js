import { motion } from "framer-motion";
import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.3, duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ padding: "80px 50px", background: "#fafafa" }}
    >
      <Row justify="center">
        <Col xs={24} md={20}>
          <motion.div variants={itemVariants}>
            <Title
              level={2}
              style={{
                textAlign: "center",
                marginBottom: 24,
                color: "#001529",
              }}
            >
              Λίγα Λόγια για την Επιχείρηση
            </Title>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Paragraph
              style={{
                textAlign: "justify",
                fontSize: "1.05rem",
                lineHeight: 1.6,
              }}
            >
              Η επιχείρηση «VTGS ΜΟΝΟΠΡΟΣΩΠΗ ΙΚΕ» με διακριτικό τίτλο «VTGS ΙΚΕ"
              παρέχει ολοκληρωμένο σύστημα υπηρεσιών καλύπτοντας κάθε ανάγκη
              οργανισμού του δημόσιου ή του ιδιωτικού τομέα. Με γνώμονα πάντοτε
              τις ανάγκες του εκάστοτε πελάτη και προσαρμοζόμενοι στις εξελίξεις
              των ημερών, σκοπός μας είναι η παροχή ολοκληρωμένης υποστήριξης με
              την προσφορά ρεαλιστικών και ουσιαστικών λύσεων για τη βελτίωση
              της ανταγωνιστικότητας των επιχειρήσεων και την αύξηση της
              αποδοτικότητας και παραγωγικότητας των στελεχών τους.
            </Paragraph>
          </motion.div>
        </Col>
      </Row>
    </motion.section>
  );
}
