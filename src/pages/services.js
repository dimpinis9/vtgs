import Head from "next/head";
import { Layout, Typography, Card, List, Row, Col, Grid } from "antd";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

// Data for services sections
const sections = [
  {
    title: "Διαφοροποίηση στις Υπηρεσίες",
    description:
      "Η εταιρία παρέχει υψηλού επιπέδου υπηρεσίες, διότι βασίζεται:",
    items: [
      "στην έγκυρη πληροφόρηση και έγκαιρη αξιοποίηση των επιδοτούμενων προγραμμάτων από Εθνικούς και Κοινοτικούς πόρους.",
      "στην εφαρμογή των πλέον σύγχρονων εκπαιδευτικών και πληροφοριακών συστημάτων.",
      "στην μετάδοση και εφαρμογή των πιο σύγχρονων μεθόδων και συστημάτων οργάνωσης και ανάπτυξης των ελληνικών επιχειρήσεων.",
    ],
    extra:
      "Τα στελέχη και οι συνεργάτες της εταιρίας είναι καταξιωμένοι στο αντικείμενό τους, με μεγάλη εμπειρία και γνώση των δεδομένων της αγοράς. Οι δραστηριότητες της καλύπτουν το σύνολο του Ελλαδικού χώρου, εξασφαλίζοντας συνεργασίες με εταιρίες, οργανισμούς, φορείς και πανεπιστημιακά ιδρύματα ακόμη και του εξωτερικού.",
  },
  {
    title: "Συμβουλευτική",
    description:
      "Η Εταιρία παρέχει ολοκληρωμένες συμβουλευτικές υπηρεσίες, τόσο σε θέματα συμμετοχής σε κοινοτικά και διεθνή προγράμματα επιδοτήσεων και απορρόφησης κονδυλίων, εφαρμογών νέων τεχνολογιών στις επιχειρήσεις, όσο και σε θέματα ανάπτυξης και διαχείρισης ανθρώπινου δυναμικού.",
    items: [
      "Ανάπτυξη και εφαρμογή στρατηγικού σχεδιασμού επιχειρήσεων.",
      "Εκτιμήσεις και διαγνωστικοί έλεγχοι υφιστάμενης κατάστασης Επιχειρήσεων και Οργανισμών.",
      "Αναδιοργάνωση (B.P.R.) / οργάνωση επιχειρήσεων σε νέα πληροφοριακά συστήματα (E.R.P., C.R.M. κ.λ.π.), management και internal auditing.",
      "Μελέτη, εφαρμογή και εγκατάσταση συστημάτων διαχείρισης ποιότητας (ΕΛΟΤ 1801:2008, OHSAS 18001:2007, ISO 9001:2015, ISO 14001:2015).",
      "Σχεδιασμός και οργάνωση εκπαιδευτικών προγραμμάτων για στελέχη επιχειρήσεων.",
    ],
  },
  {
    title: "Εκπαίδευση",
    description:
      "Η Εταιρία διοργανώνει επιχειρησιακά σεμινάρια και κύκλους επιμόρφωσης προσωπικού, με στόχο την αύξηση της παραγωγικότητας και ανταγωνιστικότητας μέσω νέων συνθηκών, πρακτικών στην εργασία και αξιοποίησης της νέας τεχνολογίας.",
    items: [
      "Εκπαιδευτικοί κύκλοι προσαρμοσμένοι στις ανάγκες συγκεκριμένων επιχειρήσεων, σε εταιρικές ή εξωτερικές εγκαταστάσεις.",
      "Ανοικτά σεμινάρια με στελέχη από πολλές επιχειρήσεις σε μικρές ομάδες, περιοδικά με βάση το πρόγραμμα της εταιρίας.",
      "Σεμινάρια και ημερίδες ευρέος ενδιαφέροντος για πάνω από 50 συμμετέχοντες, με αλλαγές συνθηκών αγοράς και νέες τεχνολογίες.",
      "Επιπλέον, η Εταιρία αναλαμβάνει τοπικά και διεθνή συνέδρια υψηλής στάθμης με συμμετοχή στελεχών επιχειρήσεων και προσανατολισμό σε σημαντικές αλλαγές, ευκαιρίες και νέες τεχνολογίες.",
    ],
  },
  {
    title: "Δημόσιος Τομέας",
    description:
      "Η VTGS IKE υλοποιεί μελέτες οργάνωσης και λειτουργικού εκσυγχρονισμού για την βελτίωση της επιχειρηματικής λειτουργίας, εισαγωγή σύγχρονων εργαλείων διοίκησης και σχεδιασμό βέλτιστων οργανωτικών δομών.",
    items: [
      "Βελτίωση αποδοτικότητας εργαζομένων.",
      "Ικανοποίηση πολιτών και καταναλωτών.",
      "Υπηρεσία τεχνικής υποστήριξης και σχεδιασμού στρατηγικής.",
      "Στρατηγικός σχεδιασμός.",
      "Προγράμματα πολιτισμού, αθλητισμού και ψυχαγωγίας για ΟΤΑ.",
    ],
    extra:
      "Συγκεκριμένα, εκπονεί προγράμματα αθλητισμού και ψυχαγωγικής απασχόλησης για όλες τις ηλικίες, με συνεργασία εμπειρογνωμόνων, παιδαγωγών και φορέων πολιτισμού.",
  },
];

export default function ServicesPage() {
  const screens = useBreakpoint();

  return (
    <Layout>
      <Head>
        <title>VTGS - Υπηρεσίες</title>
        <meta name="description" content="Υπηρεσίες που παρέχει η VTGS IKE." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#333333",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
          VTGS ΙΚΕ
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Navbar />
        </div>
      </Header>

      <Content style={{ padding: "60px 24px", background: "#fafafa" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <Title
            level={screens.md ? 2 : 3}
            style={{ textAlign: "center", marginBottom: 32 }}
          >
            Υπηρεσίες
          </Title>

          <Row gutter={[24, 24]} justify="center">
            {sections.map((sec, idx) => (
              <Col xs={24} sm={12} md={8} key={idx}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  }}
                  style={{ borderRadius: 8, overflow: "hidden" }}
                >
                  <Card
                    title={
                      <Title level={4} style={{ margin: 0 }}>
                        {sec.title}
                      </Title>
                    }
                    hoverable={false}
                    bordered={false}
                    bodyStyle={{ padding: "16px" }}
                    style={{ background: "#fff" }}
                  >
                    <Paragraph style={{ fontWeight: 500, marginBottom: 12 }}>
                      {sec.description}
                    </Paragraph>
                    <List
                      dataSource={sec.items}
                      renderItem={(item) => (
                        <List.Item style={{ border: "none", padding: "4px 0" }}>
                          <motion.span
                            whileHover={{ textDecoration: "underline" }}
                          >
                            {item}
                          </motion.span>
                        </List.Item>
                      )}
                      bordered={false}
                      style={{ paddingLeft: 0 }}
                    />
                    {sec.extra && (
                      <Paragraph style={{ marginTop: 16 }}>
                        {sec.extra}
                      </Paragraph>
                    )}
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Content>

      <AppFooter />
    </Layout>
  );
}
