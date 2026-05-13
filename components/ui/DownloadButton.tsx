"use client";

import { motion } from "framer-motion";

interface DownloadButtonProps {
  platform: string;
  icon: React.ReactNode;
  href?: string;
  subtitle?: string;
}

export default function DownloadButton({ platform, icon, href = "#", subtitle }: DownloadButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:border-[#3B82F6]/30 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-[#3B82F6]/10"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06] text-white/70 transition-colors group-hover:bg-[#3B82F6]/15 group-hover:text-[#3B82F6]">
        {icon}
      </div>
      <div>
        <div className="text-sm font-bold text-white">{platform}</div>
        {subtitle && <div className="text-xs text-white/40">{subtitle}</div>}
      </div>
    </motion.a>
  );
}
