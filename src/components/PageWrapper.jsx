import { motion } from "framer-motion";
import useIsLargeScreen from "../hooks/useIsLargeScreen"; // Asegúrate de ajustar la ruta

const PageWrapper = ({ children }) => {
  const isLargeScreen = useIsLargeScreen();

  return (
    <motion.div
      className="page-wrapper"
      {...(isLargeScreen && {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -40 },
        transition: { duration: 0.4, ease: "easeInOut" },
      })}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
