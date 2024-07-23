import React from "react";
import './Home.css'

const Home = () => {
    return(
        <div className="container">
            <div className="heading">
                <h1>Welcome to Code Docs</h1>
                <h2>This is a documentation website for tech project ideas</h2>
                <p>This website include project ideas in different programming languages, including guides, source code and code explaination for learning</p> <br />
                <a href="#about"><button>About</button></a>
            </div>
            <br /><br />
            <div className="about" id="about">
                <hr />
                <h2>About me</h2>
                <p>Hi! My name is Rudra and I'm a builder at Nights and Weekends Season 5 at Buildspace! You can check out more about me by clicking the links below: <br />
                <a href="https://x.com/home" target="_blank">X</a> | <a href="https://github.com/rudraa19" target="_blank">Github</a> | <a href="https://www.linkedin.com/in/rudra-sharma-326014309/" target="_blank">LinkedIn</a> | <a href="https://sage.buildspace.so/@rudra-VjI4J9O" target="_blank">sage</a>
                </p>
                <h2>Motive to create this website</h2>
                <p>We have to create an end-of-semester project in our college every semester, and sometimes it's difficult to find project ideas and complete them. I'm creating this website to provide ideas and source code for my college mates. It can also be useful for beginners to learn new languages through project building. Additionally, this is my project for Buildspace's Nights and Weekends S5.</p>
                <h2>About buildspace</h2>
                <p>Nights and Weekends" Season 5 by <u><a href="https://buildspace.so/" target="_blank">buildspace</a></u> is an engaging six-week virtual program designed to help participants bring their innovative ideas to life, from music albums to tech projects. Unlike traditional accelerators, it emphasizes hands-on creation, feedback, and iteration rather than passive learning. Participants can work solo or in teams, utilizing buddy passes to invite collaborators. The program features weekly lectures and updates, a playful community with competitive elements, and robust support through videos and a custom tech stack. It's a dynamic and inclusive environment that prioritizes action over networking and theoretical learning</p><br />
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}><a href="#"><button>Back</button></a><br /><br /></div>
            </div>
        
        </div>
    )
}

export default Home;