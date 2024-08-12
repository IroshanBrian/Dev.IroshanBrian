import images from '../assets/images';

export type Experience = {
     company_name: string;
     date: string;
     icon: string;
     iconBg: string;
     title: string;
     points: string[];
};

export const experiences: Experience[] = [
     {
          title: "Freelance Graphics Designer",
          company_name: "Fiverr",
          icon: "https://freelogopng.com/images/all_img/1656737178fiverr-logo-png.png",
          iconBg: "#FFF1DB",
          date: "March 2020 - April 2022",
          points: [
               "Developing and maintaining web applications using React.js and other related technologies.",
               "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
               "Implementing responsive design and ensuring cross-browser compatibility.",
               "Participating in code reviews and providing constructive feedback to other developers.",
          ],
     },
     {
          title: "Full-Stack Freelance Developer",
          company_name: "Fiverr",
          icon: "https://freelogopng.com/images/all_img/1656737178fiverr-logo-png.png",
          iconBg: "#FFF1DB",
          date: "Jan 2023 - Present",
          points: [
               "Developing and maintaining web applications using React.js and other related technologies.",
               "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
               "Implementing responsive design and ensuring cross-browser compatibility.",
               "Participating in code reviews and providing constructive feedback to other developers.",
          ],
     },
     {
          title: "Content Creator",
          company_name: "NavigatSL",
          icon: images.navi,  // Updated to use imported image
          iconBg: "#FFF1DB",
          date: "May 2024 - Present",
          points: [
               "Developing and maintaining web applications using React.js and other related technologies.",
               "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
               "Implementing responsive design and ensuring cross-browser compatibility.",
               "Participating in code reviews and providing constructive feedback to other developers.",
          ],
     },
     {
          title: "CEO",
          company_name: "FloxTravel",
          icon: images.flox,  // Updated to use imported image
          iconBg: "#a2d2ff",
          date: "June 2024 - Present",
          points: [
               "Developing and maintaining web applications using React.js and other related technologies.",
               "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
               "Implementing responsive design and ensuring cross-browser compatibility.",
               "Participating in code reviews and providing constructive feedback to other developers.",
          ],
     },
     {
          title: "Founder & CEO",
          company_name: "INFI Digital",
          icon: images.infi,  // Updated to use imported image
          iconBg: "#b7e4c7",
          date: "July 2024 - Present",
          points: [
               "Developing and maintaining web applications using React.js and other related technologies.",
               "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
               "Implementing responsive design and ensuring cross-browser compatibility.",
               "Participating in code reviews and providing constructive feedback to other developers.",
          ],
     },
     {
          title: "Full-Stack Developer",
          company_name: "INFI Digital",
          icon: images.infi,  // Updated to use imported image
          iconBg: "#b7e4c7",
          date: "July 2024 - Present",
          points: [
               "Developing and maintaining web applications using React.js and other related technologies.",
               "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
               "Implementing responsive design and ensuring cross-browser compatibility.",
               "Participating in code reviews and providing constructive feedback to other developers.",
          ],
     },

];
