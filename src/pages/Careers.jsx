import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import {
  Mail,
  User,
  Phone,
  MessageCircle,
  Send,
  AlertCircle,
  X, // Import the X icon for close button
  ChevronLeft, // Icon for previous step
  ChevronRight, // Icon for next step
} from "lucide-react";

const Careers = () => {
  const { t } = useTranslation();
  const [formStep, setFormStep] = useState(1); // State for current form step

  const dynamicContent = [
  {
    heading: "Building a Meaningful Career in Healthcare",
    description: `Pursuing a career in the medical field offers the chance to make a real difference in people's lives. From nursing and lab technology to hospital administration and patient care, the healthcare industry provides a wide range of impactful roles. With a growing demand for skilled professionals, individuals who are compassionate, committed, and qualified will always find opportunities to thrive in this essential field.`,
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913", // Healthcare-related image
  },
  {
    heading: "Technology Transforming Modern Healthcare",
    description: `Advancements in medical technology are revolutionizing patient care and healthcare operations. From electronic health records (EHRs) to telemedicine and AI-powered diagnostics, technology is enhancing accuracy, speed, and access to care. At Manmed Health Pvt. Ltd., we embrace innovation to improve outcomes and empower our healthcare teams to deliver better, faster, and more personalized services.`,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Medical tech image
  },
  {
    heading: "Future-Ready Skills for Healthcare Professionals",
    description: `The future of healthcare depends on professionals equipped with both medical expertise and a strong grasp of modern tools and systems. Skills in patient communication, electronic records management, clinical data handling, and diagnostic technologies are becoming increasingly important. At Manmed Health Pvt. Ltd., we believe in nurturing talent through continuous learning, professional development, and hands-on experience.`,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d", // Image of healthcare professionals or labs
  },
];


  // const dynamicContent = [
  //   {
  //     heading: "Navigating the World of Software Careers",
  //     description: `Navigating a career in software opens up numerous opportunities across diverse roles. This global field presents crucial roles such as software developers, data scientists, and cybersecurity specialists. The skills necessary for success keep up with trends, like cloud computing and artificial intelligence. Continuous learning and relevant certifications can further enhance career prospects.`,
  //     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Example image URL
  //   },
  //   {
  //     heading: "The Impact of Software on Modern Careers",
  //     description: `Software is significantly transforming modern careers by redefining job functions and creating new opportunities across industries. Advanced software technologies, such as cloud computing, artificial intelligence, and data analytics, are increasing demand for specialized skills. As technology continues to evolve, professionals must adapt to these changes, embracing new career trajectories and setting new industry standards. Staying informed about technological advancements and acquiring relevant skills are crucial for navigating this dynamic landscape.`,
  //     image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913", // Example image URL
  //   },
  //   {
  //     heading: "Key Trends Shaping Careers in Software",
  //     description: `Key trends shaping careers in software include embracing new roles and adapting to technological advancements. The rise of cloud computing, enabling remote work and scalable solutions, while artificial intelligence is driving innovation. Data analytics and automation are increasing demand, leading to specialized professionals in cybersecurity and data science. Maintaining a solid understanding of these trends, along with relevant certifications, and continuously learning emerging technologies such as blockchain, is essential for career growth in the software industry.`,
  //     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Example image URL
  //   },
  // ];

  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Effect hook for changing dynamic content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex(
        (prevIndex) => (prevIndex + 1) % dynamicContent.length
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [dynamicContent.length]);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    role: "", // This will be pre-filled
    qualification: "",
    experience: "",
  });

  const [errors, setErrors] = useState({});

  // Input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.id]: "", // Clear error when user types
    });
  };

  // Step-wise validation
  const validateStep = () => {
    const newErrors = {};
    if (formStep === 1) {
      if (!formData.name.trim()) newErrors.name = t("nameRequired") || "Name is required.";
      if (!formData.email.trim()) newErrors.email = t("emailRequired") || "Email is required.";
      if (!formData.phone.trim()) newErrors.phone = t("phoneRequired") || "Phone is required.";
    }
    if (formStep === 2) {
      if (!formData.role.trim()) newErrors.role = "Role is required.";
      if (!formData.qualification.trim()) newErrors.qualification = "Qualification is required.";
      if (!formData.experience.trim()) newErrors.experience = "Experience is required.";
    }
    if (formStep === 3) {
      if (!formData.message.trim()) newErrors.message = t("messageRequired") || "Message is required.";
    }
    return newErrors;
  };

  // Handle next step
  const handleNext = (e) => {
    e.preventDefault();
    const stepErrors = validateStep();
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
    } else {
      setErrors({});
      setFormStep(formStep + 1);
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    setFormStep(formStep - 1);
    setErrors({}); // Clear errors when going back a step
  };

  // Handle final submit
  const handleStepSubmit = (e) => {
    e.preventDefault();
    const stepErrors = validateStep();
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Submitted!",
      text: t("formSubmitted") || "Form submitted successfully!",
      confirmButtonColor: "#2563eb",
    }).then(() => {
      setIsModalOpen(false);
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Thank you for contacting us!",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      role: "",
      qualification: "",
      experience: "",
    });
    setFormStep(1); // Reset form step to 1
  
  };

  const jobs = [
  {
    role: "Frontend Developer",
    skills: ["React", "Tailwind", "JavaScript"],
    location: "Mumbai",
    qualification: "B.Tech / B.Sc in CS",
    experience: "1-3 years",
  },
  {
    role: "Backend Developer",
    skills: ["Node.js", "MongoDB", "Express"],
    location: "Bangalore",
    qualification: "B.Tech / MCA",
    experience: "2-5 years",
  },
  {
    role: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "Design Systems"],
    location: "Remote",
    qualification: "Any Graduate",
    experience: "1+ years",
  },
  {
    role: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "Design Systems"],
    location: "Remote",
    qualification: "Any Graduate",
    experience: "1+ years",
  },
  {
    role: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "Design Systems"],
    location: "Remote",
    qualification: "Any Graduate",
    experience: "1+ years",
  },
  {
    role: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "Design Systems"],
    location: "Remote",
    qualification: "Any Graduate",
    experience: "1+ years",
  },
];



  // const jobs = [
  //   {
  //     role: "Assistant Doctor",
  //     skills: ["Heart Surjery", "Physican", "Medical Knowledge", "Patient Care", "Communication Skills"],
  //     location: "Delhi, India",
  //   },
  //   {
  //     role: "Pharmacist",
  //     skills: ["Medical Knowledge", "Patient Care", "Communication Skills", "ReacPatient Care"],
  //     location: "Delhi, India",
  //   },
  //   {
  //     role: "Ward Boy",
  //     skills: ["Paitent Care", "Hygiene & Sanitation", "Physical Strength & Stamina", "Discipline & Reliability"],
  //     location: "Delhi, India",
  //   },
  //   {
  //     role: "Nurse",
  //     skills: ["Clinical Skills", "Patient Care", "Technical & Monitoring", "Critical Thinking & Judgment", "Compassion & Patience"],
  //     location: "Delhi, India",
  //   },
  // ];

  // Function to open the modal and pre-fill the role
  const openApplyModal = (roleName) => {
    setFormData({ ...formData, role: roleName }); // Set the role in form data
    setIsModalOpen(true); // Open the modal
    setFormStep(1); // Reset form step to 1 when opening the modal
  };

  // Function to dismiss the modal
  const dismissModal = () => {
    setIsModalOpen(false); // Close the modal
    setErrors({}); // Clear any errors when closing the modal
    setFormStep(1); // Reset form step to 1 when dismissing the modal
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Dynamic Content Sections */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url(${dynamicContent[currentContentIndex].image})`,
        }}
      >
        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0 transition-opacity"></div>

        <div className="relative max-w-6xl mx-auto px-6 z-8 text-white">
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              {dynamicContent[currentContentIndex].heading}
            </h1>
            <p className="text-lg leading-relaxed mb-8">
              {dynamicContent[currentContentIndex].description}
            </p>
          </div>
        </div>
      </section>

    {/* Job Listings Cards - Centered with Margins */}

{/* Job Listings Cards - Centered, Detailed & Responsive */}
<div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
    {jobs.map((job, index) => (
      <div
        key={index}
        className="group flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-500 transition-all duration-300"
      >
        {/* Role */}
        <div className="mb-4">
          <h3 className="text-sm text-gray-500 font-medium mb-1">ROLE</h3>
          <p className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {job.role}
          </p>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <h3 className="text-sm text-gray-500 font-medium mb-1">SKILLS</h3>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, sIndex) => (
              <span
                key={sIndex}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 hover:bg-blue-100 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Qualification */}
        <div className="mb-4">
          <h3 className="text-sm text-gray-500 font-medium mb-1">QUALIFICATION</h3>
          <p className="text-base text-gray-800">{job.qualification}</p>
        </div>

        {/* Experience */}
        <div className="mb-4">
          <h3 className="text-sm text-gray-500 font-medium mb-1">EXPERIENCE</h3>
          <p className="text-base text-gray-800">{job.experience}</p>
        </div>

        {/* Location & Apply */}
        <div className="mt-auto">
          <h3 className="text-sm text-gray-500 font-medium mb-1">LOCATION</h3>
          <p className="text-lg text-gray-800 font-medium mb-4">
            {job.location}
          </p>
          <button
            onClick={() => openApplyModal(job.role)}
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg w-full hover:bg-blue-700 active:scale-95 transition transform duration-200"
          >
            Apply Now
          </button>
        </div>
      </div>
    ))}
  </div>
</div>



      {/* Modal for Join Us Form */}
      {isModalOpen && (
        // Overlay for the modal, covers the entire screen
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={dismissModal} // Allows clicking outside the modal to dismiss it
        >
          {/* Modal content area */}
          <div
            className="relative bg-white p-10 rounded-3xl shadow-2xl max-w-3xl w-full mx-auto my-8 border border-blue-100 transform transition-all duration-300 scale-100 opacity-100"
            // Prevent clicks inside the modal from closing it
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button for the modal */}
            <button
              onClick={dismissModal} // Call dismissModal to close
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" /> {/* X icon for close */}
            </button>

            {/* Modal Heading */}
            <h2 className="text-4xl font-bold mb-10 text-center text-blue-700 flex items-center justify-center gap-2">
              <Send className="w-8 h-8 text-blue-500" />
              {t("getInTouch") || "Join Us"}
            </h2>

            {/* Progress Indicator */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex-1 text-center">
                <span className={`inline-block w-8 h-8 rounded-full flex items-center justify-center font-bold ${formStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>1</span>
                <p className="text-sm mt-2 text-gray-600">Personal Info</p>
              </div>
              <div className={`flex-1 h-1 ${formStep > 1 ? 'bg-blue-600' : 'bg-gray-300'} transition-all duration-300`}></div>
              <div className="flex-1 text-center">
                <span className={`inline-block w-8 h-8 rounded-full flex items-center justify-center font-bold ${formStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>2</span>
                <p className="text-sm mt-2 text-gray-600">Role & Experience</p>
              </div>
              <div className={`flex-1 h-1 ${formStep > 2 ? 'bg-blue-600' : 'bg-gray-300'} transition-all duration-300`}></div>
              <div className="flex-1 text-center">
                <span className={`inline-block w-8 h-8 rounded-full flex items-center justify-center font-bold ${formStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>3</span>
                <p className="text-sm mt-2 text-gray-600">Message</p>
              </div>
            </div>

            {/* Form for job application */}
            <form className="space-y-8" onSubmit={formStep === 3 ? handleStepSubmit : handleNext}>
              {/* Step 1: Name, Email, Phone */}
              {formStep === 1 && (
                <>
                  {/* Name Input Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="name">
                      {t("name") || "Name"}
                    </label>
                    <div className="flex items-center border rounded-lg overflow-hidden border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
                      <div className="px-3 bg-blue-50 text-blue-600">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 outline-none"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-600 mt-1 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="email">
                      {t("email") || "Email"}
                    </label>
                    <div className="flex items-center border rounded-lg overflow-hidden border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
                      <div className="px-3 bg-blue-50 text-blue-600">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 outline-none"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-600 mt-1 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Input Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="phone">
                      {t("phone") || "Phone"}
                    </label>
                    <div className="flex items-center border rounded-lg overflow-hidden border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
                      <div className="px-3 bg-blue-50 text-blue-600">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 outline-none"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-600 mt-1 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Step 2: Role, Qualification, Experience */}
              {formStep === 2 && (
                <>
                  {/* Role Applying For Input Field (pre-filled) */}
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="role">
                      Role Applying For
                    </label>
                    <input
                      type="text"
                      id="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Enter desired role"
                      className="w-full px-4 py-3 border rounded-lg outline-none border-gray-300 focus:ring-2 focus:ring-blue-500"
                      readOnly // Make it read-only as it's pre-filled
                    />
                    {errors.role && (
                      <p className="text-red-600 mt-1 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {errors.role}
                      </p>
                    )}
                  </div>

                  {/* Qualification Input Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="qualification">
                      Qualification
                    </label>
                    <input
                      type="text"
                      id="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      placeholder="Enter your qualification"
                      className="w-full px-4 py-3 border rounded-lg outline-none border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.qualification && (
                      <p className="text-red-600 mt-1 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {errors.qualification}
                      </p>
                    )}
                  </div>

                  {/* Experience Input Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="experience">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      id="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="e.g. 2 years"
                      className="w-full px-4 py-3 border rounded-lg outline-none border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.experience && (
                      <p className="text-red-600 mt-1 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {errors.experience}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Step 3: Message */}
              {formStep === 3 && (
                <>
                  {/* Message Textarea */}
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="message">
                      Message
                    </label>
                    <div className="flex items-start border rounded-lg overflow-hidden border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
                      <div className="px-3 pt-3 bg-blue-50 text-blue-600">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <textarea
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message"
                        className="w-full px-4 py-3 outline-none resize-none"
                      ></textarea>
                    </div>
                    {errors.message && (
                      <p className="text-red-600 mt-1 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {errors.message}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {formStep > 1 && (
                  <button
                    type="button" // Important to set type="button" to prevent form submission
                    onClick={handlePrevious}
                    className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-300 shadow-md hover:shadow-xl transition-all duration-200"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>
                )}

                {formStep < 3 && (
                  <button
                    type="submit" // This will trigger handleNext because formStep < 3
                    className={`inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 shadow-md hover:shadow-xl transition-all duration-200 ${formStep === 1 ? 'ml-auto' : ''}`}
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}

                {formStep === 3 && (
                  <button
                    type="submit" // This will trigger handleStepSubmit because formStep === 3
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 shadow-md hover:shadow-xl transition-all duration-200 ml-auto"
                  >
                    <Send className="w-5 h-5" />
                    {t("submit") || "Submit"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Manmed Health Pvt LTD</h2>
              <p className="text-sm leading-relaxed text-gray-400">
                Revolutionizing healthcare with innovation, compassion, and integrity.
                Trusted care, delivered with precision.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition">Services</a></li>
                <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span>📍</span> <span>123 Health Street, Wellness City, India</span></li>
                <li className="flex items-start gap-2"><span>📞</span> <span>+91 98765 43210</span></li>
                <li className="flex items-start gap-2"><span>✉️</span> <span>support@manmedhealth.com</span></li>
              </ul>
            </div>
            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4 text-2xl">
                {/* Social media icons (using emojis for simplicity, replace with actual Lucide icons or SVGs if available) */}
                <a href="#" className="hover:text-white transition">🌐</a> {/* Globe for website/general */}
                <a href="#" className="hover:text-white transition">📘</a> {/* Book for Facebook */}
                <a href="#" className="hover:text-white transition">📸</a> {/* Camera for Instagram */}
                <a href="#" className="hover:text-white transition">💼</a> {/* Briefcase for LinkedIn */}
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Manmed Health Pvt LTD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Careers;