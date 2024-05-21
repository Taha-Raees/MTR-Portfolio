import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-5 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0 order-2 lg:order-1">
          <h1 className="text-4xl lg:text-6xl font-bold mb-5">Hi, I&apos;m Muhammad Taha Raees</h1>
          <p className="text-lg lg:text-xl mb-5">
            I&apos;m a Full Stack Web Developer with a passion for diving into projects from the outset and crafting impactful solutions. My proficiency in front-end frameworks like React and Next.js allows me to build dynamic and interactive interfaces that captivate users. I continuously strive to deliver exceptional user interfaces and seamless user experiences, I bring a blend of creativity and technical prowess to every project.
          </p>
          <a href="#projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            View My Projects
          </a>
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2 mb-10 lg:mb-0 flex justify-center">
          <Image 
            src="/profile.jpg" 
            alt="Profile Image" 
            width={350} 
            height={400} 
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

