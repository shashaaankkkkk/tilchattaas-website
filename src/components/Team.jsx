import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [

    {
      name: 'Anshul Singh Chauhan',
      role: 'Co-Founder & CTO',
      background: 'bg-green-200',
      image: 'https://i.ibb.co/F828Qrj/nabalik.png',
      socials: {
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Satturiyaaa',
      role: 'Founder & CEO',
      background: 'bg-orange-200',
      image: 'https://i.ibb.co/C58jjM6/IMG-3882-removebg-preview.png',
      socials: {
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Shashank Shekhar',
      role: 'Choder kumar',
      background: 'bg-purple-200',
      image: 'https://i.ibb.co/TWKfJjP/CHODER.png',
      socials: {
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#f7f8f9]">
      {/* Full width gradient background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-10 blur-3xl"
          style={{ 
            background: `
              linear-gradient(180deg, #f7f8f9 40%, transparent ),
              linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)
            `
          }}
        ></div>
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet our team of creators,
              <br />
              designers, and world-class
              <br />
              problem <span className="italic">solvers</span>
            </h1>
            <p className="text-lg text-gray-600">
              We provide experienced advisors to help your company
              <br />
              become more successful in the future.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
            {teamMembers.map((member, index) => (
              <div key={index} className={`flex flex-col overflow-hidden rounded-lg ${member.background}`}>
                <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                  <div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-72 left-7 object-cover rounded-lg mb-4"
                    />
                    <div className="p-2">
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                      
                      {/* Social Icons */}
                      <div className="flex gap-4 mt-3">
                        <a href={member.socials.instagram} className="text-gray-600 hover:text-gray-900">
                          <Instagram size={20} />
                        </a>
                        <a href={member.socials.linkedin} className="text-gray-600 hover:text-gray-900">
                          <Linkedin size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;