import React, { useEffect } from "react";
import Concert from "./Concert";

function Concerts({ currentUser, concerts, setConcerts, userTickets }) {
  const userId = currentUser.id;

  useEffect(() => {
    fetch("/concerts")
      .then((resp) => resp.json())
      .then((concerts) => {
        setConcerts(concerts);
      });
  }, [userTickets]);

  return (
    <div>
      {/* change concerts in blank to have options in drop down based on concert available */}
      <h1>Reserve tickets for concerts</h1>
      {concerts.map((concert) => {
        return <Concert key={concert.id} concert={concert} userId={userId} />;
      })}
    </div>
  );
}

export default Concerts;
