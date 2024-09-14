import React from "react";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore,collection,addDoc } from "firebase/firestore";
import "./login.css";
function Create() {

    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

  const [loggedIn, setLoggedIn] = useState(false);
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    // Set up a listener for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setLoggedIn(true);
        console.log("Logged in");
      } else {
        // No user is signed in
        setLoggedIn(false);
      }
    }); 

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Get Firestore instance
    const db = getFirestore();
  
    try {
      // Add a new document to the "events" collection
      await addDoc(collection(db, 'events'), {
        eventName: eventName,
        date: date,
        time: time,
        description: description,
        location: location || 'Not provided' // Set default value for optional field
      });
  
      console.log('Event created successfully!');
      alert("Event created successfully!")
      window.location.replace('/')
      // Optionally, you can clear the form fields or redirect the user
    } catch (error) {
      console.error('Error adding event:', error);
      // Handle error if needed
    }
  };
  return(
  <div className="container1">
      <div className="login-container">
        <div className="heading">
          Create a New Event
        </div>
        <div className="login-details">
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="eventName"
                placeholder="Event Name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                required
              />
              <label htmlFor="eventName">Event Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control"
                id="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <label htmlFor="date">Date</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="time"
                className="form-control"
                id="time"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
              <label htmlFor="time">Time</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <label htmlFor="description">Description</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <label htmlFor="location">Location</label>
            </div>
            <button type="submit" className="login-button">
              Create Event
            </button>
          </form>
        </div>
        
      </div>
      <div className="image-container">
        <img src="" alt="" id="back-image" />
      </div>
    </div>
  );
};

export default Create;
