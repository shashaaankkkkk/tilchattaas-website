import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const HowItWorks = () => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentStep < 3) {
                setCurrentStep(prev => prev + 1);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [currentStep]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    const steps = [
        {
            number: 1,
            title: "Create a free account",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            number: 2,
            title: "Build your website",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            number: 3,
            title: "Release & Launch",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        }
    ];

    const StepNumber = ({ number, isCompleted, isActive }) => (
        <div 
            className={`flex items-center justify-center w-16 h-16 mx-auto rounded-full ${
                isCompleted || isActive
                    ? 'bg-blue-500 shadow-lg shadow-blue-200' 
                    : 'bg-white border-2 border-gray-200'
            }`}
        >
            <Check className={`w-8 h-8 ${isCompleted || isActive ? 'text-white' : 'text-gray-400'}`} />
        </div>
    );

    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <motion.div 
                    className="max-w-2xl mx-auto text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        How does it work?
                    </h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Follow these three simple steps to get started with our platform.
                    </p>
                </motion.div>

                <div className="relative mt-12 lg:mt-20">
                    <motion.div 
                        className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Progress Lines */}
                        <div className="hidden md:block absolute top-1/2 w-full" style={{ transform: 'translateY(-50%)' }}>
                            <div className="mx-auto w-full px-24">
                                {/* First Line */}
                                <div className="absolute left-[25%] right-[50%] h-1.5 bg-gray-200 rounded-full">
                                    <motion.div 
                                        className="h-full bg-blue-500 rounded-full"
                                        initial={{ width: "0%" }}
                                        animate={{ width: currentStep >= 1 ? "100%" : "0%" }}
                                        transition={{ duration: 0.8 }}
                                    />
                                </div>
                                {/* Second Line */}
                                <div className="absolute left-[50%] right-[25%] h-1.5 bg-gray-200 rounded-full">
                                    <motion.div 
                                        className="h-full bg-blue-500 rounded-full"
                                        initial={{ width: "0%" }}
                                        animate={{ width: currentStep >= 2 ? "100%" : "0%" }}
                                        transition={{ duration: 0.8 }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Steps */}
                        {steps.map((step, index) => (
                            <motion.div 
                                key={step.number}
                                variants={itemVariants}
                                className="relative z-10"
                            >
                                <StepNumber 
                                    number={step.number}
                                    isCompleted={currentStep > index}
                                    isActive={currentStep === index}
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <h3 className={`mt-6 text-xl font-semibold leading-tight md:mt-10 ${
                                        currentStep >= index ? 'text-blue-600' : 'text-gray-400'
                                    }`}>
                                        {step.title}
                                    </h3>
                                    <p className={`mt-4 text-base ${
                                        currentStep >= index ? 'text-gray-600' : 'text-gray-400'
                                    }`}>
                                        {step.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
