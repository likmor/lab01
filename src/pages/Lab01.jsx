import ProfileCardWrapper from "../components/ProfileCardWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import AppContext from "../data/AppContext";

function Lab01() {
  const context = useContext(AppContext);
  const items = context.items;
  return (
    <>
      <ProfileCardWrapper data={items} columnNumber={3}></ProfileCardWrapper>
    </>
  );
}

export default Lab01;
