import ProfileCard from "../components/ProfileCard";
import { people } from "../data/module-data";
import { useParams } from "react-router";

function Lab02() {
  const { id } = useParams();
  const person = people.filter((el) => el.id == id)[0];
  if (id == null) {
    return <h2>Brak identyfikatora osoby</h2>;
  }
  return (
    <>
      {person ? (
        <ProfileCard profile={person} />
      ) : (
        <h2>Nie znaleziono osoby o tym identyfikatorze</h2>
      )}
    </>
  );
}

export default Lab02;
