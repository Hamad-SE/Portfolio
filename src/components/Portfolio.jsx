export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>A showcase of my recent home projects, demonstrating my ability to build dynamic, responsive, and functional web applications.</p>
      </div>
      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">Projects</li>
          </ul>
          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img src="/assets/img/portfolio/app-1.jpg" className="img-fluid" alt="Auctify" />
                <div className="portfolio-info">
                  <h4>Auctify</h4>
                  <p>Real-Time Auction Platform</p>
                  <a href="/assets/img/portfolio/app-1.jpg" title="Auctify" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="https://auctify.vercel.app" target="_blank" rel="noopener noreferrer" title="Live Preview" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img src="/assets/img/portfolio/product-1.jpg" className="img-fluid" alt="Snippet Saver" />
                <div className="portfolio-info">
                  <h4>Snippet Saver</h4>
                  <p>Developer Code Snippet Manager</p>
                  <a href="/assets/img/portfolio/product-1.jpg" title="Snippet Saver" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="https://snippet-saver.vercel.app" target="_blank" rel="noopener noreferrer" title="Live Preview" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
