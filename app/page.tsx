"use client"

import { motion } from "framer-motion"
import { WhatsappIcon } from "@/components/whatsapp-icon"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const titleLetters = "TRUCO POR PLATA".split("")

  const scrollToContent = () => {
    const contentSection = document.getElementById("how-it-works")
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header with background image */}
      <header className="relative flex flex-col items-center justify-center py-16 px-4 text-center min-h-[100vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/design-mode/ChatGPT%20Image%2014%20abr%202025%2C%2006_07_14%20p.m.%281%29.png"
            alt="Truco Cards Background"
            className="w-full h-full object-cover opacity-70"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col h-[70vh] justify-between">
          {/* Title */}
          <div className="mt-[-2vh] sm:mt-[-10vh]">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white overflow-hidden">
              <div className="flex flex-wrap justify-center whitespace-nowrap">
                {titleLetters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      textShadow: [
                        "0 0 5px rgba(0,100,255,0.8), 0 0 10px rgba(0,100,255,0.5), 0 0 15px rgba(0,100,255,0.5)",
                        "0 0 10px rgba(0,100,255,0.9), 0 0 20px rgba(0,100,255,0.6), 0 0 30px rgba(0,100,255,0.6)",
                        "0 0 5px rgba(0,100,255,0.8), 0 0 10px rgba(0,100,255,0.5), 0 0 15px rgba(0,100,255,0.5)",
                      ],
                    }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.5,
                      textShadow: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      },
                    }}
                    className={letter === " " ? "mr-1 sm:mr-2" : "tracking-tighter sm:tracking-normal"}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </h1>
          </div>

          <div className="flex flex-col items-center gap-4 sm:gap-10 mt-8 sm:mt-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-white"
            >
              Entrá ahora, jugás al instante. Seguro, rápido y divertido.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <a
                href="https://chat.whatsapp.com/GwGbI28YaFg27qzjSTNBYk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-white px-8 sm:px-10 py-4 sm:py-4 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.7)] hover:shadow-[0_0_35px_rgba(34,197,94,1)] transition-all duration-300 animate-pulse-glow"
              >
                <WhatsappIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="font-neon text-shadow-neon-button text-lg sm:text-xl">QUIERO JUGAR AHORA</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          onClick={scrollToContent}
        >
          <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </motion.div>
      </header>

      {/* Cómo funciona */}
      <motion.section
        id="how-it-works"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center my-6 sm:my-12"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-blue-400"
        >
          ¿Cómo funciona?
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10">
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-pink-900 to-purple-950 p-5 sm:p-8 rounded-xl shadow-lg border border-pink-800/30"
          >
            <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4 text-pink-300">📱 Hablás con nosotros</h3>
            <p className="text-gray-200 text-xs sm:text-base">
              Contactanos por WhatsApp y comenta la modalidad que queres jugar
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-yellow-800 to-orange-950 p-5 sm:p-8 rounded-xl shadow-lg border border-yellow-700/30"
          >
            <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4 text-yellow-300">🔎 Buscamos tu rival</h3>
            <p className="text-gray-200 text-xs sm:text-base">Coordinamos la partida con otro jugador</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-cyan-900 to-blue-950 p-5 sm:p-8 rounded-xl shadow-lg border border-cyan-800/30 sm:col-span-2 md:col-span-1 sm:mx-auto md:mx-0 sm:max-w-xs md:max-w-none"
          >
            <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4 text-cyan-300">🎮 Jugás y competis</h3>
            <p className="text-gray-200 text-xs sm:text-base">Jugás en Trucogame.com por dinero real</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Beneficios */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="relative py-12 sm:py-20 px-4 sm:px-6 text-center my-6 sm:my-12 rounded-xl overflow-hidden"
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/images/design-mode/image%281%29.png" alt="Truco Cards" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-white">
            ¿Por qué elegirnos?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="bg-black/60 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-lg border border-white/10"
            >
              <p className="text-base sm:text-xl text-white">✅ 100% seguro, con intermediario</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="bg-black/60 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-lg border border-white/10"
            >
              <p className="text-base sm:text-xl text-white">✅ Pagos al instante</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="bg-black/60 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-lg border border-white/10"
            >
              <p className="text-base sm:text-xl text-white">✅ Partidas desde $4000 sin limites</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="bg-black/60 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-lg border border-white/10"
            >
              <p className="text-base sm:text-xl text-white">✅ Jugadores reales disponibles 24/7</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA final */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="relative py-12 sm:py-24 px-4 text-center rounded-xl max-w-5xl mx-auto my-6 sm:my-12 overflow-hidden"
      >
        {/* Money background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/design-mode/image%281%29.png"
            alt="Money Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="relative z-10">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 text-white animate-pulse-slow text-shadow-neon-sm"
          >
            ¿Listo para ganar?
          </motion.h2>
          <motion.div variants={fadeInUp} className="relative inline-block">
            <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
            <a
              href="https://chat.whatsapp.com/GwGbI28YaFg27qzjSTNBYk"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.7)] hover:shadow-[0_0_35px_rgba(34,197,94,1)] transition-all duration-300 animate-pulse-glow"
            >
              <WhatsappIcon className="w-5 h-5 sm:w-7 sm:h-7" />
              <span className="font-neon text-shadow-neon-button text-base sm:text-xl">JUGAR AHORA MISMO</span>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-xs sm:text-sm py-6 sm:py-8 text-gray-400 border-t border-gray-800">
        Truco Campeones Argentinos © {new Date().getFullYear()} – Contacto por WhatsApp
        <br />
        <span className="italic">Entretenimiento entre particulares. No somos casa de apuestas.</span>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton />
    </div>
  )
}
