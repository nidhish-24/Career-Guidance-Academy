import { useState } from "react";
import "./apply.css";
import { supabase } from "../supabaseClient";
import emailjs from "emailjs-com";

function ApplyPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    parentName: "",
    parentPhone: "",
    community: "",
    courseType: "",
    marks: "",
    cutoff: "",
    city: "",
    colleges: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
    parentPhone: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // FULL SUCCESS PAGE

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // -------------------- 1️⃣ SUPABASE INSERT --------------------
      const { error: dbError } = await supabase.from("submissions").insert([
        {
          name: form.name,
          phone: form.phone,
          parent_name: form.parentName,
          parent_phone: form.parentPhone,
          community: form.community,
          course_type: form.courseType,
          marks: form.marks,
          cutoff: form.cutoff,
          city: form.city,
          colleges: form.colleges,
        },
      ]);

      if (dbError) {
        alert("Error saving to database. Please try again.");
        setLoading(false);
        return;
      }

      // -------------------- 2️⃣ EMAILJS SEND --------------------
      const emailResponse = await emailjs.send(
        "service_f7qvlab",
        "template_tpx6gsv",
        {
          ...form,
          date: new Date().toLocaleString(),
        },
        "cMYjJSz9TnetalvcL"
      );

      if (emailResponse.status !== 200) {
        alert("Email sending failed. Try again.");
        setLoading(false);
        return;
      }

      // -------------------- 3️⃣ SHOW SUCCESS SCREEN --------------------
      setSubmitted(true);
      setLoading(false);

    } catch (error) {
      alert("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  // -------------------- SUCCESS SCREEN UI --------------------
  if (submitted) {
    return (
      <div className="apply-page">
        <div className="apply-card slide-up">
          <div className="success-screen">
            <div className="success-icon">✔</div>
            <h2>Application Submitted Successfully!</h2>
            <p>Thank you for applying. Our team will contact you soon.</p>

            <button
              className="submit-btn"
              onClick={() => setSubmitted(false)}
              style={{ marginTop: "20px" }}
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------- MAIN FORM --------------------
  return (
    <div className="apply-page">
      <div className="apply-card slide-up">

        <h1 className="apply-title">Apply for Admission</h1>
        <p className="apply-subtitle">
          Fill in your details — we’ll guide you to the right future.
        </p>

        <form className="apply-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* PHONE */}
          <div className="form-group">
            <label>Phone Number</label>
            <div className={`phone-wrapper ${errors.phone ? "error-border" : ""}`}>
              <span className="country-code">+91</span>
              <input
                type="text"
                name="phone"
                value={form.phone}
                placeholder="10-digit number"
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 10) {
                    setForm({ ...form, phone: value });
                    setErrors({
                      ...errors,
                      phone: value.length === 10 ? "" : "Phone number must be 10 digits",
                    });
                  }
                }}
                required
              />
            </div>
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          {/* PARENT NAME */}
          <div className="form-group">
            <label>Parent Name</label>
            <input
              type="text"
              name="parentName"
              value={form.parentName}
              onChange={handleChange}
              required
            />
          </div>

          {/* PARENT PHONE */}
          <div className="form-group">
            <label>Parent Phone Number</label>
            <div className={`phone-wrapper ${errors.parentPhone ? "error-border" : ""}`}>
              <span className="country-code">+91</span>
              <input
                type="text"
                name="parentPhone"
                value={form.parentPhone}
                placeholder="10-digit number"
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 10) {
                    setForm({ ...form, parentPhone: value });
                    setErrors({
                      ...errors,
                      parentPhone:
                        value.length === 10 ? "" : "Parent phone number must be 10 digits",
                    });
                  }
                }}
                required
              />
            </div>
            {errors.parentPhone && <p className="error-text">{errors.parentPhone}</p>}
          </div>

          {/* COMMUNITY */}
          <div className="form-group">
            <label>Community</label>
            <select
              name="community"
              value={form.community}
              onChange={handleChange}
              required
            >
              <option value="">Select Community</option>
              <option value="BC">BC</option>
              <option value="MBC">MBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="OC">OC</option>
            </select>
          </div>

          {/* COURSE */}
          <div className="form-group">
            <label>Select Course Type</label>
            <select
              name="courseType"
              value={form.courseType}
              onChange={handleChange}
              required
            >
              <option value="">Choose</option>
              <option value="Engineering">Engineering</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="Nursing">Nursing</option>
            </select>
          </div>

          {/* MARKS */}
          <div className="form-group">
            <label>+2 Marks (optional)</label>
            <input
              type="number"
              name="marks"
              value={form.marks}
              onChange={handleChange}
            />
          </div>

          {/* CUTOFF */}
          <div className="form-group">
            <label>Cutoff (optional)</label>
            <input
              type="number"
              name="cutoff"
              value={form.cutoff}
              onChange={handleChange}
            />
          </div>

          {/* CITY */}
          <div className="form-group">
            <label>City (eg: erode, coimbatore)</label>
            <input
              type="text"
              name="city"
              value={form.city}
              placeholder="eg: erode, coimbatore"
              onChange={handleChange}
              required
            />
          </div>

          {/* COLLEGES */}
          <div className="form-group">
            <label>Colleges You Are Interested In (optional)</label>
            <textarea
              name="colleges"
              value={form.colleges}
              onChange={handleChange}
              placeholder="Enter college names..."
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="submit-btn"
            disabled={errors.phone || errors.parentPhone || loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default ApplyPage;
