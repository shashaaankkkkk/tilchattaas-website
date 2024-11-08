import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const [expanded, setExpanded] = useState(false);

    // Header animations
    const headerVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 100
            }
        }
    };

    // Navigation menu animations
    const mobileMenuVariants = {
        hidden: { 
            x: "100%",
            opacity: 0,
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeInOut"
            }
        },
        visible: { 
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "tween",
                ease: "easeInOut",
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const menuItemVariants = {
        hidden: { x: 20, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    // Hero section animations
    const heroTextVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                delay: 0.5
            }
        }
    };

    const buttonGroupVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.2
            }
        }
    };

    const buttonVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 200
            }
        },
        hover: { 
            scale: 1.05,
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeInOut"
            }
        },
        tap: { scale: 0.95 }
    };

    // Image animation
    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1.1, 
            opacity: 1,
            transition: {
                duration: 1.2,
                delay: 0.8,
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className="overflow-x-hidden bg-gray-50">
            <motion.header 
                className="py-4 md:py-6"
                initial="hidden"
                animate="visible"
                variants={headerVariants}
            >
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <motion.div 
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                <p className='text-[30px] font-semibold'>Tilchattaas</p>
                            </a>
                        </motion.div>

                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="text-gray-900"
                                onClick={() => setExpanded(!expanded)}
                                aria-expanded={expanded}
                            >
                                <motion.div
                                    animate={{ rotate: expanded ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {!expanded ? (
                                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    ) : (
                                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
                                </motion.div>
                            </button>
                        </div>

                        <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                            {['Features', 'Pricing', 'Automation'].map((item, index) => (
                                <motion.a
                                    key={item}
                                    href="#"
                                    className="text-base font-medium text-gray-900 transition-all duration-200 rounded font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * (index + 1) }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>

                        <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                            <motion.a
                                href="#"
                                className="text-base font-medium text-gray-900 transition-all duration-200 rounded font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Customer Login
                            </motion.a>
                            <motion.a
                                href="#"
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 rounded-xl font-pj hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Sign up
                            </motion.a>
                        </div>
                    </div>

                    <AnimatePresence>
                        {expanded && (
                            <motion.nav
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={mobileMenuVariants}
                            >
                                <div className="px-1 py-8">
                                    <div className="grid gap-y-7">
                                        {['Features', 'Pricing', 'Automation', 'Customer Login'].map((item) => (
                                            <motion.a
                                                key={item}
                                                href="#"
                                                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                                                variants={menuItemVariants}
                                            >
                                                {item}
                                            </motion.a>
                                        ))}
                                        <motion.a
                                            href="#"
                                            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white bg-gray-900 rounded-xl hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                            variants={menuItemVariants}
                                        >
                                            Sign up
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </div>
            </motion.header>

            <section className="pt-12 bg-gray-50 sm:pt-16">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <motion.div 
                        className="max-w-2xl mx-auto text-center"
                        initial="hidden"
                        animate="visible"
                        variants={heroTextVariants}
                    >
                        <motion.h1 
                            className="px-6 text-lg text-gray-600 font-inter"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            Smart email campaign builder, made for Developers
                        </motion.h1>
                        <motion.p 
                            className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl font-pj"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            Turn your Start-Up into profitable
                            <motion.span 
                                className="relative inline-flex"
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 2, -2, 0] 
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg opacity-30"></span>
                                <span className="relative"> business </span>
                            </motion.span>
                        </motion.p>

                        <motion.div 
                            className="mt-9 sm:flex sm:justify-center"
                            variants={buttonGroupVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.a
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gray-900 rounded-xl font-pj hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                Get more customers
                            </motion.a>

                            <motion.a
                                href="#"
                                className="inline-flex items-center justify-center px-6 py-3 mt-4 text-lg font-bold text-gray-900 border-2 border-gray-400 rounded-xl font-pj hover:bg-gray-900 hover:text-white sm:mt-0 sm:ml-4"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.18 13.426C6.859 14.392 5 13.448 5 11.811V5.439C5 3.802 6.859 2.858 8.18 3.824L12.54 7.01C13.634 7.809 13.634 9.441 12.54 10.24L8.18 13.426Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Watch free demo
                            </motion.a>
                        </motion.div>

                        <motion.p 
                            className="mt-8 text-base text-gray-500 font-inter"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                            60 Days free trial · No credit card required
                        </motion.p>
                    </motion.div>
                </div>

                <div className="pb-12 bg-white">
                    <div className="relative">
                        <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                        <div className="relative mx-auto">
                            <motion.img 
                                className="transform scale-110"
                                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                                alt=""
                                variants={imageVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ 
                                    scale: 1.15,
                                    transition: { duration: 0.3 }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;