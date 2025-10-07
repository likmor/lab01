import ProfileCard from "./ProfileCard";

function ProfileCardWrapper({ data, columnNumber }) {
  return (
    <div style={{display: "flex"}}>
      {data.map((el, index) => {
        return (
          <>
            <ProfileCard key={index} profile={el} />
            {/* {index % columnNumber ? "" : ""} */}
          </>
        );
      })}
    </div>
  );
}

export default ProfileCardWrapper;
