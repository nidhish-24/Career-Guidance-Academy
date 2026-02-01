import heroImage from "../assets/homeimg.png";
import "./home.css";

function Home() {
  return (
    <>
     {/* HERO SECTION */}
<section className="hero-section">
  <div className="hero-left slide-left">
    <h1>
      Make the Right Career Decision With
      <span className="highlight"> Our Expert Guidance after +2</span>
    </h1>

    <p>
      We help students choose the right college, career path, and build a successful future
      with expert admission guidance and personalized support.
    </p>

    <button
      className="hero-btn hover-grow"
      onClick={() => window.location.href = "/apply"}
    >
      Apply for Admission Enquiry
    </button>
  </div>

  <div className="hero-right slide-right">
    <img className="float" src={heroImage} alt="Career Guidance Illustration" />
  </div>
</section>

      {/* COURSES WE GUIDE */}
<section className="course-section fade-in">
  <h2 className="slide-up">Courses We Guide</h2>

  <div className="course-container">
    <div className="course-card slide-up hover-grow">Engineering</div>
    <div className="course-card slide-up hover-grow">Pharmacy</div>
    <div className="course-card slide-up hover-grow">Nursing</div>
    <div className="course-card slide-up hover-grow">Medical</div>
    <div className="course-card slide-up hover-grow">PG Courses</div>
  </div>
</section>

{/* ADMISSION ENQUIRY SHORTCUT */}
<section className="admission-shortcut slide-up">
  <h2>Looking for Admissions?</h2>
  <p>Get personalized guidance and start your admission process with us.</p>

  <button
    className="admission-btn hover-grow"
    onClick={() => window.location.href = "/apply"}
  >
    Click Here for Admissions →
  </button>
</section>

{/* ACHIEVEMENT SECTION */}
<section className="stats-section slide-up">
  <h2>We Help Students Build Their Future</h2>

  <p className="stats-text">
    We helped over <span className="highlight">10,000+</span> students choose the right path after +2.
    <br />
    Our students achieve nearly <span className="highlight">90% placement success</span> every year.
  </p>
</section>

  {/* WHY CHOOSE US */}
      <section className="why-section fade-in">
        <h2 className="slide-up">Why Choose Career Guidance Academy?</h2>

        <div className="why-container">
          <div className="why-card slide-up hover-grow">
            <h3>Expert Counselors</h3>
            <p>
              Our experienced team helps you understand your strengths and choose the best path.
            </p>
          </div>

          <div className="why-card slide-up hover-grow">
            <h3>Personalized Career Mapping</h3>
            <p>
              We analyze your goals and academic background to guide you towards the right future.
            </p>
          </div>

          <div className="why-card slide-up hover-grow">
            <h3>100% Transparent Process</h3>
            <p>
              No hidden charges. Clear and honest admission guidance for every student.
            </p>
          </div>

          <div className="why-card slide-up hover-grow">
            <h3>Updated College Insights</h3>
            <p>
              We stay updated with latest cutoffs, placements, and admission trends.
            </p>
          </div>
        </div>
      </section>


      {/* SERVICES OVERVIEW */}
      <section className="services-overview fade-in">
        <h2 className="slide-up">Our Services</h2>

        <div className="services-container">
          <div className="service-card slide-up hover-grow">
            <h3>College Selection Guidance</h3>
            <p>Shortlist the best colleges based on your academic profile.</p>
          </div>

          <div className="service-card slide-up hover-grow">
            <h3>Career Counseling</h3>
            <p>Discover your interests, strengths, and the right career path.</p>
          </div>

          <div className="service-card slide-up hover-grow">
            <h3>Admission Support</h3>
            <p>End-to-end admission guidance, from application to seat confirmation.</p>
          </div>

          <div className="service-card slide-up hover-grow">
            <h3>Scholarship Assistance</h3>
            <p>Get help applying and maximizing available scholarship opportunities.</p>
          </div>

          <div className="service-card slide-up hover-grow">
            <h3>Course Information</h3>
            <p>Get clarity about courses, fees, scope, and placement opportunities.</p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="how-section fade-in">
        <h2 className="slide-up">How We Work</h2>

        <div className="how-container">
          <div className="how-step slide-up hover-grow">
            <span className="step-number">1</span>
            <h3>Connect With Us</h3>
            <p>Share your goals or confusion — we listen and understand your needs.</p>
          </div>

          <div className="how-step slide-up hover-grow">
            <span className="step-number">2</span>
            <h3>Get Personalized Guidance</h3>
            <p>Our experts suggest the best career and college options for you.</p>
          </div>

          <div className="how-step slide-up hover-grow">
            <span className="step-number">3</span>
            <h3>Begin Your Journey</h3>
            <p>We guide you throughout the admission process until you're settled.</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section slide-up">
        <h2>Ready to Choose the Right Future?</h2>
        <p>
          We guide you with clarity, confidence, and expert support. Let’s get started.
        </p>
        <button className="cta-button hover-grow"  onClick={() => window.location.href = "/apply"} >Get Admission Guidance</button>
      </section>
    </>
  );
}

export default Home;

