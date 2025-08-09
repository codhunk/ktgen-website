import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

const pulseVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ringVariants = {
  initial: { scale: 1, opacity: 0.7 },
  animate: {
    scale: [1, 1.4, 1],
    opacity: [0.7, 0, 0.7],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-7 right-10 flex flex-col items-center gap-6 z-[999]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* WhatsApp Button */}
      <motion.div variants={itemVariants} className="relative">
        {/* Animated ring effect */}
        <motion.div
          variants={ringVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 bg-green-500 rounded-full -z-10"
        />

        <motion.a
          href="https://wa.me/917607116082"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          aria-label="WhatsApp Chat"
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.2,
            rotate: [0, 10, -10, 10, 0],
            transition: {
              scale: { duration: 0.2 },
              rotate: { duration: 0.6, ease: "easeInOut" },
            },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          >
            <FaWhatsapp size={30} />
          </motion.div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
