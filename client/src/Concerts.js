import React, { useEffect } from "react";
import Concert from "./Concert";

function Concerts({ currentUser, concerts, setConcerts }) {
  const userId = currentUser.id;

  useEffect(() => {
    fetch("/concerts")
      .then((resp) => resp.json())
      .then((concerts) => {
        console.log(concerts);
        setConcerts(concerts);
      });
  }, []);

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
