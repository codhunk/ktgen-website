import React from "react";
import apollo from "./assets/leaders/apollo.jpg";
import mg from "./assets/leaders/1mg.jpg";
import netmeds from "./assets/leaders/netmeds.avif";
import medplus from "./assets/leaders/medplus.png";
import joinus from "./assets/leaders/joinus.jpg"
const doctors = [
    {
        name: "Dr. Anjali Mehta",
        specialty: "Cardiologist",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        location: "Mumbai, India",
    },
    {
        name: "Dr. Rajeev Kumar",
        specialty: "Orthopedic Surgeon",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        location: "Delhi, India",
    },
    {
        name: "Dr. Neha Verma",
        specialty: "Pediatrician",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        location: "Pune, India",
    },
    {
        name: "Dr. Arjun Singh",
        specialty: "Neurologist",
        image: "https://randomuser.me/api/portraits/men/51.jpg",
        location: "Chennai, India",
    },
];

const pharmacies = [
    {
        name: "Apollo Pharmacy",
        location: "Pan India",
        image: apollo,
    },
    {
        name: "1MG Health Store",
        location: "Delhi NCR",
        image: mg,
    },
    {
        name: "NetMeds Outlet",
        location: "Bengaluru",
        image: netmeds,
    },
    {
        name: "MedPlus",
        location: "Hyderabad",
        image: medplus,
    },
];

const DoctorsPharmaciesPage = () => {
    return (
        <div className="bg-gray-50 text-gray-900 pt-20">
            {/* Hero Section */}
            <section className="bg-blue-800 text-white py-20 px-6 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Doctors & Pharmacies</h1>
                <p className="max-w-2xl mx-auto text-lg">
                    Connecting trusted healthcare professionals and pharmacies across India to provide accessible care for all.
                </p>
            </section>
            {/* Why Choose Us Section */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-2 text-blue-700">Nationwide Network</h3>
                            <p className="text-gray-600">We connect doctors and pharmacies across India through a secure and unified platform.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-2 text-blue-700">Verified Professionals</h3>
                            <p className="text-gray-600">Every professional on our platform is thoroughly vetted and approved for excellence.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-2 text-blue-700">Real-Time Support</h3>
                            <p className="text-gray-600">Our support team is available 24/7 to assist patients, doctors, and pharmacies alike.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">What Our Patients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <p className="text-gray-700 mb-4 italic">"I found the best doctor for my mother in minutes. Amazing platform with real-time availability!"</p>
                            <div className="text-sm text-gray-500">– Priya Sharma, Delhi</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <p className="text-gray-700 mb-4 italic">"Ordering medicines has never been easier. Partner pharmacies are fast and reliable."</p>
                            <div className="text-sm text-gray-500">– Arvind Joshi, Mumbai</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <p className="text-gray-700 mb-4 italic">"Helpful support and verified professionals gave me peace of mind during my treatment."</p>
                            <div className="text-sm text-gray-500">– Rekha Nair, Bangalore</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join the Network Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Join Our Growing Healthcare Network</h2>
                        <p className="text-lg text-gray-600 mb-4">Whether you're a medical professional or pharmacy owner, we empower you with tools and reach to expand your services and help patients faster.</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Get verified and reach thousands of users</li>
                            <li>Real-time consultation tools (for doctors)</li>
                            <li>Inventory sync and order management (for pharmacies)</li>
                            <li>Boost visibility through our search engine</li>
                        </ul>
                        <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition">
                            Become a Partner
                        </button>
                    </div>
                    <div className="flex-1">
                        <img src={joinus} alt="Join us" className="rounded-xl shadow-md" />
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-lg font-semibold text-blue-700">How do I register as a doctor or pharmacy?</h3>
                            <p className="text-gray-600 mt-2">Click the “Register Now” button above and fill in your credentials. Our team will verify and activate your profile within 24 hours.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-lg font-semibold text-blue-700">Is there any registration fee?</h3>
                            <p className="text-gray-600 mt-2">Currently, registration is completely free for both doctors and pharmacies during our launch campaign.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-lg font-semibold text-blue-700">Can patients contact me directly?</h3>
                            <p className="text-gray-600 mt-2">Yes. Once approved, your profile will be visible in our search listings and patients can connect with you directly via secure channels.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-6 rounded-lg shadow-sm bg-gray-100">
                        <h3 className="text-3xl font-bold text-blue-700">2000+</h3>
                        <p className="mt-1 text-gray-600 text-sm">Registered Doctors</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-sm bg-gray-100">
                        <h3 className="text-3xl font-bold text-blue-700">500+</h3>
                        <p className="mt-1 text-gray-600 text-sm">Partner Pharmacies</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-sm bg-gray-100">
                        <h3 className="text-3xl font-bold text-blue-700">95%</h3>
                        <p className="mt-1 text-gray-600 text-sm">Patient Satisfaction</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-sm bg-gray-100">
                        <h3 className="text-3xl font-bold text-blue-700">24x7</h3>
                        <p className="mt-1 text-gray-600 text-sm">Support Availability</p>
                    </div>
                </div>
            </section>

            {/* Doctors Grid */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">
                        Meet Our Doctors
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {doctors.map((doc, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center"
                            >
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">{doc.name}</h3>
                                <p className="text-sm text-blue-600">{doc.specialty}</p>
                                <p className="text-xs text-gray-500 mt-1">{doc.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pharmacies Grid */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">
                        Trusted Pharmacies
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {pharmacies.map((pharma, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl shadow hover:shadow-md transition overflow-hidden"
                            >
                                <img
                                    src={pharma.image}
                                    alt={pharma.name}
                                    className="h-40 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{pharma.name}</h3>
                                    <p className="text-sm text-gray-600">{pharma.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-700 text-white py-20 px-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Are You a Doctor or Pharmacy?</h2>
                <p className="max-w-xl mx-auto text-lg mb-6">
                    Join our growing network and help deliver quality healthcare to every corner of the nation.
                </p>
                <button className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
                    Register Now
                </button>
            </section>
        </div>
    );
};

export default DoctorsPharmaciesPage;
