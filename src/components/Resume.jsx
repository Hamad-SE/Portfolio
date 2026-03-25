export default function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>A summary of my skills, education, and the personal projects I have built to develop my expertise in the MERN stack.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Muhammad Hammad</h4>
              <p><em>Enthusiastic and detail-oriented self-taught MERN Stack Developer with a solid foundation in modern web technologies. Proactive in learning and building home projects to prepare for a successful career in software development.</em></p>
              <ul>
                <li>Sargodha, Pakistan</li>
                <li>+92 308 4886368</li>
                <li>hamad.se26@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>BS Software Engineering</h4>
              <h5>2022 - 2026</h5>
              <p><em>Sargodha, Pakistan</em></p>
              <p>Gaining in-depth knowledge of software development lifecycles, programming fundamentals, and modern engineering practices.</p>
            </div>
            <div className="resume-item">
              <h4>Intermediate in Computer Science (ICS)</h4>
              <h5>2020 - 2022</h5>
              <p><em>Sargodha, Pakistan</em></p>
              <p>Developed a strong foundation in computer science, mathematics, and problem-solving, which sparked my interest in programming.</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Personal Projects</h3>
            <div className="resume-item">
              <h4>Full Stack E-Commerce Platform</h4>
              <h5>2023 - Present</h5>
              <p><em>Home Project</em></p>
              <ul>
                <li>Developed a complete e-commerce application using MongoDB, Express.js, React, and Node.js.</li>
                <li>Implemented user authentication, product management, and a secure shopping cart.</li>
                <li>Integrated a responsive and modern UI using React and Tailwind CSS.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Real-Time Chat Application</h4>
              <h5>2023</h5>
              <p><em>Home Project</em></p>
              <ul>
                <li>Built a real-time messaging app using Node.js, Express, and Socket.io.</li>
                <li>Created a sleek and intuitive frontend interface using React.</li>
                <li>Implemented features like online status, typing indicators, and message history.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
