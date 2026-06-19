/**
 * Portfolio Data Configuration - Razeena TM
 * Professional Blue-White Theme Content Data
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Razeena TM",
    titles: ["Software Engineer", "MIS Coordinator", "M.Tech CSE Student"],
    bio: "Bridging Education, Technology, and Innovation. Over 12 years of experience in education technology, systems coordination, and academic instruction.",
    cvLink: "assets/Razeena_TM_Resume.pdf",
    avatar: "assets/razeena_avatar.png",
    socials: [
      { name: "GitHub", url: "https://github.com", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "Email", url: "mailto:hello@razeenatm.com", icon: "email" }
    ]
  },
  stats: [
    { value: "12+", label: "Years Experience" },
    { value: "SSK", label: "Govt Ed-Tech Coordinator" },
    { value: "10+", label: "Academic Years Taught" },
    { value: "M.Tech", label: "CSE Research Scholar" }
  ],
  about: {
    story: "I am a Software Engineer and Academic Educator with over 12 years of professional experience in education technology, academic administration, and software support systems. Currently, I am pursuing my postgraduate M.Tech in Computer Science & Engineering while working as an MIS Coordinator in the General Education Department of Kerala. I am deeply passionate about digital transformation, technical problem solving, and mentoring future engineers.",
    subStory: "My career has focused on two major streams: engineering education and education database administration. As an Assistant Professor at the College of Engineering Trikaripur, I spent over a decade teaching core CS subjects, supervising labs, and guiding student project architectures. At Samagra Shiksha Kerala, I managed massive database systems and educational coordination portals for the government."
  },
  education: [
    {
      degree: "M.Tech in Computer Science & Engineering",
      year: "2025 - 2027",
      institution: "Postgraduate Research Scholar",
      score: "Specializing in Intelligent Systems & Advanced Architecture"
    },
    {
      degree: "B.Tech in Computer Science & Engineering",
      year: "Cochin University (CUSAT)",
      institution: "College of Engineering Trikaripur",
      score: "Graduated with aggregate: 73%"
    }
  ],
  achievements: [
    {
      title: "12+ Years Experience",
      desc: "Proven track record in systems coordination, software support, and teaching.",
      icon: "experience"
    },
    {
      title: "Ed-Tech Specialist",
      desc: "Designed and supported critical government education MIS infrastructure.",
      icon: "tech"
    },
    {
      title: "Academic Mentor",
      desc: "Supervised numerous student technical seminars and research lab activities.",
      icon: "mentor"
    },
    {
      title: "Govt System Contributor",
      desc: "Supported SSK in coordinating statewide schools database management systems.",
      icon: "gov"
    },
    {
      title: "M.Tech CSE Scholar",
      desc: "Conducting active research in advanced computer science methodologies.",
      icon: "scholar"
    }
  ],
  skills: [
    {
      category: "Technical Stack",
      items: [
        { name: "C / C++ Programming", level: 90 },
        { name: "Python Development", level: 85 },
        { name: ".NET Framework (ASP.NET)", level: 88 },
        { name: "SQL Databases (MySQL / MSSQL)", level: 92 },
        { name: "HTML5 / CSS3 Layouts", level: 95 },
        { name: "Linux & Windows Systems", level: 85 }
      ]
    },
    {
      category: "Management & Methods",
      items: [
        { name: "MIS & System Administration", level: 95 },
        { name: "Software Development Lifecycle", level: 88 },
        { name: "Technical Training & Mentoring", level: 92 },
        { name: "Microsoft Office Suite Pro", level: 95 }
      ]
    },
    {
      category: "Professional Strengths",
      items: [
        { name: "Analytical Problem Solving", level: 95 },
        { name: "Technical Leadership", level: 90 },
        { name: "Academic Supervision", level: 92 },
        { name: "Adaptability & Learning", level: 95 }
      ]
    }
  ],
  projects: [
    {
      id: "braille-web",
      title: "Braille Web",
      subtitle: "Accessibility Web Application",
      description: "An accessibility-focused web application designed to assist visually impaired individuals. Built using ASP.NET and MySQL databases.",
      fullDescription: "Braille Web is an accessibility-oriented portal developed to translate website elements into screen-reader readable structures and simulated Braille interfaces. Utilizing an ASP.NET MVC backend, it connects to a optimized MySQL database managing student accessibility profiles. Designed to ensure compliance with global Web Content Accessibility Guidelines (WCAG).",
      categories: ["web"],
      tech: ["ASP.NET", "C#", "MySQL", "Web Accessibility", "HTML5"],
      image: "assets/project_braille.png",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: "crime-file",
      title: "Crime File System",
      subtitle: "Relational Database Portal",
      description: "A secure relational database application tracking, logging, and structuring law enforcement record databases.",
      fullDescription: "Crime File is a secure database management system designed to log crime records, suspect files, and case details. Built with robust relational schema design, utilizing triggers and transaction rollbacks to prevent data inconsistency. Features a clean search dashboard for police coordinators to generate case statistics.",
      categories: ["web"],
      tech: ["SQL Database", "Relational Mapping", "C# Interface", "Database Security"],
      image: "assets/project_crime.png",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: "domotics",
      title: "Domotics Seminar",
      subtitle: "Home Automation Architecture",
      description: "A comprehensive technical research project on Home Automation (Domotics) protocols and IoT architectures.",
      fullDescription: "This project presents a structured architectural study of modern Domotics (Home Automation). It details communication protocols (Zigbee, Z-Wave, Wi-Fi), microcontroller routing topologies, sensor hub integrations, and safety overrides. Focuses on low-power architectures for smart energy utilization.",
      categories: ["design"],
      tech: ["Domotics Architecture", "IoT Protocols", "Smart Systems", "Energy Management"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600&h=400",
      liveUrl: "#",
      codeUrl: "#"
    }
  ],
  experience: [
    {
      period: "2013 - 2025 August",
      role: "MIS Coordinator",
      company: "Samagra Shiksha Kerala, General Education Department",
      description: "Coordinated statewide education management systems (MIS) and administrative databases. Provided essential technical support, server maintenance, data analysis dashboards, and digital infrastructure training for general education staff."
    },
    {
      period: "2011 - 2022",
      role: "Assistant Professor (Computer Science)",
      company: "College of Engineering Trikaripur",
      description: "Instructed core Computer Science and Engineering courses. Guided undergraduate student projects, managed computer engineering laboratory operations, mentored academic research, and supported departmental administration workflows."
    }
  ]
};

// Export variables if in node env, else make global for script tags
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
} else {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
