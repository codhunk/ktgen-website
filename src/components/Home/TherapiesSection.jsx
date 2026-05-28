import { motion } from "framer-motion";

const therapies = [
  {
    name: "Neuropsychiatry",
    icon: (
      <img src="/head.png" alt="kidney" style={{ width: "55px", height: "55px" }} />
    ),
  },
  {
    name: "Cardiovascular Diseases",
    icon: (
      <img src="/cardiovascular.png" alt="kidney" style={{ width: "55px", height: "55px" }} />
    ),
  },
  {
    name: "Gastroenterology",
    icon: (
      <img src="/stomach.png" alt="kidney" style={{ width: "55px", height: "55px" }} />
    ),
  },
  {
    name: "Pain and Surgery",
    icon: (
      <img src="/bone.png" alt="kidney" style={{ width: "55px", height: "55px" }} />
    ),
  },

  {
    name: "Respiratory",
    icon: (
      <img src="/lungs.png" alt="kidney" style={{ width: "55px", height: "55px" }} />
    ),
  },
  {
    name: "Gynaecology",
    icon: (
      <img src="/female.png" alt="kidney" style={{ width: "55px", height: "55px" }} />
    ),
  },

  {
    name: "Dermatology",
    icon: (
      <img src="/dermatology.png" alt="kidney" style={{ width: "55px", height: "55px" }} />
    ),
  },
  {
    name: "Anti-infectives",
    icon: (
      <img src="/antivirus.png" alt="kidney" style={{ width: "55px", height: "55px" }} />
    ),
  },
  {
    name: "Nephrology",
    icon: (
      <img src="/Nephrology.png" alt="kidney" style={{ width: "55px", height: "55px" }} />
    ),
  },

];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const row1 = therapies.slice(0, 5);
const row2 = therapies.slice(5);

const TherapyItem = ({ therapy, index }) => (
  <motion.div
    variants={itemVariants}
    className="therapy-item flex flex-col items-center gap-2 group cursor-pointer"
  >
    {/*
      Icon container: 96×96px gives the outer rings (scale 1.4 & 1.75)
      enough room so they never spill into the neighbouring column.
    */}
    <div className="relative flex items-center justify-center w-24 h-24">
      {/* Outer glow rings — sized relative to the 96px box */}
      {/* <div
        className="absolute inset-0 rounded-full border border-gray-600 opacity-40 group-hover:opacity-20 group-hover:border-[#906908] transition-all duration-300"
        style={{ transform: "scale(1.35)" }}
      />
      <div
        className="absolute inset-0 rounded-full border border-gray-300 opacity-20 group-hover:opacity-30 group-hover:border-[#906908] transition-all duration-300"
        style={{ transform: "scale(1.65)" }}
      /> */}
      {/* Tick-mark ring — drawn inside the 96px box */}
      <svg
        className="absolute inset-0 w-full h-full text-[#9ca3af] group-hover:text-[#906908] transition-colors duration-300"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const rad = (angle * Math.PI) / 180;
          const r1 = 42;                          // outer tick radius
          const r2 = i % 6 === 0 ? 32 : 36;      // inner radius (long / short)
          const x1 = 48 + r1 * Math.sin(rad);
          const y1 = 48 - r1 * Math.cos(rad);
          const x2 = 48 + r2 * Math.sin(rad);
          const y2 = 48 - r2 * Math.cos(rad);
          return (
            <line
              key={i}
              x1={x1} y1={y1}
              x2={x2} y2={y2}
              stroke="currentColor"
              strokeWidth={i % 6 === 0 ? "1.5" : "1"}
              strokeLinecap="round"
            />
          );
        })}
      </svg>
      {/* Icon */}
      <div
        className="relative z-10 text-gray-900 transition-all duration-300 group-hover:scale-110"
        onMouseEnter={e => (e.currentTarget.style.color = '#906908')}
        onMouseLeave={e => (e.currentTarget.style.color = '')}
      >
        {therapy.icon}
      </div>
    </div>

    {/* Label */}
    <span className="text-xs mt-8 sm:text-sm font-medium text-gray-900 text-center leading-tight transition-colors duration-300 w-24 group-hover:[color:#B8860B]">
      {therapy.name}
    </span>
  </motion.div>
);

const TherapiesSection = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide" style={{ color: '#B8860B' }}>
            Therapies We Are Present In
          </h2>
        </motion.div>

        {/* Card */}
        <div className="bg-[#f5f2eb] rounded-2xl shadow-sm px-6 py-10 md:px-12 md:py-12" style={{ borderTop: '3px solid #D4AF37' }}>
          {/* Row 1 — 2 cols on mobile → 3 on sm → 5 cols on md */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10"
            style={{ justifyItems: 'center' }}
          >
            {row1.map((therapy, i) => (
              <TherapyItem key={therapy.name} therapy={therapy} index={i} />
            ))}
          </motion.div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-400 opacity-60" />

          {/* Row 2 — 2 cols on mobile → 2 on sm → 4 cols on md */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-10"
            style={{ justifyItems: 'center' }}
          >
            {row2.map((therapy, i) => (
              <TherapyItem key={therapy.name} therapy={therapy} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TherapiesSection;
