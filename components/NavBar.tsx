'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'EVENTS', path: '/events' },
  { name: 'RANKINGS', path: '/rankings' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b-4 border-rkena-red bg-rkena-black">
        <div className="max-w-7xl mx-auto flex justify-between items-stretch h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center px-4 md:px-6 border-r-4 border-rkena-red hover:bg-rkena-red hover:text-rkena-black transition-colors duration-200 group z-50 relative">
            <span className="text-2xl md:text-4xl font-black tracking-tighter italic group-hover:skew-x-12 transition-transform">
              RKENA
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex h-full">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className={`
                    relative flex items-center px-8 h-full text-xl font-bold uppercase tracking-wide
                    border-l-4 border-rkena-red
                    hover:bg-rkena-light hover:text-rkena-black transition-colors duration-200
                    ${isActive ? 'bg-rkena-red text-rkena-black' : 'text-rkena-light'}
                  `}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-2 bg-black"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden flex items-center justify-center px-6 border-l-4 border-rkena-red text-rkena-light z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-rkena-black md:hidden pt-20 px-6 flex flex-col gap-4"
          >
            {navItems.map((item, index) => (
              <Link 
                key={item.path}
                href={item.path}
                className="block"
              >
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    text-4xl font-black uppercase py-4 border-b-2 border-zinc-800
                    ${pathname === item.path ? 'text-rkena-red border-rkena-red pl-4' : 'text-rkena-light'}
                  `}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
            
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="mt-auto mb-8 text-center text-zinc-500 font-mono text-sm"
            >
              © 2025 RKENA PROMOTION
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
