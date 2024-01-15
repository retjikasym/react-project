import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LeftMenu from "./LeftMenu/LeftMenu";
import RigthMenu from "./RigthMenu/RigthMenu";
import cls from'../Layout/layout.module.scss'

export default function Layout() {
  return (
    <>
      <LeftMenu />
      <div className={cls.cont}>
        <Header />
        <Outlet />
        <Footer />
      </div>
      <RigthMenu />
    </>
  );
}
