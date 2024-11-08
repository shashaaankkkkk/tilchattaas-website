import React from 'react';
import { motion } from 'framer-motion';

const Brands = () => {
    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    // Heading animation variants
    const headingVariants = {
        hidden: { 
            opacity: 0,
            x: -50
        },
        visible: { 
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Logo animation variants
    const logoVariants = {
        hidden: { 
            opacity: 0,
            y: 30,
            scale: 0.8
        },
        visible: { 
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    // Logo hover animation
    const logoHoverVariants = {
        hover: {
            scale: 1.1,
            filter: "brightness(1.1)",
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.95
        }
    };

    // Array of logo data
    const logos = [
        { src: "https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-vertex.svg", alt: "Vertex Logo" },
        { src: "https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-squarestone.svg", alt: "Squarestone Logo" },
        { src: "https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-martino.svg", alt: "Martino Logo" },
        { src: "https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-waverio.svg", alt: "Waverio Logo" }
    ];

    return (
        <motion.section 
            className="py-12 bg-white sm:py-16 lg:py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="xl:flex xl:items-center xl:justify-between">
                    <motion.h2 
                        className="text-xl font-bold text-center text-gray-400 xl:text-left font-pj"
                        variants={headingVariants}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            1000+
                        </motion.span>{" "}
                        Big brands trust us
                    </motion.h2>

                    <div className="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8">
                        {logos.map((logo, index) => (
                            <motion.div
                                key={index}
                                variants={logoVariants}
                                whileHover="hover"
                                whileTap="tap"
                                custom={index}
                                {...logoHoverVariants}
                                className="flex items-center justify-center"
                            >
                                <motion.img
                                    className="object-contain w-auto mx-auto h-9"
                                    src={logo.src}
                                    alt={logo.alt}
                                    initial={{ filter: "grayscale(100%)" }}
                                    whileHover={{
                                        filter: "grayscale(0%)",
                                        transition: { duration: 0.2 }
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative animated gradient background */}
            <motion.div
                className="absolute inset-0 -z-10 opacity-10"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.05, 0.1, 0.05],
                    transition: {
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100" />
            </motion.div>
        </motion.section>
    );
};

export default Brands;