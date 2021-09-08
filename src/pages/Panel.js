import React from "react";
import firebase from "../firebase";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function Panel() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eventName, setEventName] = useState([]);

  const fetchTours = async () => {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const newToursArray = [];

      for (let eventName in data) {
        const toursObject = {
          id: eventName,
          name: data[eventName].name,
          date: data[eventName].date,
          time: data[eventName].time,
          location: data[eventName].location,
          description: data[eventName].description,
        };
        newToursArray.push(toursObject);
        setLoading(false);
      }
      setEvents(newToursArray)
    });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // submitting input to firebase
  const handleSubmit = (e) => {
    const dbRef = firebase.database().ref();
      e.preventDefault();
      if (eventName.length === 0) {
          alert('please check your input')
      } else {
            dbRef.push(eventName).set({
      name: eventName
    });
      }
  
    setEventName("");
  };

  return (
    <div className="pannel-wrapper">
      <h1>panel</h1>
      <ul>
        {events.map((event) => {
          return (
            <li key={event.id}>
              <p>{event.name}</p>
              <p>
                {event.date}, {event.time}
              </p>
              <p>{event.location}</p>
              <p>{event.description}</p>
            </li>
          );
        })}
      </ul>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="newEvent">add next event</label>
        <input
          type="text"
          className="noteInput"
          placeholder="Add event name"
          name="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          maxLength="20"
          // required
        />
        <button type="submit">add event</button>
      </form>
    </div>
  );
}
