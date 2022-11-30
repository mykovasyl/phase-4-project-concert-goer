import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ScheduleConcert({ concerts, setConcerts }) {
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
    fetch("/concerts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((newConcert) => {
        setConcerts([...concerts, newConcert]);
        navigate("/concerts");
      });
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
            value={formData.date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Time:
          <input
            name="time"
            type="time"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City:
          <input
            name="city"
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>
        <label>
          State:
          <input
            name="state"
            type="text"
            placeholder="State"
            value={formData.state}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Tickets available:
          <input
            name="total_tickets"
            type="text"
            placeholder="Tickets"
            value={formData.total_tickets}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Create</button>
        {error.map((err) => {
          return <h4 key={err}>{err}</h4>;
        })}
      </form>
    </div>
  );
}

export default ScheduleConcert;
