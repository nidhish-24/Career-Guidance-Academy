import "./services.css";

function Services() {
  const services = [
    {
      title: "Career Guidance & Counselling",
      desc: "We identify strengths, interests, and goals to help students choose the right career path.",
      img: "service1.png"
    },
    {
      title: "Course & College Selection",
      desc: "Complete support in choosing the right course and institution based on profile and budget.",
      img: "service2.png"
    },
    {
      title: "Application & Admission Support",
      desc: "End-to-end guidance for form filling, document verification, submission and admission tracking.",
      img: "service3.png"
    },
    {
      title: "Entrance Exam Guidance",
      desc: "Expert guidance for exams like JEE, NEET, CUET, GATE, CLAT, CAT and state-level exams.",
      img: "service4.png"
    },
    {
      title: "SOP, LOR & Resume Assistance",
      desc: "Professional writing support for SOPs, LORs, resumes, and academic profiles.",
      img: "service5.png"
    },
    {
      title: "Scholarship & Financial Aid Assistance",
      desc: "Help with merit scholarships, government schemes, fee waivers & loan guidance.",
      img: "service6.png"
    },
    {
      title: "Admission Support Across Streams",
      desc: "Engineering, Medical, Arts & Science, Management, Law, IT, Design, Paramedical & more.",
      img: "service7.png"
    },
    {
      title: "Counselling & Seat Allotment Process",
      desc: "Support during counselling rounds, choice filling, allotment, document upload & reporting.",
      img: "service8.png"
    },
    {
      title: "Study Abroad Consulting",
      desc: "Complete support for USA, UK, Canada, Australia, Germany, UAE & Europe admission process.",
      img: "service9.png"
    },
    {
      title: "Education Loan Assistance",
      desc: "Help with secured/unsecured loans through banks & NBFCs with faster approvals.",
      img: "service12.png"
    }
  ];

  return (
    <div className="services-page">
      <h1 className="services-title slide-up">Our Services</h1>

      <div className="services-grid">
        {services.map((srv, idx) => (
          <div className="service-card slide-up hover-grow" key={idx}>
            <img src={`/service-images/${srv.img}`} alt={srv.title} />

            <h2>{srv.title}</h2>
            <p>{srv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
