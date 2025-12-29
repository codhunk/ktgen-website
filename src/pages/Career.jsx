
import careerVideo from "/images/career_video.mp4";
import { FaSearch, FaUser, FaMapMarker, FaMoneyBillWave, FaHeart, FaStar, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import RippleEffect from "./ripple";
import MousePointerEffect from "./mousepointereffect";

const CareerPage = () => {
    const [showMore, setShowMore] = useState(false);
    const recentJobsRef = useRef(null);
    const shortText = `KT Gen Pharmaceuticals Pvt. Ltd. is a trusted name in the pharmaceutical industry, dedicated to the branding, marketing, and nationwide distribution of high-quality medicinal products. With a strong commitment to innovation, compliance, and customer well-being, we specialize in creating impactful brand identities for a wide range of healthcare products—ensuring that essential medicines reach patients with both clarity and credibility.`;
    const moreText = `At KT Gen Pharmaceuticals, we bridge the gap between pharmaceutical manufacturers and healthcare providers through effective brand positioning, packaging design, and a robust supply chain network. Our goal is to not only represent the science behind the medicine but to enhance its accessibility and trustworthiness in the market. Driven by ethical business practices and a passion for healthcare, our team works relentlessly to meet evolving industry standards and build lasting partnerships with doctors, retailers, and institutions across India. As we continue to expand, KT Gen Pharmaceuticals Pvt. Ltd. remains committed to delivering wellness, one brand at a time.`;
    const experts = [
        {
            name: 'Dr. Martin Anderson',
            position: 'Clinical Trial Analyst',
            jobsDone: 41,
            rating: 5,
            description: 'Expert in designing and monitoring Phase I–III trials for regulatory compliance and data integrity.',
            image: '/images/e1.jpg'
        },
        {
            name: 'Dr. Semanta Klores',
            position: 'Pharma Brand Designer',
            jobsDone: 32,
            rating: 5,
            description: 'Specializes in branding, product labeling, and visual identity for pharmaceutical companies.',
            image: '/images/e2.jpg'
        },
        {
            name: 'Ryan Martines',
            position: 'SEO & Compliance Strategist',
            jobsDone: 27,
            rating: 5,
            description: 'Focused on digital marketing and regulatory content optimization for pharma portals.',
            image: '/images/e3.jpg'
        },
        {
            name: 'Dr. Martin Anderson',
            position: 'Clinical Trial Analyst',
            jobsDone: 41,
            rating: 5,
            description: 'Expert in designing and monitoring Phase I–III trials for regulatory compliance and data integrity.',
            image: '/images/e1.jpg'
        },
        {
            name: 'Dr. Semanta Klores',
            position: 'Pharma Brand Designer',
            jobsDone: 32,
            rating: 5,
            description: 'Specializes in branding, product labeling, and visual identity for pharmaceutical companies.',
            image: '/images/e2.jpg'
        },
        {
            name: 'Ryan Martines',
            position: 'SEO & Compliance Strategist',
            jobsDone: 27,
            rating: 5,
            description: 'Focused on digital marketing and regulatory content optimization for pharma portals.',
            image: '/images/e3.jpg'
        },
        {
            name: 'Dr. Martin Anderson',
            position: 'Clinical Trial Analyst',
            jobsDone: 41,
            rating: 5,
            description: 'Expert in designing and monitoring Phase I–III trials for regulatory compliance and data integrity.',
            image: '/images/e1.jpg'
        },
        {
            name: 'Dr. Semanta Klores',
            position: 'Pharma Brand Designer',
            jobsDone: 32,
            rating: 5,
            description: 'Specializes in branding, product labeling, and visual identity for pharmaceutical companies.',
            image: '/images/e2.jpg'
        },
        {
            name: 'Ryan Martines',
            position: 'SEO & Compliance Strategist',
            jobsDone: 27,
            rating: 5,
            description: 'Focused on digital marketing and regulatory content optimization for pharma portals.',
            image: '/images/e3.jpg'
        },
    ];
    const ExpertCard = ({ name, position, jobsDone, rating, description, image }) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-4 ">
            <div className="h-48 overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-200 hover:scale-105" />
            </div>
            <div className="p-6 text-center" style={{ backgroundColor: '#0876AA' }}>
                <a href="#" className="text-xl font-bold text-[#c5c5e1] hover:underline transition-colors duration-200 hover:text-blue-700">{name}</a>
                <div className="mt-2 text-gray-300 text-sm transition-colors duration-200 hover:text-white">
                    <span>{position}</span> | <span>{jobsDone} Jobs Done</span>
                </div>
                <div className="flex justify-center mt-2 text-yellow-400">
                    {[...Array(rating)].map((_, i) => (
                        <FaStar key={i} className="transition-colors duration-200 hover:text-yellow-500" />
                    ))}
                </div>
                <p className="mt-4 text-gray-300 transition-colors duration-200 hover:text-gray-100">{description}</p>
            </div>
        </div>
    );
    const [showAll, setShowAll] = useState(false);
    const visibleExperts = showAll ? experts : experts.slice(0, 3);
    const featuredJobs = [
        {
            title: 'Pharmaceutical R&D Team Lead',
            location: 'Noida',
            salary: '₹1,00,000 – ₹1,10,000/mo',
            logo: '/images/job_logo1.png'
        },
        {
            title: 'Formulation Scientist - Website Compliance',
            location: 'Gorakhpur',
            salary: '₹16,000 – ₹28,000/project',
            logo: '/images/job_logo2.png'
        },
    ];
    const recentJobs = [
        {
            title: 'Hiring Pharma Graphic Designer (Branding + Packaging)',
            location: 'Noida',
            salary: '₹1,00,000/mo',
            logo: '/images/job_logo3.png'
        },
        {
            title: 'Looking for Pharmaceutical Labeling Expert',
            location: 'Delhi NCR',
            salary: '₹4,500 – ₹7,500/project',
            logo: '/images/job_logo4.png'
        },
        {
            title: 'Formulation Documentation Specialist (ICH/CTD)',
            location: 'Delhi',
            salary: '₹33,000 – ₹45,000/mo',
            logo: '/images/job_logo5.png'
        },
        {
            title: 'Regulatory Sr. Web Designer (FDA/Pharma)',
            location: 'Gorakhpur',
            salary: '₹29,000 – ₹37,000/mo',
            logo: '/images/job_logo4.png'
        },
    ];
    const allJobs = [...featuredJobs, ...recentJobs].map((job, index) => ({
        ...job,
        type: index % 3 === 0 ? "Freelancer" : index % 3 === 1 ? "Part Time" : "Full Time",
        description: job.description || "Explore exciting career opportunities tailored for professionals in pharma & healthcare."
    }));

    const [filters, setFilters] = useState({
        keyword: "",
        location: "All Locations",
        jobTitle: "",
        jobTypes: {
            Freelancer: false,
            "Part Time": false,
            "Full Time": false,
        },
    });

    const [filteredJobs, setFilteredJobs] = useState(allJobs);

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (filters.jobTypes.hasOwnProperty(name)) {
            setFilters((prev) => ({
                ...prev,
                jobTypes: {
                    ...prev.jobTypes,
                    [name]: checked,
                },
            }));
        } else {
            setFilters((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        const results = allJobs.filter((job) => {
            const matchesKeyword =
                filters.keyword === "" || job.title.toLowerCase().includes(filters.keyword.toLowerCase());

            const matchesLocation =
                filters.location === "All Locations" || job.location === filters.location;

            const matchesTitle = filters.jobTitle === "" || job.title === filters.jobTitle;

            const selectedTypes = Object.entries(filters.jobTypes)
                .filter(([_, value]) => value)
                .map(([key]) => key);

            const matchesType = selectedTypes.length === 0 || selectedTypes.includes(job.type);

            return matchesKeyword && matchesLocation && matchesTitle && matchesType;

        });

        setFilteredJobs(results);
        recentJobsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const JobCard = ({ title, location, salary, logo }) => (
        <div className="flex flex-col bg-gradient-to-r from-blue-400 to-blue-500 border border-white bg-white/5 backdrop-blur-sm text-black p-6 rounded-lg transition duration-300 hover:shadow-lg hover:scale-[1.01] hover:bg-[#19193796]">
            <div className="flex items-center space-x-4 w-full">
                <div className="w-10 h-10 flex-shrink-0">
                    <img src={logo} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                    <h5 className="text-xl font-semibold transition-colors duration-200 hover:text-slate-100">{title}</h5>
                    <div className="flex flex-wrap sm:flex-row sm:space-x-4 mt-2 text-black text-sm">
                        <div className="flex items-center space-x-1">
                            <FaMapMarker />
                            <span>{location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaMoneyBillWave />
                            <span>{salary}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex space-x-2 mt-4 w-full justify-end">
                <button className="p-3 text-red-500 rounded-full hover:bg-gray-200 transition-colors duration-200 hover:text-red-600">
                    <FaHeart />
                </button>
                <a
                    href="#"
                   
                    className="text-white bg-green-500 py-2 px-4 rounded-full transition-colors duration-200 hover:bg-red-400"
                >
                    Apply Now
                </a>
            </div>
        </div>
    );
    return (
        <div className="font-sans text-gray-800">
            <div className="relative bg-[#020306e3] min-h-screen pb-24">
                <MousePointerEffect />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-[-0.5]"
                    src="/images/career_video.mp4"  // ✅ direct public path
                />


                <div className="absolute inset-0 bg-[#0f1133cc] opacity-80"></div>

                <section className="relative pt-40 text-white overflow-hidden z-10">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <h1 className="text-5xl font-bold leading-tight mb-4 transition-colors duration-200 hover:text-blue-200">
                            Build Your <br /> POWERFUL CAREER
                        </h1>
                        <p className="text-lg transition-colors duration-200 hover:text-blue-200">
                            Explore roles and filter jobs tailored to your profile.
                        </p>
                    </div>

                    <div className="mt-14 container mx-auto px-12">
                        <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-lg text-gray-800 backdrop-blur-md">
                            <form onSubmit={handleFilterSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
                                <input
                                    type="text"
                                    name="keyword"
                                    placeholder="Keywords"
                                    onChange={handleFilterChange}
                                    className="form-input border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-md"
                                />
                                <select
                                    name="location"
                                    onChange={handleFilterChange}
                                    className="form-select border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-md"
                                >
                                    <option>All Locations</option>
                                    <option>Noida</option>
                                    <option>Gorakhpur</option>
                                    <option>Delhi NCR</option>
                                </select>
                                <select
                                    name="jobTitle"
                                    onChange={handleFilterChange}
                                    className="form-select border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-md"
                                >
                                    <option value="">All Job Titles</option>
                                    {Array.from(new Set(allJobs.map((job) => job.title))).map((title, idx) => (
                                        <option key={idx} value={title}>{title}</option>
                                    ))}
                                </select>
                                <button
                                    type="submit"
                                    ref={recentJobsRef}
                                    className="text-white py-2 px-6 rounded-md transition-shadow duration-200 hover:shadow-md bg-gradient-to-r from-green-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
                                >
                                    Submit Now
                                </button>

                            </form>
                            <ul className="flex space-x-4 mt-4 text-sm">
                                {Object.keys(filters.jobTypes).map((type) => (
                                    <li key={type} className="flex items-center space-x-2 transition-colors duration-200 hover:text-blue-600">
                                        <input
                                            id={type}
                                            name={type}
                                            type="checkbox"
                                            onChange={handleFilterChange}
                                            className="form-checkbox focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-md"
                                        />
                                        <label htmlFor={type}>{type}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </section>
            </div>
            {/* Job Section */}
            <section className="py-10 bg-slate-200" >
                <div className="container mx-auto px-2 max-w-5xl">
                    <div className="text-center mb-8 text-slate-800">
                        <h2 className="text-3xl font-bold transition-colors duration-200 hover:text-blue-200">
                            RECENT & FEATURED JOBS
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job, index) => (
                                <JobCard key={index} {...job} />
                            ))
                        ) : (
                            <p className="text-white text-lg">No jobs found matching your criteria.</p>
                        )}
                    </div>

                    {/* <div className="mt-8">
                        <h4 className="text-2xl font-semibold mb-6 text-white transition-colors duration-200 hover:text-blue-200">
                            Recent Jobs
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {recentJobs.map((job, index) => (
                                <JobCard key={index} {...job} />
                            ))}
                        </div>
                    </div> */}

                    <div className="text-center mt-12">
                        <a
                            href="#"
                            className="text-blue-200 font-semibold py-2 px-6 rounded-full hover:underline bg-red-600 transition-colors duration-200 hover:text-red-700"
                        >
                            View All
                        </a>
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section className="relative py-12 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6]">
                {/* Animated Vertical Line */}
                <div className="absolute top-0 h-full w-px bg-white opacity-30 z-20 animate-lineMove"></div>

                <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                    <div className="bg-white/10 backdrop-blur-sm p-12 rounded-lg border border-white/10 shadow-lg z-10">
                        <h2 className="text-3xl font-bold mb-4 transition-colors duration-200 text-white hover:text-blue-200">
                            About Us
                        </h2>
                        <p className="text-gray-200 mb-6 transition-colors duration-200 hover:text-white">
                            {shortText}
                            {showMore && moreText}
                        </p>
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="text-white font-semibold hover:underline transition-colors duration-200 hover:text-yellow-300"
                        >
                            {showMore ? 'Read Less' : 'Read More'}
                        </button>
                    </div>

                    <div className="relative z-0">
                        <img
                            src="/images/about-img.jpg"
                            alt="About Us"
                            className="rounded-lg shadow-2xl transition-shadow duration-300 hover:shadow-blue-300/40"
                        />
                    </div>
                </div>
            </section>



            {/* Category Section */}
            <section className="bg-gray-100 py-12 " style={{ backgroundColor: '#09135b' }}>
                <div
                    className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
                    style={{ backgroundColor: '#09135b' }}
                >
                    {[
                        'Pharmacovigilance',
                        'Clinical Trials',
                        'Regulatory Affairs',
                        'Medical Writing',
                        'Quality Control',
                        'Formulation R&D',
                    ].map((category, index) => (
                        <a
                            key={index}
                            href="#"
                            className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200 hover:-translate-y-1 text-white "
                            style={{
                                backgroundImage: 'linear-gradient(to right, #8FD93B, #0574DD)',
                            }}
                        >
                            <div className="w-16 h-16 opacity-70">
                                <img
                                    src={`/images/c${index + 0}.png`} // Make sure you have these images named pharma0.png, pharma1.png, etc.
                                    alt={category}
                                    className="w-full h-full object-contain transition-transform duration-200 hover:scale-110 filter brightness-0 invert"
                                />
                            </div>
                            <h5 className="mt-4 text-center font-semibold">{category}</h5>
                        </a>
                    ))}
                </div>
            </section>





            {/* Expert Section */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4 lg:px-20">
                    <div className="text-center mb-10 p-10">
                        <h2 className="text-3xl font-bold transition-colors duration-200 hover:text-blue-600">
                            LOOKING FOR EXPERTS?
                        </h2>
                        <p className="mt-2 text-gray-600 max-w-2xl mx-auto transition-colors duration-200 hover:text-gray-700">
                            Discover top pharmaceutical professionals ready to join your mission.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
                        {visibleExperts.map((expert, index) => (
                            <ExpertCard key={index} {...expert} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-blue-500 font-semibold hover:underline transition-colors duration-200 hover:text-blue-700"
                        >
                            {showAll ? 'Show Less' : 'View All Freelancers'}
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer Section */}

        </div>
    );
};

export default CareerPage;