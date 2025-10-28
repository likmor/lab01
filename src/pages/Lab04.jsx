import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCard2 from "../components/ProfileCard2";

function Lab04() {
  const people = [
    {
      name: "Ala",
      id: 1,
      rating: 1,
      checked: false,
    },
    {
      name: "Ela",
      id: 2,
      rating: 1,
      checked: false,

    },
    {
      name: "Karol",
      id: 3,
      rating: 1,
      checked: false,

    },
    {
      name: "Ola",
      id: 4,
      rating: 1,
      checked: false,

    },
  ];
  const Item = ({ name, id, rating, checked, dispatch }) => <ProfileCard2 profile={{ id, name, checked, rating }} dispatch={dispatch} />;
  return (
    <>
      <p>s</p>
    </>
  );
}

export default Lab04;
