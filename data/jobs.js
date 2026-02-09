const titles = [
  "React Developer",
  "Python Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Node.js Developer",
  "Django Developer",
  "Java Developer",
  "Software Engineer"
];

const companies = [
  "TCS",
  "Infosys",
  "Wipro",
  "HCL",
  "Zoho",
  "Capgemini",
  "Cognizant",
  "Accenture",
  "Freshworks",
  "Tech Mahindra"
];

const locations = [
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Mumbai",
  "Pune",
  "Delhi",
  "Noida",
  "Coimbatore"
];

const skillsList = [
  "React, JavaScript, HTML, CSS",
  "Python, Django, REST API",
  "Node.js, Express, MongoDB",
  "Java, Spring Boot",
  "SQL, MySQL, PostgreSQL",
  "Redux, TypeScript",
  "Git, GitHub",
  "AWS, Docker"
];

const jobs = [];

for (let i = 1; i <= 150; i++) {
  jobs.push({
    id: i,
    title: titles[i % titles.length],
    company: companies[i % companies.length],
    location: locations[i % locations.length],
    salary: `${3 + (i % 5)} - ${6 + (i % 6)} LPA`,
    description:
      "We are looking for passionate developers to build scalable and modern applications.",

    responsibilities: [
      "Develop and maintain web applications",
      "Collaborate with cross-functional teams",
      "Write clean and scalable code",
      "Debug and improve performance"
    ],

    requirements: [
      "1-3 years of relevant experience",
      "Strong problem-solving skills",
      "Good understanding of core concepts",
      "Ability to work in a team"
    ],

    preferred: [
      "Experience with cloud platforms",
      "Knowledge of DevOps practices"
    ],

    skills: skillsList[i % skillsList.length]
  });
}

export default jobs;
