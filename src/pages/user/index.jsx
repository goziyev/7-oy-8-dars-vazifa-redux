import React from "react";
import "./index.css";
function User() {
  return (
    <main className="profile">
      <div className="profile-bg" s="" />
      <section className="container">
        <aside className="profile-image">
          <img
            src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i13JTOnwHND4/v2/-1x-1.jpg"
            width="420px"
            height={400}
          />
          <a className="camera">
            <i className="fas fa-camera" />
          </a>
        </aside>
        <section className="profile-info">
          <h1 className="first-name">Stiv</h1>
          <h1 className="second-name">Jobs</h1>
          <h2>ABOUT</h2>
          <p>
            hello hello, I'm Mark zuckerberg, artist and developer 🐱‍🏍 student
            at stanford; intern at zynga 🏎 happy to be here! 😎let's code the
            best we can!
          </p>
          <aside className="social-media-icons">
            <a href="https://twitter.com/zephybite" target="_blank">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://codepen.io/zephyo" target="_blank">
              <i className="fab fa-codepen" />
            </a>
            <a href="https://github.com/zephyo" target="_blank">
              <i className="fab fa-github" />
            </a>
            <a href="https://medium.com/@zephyo" target="_blank">
              <i className="fab fa-medium" />
            </a>
          </aside>
        </section>
      </section>
      <section className="statistics">
        <button className="icon arrow left" />
        <button className="icon arrow right" />
        <p>
          <strong>29</strong> Followers
        </p>
        <p>
          <strong>184</strong> Following
        </p>
        <p>
          <strong>6</strong> Likes
        </p>
      </section>
      <button className="icon close" />
    </main>
  );
}

export default User;
