import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RotatingSkills from './GhumtiChakri';

const Integration = () => {
    const [randomizedOrbits, setRandomizedOrbits] = useState([]);

    const techElements = [
        { name: "AWS EC2", color: "#FF9900", category: "cloud" },
        { name: "AWS S3", color: "#FF9900", category: "cloud" },
        { name: "Azure VM", color: "#008AD7", category: "cloud" },
        { name: "GCP Cloud", color: "#4285F4", category: "cloud" },
        { name: "Kubernetes", color: "#326CE5", category: "cloud" },
        { name: "Docker", color: "#2496ED", category: "cloud" },
        { name: "GitHub", color: "#181717", category: "dev" },
        { name: "GitLab", color: "#FCA121", category: "dev" },
        { name: "VS Code", color: "#007ACC", category: "dev" },
        { name: "npm", color: "#CB3837", category: "dev" },
        { name: "Grafana", color: "#F46800", category: "monitoring" },
        { name: "Prometheus", color: "#E6522C", category: "monitoring" },
        { name: "Datadog", color: "#632CA6", category: "monitoring" },
        { name: "Slack", color: "#4A154B", category: "integration" },
        { name: "Discord", color: "#5865F2", category: "integration" },
        { name: "Intercom", color: "#2196F3", category: "integration" },
        { name: "MongoDB", color: "#47A248", category: "database" },
        { name: "PostgreSQL", color: "#4169E1", category: "database" },
        { name: "Redis", color: "#DC382D", category: "database" }
    ];

    useEffect(() => {
        const generateRandomOrbits = () => {
            const numberOfOrbits = 4;
            const orbits = [];

            for (let i = 0; i < numberOfOrbits; i++) {
                const itemsInOrbit = Math.floor(Math.random() * 2) + 3;
                const orbitItems = [];
                const availableItems = [...techElements];
                for (let j = 0; j < itemsInOrbit; j++) {
                    const randomIndex = Math.floor(Math.random() * availableItems.length);
                    const item = availableItems.splice(randomIndex, 1)[0];
                    
                    orbitItems.push({
                        ...item,
                        rotationDuration: 15 + Math.random() * 20,
                        startRotation: Math.random() * 360,
                        orbitTilt: Math.random() * 60 - 30,
                        reverseRotation: Math.random() > 0.5
                    });
                }
                
                orbits.push({
                    items: orbitItems,
                    radius: (i + 2) * 100,
                    tilt: Math.random() * 60 - 30
                });
            }
            
            return orbits;
        };

        setRandomizedOrbits(generateRandomOrbits());
    }, []);

    return (
        <motion.section 
            className="py-10 bg-white sm:py-16 lg:py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
                    <div className="relative flex items-center justify-center h-[600px] overflow-hidden">

                           <RotatingSkills/>
                        

                   
                    </div>

                    <motion.div 
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2 
                            className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
                        >
                            Your tech ecosystem in motion.
                        </motion.h2>
                        
                        <motion.p 
                            className="mt-6 text-base text-gray-600"
                        >
                            Watch as cloud services, development tools, and integrations orbit 
                            and interact in perfect harmony. Each element plays its unique role 
                            in your digital infrastructure, creating a dynamic and scalable 
                            technology universe.
                        </motion.p>

                        <motion.a
                            href="#"
                            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md mt-9 hover:bg-blue-700 focus:bg-blue-700"
                            role="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore our tech universe
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Integration;
