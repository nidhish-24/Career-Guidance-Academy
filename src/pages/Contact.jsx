import "./contact.css";

// Import local icon images
import phoneIcon from "../assets/icons/phone.png";
import emailIcon from "../assets/icons/gmail.png";
import instaIcon from "../assets/icons/instagram.svg";
import whatsappIcon from "../assets/icons/whatsapp.png";

function ContactPage() {
  return (
    <div className="contact-page">

      <h1 className="contact-title slide-up">Get in Touch With Us</h1>
      <p className="contact-subtitle slide-up">
        We are here to guide you toward the right future. Reach us anytime!
      </p>

      <div className="contact-container">

        {/* PHONE */}
        <a href="tel:+918248466676" className="contact-card hover-grow slide-left card-link">
          <img src={phoneIcon} className="contact-icon-img" alt="phone" />
          <h3>Phone</h3>
          <p className="contact-link">+91 82484 66676</p>
          <p className="contact-link">+91 99651 39339</p>
        </a>

        {/* EMAIL */}
        <a href="mailto:collegeguidanceacademy@gmail.com" className="contact-card hover-grow slide-up card-link">
          <img src={emailIcon} className="contact-icon-img" alt="email" />
          <h3>Email</h3>
          <p className="contact-link">collegeguidanceacademy@gmail.com</p>
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/college_guidance_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noreferrer"
          className="contact-card hover-grow slide-up card-link"
        >
          <img src={instaIcon} className="contact-icon-img" alt="instagram" />
          <h3>Instagram</h3>
          <p className="contact-link">college_guidance_academy</p>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/918248466676"
          target="_blank"
          rel="noreferrer"
          className="contact-card hover-grow slide-right card-link"
        >
          <img src={whatsappIcon} className="contact-icon-img" alt="whatsapp" />
          <h3>WhatsApp</h3>
          <p className="contact-link">Chat on WhatsApp</p>
        </a>

      </div>

      {/* ADDRESS SECTION */}
      <div className="address-section slide-up">
        <h2>Our Office</h2>
        <p>Salem – Namakkal – Erode</p>
      </div>

    </div>
  );
}

export default ContactPage;
