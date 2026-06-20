/**
 * Portfolio Data Configuration - Razeena TM
 * Professional Blue-White Theme Content Data
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "RAZEENA T M",
    titles: [
      "M.Tech Networks & Computer Science",
      "MIS Coordinator",
      "Assistant Professor",
      "Cybersecurity & Networking Enthusiast"
    ],
    bio: "Dedicated IT professional with 12+ years of experience in Information Systems Management, Technical Support, Academic Instruction, and Educational Technology. Currently pursuing M.Tech in Networks & Computer Science with a strong interest in Cybersecurity, Network Engineering, Machine Learning, and Digital Transformation.",
    cvLink: "assets/Razeena_TM_Resume.pdf",
    avatar: "assets/razeena_avatar.png",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com/in/razeena-tm-aba200416", icon: "linkedin" },
      { name: "Email", url: "mailto:razee337@gmail.com", icon: "email" }
    ]
  },
  stats: [
    { value: "12+", label: "Years as MIS Coordinator" },
    { value: "1", label: "Year Academic Teaching" },
    { value: "M.Tech", label: "Networks & Computer Science" }
  ],
  about: {
    story: "I am an experienced IT professional currently pursuing M.Tech in Network Engineering and Security. My career spans technical support, educational technology management, academic teaching, and information systems administration. I have extensive experience training teachers and headmasters, managing statewide educational information systems, and supporting technology-driven initiatives.",
    interests: [
      "Cybersecurity",
      "Network Security",
      "Python Development",
      "Machine Learning",
      "Digital Education Systems",
      "Network Administration",
      "Technical Support"
    ]
  },
  education: [
    {
      degree: "M.Tech in Computer Science and Engineering (Networks & Security)",
      year: "2025 – 2027",
      institution: "Government Engineering College Wayanad",
      university: "APJ Abdul Kalam Technological University",
      score: "Postgraduate"
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      year: "2007-11",
      institution: "College of Engineering Trikaripur",
      university: "Cochin University",
      score: "Graduated with 73%"
    }
  ],
  experience: [
    {
      period: "2013 – Present",
      role: "MIS Coordinator",
      company: "Samagra Shiksha Kerala",
      responsibilities: [
        "Managed educational MIS systems",
        "Technical support and troubleshooting",
        "Data management and reporting",
        "Training teachers and headmasters",
        "Educational technology implementation",
        "IT infrastructure support"
      ]
    },
    {
      period: "2011 – 2012",
      role: "Assistant Professor",
      company: "College of Engineering Trikaripur",
      responsibilities: [
        "Teaching Computer Science subjects",
        "Conducting laboratory sessions",
        "Project guidance and mentoring",
        "Academic administration",
        "Student development activities"
      ]
    }
  ],
  skills: [
    {
      category: "Programming",
      items: [
        { name: "Python", level: 90 },
        { name: "C", level: 85 },
        { name: "C++", level: 80 },
        { name: "SQL", level: 88 },
        { name: "Bash", level: 82 },
        { name: "ASP.NET", level: 78 },
        { name: "VB.NET", level: 75 }
      ]
    },
    {
      category: "Cybersecurity",
      items: [
        { name: "Wireshark", level: 88 },
        { name: "Nmap", level: 90 },
        { name: "Burp Suite", level: 80 },
        { name: "Kali Linux", level: 85 },
        { name: "Vulnerability Assessment", level: 82 },
        { name: "Network Monitoring", level: 85 },
        { name: "Security Analysis", level: 84 }
      ]
    },
    {
      category: "Networking",
      items: [
        { name: "TCP/IP", level: 92 },
        { name: "DNS", level: 88 },
        { name: "DHCP", level: 90 },
        { name: "Routing & Switching", level: 85 },
        { name: "Network Troubleshooting", level: 92 },
        { name: "LAN/WAN Architecture", level: 88 }
      ]
    },
    {
      category: "Operating Systems",
      items: [
        { name: "Linux Administration", level: 88 },
        { name: "Windows Systems", level: 90 }
      ]
    },
    {
      category: "Professional Skills",
      items: [
        { name: "Technical Support & MIS", level: 95 },
        { name: "Training & Mentoring", level: 92 },
        { name: "System Documentation", level: 90 },
        { name: "Technical Leadership", level: 88 },
        { name: "Professional Communication", level: 92 }
      ]
    }
  ],
  projects: [
    {
      id: "suspicious-web-traffic",
      title: "Suspicious Web Traffic Detection",
      subtitle: "Machine Learning Based Cyber Threat Shield",
      description: "Developed a hybrid machine learning model using Random Forest and Isolation Forest to identify suspicious web traffic and detect cybersecurity threats.",
      fullDescription: "Suspicious Web Traffic Detection is a network security monitoring application designed to detect cyber threats. It parses raw web logs or network flow packets and classifies them into normal, suspicious, or malicious activities. Implements a dual-model structure: Isolation Forest filters out obvious outliers, while Random Forest performs precise multiclass threat classification.",
      categories: ["web"],
      tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Machine Learning"],
      image: "assets/project_aetheria.png",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: "braille-web",
      title: "Braille Web System",
      subtitle: "Accessibility Web Application",
      description: "Developed an accessible web application supporting Braille-enabled functionality to empower visually impaired users.",
      fullDescription: "The Braille Web System is a custom educational and accessibility platform designed for visually challenged learners. It supports dynamic screen translation, keyboard shortcut navigation, and tactile Braille display simulation, saving user settings and profiles securely inside a MySQL backend with an ASP.NET application shell.",
      categories: ["web"],
      tech: ["ASP.NET", "MySQL", "C#", "Web Accessibility", "HTML5"],
      image: "assets/project_braille.png",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: "crime-file",
      title: "Crime File Management System",
      subtitle: "Secure Relational Record Portal",
      description: "Developed a secure database-driven crime record management application featuring cryptographic integrity.",
      fullDescription: "The Crime File Management System provides a secure, relational platform for law enforcement agencies to catalog, audit, and trace case reports, evidence chains, and court files. Developed using VB.NET and an MS SQL Server backend, employing robust transactional rollbacks and user role security profiles.",
      categories: ["web"],
      tech: ["VB.NET", "SQL Server", "Database Security", "Relational Mapping"],
      image: "assets/project_crime.png",
      liveUrl: "#",
      codeUrl: "#"
    }
  ],
  certifications: [
    { name: "AI Integrated Cybersecurity and Networking Internship", icon: "shield" },
    { name: "Python Programming", icon: "code" },
    { name: "Linux Administration", icon: "terminal" },
    { name: "Network Security Training", icon: "network" },
    { name: "Cybersecurity Workshops", icon: "lock" }
  ],
  achievements: [
    "12+ years of professional experience as MIS Coordinator in Samagra Shiksha Kerala",
    "Trained hundreds of teachers and school headmasters in educational technology systems",
    "Guided and mentored numerous Computer Science undergraduate engineering student projects",
    "Managed statewide educational technical support and MIS databases for government initiatives",
    "Pursuing postgraduate specialization in Computer Science (Network Security) to research modern threat defense"
  ]
};

// Export variables if in node env, else make global for script tags
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
} else {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
