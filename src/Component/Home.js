import React, { Component } from "react";
import "./style/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="obx">
        <section class="hero">
          <div class="container">
            <h2>Welcome to My Website</h2>
            <p>Showcasing my work, skills and more!</p>
            <a href="#" class="btn">
              Explore
            </a>
          </div>
        </section>

        <section class="about">
          <div class="container">
            <h2>About Me</h2>
            <p>
              Hello! I am a passionate developer focused on building responsive
              and user-friendly websites.
            </p>
          </div>
        </section>

        <footer>
          <div class="container">
            <p>&copy; 2025 My Website. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}
