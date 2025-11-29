'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

export default function BrutalistModal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'circOut', duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-rkena-black border-l-8 border-rkena-red z-[70] overflow-y-auto shadow-2xl"
          >
             <div className="sticky top-0 bg-rkena-red p-4 flex justify-between items-center z-10">
               <h2 className="text-3xl font-black uppercase text-black truncate pr-4">
                 {title}
               </h2>
               <button 
                 onClick={onClose}
                 className="bg-black text-rkena-red w-12 h-12 flex items-center justify-center font-black text-2xl hover:bg-white hover:text-black transition-colors"
               >
                 X
               </button>
             </div>
             
             <div className="p-8">
               {children}
             </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

