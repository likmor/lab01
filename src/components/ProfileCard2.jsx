import { Button } from "react-bootstrap";
import RatingBar from "./RatingBar";
function ProfileCard2({ profile, dispatch }) {
  return (
    <div className="d-flex justify-content-between">
      <h2>{profile.name}</h2>

      <div>
        <RatingBar rating={profile.rating}></RatingBar>

        <Button>Edit</Button>
        <Button onClick={() => dispatch({ type: "check", id: profile.id })}>
          Check
        </Button>

        <Button
          className="btn-danger"
          onClick={() => {
            dispatch({ type: "delete", id: profile.id });
          }}
        >
          Delete
        </Button>
        <Button onClick={() => dispatch({ type: "rate", id: profile.id })}>
          Rate
        </Button>
        {profile.checked && "✔"}
      </div>
    </div>
  );
}

export default ProfileCard2;
