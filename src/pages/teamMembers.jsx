import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const leaders = [
  {
    name: "Anuj Kumar Patel",
    title: "Founder & CEO",
    image: "/images/anuj.png",
    bio: "Anuj is the driving force behind our vision, combining innovation with strategy to lead the company forward.",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Rahul Patel",
    title: "Co-Founder & CTO",
    image: "/images/anuj.png",
    bio: "Rahul brings a deep passion for technology and a commitment to excellence in every project we undertake.",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Vibha Rani Gautam",
    title: "Co-Founder & COO",
    image: "/images/anuj.png",
    bio: "Vibha ensures smooth operations and strategic partnerships, fostering a culture of trust and collaboration.",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
   {
    name: "Anuj Kumar Patel",
    title: "Founder & CEO",
    image: "/images/anuj.png",
    bio: "Anuj is the driving force behind our vision, combining innovation with strategy to lead the company forward.",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Rahul Patel",
    title: "Co-Founder & CTO",
    image: "/images/anuj.png",
    bio: "Rahul brings a deep passion for technology and a commitment to excellence in every project we undertake.",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Vibha Rani Gautam",
    title: "Co-Founder & COO",
    image: "/images/anuj.png",
    bio: "Vibha ensures smooth operations and strategic partnerships, fostering a culture of trust and collaboration.",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

const LeadershipTeam = () => {
  return (
    <section className="bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Meet Our Leadership Team
        </motion.h2>

        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {leaders.map((leader, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  className="rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 transition-transform duration-300 ease-in-out"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col justify-center items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mb-4 border-4 border-white">
                      <img
                        className="w-full h-full object-cover"
                        src={leader.image}
                        alt={leader.name}
                      />
                    </div>
                    <h5 className="text-xl font-bold text-gray-800">{leader.name}</h5>
                    <p className="text-blue-600 font-medium">{leader.title}</p>
                    <p className="mt-2 text-gray-600 text-sm">{leader.bio}</p>
                    <div className="flex gap-4 mt-4">
                      {leader.socials.linkedin && (
                        <a href={leader.socials.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5 text-blue-700 hover:text-blue-900 transition-colors duration-300" />
                        </a>
                      )}
                      {leader.socials.twitter && (
                        <a href={leader.socials.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="w-5 h-5 text-blue-500 hover:text-blue-700 transition-colors duration-300" />
                        </a>
                      )}
                      {leader.socials.instagram && (
                        <a href={leader.socials.instagram} target="_blank" rel="noopener noreferrer">
                          <Instagram className="w-5 h-5 text-pink-500 hover:text-pink-700 transition-colors duration-300" />
                        </a>
                      )}
                      {leader.socials.facebook && (
                        <a href={leader.socials.facebook} target="_blank" rel="noopener noreferrer">
                          <Facebook className="w-5 h-5 text-blue-600 hover:text-blue-800 transition-colors duration-300" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
