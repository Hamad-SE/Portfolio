export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>I offer a range of web development services, focusing on modern, scalable, and tailored solutions to meet project needs.</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
            <div>
              <h4 className="title"><a href="/service-details.html" className="stretched-link">Frontend Development</a></h4>
              <p className="description">Creating highly responsive, interactive, and user-friendly interfaces using React.js, HTML5, CSS3, and Tailwind CSS.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
            <div>
              <h4 className="title"><a href="/service-details.html" className="stretched-link">Backend Development</a></h4>
              <p className="description">Building robust and secure server-side applications and RESTful APIs with Node.js and Express.js.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
            <div>
              <h4 className="title"><a href="/service-details.html" className="stretched-link">Database Management</a></h4>
              <p className="description">Designing and optimizing flexible databases utilizing MongoDB for seamless data storage and retrieval in applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
