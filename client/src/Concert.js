import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

function Concert({ concert, userId }) {
  const [modalShow, setModalShow] = useState(false);

  function handleModalShow() {
    setModalShow(!modalShow);
  }

  return (
    <>
      <button onClick={handleModalShow}>
        <p>{concert.name}</p>
        <p>
          {concert.date} - {concert.time}
        </p>
      </button>
      <ReactModal
        key={concert.id}
        isOpen={modalShow}
        ariaHideApp={false}
        onRequestClose={handleModalShow}
      >
        <h2>{concert.name}</h2>
        <p>Featuring {concert.performer}</p>
        <p>
          on {concert.date} at {concert.time}
        </p>
        <p>
          {concert.city}, {concert.state}
        </p>
        <Link to="/reservetickets" state={{ concert: concert, userId: userId }}>
          <button type="button">Reserve tickets</button>
        </Link>
        <button onClick={handleModalShow}>Close</button>
        <h4>Users attending:</h4>
        {concert.users.map((user) => {
          return <p>{user.username}</p>;
        })}
      </ReactModal>
      {/* how do i associate the ReactModal to the button? is there a different way to present ReactModal? */}
    </>
  );
}

export default Concert;
