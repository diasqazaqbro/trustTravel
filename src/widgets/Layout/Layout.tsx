import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface MyComponentProps {
  children: ReactNode;
  type?: "login" | "profile";
}
const Layout: React.FC<MyComponentProps> = ({ children, type }) => {
  return (
    <main className="main">
      {type == "login" || type == "profile" ? (
        <>
          <Header type={type}>
            {children}
          </Header>
          <Footer />
        </>
      ) : (
        <>
          <Header type={type} />
          {children}
          <Footer />
        </>
      )}
    </main>
  );
};

export default Layout;
