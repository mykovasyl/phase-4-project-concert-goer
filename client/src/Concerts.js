import React from "react";
import Concert from "./Concert";

function Concerts({ currentUser, concerts }) {
  const userId = currentUser.id;

  return (
    <div>
      {/* change concerts in blank to have options in drop down based on concert available */}
      <h1>Concerts in ______</h1>
      {concerts.map((concert) => {
        return <Concert key={concert.id} concert={concert} userId={userId} />;
      })}
    </div>
  );
}

export default Concerts;
