import emoji from "react-easy-emoji";

const greeting = {
  username: "Amogh K",
  title: "Hello Folks, I'm Amogh K ",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an well built skill of Web Development with Python Django / JavaScript / ReactJS / NodeJS / NextJS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1p7L0cTBTQJ7JaNSO2u3J6FDctAcm_ITY/view?usp=sharing",
  displayGreeting: true,
};

const socialMediaLinks = {
  github: "https://github.com/Amogh-Ak",
  linkedin: "https://www.linkedin.com/in/amogh-kalasad-a3202b1b4/",
  gmail: "amoghkalasad7@gmail.com",
  instagram: "https://www.instagram.com/king__ak_08/",
  medium: "https://medium.com/@amoghkalasad7",
  stackoverflow: "https://stackoverflow.com/users/18572379/amogh-k",
  display: true,
};

const membersData = [
    {
        name: "Amogh Ak",
        designation: "MERN Stack Developer",
        img: "img/Ak.jpeg",
        type: "filter-app"
    },
    {
        name: "Sandesh Vanwadi",
        designation: "MERN Stack Developer",
        img: "img/Sandesh.jpeg",
        type: "filter-web"
    }
]

const servicesData = [
    {
        title: "Static Web Application",
        icon: "bx bx-desktop",
        description: "Craft elegant and fast-loading static web applications that showcase your brand or business beautifully."
    },
    {
        title: "Interactive Web Application",
        icon: "bx bxs-devices",
        description: "Engage your users with interactive web applications that respond in real-time, creating remarkable experiences."
    },
    {
        title: "UI/UX Design",
        icon: "bx bx-color",
        description: "Craft user interfaces that are intuitive and user-friendly, enhancing the overall user experience."
    },
    {
        title: "Backend API Solutions",
        icon: "bx bxl-nodejs",
        description: "Develop and integrate powerful backend APIs to fuel your web applications and enable smooth functionality."
    },
    {
        title: "Third Party API Integration",
        icon: "bx bx-world",
        description: "Leverage the potential of third-party APIs to extend your app's capabilities and deliver value-added features"
    },
    {
        title: "Hosting and Deployment",
        icon: "bx bx-world",
        description: "Ensure smooth performance and availability with top-notch hosting and deployment solutions."
    },

]

export {
  greeting,
  socialMediaLinks,
  membersData,
  servicesData
};
