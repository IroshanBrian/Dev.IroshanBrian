
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
     return (
          <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
               <motion.div
                    className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
               />
          </div>
     );
};

export default Preloader;
