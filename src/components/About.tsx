import aboutImg from "../images/about.jpg";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div id="sobre-mim" className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        Sobre
        <span className="text-neutral-500"> Mim</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl w-100" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              Sou formado em Análise e Desenvolvimento de Sistemas e tenho uma
              paixão por construir soluções tecnológicas eficientes e
              escaláveis. Ao longo da minha carreira, desenvolvi expertise em
              React com TypeScript, C#, .NET e bancos de dados relacionais como
              SQL Server e Oracle. Com uma forte base em desenvolvimento de
              software, tenho experiência tanto em códigos modernos para
              aplicações web quanto em códigos legados, sempre buscando otimizar
              e melhorar a performance das soluções que crio. Sou movido pelo
              desafio de transformar problemas complexos em soluções simples e
              eficazes, e estou sempre em busca de novas oportunidades para
              crescer como desenvolvedor e contribuir para projetos inovadores.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
