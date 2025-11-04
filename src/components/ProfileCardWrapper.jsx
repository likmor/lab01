import ProfileCard from "./ProfileCard";

function ProfileCardWrapper({ data, columnNumber }) {
  let size = (1 / columnNumber) * 100;
  return (
    <div className="d-flex flex-wrap">
      {data.map((el, index) => {
        return (
          <div style={{ flexBasis: `${size}%` }}>
            <ProfileCard key={index} profile={el} />
          </div>
        );
      })}
    </div>
  );
}

export default ProfileCardWrapper;
