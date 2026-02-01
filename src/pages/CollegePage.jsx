import "./colleges.css";

function CollegePage() {

  /* ---------------- ENGINEERING COLLEGES ---------------- */
  const engineering = [
    {
      name: "Karpagam College of Engineering",
      desc: "Leading private engineering college in Coimbatore with excellent placement support.",
      img: "Karpagam.webp"
    },
    {
      name: "SNS College of Technology",
      desc: "Autonomous Coimbatore college known for innovation & research.",
      img: "Sns.jpg"
    },
    {
      name: "Sri Ramakrishna Engineering College",
      desc: "Reputed private engineering institution with strong placement record.",
      img: "srec.webp"
    },
    {
      name: "Hindustan Institute of Technology and Science",
      desc: "NAAC A-grade deemed university with strong academics & labs.",
      img: "hits.jpg"
    },
    {
      name: "KSR Institute of Engineering & Technology",
      desc: "Known for quality tech education and industry-oriented training.",
      img: "ksr.webp"
    },
    {
      name: "Sengunthar Engineering College",
      desc: "Strong technical clubs, practical training, and academic support.",
      img: "sengunthar.jpg"
    },
    {
      name: "Nandha Engineering College",
      desc: "Autonomous Erode-based institution with practical learning focus.",
      img: "nandha.jpeg"
    },
    {
      name: "Paavai Engineering College",
      desc: "Offers broad engineering streams & strong campus atmosphere.",
      img: "paavai.jpg"
    },
    {
      name: "Muthayammal Engineering College",
      desc: "Known for modern labs, placement training, and student support.",
      img: "muthayammal.png"
    },
    {
      name: "Sona College of Technology",
      desc: "NAAC A++ institution with national-level placements & research output.",
      img: "sona.jpg"
    }
  ];


  /* ---------------- PHARMACY COLLEGES ---------------- */
  const pharmacy = [
    {
      name: "JKKN College of Pharmacy",
      desc: "Offers B.Pharm, M.Pharm, Pharm.D, and D.Pharm with strong research and labs.",
      img: "jkkn.jpg"
    },
    {
      name: "Annai JKKM College of Pharmacy",
      desc: "Known for skill-based learning, industry interaction, and practical exposure.",
      img: "jkkm.webp"
    },
    {
      name: "Paavai College of Pharmacy & Research",
      desc: "Provides B.Pharm training with well-equipped labs and student support.",
      img: "paavai_pharm.jpg"
    },
    {
      name: "Swamy Vivekanandha College of Pharmacy",
      desc: "Top women’s pharmacy college offering B.Pharm, M.Pharm, Pharm.D.",
      img: "vivekanandha.avif"
    },
    {
      name: "Sengundhar College of Pharmacy",
      desc: "Known for strong academics, training, and friendly campus environment.",
      img: "sengunthar_main.jpeg"
    },
    {
      name: "Nandha College of Pharmacy",
      desc: "Popular Erode pharmacy institution with strong facilities & placements.",
      img: "nandha_pharm.jpg"
    },
    {
      name: "Cheran College of Pharmacy",
      desc: "Provides B.Pharm, D.Pharm, PG programs with digital labs and research focus.",
      img: "cheran.webp"
    },
    {
      name: "Sri Ramakrishna Institute of Paramedical Sciences",
      desc: "Top-level B.Pharm, M.Pharm, Pharm.D with excellent hospital training.",
      img: "snr.jpg"
    },
    {
      name: "Sri Shanmugha College of Pharmacy",
      desc: "Offers D.Pharm, B.Pharm, Pharm.D with strong academic & lab training.",
      img: "shanmugha.jpeg"
    }
  ];


  /* ---------------- RENDER SLIDER COMPONENT ---------------- */
  const renderSection = (title, list) => (
    <div className="course-section">
      <h2 className="course-title slide-up">{title}</h2>

      <div className="slider">
        <div className="slide-track">

          {list.map((item, i) => (
            <div className="college-card hover-grow" key={i}>
              <img src={`/college-images/${item.img}`} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}

          {list.map((item, i) => (
            <div className="college-card hover-grow" key={i + "dup"}>
              <img src={`/college-images/${item.img}`} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );


  return (
    <div className="college-page">

      <h1 className="main-title slide-up">
        Top Colleges We Are Partnered With Across Tamil Nadu
      </h1>

      {renderSection("Top Engineering Colleges", engineering)}
      {renderSection("Top Pharmacy Colleges", pharmacy)}

      {/* ================================
          ACCORDION SECTION
      ================================= */}
      <div className="institution-section">
        <h2 className="course-title">Group of Institutions We Provide Guidance For</h2>

        <div className="accordion">

          <details>
            <summary>Namakkal & Salem Region Institutions</summary>
            <ul>
              <li>Mahendra Group of Institutions</li>
              <li>Pavaai Group of Institutions</li>
              <li>Muthayammal Group of Institutions</li>
              <li>Sengunthar Group of Institutions</li>
              <li>Selvam Group of Institutions</li>
              <li>Sri Shanmuga Group of Institutions</li>
              <li>Gnanamani Group of Institutions</li>
              <li>JKKM Group of Institutions</li>
              <li>JKKN Group of Institutions</li>
              <li>Excel Group of Institutions</li>
              <li>SSM Group of Institutions</li>
              <li>AVS Group of Institutions</li>
              <li>The Kavery Group of Institutions</li>
              <li>Nandha Group of Institutions</li>
              <li>AMS Group of Institutions</li>
              <li>Tagore Engineering College</li>
              <li>Kasthooribha Gandhi College of Pharmacy</li>
            </ul>
          </details>

          <details>
            <summary>Nursing Colleges</summary>
            <ul>
              <li>Deepthi College of Nursing</li>
              <li>Aravinth College of Nursing</li>
              <li>Dhanvanthri College of Nursing</li>
              <li>Anbu College of Nursing</li>
            </ul>
          </details>

          <details>
            <summary>Coimbatore, Tiruppur & Gobi Region Institutions</summary>
            <ul>
              <li>Adithya Group of Institutions</li>
              <li>RVS Group of Institutions</li>
              <li>Hindustan Group of Institutions</li>
              <li>Nehru Group of Institutions</li>
              <li>Karpagam Group of Institutions</li>
              <li>Asian College of Engineering</li>
              <li>Akshaya College of Engineering</li>
              <li>Info Institute of Engineering</li>
              <li>Kathir College of Engineering</li>
              <li>KGISL Institute of Technology</li>
              <li>Dhanalakshmi Group of Institutions</li>
              <li>Sri Sakthi Engineering College</li>
              <li>Christ The King Engineering College</li>
              <li>Study World College of Engineering</li>
              <li>Rathinam Institute of Technology</li>
              <li>Coimbatore Institute of Engineering & Technology</li>
              <li>Sasurie College of Engineering</li>
              <li>Ranganathan Engineering College</li>
              <li>JCT College of Engineering and Technology</li>
              <li>Easa College of Engineering</li>
              <li>Arun College of Technology</li>
              <li>Surya College of Engineering</li>
              <li>Shree Venkateshwara Group of Institutions</li>
              <li>Builders Engineering College</li>
            </ul>
          </details>

        </div>
      </div>

    </div>
  );
}

export default CollegePage;
