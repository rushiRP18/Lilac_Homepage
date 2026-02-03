import React from 'react';

const specialties = [
  {
    title: "Self-Esteem",
    description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: "/self-esteem.webp", 
  },
  {
    title: "Relationships",
    description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: "/Relationships.jpg",
  },
  {
    title: "Burnout",
    description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: "/Burnout.jpg",
  }
];

const Specialties = () => {
  return (
    <section className="bg-[#FAF7F2] py-12 px-4 md:px-8 font-sans min-h-screen flex flex-col justify-center">
      <div className="max-w-[1440px] mx-auto w-full">
        
        {/* Reduced bottom margin to bring cards closer to heading */}
        <h2 className="text-[#1A3C1A] text-4xl md:text-5xl text-center mb-10 font-medium tracking-tight">
          My Specialties
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {specialties.map((item, index) => (
            <div 
              key={index} 
              className="border border-[#A8A8A8] bg-[#e5e0da] p-8 flex flex-col items-start"
            >
              <h3 className="text-[#1A3C1A] text-lg font-semibold mb-4">
                {item.title}
              </h3>
              
              {/* Tightened description text */}
              <p className="text-[#2D2D2D] text-[12px] leading-snug mb-8 max-w-[95%]">
                {item.description}
              </p>

              {/* Adjusted Image Size for Screen Fit */}
              <div className="mx-auto w-56 h-56 lg:w-64 lg:h-64 overflow-hidden rounded-full border border-gray-300 shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;