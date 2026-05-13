"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Download", href: "#download" },
];

function AnimatedLogo() {
  const [hovered, setHovered] = useState(false);
  const name = "ElectroCODE";

  return (
    <a
      href="#"
      className="flex items-center gap-2.5 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#22C55E]"
        whileHover={{ rotate: 10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <Zap className="h-4 w-4 text-white" />
      </motion.div>
      <span className="font-mono text-lg font-bold tracking-tight">
        {name.split("").map((char, i) => (
          <motion.span
            key={i}
            className={`inline-block ${i >= 7 ? "text-[#3B82F6]" : "text-white"}`}
            animate={
              hovered
                ? { y: [0, -3, 0], transition: { delay: i * 0.03, duration: 0.3 } }
                : { y: 0 }
            }
          >
            {char}
          </motion.span>
        ))}
      </span>
    </a>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} className="group relative py-1 text-sm font-medium text-white/60 transition-colors hover:text-white">
      {label}
      <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#3B82F6] transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(5,5,8,0.8)" : "rgba(5,5,8,0)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          borderBottomColor: scrolled ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0)",
        }}
        transition={{ duration: 0.3 }}
        className="border-b"
        style={{ borderBottomWidth: 1 }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <AnimatedLogo />

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
            <motion.a
              href="#download"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(59,130,246,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="rounded-lg bg-[#3B82F6] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2563eb]"
            >
              Download
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-white/[0.04] bg-[#050508]/95 backdrop-blur-xl px-6 pb-6 pt-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-white/60 hover:text-white">
              {link.label}
            </a>
          ))}
          <a href="#download" onClick={() => setMobileOpen(false)} className="mt-3 block rounded-lg bg-[#3B82F6] px-5 py-2.5 text-center text-sm font-semibold text-white">
            Download
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
