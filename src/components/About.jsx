export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>I am a passionate and self-motivated MERN Stack developer. I love building web applications and solving problems through code.</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="/assets/img/mypic.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>Web Developer.</h2>
            <p className="fst-italic py-3">
              A dedicated Software Engineering student and MERN stack enthusiast, focused on creating dynamic and responsive web applications.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>5 April 2005</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+92 308 4886368</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Sargodha, Pakistan</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BS Software Engineering</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>hamad.se26@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              While I am currently looking for my first professional role, I have spent significant time developing my skills by building robust projects at home. I am eager to learn, grow, and bring my enthusiasm for modern web development to a professional team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
