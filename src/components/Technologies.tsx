import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { TbSql } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration: number) => ({
  initial: { y: -10 }, // Posição inicial
  animate: {
    y: [10, -10], // Keyframes (move para cima e para baixo)
    transition: {
      duration: duration, // Duração da animação
      ease: "linear", // Tipo de transição
      repeat: Infinity, // Número de repetições (infinito)
      repeatType: "reverse" as const, // Tipo de repetição (utilizando a asserção de tipo para garantir que o valor seja aceito)
    },
  },
});

const Technoligies: React.FC = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 mt-40">
      <motion.h2 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 1.5}}
      className="mt-8 mb-4 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{ opacity: 1, x: 0}}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4  mt-10">
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandCSharp className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbSql className="text-7xl text-white-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-white-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technoligies;
