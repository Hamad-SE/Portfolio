export default function Stats() {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Projects Completed</strong> <span>Showcasing continuous learning</span></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="1500" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Hours of Coding</strong> <span>Dedicated to mastering my craft</span></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Technologies Mastered</strong> <span>MERN stack and beyond</span></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="320" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Coffee Cups</strong> <span>Fueling the development process</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
