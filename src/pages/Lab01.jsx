import { people } from "../data/module-data";
import ProfileCardWrapper from "../components/ProfileCardWrapper";
import "bootstrap/dist/css/bootstrap.min.css";

function Lab01() {
  return (
    <>
      <ProfileCardWrapper data={people} columnNumber={3}></ProfileCardWrapper>
    </>
  );
}

export default Lab01;
