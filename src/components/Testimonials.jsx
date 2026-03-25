export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Feedback and recommendations from mentors and peers emphasizing my dedication and ability to learn quickly.</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <script type="application/json" className="swiper-config" dangerouslySetInnerHTML={{__html: `
            {
              "loop": true,
              "speed": 600,
              "autoplay": { "delay": 5000 },
              "slidesPerView": "auto",
              "pagination": { "el": ".swiper-pagination", "type": "bullets", "clickable": true },
              "breakpoints": {
                "320": { "slidesPerView": 1, "spaceBetween": 40 },
                "1200": { "slidesPerView": 3, "spaceBetween": 1 }
              }
            }
          `}}></script>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Muhammad is an incredibly fast learner and a dedicated developer. His ability to grasp complex MERN stack concepts and apply them to real-world projects is impressive.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>John Doe</h3>
                <h4>Senior Developer &amp; Mentor</h4>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Working with Muhammad on open-source projects has been a great experience. He is a great team player and always eager to contribute and solve challenging software problems.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                <h3>Jane Smith</h3>
                <h4>Open Source Collaborator</h4>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
