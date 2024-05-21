"use client"
import React, { useState } from 'react';
import Carousel from './Carousel';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';

interface Image {
  src: string;
  alt: string;
}

const projects = [
  {
    title: "Catering Management Web App",
    description: "Developed a centralized platform for managing a food catering service on food trucks, encompassing event scheduling, inventory management, staff coordination, and an integrated POS system for financial oversight. The app streamlined operational processes, improved efficiency, and enhanced data-driven decision-making.(Login: taharaees, Password: 0343)",
    stack: ["Nextjs", "Node.js", "Express", "postgreSQL", "Prisma", "AWS", "Material UI", "Tauri", "Capacitor"],
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
    description: "Built a full responsive E-commerce platform. The platform features product listings, shopping cart, checkout, and order management.",
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
    description: "Developed a comprehensive store management system to handle product listings, collections, orders, and customer information. This system allows for the addition of new products and collections, provides insights into profits and expenses, and efficiently manages orders. With a clean and intuitive interface, the system streamlines store operations, ensuring efficient management and smooth user experience.",
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
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<Image[]>([]);

  const handleClickOpen = (images: Image[]) => {
    setSelectedImages(images);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImages([]);
  };


  return (
    <div id="projects" className="bg-gray-900 text-gray-100 py-20 px-5 lg:px-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">My Latest Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className={`mb-20 border border-gray-300 p-5 rounded-md shadow-lg lg:flex lg:items-center lg:justify-between ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`lg:w-1/2 lg:pr-10 mb-5 lg:mb-0 ${index % 2 === 1 ? 'lg:pl-10' : ''}`}>
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <hr className="mb-5" />
              <p className="text-lg mb-5">{project.description}</p>
              <ul className="mb-5">
                {project.stack.map((tech, idx) => (
                  <li key={idx} className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded mr-2 mb-2">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4 mb-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500 transition-colors duration-200"
                >
                  <GitHubIcon fontSize="large" />
                </a>
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500 transition-colors duration-200"
                >
                  <LanguageIcon fontSize="large" />
                </a>
              </div>
            </div>
            <Tooltip title="Click to view full size" arrow>
              <div
                className="lg:w-1/2 cursor-pointer relative"
                onClick={() => handleClickOpen(project.images)}
              >
                <Carousel images={project.images} />
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
      <hr />
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>
          Project Images
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#000',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent  className="custom-scroll" style={{ height: 'auto', width:'75vw', }}>
          <Carousel images={selectedImages} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
