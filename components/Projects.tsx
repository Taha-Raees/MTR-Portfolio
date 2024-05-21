import Carousel from './Carousel';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const projects = [
  {
    title: "Catering Management Web App",
    description: "Developed a centralized platform for managing a food catering service on food trucks, encompassing event scheduling, inventory management, staff coordination, and an integrated POS system for financial oversight. The app streamlined operational processes, improved efficiency, and enhanced data-driven decision-making.(Login: taharaees, Password: 0343)",
    stack: [ "Nextjs", "Node.js", "Express", "postgreSQL", "Prisma", "AWS","Material UI","Tauri","Capacitor"],
    github: "https://github.com/Taha-Raees/FB-System",
    site: "https://fb-system.vercel.app/",
    images: [
      { src: "/images/project1-1.png", alt: "Catering Management Web App Screenshot 1" },
      { src: "/images/project1-2.png", alt: "Catering Management Web App Screenshot 2" },
      { src: "/images/project1-3.png", alt: "Catering Management Web App Screenshot 3" },
      { src: "/images/project1-4.png", alt: "Catering Management Web App Screenshot 4" },
      { src: "/images/project1-5.png", alt: "Catering Management Web App Screenshot 5" },
      { src: "/images/project1-6.png", alt: "Catering Management Web App Screenshot 6" },
      { src: "/images/project1-7.png", alt: "Catering Management Web App Screenshot 7" },
      { src: "/images/project1-8.png", alt: "Catering Management Web App Screenshot 8" },
      { src: "/images/project1-9.png", alt: "Catering Management Web App Screenshot 9" },
      { src: "/images/project1-10.png", alt: "Catering Management Web App Screenshot 10" },
      { src: "/images/project1-11.png", alt: "Catering Management Web App Screenshot 11" },
    ],
  },
  {
    title: "E-commerce Platform",
    description: "Built a full responsive E-commerce platform . The platform features product listings, shopping cart, checkout, and order management.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Shadcn UI", "Stripe", "Clerk"],
    github: "https://github.com/Taha-Raees/MyStore",
    site: "https://my-store-six-project.vercel.app/",
    images: [
      { src: "/images/project2-1.png", alt: "Meta Front-End Developer Certificate Screenshot 1" },
      { src: "/images/project2-2.png", alt: "Meta Front-End Developer Certificate Screenshot 2" },
      { src: "/images/project2-3.png", alt: "Meta Front-End Developer Certificate Screenshot 3" },
      { src: "/images/project2-4.png", alt: "Meta Front-End Developer Certificate Screenshot 4" },
      { src: "/images/project2-5.png", alt: "Meta Front-End Developer Certificate Screenshot 5" },
      { src: "/images/project2-6.png", alt: "Meta Front-End Developer Certificate Screenshot 6" },
    ],
  },
  {
    title: "Store Management System",
    description: "Developed a store management system to handle product listings, orders, customer information, and more. Built using Next.js, TypeScript, MongoDB, and Shadcn UI.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Shadcn UI"],
    github: "https://github.com/Taha-Raees/MyStoreDashboard",
    site: "https://my-store-dashboard.vercel.app/",
    images: [
      { src: "/images/project3-1.png", alt: "Meta Front-End Developer Certificate Screenshot 1" },
      { src: "/images/project3-2.png", alt: "Meta Front-End Developer Certificate Screenshot 2" },
      { src: "/images/project3-3.png", alt: "Meta Front-End Developer Certificate Screenshot 3" },
      { src: "/images/project3-4.png", alt: "Meta Front-End Developer Certificate Screenshot 4" },
      { src: "/images/project3-5.png", alt: "Meta Front-End Developer Certificate Screenshot 5" },
      
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-20 px-5 lg:px-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">My Latest Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-10 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 lg:pr-10 mb-5 lg:mb-0">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-lg mb-5">{project.description}</p>
              <ul className="mb-5">
                {project.stack.map((tech, idx) => (
                  <li key={idx} className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded mr-2 mb-2">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4 mb-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon fontSize="large" />
                </a>
                <a href={project.site} target="_blank" rel="noopener noreferrer">
                  <LanguageIcon fontSize="large" />
                </a>
              </div><hr />
            </div>
            <div className="lg:w-1/2">
              <Carousel images={project.images} />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
