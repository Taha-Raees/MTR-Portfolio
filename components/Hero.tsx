import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-5 lg:px-20 relative">
      <div className="absolute top-5 right-5 flex space-x-4">
        <a
          href="https://github.com/Taha-Raees/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/raees-muhammad-taha/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          <LinkedInIcon fontSize="large" />
        </a>
      </div>
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


