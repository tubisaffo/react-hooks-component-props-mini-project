import React from "react";

function About({ image = "https://via.placeholder.com/215", about, logo }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
