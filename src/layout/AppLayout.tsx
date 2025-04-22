
import Content from "../components/Content";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FC } from "react";

const AppLayout: FC = () => {
  return (
    <main>
    <div className="bg-white dark:bg-black transition-transform duration-300 ease-in-out">
        <Header />
        <Content>


          <Outlet />
        </Content>
        <Footer />
      </div>
    </main>
  );
};

export default AppLayout;