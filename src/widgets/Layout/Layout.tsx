import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface MyComponentProps {
  children: ReactNode;
}
const Layout: React.FC<MyComponentProps> = ({children}) => {
  return (
    <main className="main">
      <Header/>
      {children}
      <Footer/>
    </main>
  );
};

export default Layout;
