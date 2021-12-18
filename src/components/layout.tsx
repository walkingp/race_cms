import React, { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = (props: Props) => {
  return (
    <div className="container">
      <Header />
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
};
