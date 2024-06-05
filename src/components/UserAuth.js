import React, { useState } from "react";
import { users } from "./UserData";

export default function UserAuth(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailUpdater = (event) => {
    setEmail(event.target.value);
  };

  const passwordUpdater = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      console.log("User Email: " + email);
      console.log("User Password: " + password);
      props.showAlert("You have been authenticated", "Welcome");
      setEmail("");
      setPassword("");
    } else {
      props.showAlert("Unauthorised error", "Error");
    }
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
      >
        <div
          className="card text-center mb-3"
          style={{
            width: "300px",
            height: "280px",
          }}
        >
          <div className="card-body">
            <h5 className="card-text">Log In</h5>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
                style={{ display: "flex" }}
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={email}
                onChange={emailUpdater}
              />
            </div>
            <label
              htmlFor="inputPassword5"
              className="form-label"
              style={{ display: "flex" }}
            >
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              placeholder="Minimum 8 characters"
              value={password}
              onChange={passwordUpdater}
            />
            <button className="btn btn-primary my-3" onClick={submitHandler}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
