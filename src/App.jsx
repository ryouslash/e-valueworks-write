// src/App.jsx
import React from "react";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section id="about">
          <h2>About Us</h2>
          <p>Welcome to our landing page!</p>
        </section>
        <section id="services">
          <h2>Services</h2>
          <p>Here are our services.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Get in touch with us.</p>
        </section>
      </main>
    </>
  );
};

export default App;
