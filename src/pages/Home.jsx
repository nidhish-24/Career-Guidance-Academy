import { useNavigate } from "react-router-dom";
import heroImage from "../assets/homeimg.png";
import "./home.css";

function Home() {
  const navigate = useNavigate();

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
            onClick={() => navigate("/apply")}
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
          {["Engineering", "Pharmacy", "Nursing", "Medical", "PG Courses"].map((course, idx) => (
            <div key={idx} className="course-card slide-up hover-grow">
              {course}
            </div>
          ))}
        </div>
      </section>

      {/* ADMISSION ENQUIRY SHORTCUT */}
      <section className="admission-shortcut slide-up">
        <h2>Looking for Admissions?</h2>
        <p>Get personalized guidance and start your admission process with us.</p>

        <button
          className="admission-btn hover-grow"
          onClick={() => navigate("/apply")}
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
          {[
            {
              title: "Expert Counselors",
              text: "Our experienced team helps you understand your strengths and choose the best path.",
            },
            {
              title: "Personalized Career Mapping",
              text: "We analyze your goals and academic background to guide you towards the right future.",
            },
            {
              title: "100% Transparent Process",
              text: "No hidden charges. Clear and honest admission guidance for every student.",
            },
            {
              title: "Updated College Insights",
              text: "We stay updated with latest cutoffs, placements, and admission trends.",
            },
          ].map((item, idx) => (
            <div key={idx} className="why-card slide-up hover-grow">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="services-overview fade-in">
        <h2 className="slide-up">Our Services</h2>

        <div className="services-container">
          {[
            ["College Selection Guidance", "Shortlist the best colleges based on your academic profile."],
            ["Career Counseling", "Discover your interests, strengths, and the right career path."],
            ["Admission Support", "End-to-end admission guidance, from application to seat confirmation."],
            ["Scholarship Assistance", "Get help applying and maximizing available scholarships."],
            ["Course Information", "Get clarity about courses, fees, scope, and placements."],
          ].map(([title, text], idx) => (
            <div key={idx} className="service-card slide-up hover-grow">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="how-section fade-in">
        <h2 className="slide-up">How We Work</h2>

        <div className="how-container">
          {[
            ["1", "Connect With Us", "Share your goals — we listen and understand your needs."],
            ["2", "Get Personalized Guidance", "Our experts suggest the best career and college options."],
            ["3", "Begin Your Journey", "We guide you through the admission process until you're settled."],
          ].map(([num, title, text], idx) => (
            <div key={idx} className="how-step slide-up hover-grow">
              <span className="step-number">{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section slide-up">
        <h2>Ready to Choose the Right Future?</h2>
        <p>We guide you with clarity, confidence, and expert support. Let’s get started.</p>

        <button
          className="cta-button hover-grow"
          onClick={() => navigate("/apply")}
        >
          Get Admission Guidance
        </button>
      </section>
    </>
  );
}

export default Home;
