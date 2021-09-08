import React from "react";
import firebase from "../firebase";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function Panel() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const newToursArray = [];

      for (let inventoryName in data) {
        const toursObject = {
          id: inventoryName,
          name: data[inventoryName].name,
          date: data[inventoryName].date,
          location: data[inventoryName].location,
          description: data[inventoryName].description,
        };
        newToursArray.push(toursObject);
        setLoading(false);
      }
      setEvents(newToursArray);
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

  return (
    <div className="pannel-wrapper">
      <h1>panel</h1>
      <ul>
        {events.map((event) => {
          return (
            <li>
              <p>{event.name}</p>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <p>{event.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
