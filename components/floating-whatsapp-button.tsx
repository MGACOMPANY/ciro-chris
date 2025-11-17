"use client"

import { motion } from "framer-motion"
import { WhatsappIcon } from "./whatsapp-icon"

export function FloatingWhatsAppButton() {
  const whatsappLink = "https://chat.whatsapp.com/GwGbI28YaFg27qzjSTNBYk"

  return (
    <motion.div
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.2,
      }}
    >
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-40 animate-pulse-glow-strong"></div>

      {/* Button with animations */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.8)] hover:shadow-[0_0_35px_rgba(34,197,94,1)] transition-all duration-300"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          scale: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
          rotate: {
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Ping animation */}
        <div className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-75"></div>

        {/* Inner glow */}
        <div className="absolute w-[90%] h-[90%] rounded-full bg-green-400 opacity-50 blur-sm"></div>

        {/* WhatsApp icon */}
        <WhatsappIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white z-10 drop-shadow-lg" />
      </motion.a>
    </motion.div>
  )
}
