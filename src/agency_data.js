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
        type: "filter-app"
    },
    // {
    //   name: "Omkar Tikare",
    //   designation: "Frontend Developer",
    //   img: "img/Omkar.jpeg",
    //   type: "filter-card"
    // }
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
    {
      title: "Custom Logical Utilities",
      icon: "bx bx-world",
      description: "Harnessing the Power of Custom Logic: Simplifying Workflows with Smart and Scalable Utility Solutions in Python, JavaScript, and More"
    },
    {
      title: "Content Writing",
      icon: "bx bxs-book-content",
      description: "Unlock your brand's potential with our expert content writing service. We craft compelling narratives that captivate, inform, and drive results."
    },
]

const aboutData = {
  title: "Empowering Connections in the Digital Realm",
  shortDesc: "We provide top-notch web development and design services, delivering innovative solutions for your online success.",
  started: "December 2022",
  website: "https://solutionsdeck.netlify.app/",
  phone: "+917019828816, +91 95273 15508",
  country: "India",
  age: "---",
  experience: "5+",
  email: "solutionsdeckagency@gmail.com",
  freelance: "Open to Hire",
  briefDesc: "We are a passionate team of tech-savvy experts dedicated to crafting exceptional websites and digital solutions. With a keen eye for design and cutting-edge technologies, we create user-friendly experiences that drive results. From custom web development to responsive design, we cater to businesses of all sizes, helping them thrive in the digital landscape. Let's build your online success story together!",
  countsData : [
    {
      name: "Years of Combined Experience",
      count: "5",
      icon: "bi bi-journal-richtext"
    },
    {
      name: "Projects",
      count: "10",
      icon: "bi bi-journal-richtext"
    },
    {
      name: "Cups Of Coffee",
      count: "239",
      icon: "bx bx-coffee-togo"
    },
    {
      name: "Lines of Code",
      count: "9987",
      icon: "bi bi-emoji-smile"
    },
  ],
  skillsData: [
    {
      name: "HTML",
      value: "100",
    },
    {
      name:"CSS",
      value: "98"
    },
    {
      name:"JavaScript",
      value: "90"
    },
    {
      name:"Python",
      value: "80"
    },
    {
      name: "Django Framework",
      value: "70"
    },
    {
      name:"ReactJS",
      value: "100"
    },
    {
      name:"ExpressJS",
      value: "100"
    },
    {
      name:"MongoDB",
      value: "100"
    },
    {
      name:"NodeJS",
      value: "100"
    },
    {
      name: "AWS",
      value: "70"
    },
  ],
  QAs: [
    {
      title: "What we can do",
      desc: "We offer a full range of web development services, including website design, programming, and optimization, tailored to meet your unique business needs.",
    },
    {
      title: "Mission And Vision",
      desc: "Mission is to Empowering success through exceptional web solutions.And Vision to creating a digital future of limitless possibilities through innovative uptrend technologies.",
    },
    {
      title: "Open for Freelancers",
      desc: "Absolutely! We are open to collaborating with skilled and talented freelancers who can contribute to our projects and bring fresh perspectives to the table.",
    },
    {
      title: "Expertise and Specialisation",
      desc: "Dynamic web apps, captivating mobile experiences, seamless API integrations, and e-commerce solutions. With a focus on user experience, security, and performance optimization, we empower success.",
    }
  ]
}

const packagesData = [
  {
    title: "Static WebSite",
    type: "non-featured",
    features: [
      {
        name: "funtionalWebsite",
        visible: false,
      }, 
      {
        name: "contentUpload",
        visible: false,
      },
      {
        name: "eCommerceFunctionality", 
        visible: false,
      },
      {
        name: "paymentProcessing", visible: false,
      },
      {
        name: "optInForm", visible: true,
      },
      {
        name: "autoResponderIntegration", visible: true,
      },
      {
        name: "speedOptimization", visible: false,
      },
      {
        name: "hostingSetup", visible:false,
      },
      {
        name: "socialMediaSignins", visible: false,
      },
      {
        name: "3 pages", visible: true,
      },
      {
        name: "3 products", visible: true
      },
      {
        name: "1 revisions",
        visible: true,
      },
      {
        name: "designCustomization", visible: false,
      },
      {
        name: "includeSourceCode", 
        visible: false,
      },
      {
        name: "detailedCodeComments",
        visible: false,
      },
      {
        name: "prototype", visible: false,
      },
  ],
  deliveryTime: "5",
  price:"Starting Range 8,999/-",
  },
  {
    title: "Dynamic WebSite",
    type: "featured",
    features: [
      {
        name: "funtionalWebsite",
        visible: true,
      }, 
      {
        name: "contentUpload",
        visible: true,
      },
      {
        name: "eCommerceFunctionality", 
        visible: false,
      },
      {
        name: "paymentProcessing", visible: false,
      },
      {
        name: "optInForm", visible: true,
      },
      {
        name: "autoResponderIntegration", visible: true,
      },
      {
        name: "speedOptimization", visible: false,
      },
      {
        name: "hostingSetup", visible:false,
      },
      {
        name: "socialMediaSignins(2)", visible: true,
      },
      {
        name: "5 pages", visible: true,
      },
      {
        name: "8 products", visible: true
      },
      {
        name: "3 revisions",
        visible: true,
      },
      {
        name: "designCustomization", visible: true,
      },
      {
        name: "includeSourceCode", 
        visible: false,
      },
      {
        name: "detailedCodeComments",
        visible: false,
      },
      {
        name: "prototype", visible: false,
      },
  ],
  deliveryTime: "25",
  price:"Starting Range 49,999/-",
  },
  {
    title: "Compelte Web",
    title2: "Application",
    type: "non-featured",
    features: [
      {
        name: "funtionalWebsite",
        visible: true,
      }, 
      {
        name: "contentUpload",
        visible: true,
      },
      {
        name: "eCommerceFunctionality", 
        visible: true,
      },
      {
        name: "paymentProcessing", visible: true,
      },
      {
        name: "optInForm", visible: true,
      },
      {
        name: "autoResponderIntegration", visible: true,
      },
      {
        name: "speedOptimization", visible: true,
      },
      {
        name: "hostingSetup", visible: true,
      },
      {
        name: "socialMediaSignins(2)", visible: true,
      },
      {
        name: "10 pages", visible: true,
      },
      {
        name: "Unlimited products", visible: true
      },
      {
        name: "10 revisions",
        visible: true,
      },
      {
        name: "designCustomization", visible: true,
      },
      {
        name: "includeSourceCode", 
        visible: true,
      },
      {
        name: "detailedCodeComments",
        visible: true,
      },
      {
        name: "prototype", visible: true,
      },
  ],
  deliveryTime: "60",
  price:"Starting range 95,000/-",
  },
  {
    title: "Custom Logical",
    title2: "Utilities",
    type: "non-featured",
    features: [
      {
        name: "High-End logics", visible: true,
      },
      {
        name: "Usage of different Utilities", visible: true,
      }
    ],
    price: "Starting range 3,999/-"
  },
  {
    title: "UI/UX",    
    type: "non-featured",
    features: [
      {
        name: "Visual Design",
        visible: true,
      },
      {
        name: "User-centered Approach",
        visible: true,
      },
      {
        name: "Responsiveness",
        visible: true,
      },
      {
        name: "Information Architecture",
        visible: true,
      }
  ],
  deliveryTime: "60",
  price:"Starting range 1,499 / page",
  },
  {
    title: "Backend API's",
    type: "non-featured",
    features: [
      {
        name: "Scalability", visible: true,
      },
      {
        name: "Security", visible: true,
      },
      {
        name: "Performance Optimization", visible: true,
      },
      {
        name: "Rate Limiting", visible: true,
      },
      {
        name: "Webhooks", visible: true,
      },
      {
        name: "Cross-Origin Resource Sharing(CORS)", visible: true,
      },
    ],
    price: "Starting range 14,999/-"
  },
  {
    title: "Custom Website",
    title2: "From Scratch",
    features: [
      {
        name: "Basic site", visible: true
      },
      {
        name: "E-commerce Add-on", visible: true,
      },
      {
        name: "Payment Integration Add-on", visible: true,
      },
      {
        name: "Hosting Add-on", visible: true,
      },
      {
        name: "Monthly Maintaince", visible: true,
      },
      {
        name: "Various Add-on's", visible: true,
      }
    ]
  },
  {
    title: "Hosting",
    type: "non-featured",
    features: [
      {
        name: "Deploy sites with top-tier based Platforms", visible: true,
      },
      {
        name: "Monthly Site Maintaince", visible: true,
      },
      {
        name: "Password-protected sites", visible: true,
      },
      {
        name: "Live site previews with a collaboration UI", visible: true,
      },
      {
        name: "Deploy static assets & dynamic serverless functions", visible: true,
      }
    ],
    price: "Starting range 5,999/-"
  },
  {
    title: "Content",
    title2: "Writing",
    features: [
      {
        name:"Understanding of business & customers", visible: true,
      },
      {
        name: "Putting across the relevant content", visible: true,
      },
      {
        name: "Vision and mission statement", visible: true,
      },
      {
        name: "Content which captivates and attracts audience", visible: true,
      },
      {
        name: "SEO covered as per the Industry standards", visible: true,
      }
    ],
    price: "Starting range 3 / word"
  },
]

export {
  greeting,
  socialMediaLinks,
  membersData,
  servicesData,
  aboutData,
  packagesData
};
