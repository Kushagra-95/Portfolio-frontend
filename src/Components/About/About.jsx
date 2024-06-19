import React from 'react'
import './About.css'
function About() {
  return (
    <div className="container">
    <section className="about-section">
        <h1>About Me</h1>
        <p>Hey there! I'm Kushagra, a B.Tech student majoring in Computer Science with a focus on Artificial Intelligence & Machine Learning.</p>
    </section>

    <section className="about-details">
        <h2>My Journey</h2>
        <p>My journey into the world of technology started at a young age. I have always been fascinated by the power of computers and how they can be used to solve complex problems.</p>
        
        <h2>Education</h2>
        <p>I am currently pursuing my B.Tech degree in Computer Science. My major focus is on Artificial Intelligence and Machine Learning, where I am learning about the latest technologies and methodologies to develop intelligent systems.</p>

        <h2>Projects & Interests</h2>
        <p>I have worked on several projects that involve machine learning algorithms, data analysis, and predictive modeling. My interests include exploring new AI techniques, participating in hackathons, and contributing to open-source projects.</p>
    </section>

    <section className="cta">
        <a href="/contact">Contact Me</a>
    </section>
</div>
  )
}

export default About