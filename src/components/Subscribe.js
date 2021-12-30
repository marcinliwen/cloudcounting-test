import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import "./subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("is fetching", email);
    fetch(`.netlify/functions/cloudcount?email=${email}`)
      .then((res) => res.json())
      .then((json) => setEmail(json.email))
      .then(navigate("/sucess"));
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        id="email"
        name="email"
        pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
        size="30"
        placeholder="Podaj swój e-mail"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" value="Wyślij" />
    </form>
  );
};

export default Subscribe;
