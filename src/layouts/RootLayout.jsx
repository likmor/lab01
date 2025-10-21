import NavBarMenuApp from "../components/NavBarMenuApp";
import FooterApp from "../components/FooterApp";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="d-flex flex-column flex-grow">
      <NavBarMenuApp />
      <div className="flex-grow">
        <Outlet />
      </div>
      <FooterApp />
    </div>
  );
}

export default RootLayout;
