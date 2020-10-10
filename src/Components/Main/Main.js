import React from "react";
import Results from "../Results/Results";

export default function Main() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit button works");
    console.log(e.target.name.value);
    // getNames(name);
  };

  const name = "NES";

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" required />
        <p>
          <button type="submit">Get People</button>
          <Results name={name} />
        </p>
      </form>
    </div>
  );
}
