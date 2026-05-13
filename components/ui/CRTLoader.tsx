// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function CRTLoader({ children }: { children: React.ReactNode }) {
//   const [phase, setPhase] = useState<"line" | "expand" | "done">("line");

//   useEffect(() => {
//     // Phase 1: horizontal line appears (0 → 0.8s)
//     // Phase 2: line expands vertically to fill screen (0.8s → 2s)
//     // Phase 3: loader fades out, content revealed
//     const t1 = setTimeout(() => setPhase("expand"), 800);
//     const t2 = setTimeout(() => setPhase("done"), 2200);
//     return () => { clearTimeout(t1); clearTimeout(t2); };
//   }, []);

//   return (
//     <>
//       <AnimatePresence>
//         {phase !== "done" && (
//           <motion.div
//             key="crt-loader"
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050508]"
//           >
//             {/* CRT scan glow */}
//             <motion.div
//               className="absolute"
//               style={{
//                 background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.05), transparent)",
//                 width: "100%",
//               }}
//               initial={{ height: "2px", opacity: 1 }}
//               animate={
//                 phase === "expand"
//                   ? { height: "100vh", opacity: 1 }
//                   : { height: "2px", opacity: 1 }
//               }
//               transition={
//                 phase === "expand"
//                   ? { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
//                   : { duration: 0.6 }
//               }
//             />

//             {/* The horizontal line */}
//             <motion.div
//               className="absolute"
//               style={{
//                 boxShadow: "0 0 30px 8px rgba(59,130,246,0.4), 0 0 60px 15px rgba(59,130,246,0.15)",
//               }}
//               initial={{ width: 0, height: "2px", opacity: 0 }}
//               animate={
//                 phase === "line"
//                   ? { width: "60vw", height: "2px", opacity: 1 }
//                   : phase === "expand"
//                   ? { width: "100vw", height: "100vh", opacity: 1 }
//                   : {}
//               }
//               transition={
//                 phase === "line"
//                   ? { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
//                   : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
//               }
//             >
//               <div
//                 className="h-full w-full"
//                 style={{
//                   background:
//                     phase === "line"
//                       ? "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.6) 30%, #3B82F6 50%, rgba(59,130,246,0.6) 70%, transparent 100%)"
//                       : "transparent",
//                 }}
//               />
//             </motion.div>

//             {/* Flicker overlay */}
//             <motion.div
//               className="pointer-events-none absolute inset-0"
//               style={{
//                 background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)",
//               }}
//               animate={{ opacity: [0, 0.3, 0] }}
//               transition={{ repeat: Infinity, duration: 0.1 }}
//             />

//             {/* ElectroCODE text appears during expand */}
//             {phase === "expand" && (
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//                 className="relative z-10 font-mono text-2xl font-bold tracking-wider text-white/60"
//               >
//                 Electro<span className="text-[#3B82F6]">CODE</span>
//               </motion.span>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Page content — visible behind loader, becomes interactive once loader exits */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={phase === "done" ? { opacity: 1 } : { opacity: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         {children}
//       </motion.div>
//     </>
//   );
// }
