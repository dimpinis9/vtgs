import { useState } from "react";
import { Drawer, Button, Menu, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

const { useBreakpoint } = Grid;

const menuItems = [
  { key: "home", label: <Link href="/">Αρχική</Link> },
  { key: "policies", label: <Link href="/policies">Πολιτικές της VTGS</Link> },
  { key: "services", label: <Link href="/services">Υπηρεσίες της VTGS</Link> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();

  return (
    <>
      {screens.md ? (
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          style={{
            background: "#333333",
          }}
        />
      ) : (
        <>
          <Button
            type="text"
            icon={
              <MenuOutlined style={{ fontSize: "1.5rem", color: "#fff" }} />
            }
            onClick={() => setOpen(true)}
          />
          <Drawer
            title="VTGS ΙΚΕ"
            placement="left"
            onClose={() => setOpen(false)}
            open={open}
            styles={{
              header: { background: "#333333", color: "#fff" },
              body: { padding: 0 },
            }}
          >
            <Menu
              mode="vertical"
              items={menuItems}
              onClick={() => setOpen(false)}
              style={{ borderRight: 0 }}
            />
          </Drawer>
        </>
      )}
    </>
  );
}
