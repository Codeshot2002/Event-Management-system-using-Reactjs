import "./signup.css";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SignupForm = () => {
  // States to store user inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState("");

  const [userType, setUserType] = useState("Normal User");

  const firestore = getFirestore();

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value); // Update state based on selected radio button
  };

  // Handler for form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    // Add signup logic here (e.g., create a new user with Firebase)
    if (!isRegistering) {
      setIsRegistering(true);

      try {
        // Create user with email and password using Firebase Auth
        const userCredential = await doCreateUserWithEmailAndPassword(
          email,
          password
        );
        const user = userCredential.user; // Get the user object, which contains the UID

        // Store user details in Firestore, using their UID as the document ID
        await setDoc(doc(firestore, "users", user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          createdAt: new Date(),
          type: userType,
        });
        window.location.replace('/Login')

        console.log(
          "User signed up and details stored in Firestore with UID:",
          user.uid
        );
      } catch (error) {
        alert(error);
        console.error("Error signing up or storing user data:", error);
      } finally {
        setIsRegistering(false); // Reset the registration flag
      }
    }
  };
  return (
    <div className="container1">
      <div className="login-container">
        <div className="heading">
          Welcome to Spotlight Celebrations
          <br /> Sign up to create your account
        </div>
        <div className="login-details">
          <form onSubmit={handleSignup}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingFirstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} // Update first name state
              />
              <label htmlFor="floatingFirstName">First Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingLastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} // Update last name state
              />
              <label htmlFor="floatingLastName">Last Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            <div className="radio-container">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userType"
                  id="flexRadioDefault1"
                  value="Normal User"
                  checked={userType === "Normal User"}
                  onChange={handleUserTypeChange} // Call the function when selection changes
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Normal User
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userType"
                  id="flexRadioDefault2"
                  value="Admin User"
                  checked={userType === "Admin User"}
                  onChange={handleUserTypeChange} // Call the function when selection changes
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Admin User
                </label>
              </div>
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button type="submit" className="login-button">
              Signup
            </button>
          </form>
        </div>

        <span id="sign-up">
          You already have an account?
          <span
            onClick={() => window.location.replace("/Login")}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Login
          </span>
        </span>
      </div>
      <div className="image-container">
        <img src="" alt="" id="back-image" />
      </div>
    </div>
  );
};

export default SignupForm;
