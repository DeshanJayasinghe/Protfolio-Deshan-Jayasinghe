"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiPostman, SiKubernetes, SiGithubactions, SiLaravel, SiSpring, SiFlutter, SiMysql, SiMongodb, SiSqlite } from 'react-icons/si';



//about data
const about = {
  title: 'About Me',
  description: "Hands-on experience in developing 20+ full-stack web and mobile applications with proven skills in frontend/backend development and UI/UX integration.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Deshan Jayasinghe"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 71 0825 142"
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years"
    },
    {
      fieldName: "E-mail",
      fieldValue: "djayasinghe684@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lanka"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala"
    },
  ]
}

//experience data
const experience = [
  {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "Hands-on experience in developing 20+ full-stack web and mobile applications with proven skills in frontend/backend development and UI/UX integration.",
    items: [
      {
        company: 'API & GenAI Tour Sri Lanka 2025',
        position: 'Vice Chairperson',
        duration: 'Jan 2025 - Dec 2025'
      },
      {
        company: 'Freelancer',
        position: 'Freelance Developer / Assignment Mentor',
        duration: 'Oct 2022 - Feb 2025'
      },
      {
        company: 'SLIIT SE Student Community',
        position: 'SESC Active Member',
        duration: '2023 - Present'
      },
      {
        company: 'SLIIT LEO Club',
        position: 'Volunteer & Member',
        duration: '2023 - Present'
      }
    ]
  }
];

//education data

// education data
const education = [
  {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description:
      'Pursuing a BSc (Hons) in IT (Software Engineering) at SLIIT, alongside multiple certifications in AI, web development, and mobile application frameworks.',
    items: [
      {
        institution: 'SLIIT',
        degree: 'BSc(Hons) in IT (SE)',
        duration: 'Oct 2022 - Oct 2026'
      },
      {
        institution: 'Microsoft / Azure AI',
        degree: 'RAG & Copilot Chatbot ',
        duration: '2024'
      },
      {
        institution: 'Pieces for Developers',
        degree: 'AI Development',
        duration: '2024'
      },
      {
        institution: 'Kegalu Vidyalaya',
        degree: 'GCE Advanced Level - Physical Science(CCS)',
        duration: '2019 - 2022'
      },
      {
        institution: 'Kegalu Vidyalaya',
        degree: 'GCE Ordinary Level - English Medium(8A, 1B)',
        duration: '2016 - 2018'
      }
    ]
  }
];


const skills = [
  {
    title: "Programming Languages",
    description: "Experienced in modern and object-oriented programming languages for backend and frontend development.",
    skillList: [
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <FaFigma />, name: "Figma" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" }
    ]
  },
  {
    title: "Frameworks & Technologies",
    description: "Hands-on experience with modern frameworks, server-side technologies, and scalable systems.",
    skillList: [
      { icon: <FaNodeJs />, name: "Express.js" },
      { icon: <SiLaravel />, name: "Laravel" },
      { icon: <SiSpring />, name: "Spring Boot" },
      { icon: <SiFlutter />, name: "Flutter" },
      { icon: <FaReact />, name: "OSGi Framework" },
      { icon: <FaReact />, name: "JWT Auth" }
    ]
  },
  {
    title: "Databases",
    description: "Efficient in both relational and non-relational databases for secure data storage and retrieval.",
    skillList: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiSqlite />, name: "SQLite" }
    ]
  },
  {
    title: "Tools & DevOps",
    description: "Version control, containerization, and tools used in development workflows and testing.",
    skillList: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiGithubactions />, name: "CI/CD" },
      { icon: <SiKubernetes />, name: "Kubernetes" }
    ]
  },
];


import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';
const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    {/* Access the first object in the experience array */}
    <h3 className="text-4xl font-bold">{experience[0]?.title || "Default Title"}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {experience[0]?.description || "Default Description"}
    </p>
    <ScrollArea className="h-[400px] overflow-auto">
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
  {experience[0]?.items.map((item, index) => (
    <li
      key={index}
      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
    >
      <span className="text-accent">{item.duration}</span>
      <h4 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h4>
      <div className="flex items-center gap-3">
        {/* dot */}
        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
        <p className="text-white/60">{item.company}</p>
      </div>
    </li>
  ))}
</ul>

    </ScrollArea>
  </div>
</TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full"> 
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
    {/* Access the first object in the experience array */}
    <h3 className="text-4xl font-bold">{education[0]?.title || "Default Title"}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {education[0]?.description || "Default Description"}
    </p>
    <ScrollArea className="h-[400px] overflow-auto">
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
  {education[0]?.items.map((item, index) => (
    <li
      key={index}
      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
    >
      <span className="text-accent">{item.duration}</span>
      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
      <div className="flex items-center gap-3">
        {/* dot */}
        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
        <p className="text-white/60">{item.institution}</p>
      </div>
    </li>
  ))}
</ul>

    </ScrollArea>
  </div>
               </TabsContent>
            {/* skills */}
{/* skills */}
<TabsContent value="skills" className="w-full h-full"> 
  <div className="flex flex-col gap-[30px]">
    {skills.map((section, sectionIndex) => (
      <div key={sectionIndex} className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{section.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{section.description}</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
          {section.skillList.map((skill, skillIndex) => (
            <li key={skillIndex}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>  
</TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left"> 
            <div className="flex flex-col gap-[30px] ">
              <h3 className="text-4xl font-bold">
                {about.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=> {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              
            </div>
            </TabsContent>
            </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
