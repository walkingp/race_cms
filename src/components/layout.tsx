import { Layout } from "antd";
import React, { ReactNode, useState } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { MenuPage } from "./menu";

interface Props {
  children: ReactNode;
}

export const LayoutPage: React.FC<Props> = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="container">
      <Header />
      <Layout className="main">
        <Layout.Sider
          onCollapse={setCollapsed}
          collapsed={collapsed}
          collapsible
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <MenuPage />
        </Layout.Sider>
        <Layout className="site-layout">{props.children}</Layout>
      </Layout>
    </div>
  );
};
