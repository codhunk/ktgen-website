import React from 'react';
import careerVideo from "/images/career_video.mp4";
import { FaSearch, FaUser, FaMapMarker, FaMoneyBillWave, FaHeart, FaStar, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const CareerPage = () => {
    const featuredJobs = [
        {
            title: 'Pharmaceutical R&D Team Lead',
            location: 'Hyderabad, Telangana',
            salary: '₹1,00,000 – ₹1,10,000/mo',
            logo: '/images/job_logo1.png'
        },
        {
            title: 'Formulation Scientist - Website Compliance',
            location: 'Mumbai, Maharashtra',
            salary: '₹16,000 – ₹28,000/project',
            logo: '/images/job_logo2.png'
        },
    ];


    const recentJobs = [
        {
            title: 'Hiring Pharma Graphic Designer (Branding + Packaging)',
            location: 'Ahmedabad, Gujarat',
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
            location: 'Pune, Maharashtra',
            salary: '₹33,000 – ₹45,000/mo',
            logo: '/images/job_logo5.png'
        },
        {
            title: 'Regulatory Sr. Web Designer (FDA/Pharma)',
            location: 'Bangalore, Karnataka',
            salary: '₹29,000 – ₹37,000/mo',
            logo: '/images/job_logo4.png'
        },
    ];


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
    ];


    const JobCard = ({ title, location, salary, logo }) => (
        <div className="flex flex-col bg-white p-6 rounded-lg shadow-md mb-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center space-x-4 w-full">
                <div className="w-10 h-10 flex-shrink-0">
                    <img src={logo} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                    <h5 className="text-xl font-semibold transition-colors duration-200 hover:text-blue-600">{title}</h5>
                    <div className="flex flex-wrap sm:flex-row sm:space-x-4 mt-2 text-gray-500 text-sm">
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
                    style={{ backgroundColor: "#09135b" }}
                    className="text-white py-2 px-4 rounded-full transition-colors duration-200 hover:bg-blue-700"
                >
                    Apply Now
                </a>

            </div>
        </div>
    );

    const ExpertCard = ({ name, position, jobsDone, rating, description, image }) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-200 hover:scale-105" />
            </div>
            <div className="p-6 text-center">
                <a href="#" className="text-xl font-bold text-blue-600 hover:underline transition-colors duration-200 hover:text-blue-700">{name}</a>
                <div className="mt-2 text-gray-500 text-sm transition-colors duration-200 hover:text-gray-600">
                    <span>{position}</span> | <span>{jobsDone} Jobs Done</span>
                </div>
                <div className="flex justify-center mt-2 text-yellow-400">
                    {[...Array(rating)].map((_, i) => (
                        <FaStar key={i} className="transition-colors duration-200 hover:text-yellow-500" />
                    ))}
                </div>
                <p className="mt-4 text-gray-700 transition-colors duration-200 hover:text-gray-800">{description}</p>
            </div>
        </div>
    );

    return (
        <div className="font-sans text-gray-800">
            <div className="relative bg-[#162c46b2] min-h-screen pb-24">
                {/* Hero Section */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-6 opacity-60"
                    src={careerVideo}
                ></video>
                <section className="relative pt-40 text-white overflow-hidden">
                    {/* Background Video */}


                    {/* Content Layer */}
                    <div className="relative z-10">
                        <div className="container mx-auto px-4 text-center max-w-3xl">
                            <h1 className="text-5xl font-bold leading-tight mb-4 transition-colors duration-200 hover:text-blue-200">
                                Build Your <br /> POWERFUL CAREER
                            </h1>
                            <p className="text-lg transition-colors duration-200 hover:text-blue-200">
                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                            </p>
                        </div>

                        <div className="mt-14 container mx-auto px-12">
                            <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-lg text-gray-800 backdrop-blur-md">
                                <form className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
                                    <input
                                        type="text"
                                        className="form-input border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-md"
                                        placeholder="Keywords"
                                    />
                                    <select className="form-select border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-md">
                                        <option>All Locations</option>
                                        <option>Noida</option>
                                        <option>Gorakhpur</option>
                                    </select>
                                    <select className="form-select border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-md">
                                        <option>Pharmacovigilance Specialist</option>
                                        <option>Clinical Research Associate</option>
                                        <option>Regulatory Affairs Officer</option>
                                        <option>Formulation Scientist</option>
                                        <option>Quality Assurance Executive</option>
                                        <option>Medical Writer</option>
                                        <option>Production Chemist</option>
                                        <option>R&D Analyst</option>
                                        <option>Microbiologist</option>
                                        <option>Drug Safety Associate</option>

                                    </select>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-shadow duration-200 hover:shadow-md"
                                    >
                                        Submit Now
                                    </button>
                                </form>

                                <ul className="flex space-x-4 mt-4 text-sm">
                                    <li className="flex items-center space-x-2 transition-colors duration-200 hover:text-blue-600">
                                        <input
                                            id="freelancer"
                                            type="checkbox"
                                            className="form-checkbox focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-md"
                                        />
                                        <label htmlFor="freelancer">Freelancer</label>
                                    </li>
                                    <li className="flex items-center space-x-2 transition-colors duration-200 hover:text-blue-600">
                                        <input
                                            id="part-time"
                                            type="checkbox"
                                            className="form-checkbox focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-md"
                                        />
                                        <label htmlFor="part-time">Part Time</label>
                                    </li>
                                    <li className="flex items-center space-x-2 transition-colors duration-200 hover:text-blue-600">
                                        <input
                                            id="full-time"
                                            type="checkbox"
                                            className="form-checkbox focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-md"
                                        />
                                        <label htmlFor="full-time">Full Time</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Category Section */}
            <section className="bg-gray-100 py-12" style={{ backgroundColor: '#09135b' }}>
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
                            className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200 hover:-translate-y-1 text-white"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #8FD93B, #0574DD)',
                            }}
                        >
                            <div className="w-16 h-16">
                                <img
                                    src={`/images/c${index+0}.png`} // Make sure you have these images named pharma0.png, pharma1.png, etc.
                                    alt={category}
                                    className="w-full h-full object-contain transition-transform duration-200 hover:scale-110 filter brightness-0 invert"
                                />
                            </div>
                            <h5 className="mt-4 text-center font-semibold">{category}</h5>
                        </a>
                    ))}
                </div>
            </section>


            {/* About Section */}
            <section className="py-12 bg-blue">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className='bg-blue p-20' >
                        <h2 className="text-3xl font-bold mb-4 transition-colors duration-200 hover:text-blue-600">About Us</h2>
                        <p className="text-gray-600 mb-6 transition-colors duration-200 hover:text-gray-700">
                            Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors
                        </p>
                        <a href="#" className="text-blue-500 font-semibold hover:underline transition-colors duration-200 hover:text-blue-700">Read More</a>
                    </div>
                    <div>
                        <img src="/images/about-img.jpg" alt="About Us" className="rounded-lg shadow-lg transition-shadow duration-200 hover:shadow-xl" />
                    </div>
                </div>
            </section>

            {/* Job Section */}
            <section className="py-10" style={{ backgroundColor: '#09135b' }}>
                <div className="container mx-auto px-2 max-w-5xl">
                    <div className="text-center mb-8 text-white">
                        <h2 className="text-3xl font-bold transition-colors duration-200 hover:text-blue-200">RECENT & FEATURED JOBS</h2>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold mb-6 text-white transition-colors duration-200 hover:text-blue-200">Featured Jobs</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {featuredJobs.map((job, index) => (
                                <JobCard key={index} {...job} />
                            ))}
                        </div>
                    </div>
                    <div className="mt-8">
                        <h4 className="text-2xl font-semibold mb-6 text-white transition-colors duration-200 hover:text-blue-200">Recent Jobs</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {recentJobs.map((job, index) => (
                                <JobCard key={index} {...job} />
                            ))}
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <a href="#" className="text-blue-200 font-semibold py-2 px-6 rounded-full hover:underline bg-red-600 transition-colors duration-200 hover:text-red-700">View All</a>
                    </div>
                </div>
            </section>

            {/* Expert Section */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-20">
                    <div className="text-center mb-10 p-10">
                        <h2 className="text-3xl font-bold transition-colors duration-200 hover:text-blue-600">LOOKING FOR EXPERTS?</h2>
                        <p className="mt-2 text-gray-600 max-w-2xl mx-auto transition-colors duration-200 hover:text-gray-700">
                            Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experts.map((expert, index) => (
                            <ExpertCard key={index} {...expert} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a href="#" className="text-blue-500 font-semibold hover:underline transition-colors duration-200 hover:text-blue-700">View All Freelancers</a>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-4 transition-colors duration-200 hover:text-gray-300">Menu</h4>
                            <ul>
                                <li><a href="#" className="hover:underline transition-colors duration-200 hover:text-gray-300">Home</a></li>
                                <li><a href="#" className="hover:underline transition-colors duration-200 hover:text-gray-300">About</a></li>
                                <li><a href="#" className="hover:underline transition-colors duration-200 hover:text-gray-300">Jobs</a></li>
                                <li><a href="#" className="hover:underline transition-colors duration-200 hover:text-gray-300">Freelancers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4 transition-colors duration-200 hover:text-gray-300">Jobs</h4>
                            <p className="text-sm text-gray-400 transition-colors duration-200 hover:text-gray-300">
                                Established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4 transition-colors duration-200 hover:text-gray-300">Social Link</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200"><FaFacebook size={24} /></a>
                                <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200"><FaTwitter size={24} /></a>
                                <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200"><FaLinkedin size={24} /></a>
                                <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200"><FaInstagram size={24} /></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4 transition-colors duration-200 hover:text-gray-300">Newsletter</h4>
                            <form>
                                <input type="text" placeholder="Enter Your Email" className="w-full p-2 rounded-md bg-gray-700 border-none placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-md" />
                                <button type="submit" className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-shadow duration-200 hover:shadow-md">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-400 transition-colors duration-200 hover:text-gray-300">
                    <p>&copy; <span>{new Date().getFullYear()}</span> All Rights Reserved By <a href="https://html.design/" className="hover:underline transition-colors duration-200 hover:text-gray-300">Free Html Templates</a></p>
                </div>
            </footer>
        </div>
    );
};

export default CareerPage;