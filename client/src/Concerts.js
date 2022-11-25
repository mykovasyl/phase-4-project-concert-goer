import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { useFetcher, useNavigate } from "react-router-dom";

function Concerts({ currentUser }) {
  const [modalShow, setModalShow] = useState(false);
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    fetch("/concerts")
      .then((resp) => resp.json())
      .then((concerts) => {
        console.log(concerts);
        setConcerts(concerts);
      });
  }, []);

  const navigate = useNavigate();

  function handleModalShow() {
    setModalShow(!modalShow);
  }

  function handleNavigation() {
    navigate("/reservetickets");
  }

  return (
    <div>
      <h2>Concert in State</h2>
      {/* <h1>Concerts in {currentUser.state}</h1> */}
      <button onClick={handleModalShow}>
        <p>Concert name</p>
        <p>Concert date/time</p>
      </button>
      <ReactModal
        isOpen={modalShow}
        ariaHideApp={false}
        onRequestClose={handleModalShow}
      >
        <h2>Concert name</h2>
        <p>Date - Time</p>
        <p>City and State</p>
        <p>
          <button onClick={handleNavigation}>Reserve tickets</button>
        </p>
        <button onClick={handleModalShow}>Close</button>
      </ReactModal>
    </div>
  );
}

export default Concerts;
