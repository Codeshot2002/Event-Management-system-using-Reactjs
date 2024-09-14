import React from "react";
import "./home.css";
import { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import Events from "../create-Event/events/Events";
function Home() {
  const handleNavigation = (path) => {
    window.location.replace(path);
  };

  const [loggedIn, setLoggedIn] = useState(false);

  const auth = getAuth();

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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false); // Update state after logout
    } catch (error) {
      console.error("Logout error:", error);
      // Handle error if needed
    }
  };

  return (
    <>
      <div className="mainBox">
        <div className="header">
          <div className="logo">SpotLight</div>
          <div className="options">
            <ul className="tab">
              <li>Home</li>
              <li>Events</li>
              <li>Profile</li>
              {!loggedIn && (
                <>
                  <li onClick={() => handleNavigation("/Login")}>Login</li>
                  <li onClick={() => handleNavigation("/SignUp")}>Sign Up</li>
                </>
              )}
              {loggedIn && <li onClick={handleLogout}>Logout</li>}
            </ul>
          </div>
        </div>
        <div className="large-text">
          Spotlight your creativity <br />
          Curate Unforgettable Events
        </div>
        <div className="buttonDiv">
          {loggedIn && (
            <button
              id="create-event"
              onClick={() => handleNavigation("/create-event")}
            >
              Create Event
            </button>
          )}
          <button id="event">Explore Events</button>
        </div>
      </div>

      <Events/>
    </>
  );
}

export default Home;
