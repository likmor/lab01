import NavBarMenuApp from "../components/NavBarMenuApp";
import FooterApp from "../components/FooterApp";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <NavBarMenuApp />
      <Outlet />
      <FooterApp />
    </>
  );
}

export default RootLayout;
