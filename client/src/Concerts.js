import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { useFetcher, useNavigate } from "react-router-dom";
import ReserveTickets from "./ReserveTickets";

function Concerts({ currentUser, concerts }) {
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();

  function handleModalShow() {
    setModalShow(!modalShow);
  }

  function handleNavigation() {
    // how do i send information to the ReserveTickets component from here?
    navigate("/reservetickets");
  }

  return (
    <div>
      {/* change concerts in blank to have options in drop down based on concert available */}
      <h1>Concerts in </h1>
      {concerts.map((concert) => {
        return (
          <>
            <button onClick={handleModalShow}>
              <p>{concert.name}</p>
              <p>
                {concert.date} - {concert.time}
              </p>
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
                <p>
                  <button onClick={handleNavigation}>Reserve tickets</button>
                </p>
                <button onClick={handleModalShow}>Close</button>
              </ReactModal>
            </button>
            {/* how do i associate the ReactModal to the button? is there a different way to present ReactModal? */}
            {/* <ReactModal
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
              <p>
                <button onClick={handleNavigation}>Reserve tickets</button>
              </p>
              <button onClick={handleModalShow}>Close</button>
            </ReactModal> */}
          </>
        );
      })}
    </div>
  );
}

export default Concerts;
