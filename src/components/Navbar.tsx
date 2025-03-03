import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const handleClickGithub = () => {
    window.open("https://github.com/Brunomananias", "_blank");
  };
  const handleClickLinkedin = () => {
    window.open("https://www.linkedin.com/in/bruno-ananias", "_blank");
  };
  const handleClickInstagram = () => {
    window.open("https://www.instagram.com/_brunoananias/", "_blank");
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src="" alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.div
          className="social-icon"
          onClick={handleClickLinkedin}
          whileHover={{ scale: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: "pointer" }}
        >
          <FaLinkedin size={40} />
        </motion.div>
        <motion.div
          className="social-icon"
          onClick={handleClickGithub}
          whileHover={{ scale: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: "pointer" }}
        >
          <FaGithub size={40} />
        </motion.div>
        <motion.div
          className="social-icon"
          onClick={handleClickInstagram}
          whileHover={{ scale: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: "pointer" }}
        >
          <FaInstagram size={40} />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
