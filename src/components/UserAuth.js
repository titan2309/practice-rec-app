import React, { useState } from "react";

export default function UserAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailUpdater = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const passwordUpdater = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(alert("You clicked on submit"));
  };

  return (
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
          <a href="/" className="btn btn-primary my-3" onClick={submitHandler}>
            Submit
          </a>
        </div>
      </div>
    </div>
  );
}
