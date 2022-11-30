import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ScheduleConcert() {
  const [error, setError] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    performer: "",
    date: "",
    time: "",
    city: "",
    state: "",
    total_tickets: "",
  });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then(navigate("/login"));
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>Schedule your concerts for others to attend!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Concert name:
          <input
            name="name"
            type="text"
            placeholder="Concert name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Performer:
          <input
            name="performer"
            type="performer"
            placeholder="Performer"
            value={formData.performer}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date:
          <input
            name="date"
            type="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Time:
          <input
            name="name"
            type="time"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City:
          <input
            name="city"
            type="text"
            placeholder="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>
        <label>
          State:
          <input
            name="state"
            type="text"
            placeholder="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Sign up!</button>
        {error.map((err) => {
          return <h4 key={err}>{err}</h4>;
        })}
      </form>
    </div>
  );
}

export default ScheduleConcert;
