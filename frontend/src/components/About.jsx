import React, { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 bg-black text-white">
      
      {/* Left Side - "About" text */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <h1 className="text-6xl md:text-8xl font-bold text-cyan-400 drop-shadow-lg font-serif">
          About Me
        </h1>
      </div>

      {/* Right Side - About Content */}
      <div className="md:w-1/2 space-y-6">

        {/* First Paragraph - Always Visible */}
        <p className="text-white leading-relaxed">
         I am an enthusiastic and creative individual with a strong passion for web design and technology. 
         Though I am driven by curiosity and a desire to learn and grow every day. I enjoy exploring new 
         digital tools and design trends, which helps me stay inspired and motivated. Beyond my interest in 
         web design, I am a problem-solver who loves taking on challenges and finding innovative solutions, 
         whether in my personal projects or collaborative environments.
        </p>
          <>
            <p className="text-white leading-relaxed">
               I am a strong believer in lifelong learning and continuously seek opportunities 
               to enhance my skills, whether through online courses, tutorials, or collaborating with peers.
               This mindset allows me to stay adaptable and open to new ideas, which is essential in the ever-evolving field of web design.
                am excited to bring my fresh ideas, positive attitude, and dedication to each project I work on, striving to make a
                meaningful impact through design. My goal is to craft websites that not only look beautiful but also create memorable,
                user-centered digital experiences.
            </p>
            <p className="text-white leading-relaxed">
              When starting a new project, I thoroughly research and analyze the target 
              audience and the client’s specific requirements. This enables me to tailor 
              my designs to meet their expectations and deliver a unique presence 
              that aligns with their brand identity.
            </p>
          </>
      </div>
    </section>
  );
}

export default About;
