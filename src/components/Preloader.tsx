import INFI from '../assets/iB.webp'
import crown from '../assets/crown.webp'
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import CanvasLoader from './Loader';

const Preloader: React.FC = () => {
     return (
          <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
               <motion.div
                    className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
               >
               </motion.div>
               <div className='w-10 h-20 flex justify-center align-middle absolute'>
                    <Suspense fallback={<CanvasLoader />}>
                         <motion.img
                              src={INFI} alt="" className='w-10 mt-10 ml-1 bg-black absolute' />
                         <motion.img
                              src={crown} alt="" className='w-8 h-8 mt-[0.6rem] relative' />
                    </Suspense>
               </div>
          </div>
     );
};

export default Preloader;
