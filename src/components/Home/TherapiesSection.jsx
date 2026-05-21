import { motion } from "framer-motion";

const therapies = [
  {
    name: "Neuropsychiatry",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M24 28c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3-1.6 5.6-4 7v3h-8v-3c-2.4-1.4-4-4-4-7z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M28 35v2M36 35v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M29 38h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="10" r="1" fill="currentColor" />
        <circle cx="32" cy="54" r="1" fill="currentColor" />
        <circle cx="10" cy="32" r="1" fill="currentColor" />
        <circle cx="54" cy="32" r="1" fill="currentColor" />
        <circle cx="16" cy="16" r="1" fill="currentColor" />
        <circle cx="48" cy="48" r="1" fill="currentColor" />
        <circle cx="48" cy="16" r="1" fill="currentColor" />
        <circle cx="16" cy="48" r="1" fill="currentColor" />
        <line x1="32" y1="11" x2="32" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="32" y1="50" x2="32" y2="53" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="11" y1="32" x2="14" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="50" y1="32" x2="53" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Cardiovascular Diseases",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M32 42s-12-8-12-16a8 8 0 0116 0 8 8 0 0116 0c0 8-20 16-20 16z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <circle cx="32" cy="10" r="1" fill="currentColor" />
        <circle cx="32" cy="54" r="1" fill="currentColor" />
        <circle cx="10" cy="32" r="1" fill="currentColor" />
        <circle cx="54" cy="32" r="1" fill="currentColor" />
        <line x1="32" y1="11" x2="32" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="32" y1="50" x2="32" y2="53" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="11" y1="32" x2="14" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="50" y1="32" x2="53" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Gastroenterology",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M26 24c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2-1.8 4-4 5v2c0 4-3 8-3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M31 39c-2 0-4 1-4 3s2 3 4 3 4-1 4-3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="10" r="1" fill="currentColor" />
        <circle cx="32" cy="54" r="1" fill="currentColor" />
        <circle cx="10" cy="32" r="1" fill="currentColor" />
        <circle cx="54" cy="32" r="1" fill="currentColor" />
        <line x1="32" y1="11" x2="32" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="32" y1="50" x2="32" y2="53" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="11" y1="32" x2="14" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="50" y1="32" x2="53" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Pain and Surgery",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M24 32h16M32 24v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="10" r="1" fill="currentColor" />
        <circle cx="32" cy="54" r="1" fill="currentColor" />
        <circle cx="10" cy="32" r="1" fill="currentColor" />
        <circle cx="54" cy="32" r="1" fill="currentColor" />
        <line x1="32" y1="11" x2="32" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="32" y1="50" x2="32" y2="53" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="11" y1="32" x2="14" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="50" y1="32" x2="53" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },

  {
    name: "Respiratory",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M32 22v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M32 28c-4 0-8 2-8 6 0 3 2 5 5 5 2 0 3-1 3-3v-8z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M32 28c4 0 8 2 8 6 0 3-2 5-5 5-2 0-3-1-3-3v-8z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <circle cx="32" cy="10" r="1" fill="currentColor" />
        <circle cx="32" cy="54" r="1" fill="currentColor" />
        <circle cx="10" cy="32" r="1" fill="currentColor" />
        <circle cx="54" cy="32" r="1" fill="currentColor" />
        <line x1="32" y1="11" x2="32" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="32" y1="50" x2="32" y2="53" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="11" y1="32" x2="14" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="50" y1="32" x2="53" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Gynaecology",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="26" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M32 32v8M28 38h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="10" r="1" fill="currentColor" />
        <circle cx="32" cy="54" r="1" fill="currentColor" />
        <circle cx="10" cy="32" r="1" fill="currentColor" />
        <circle cx="54" cy="32" r="1" fill="currentColor" />
        <line x1="32" y1="11" x2="32" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="32" y1="50" x2="32" y2="53" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="11" y1="32" x2="14" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="50" y1="32" x2="53" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },

  {
    name: "Dermatology",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M22 36c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="28" cy="28" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="36" cy="28" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="24" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="10" r="1" fill="currentColor" />
        <circle cx="32" cy="54" r="1" fill="currentColor" />
        <circle cx="10" cy="32" r="1" fill="currentColor" />
        <circle cx="54" cy="32" r="1" fill="currentColor" />
        <line x1="32" y1="11" x2="32" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="32" y1="50" x2="32" y2="53" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="11" y1="32" x2="14" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="50" y1="32" x2="53" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Anti-infectives",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="32" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M32 23v2M32 41v2M23 32h2M41 32h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 26l1.5 1.5M36.5 36.5l1.5 1.5M36.5 27.5L38 26M26 38l1.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="10" r="1" fill="currentColor" />
        <circle cx="32" cy="54" r="1" fill="currentColor" />
        <circle cx="10" cy="32" r="1" fill="currentColor" />
        <circle cx="54" cy="32" r="1" fill="currentColor" />
        <line x1="32" y1="11" x2="32" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="32" y1="50" x2="32" y2="53" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="11" y1="32" x2="14" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="50" y1="32" x2="53" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Nephrology",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M26 24c-3 2-4 6-3 9 1 4 4 7 6 7 1 0 2-1 2-2v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M38 24c3 2 4 6 3 9-1 4-4 7-6 7-1 0-2-1-2-2v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="32" cy="10" r="1" fill="currentColor" />
        <circle cx="32" cy="54" r="1" fill="currentColor" />
        <circle cx="10" cy="32" r="1" fill="currentColor" />
        <circle cx="54" cy="32" r="1" fill="currentColor" />
        <line x1="32" y1="11" x2="32" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="32" y1="50" x2="32" y2="53" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="11" y1="32" x2="14" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="50" y1="32" x2="53" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
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

const row1 = therapies.slice(0, 6);
const row2 = therapies.slice(6);

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
      <div
        className="absolute inset-0 rounded-full border border-gray-600 opacity-40 group-hover:opacity-40 transition-opacity duration-300"
        style={{ transform: "scale(1.35)" }}
      />
      <div
        className="absolute inset-0 rounded-full border border-gray-300 opacity-20 group-hover:opacity-50 transition-opacity duration-300"
        style={{ transform: "scale(1.65)" }}
      />
      {/* Tick-mark ring — drawn inside the 96px box */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const rad = (angle * Math.PI) / 180;
          const r1 = 40;                          // outer tick radius
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
              stroke="#9ca3af"
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
          {/* Row 1 — 3 cols on mobile → 6 cols on md */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-y-10"
            style={{ justifyItems: 'center' }}
          >
            {row1.map((therapy, i) => (
              <TherapyItem key={therapy.name} therapy={therapy} index={i} />
            ))}
          </motion.div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-400 opacity-60" />

          {/* Row 2 — 3 cols centered on all sizes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-y-10"
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
