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
              <h4>Auctify (Real-Time Auction Platform)</h4>
              <h5>2024 - Present</h5>
              <p><em>Home Project</em></p>
              <ul>
                <li>Developed a real-time auction platform featuring scheduled auctions, live bidding, and secure payment method verification.</li>
                <li>Implemented a private chat system between sellers and auction winners for seamless communication.</li>
                <li>Built using the MERN stack and Supabase for robust database capabilities.</li>
                <li><strong>Live Link:</strong> <a href="https://auctify.vercel.app" target="_blank" rel="noopener noreferrer">auctify.vercel.app</a></li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Snippet Saver (Code Snippet Manager)</h4>
              <h5>2024</h5>
              <p><em>Home Project</em></p>
              <ul>
                <li>Built a developer-focused application to easily save, categorize, and retrieve reusable code snippets.</li>
                <li>Integrated Supabase for seamless cloud-based data persistence and authentication.</li>
                <li>Created a clean and responsive user interface tailored for fast developer workflows.</li>
                <li><strong>Live Link:</strong> <a href="https://snippet-saver.vercel.app" target="_blank" rel="noopener noreferrer">snippet-saver.vercel.app</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
