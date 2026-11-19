// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: "Arya Jambhore",
  firstName: "Arya",
  role: "IT student · Data & ML",
  location: "Darwin, NT",
  email: "aryajambhore07@gmail.com",
  github: "https://github.com/Aryajambhore",
  linkedin: "", // add your LinkedIn URL to show it in the contact section
  summary:
    "Bachelor of Information Technology student at Charles Darwin University with hands-on experience in Python, SQL, data analysis and machine learning. I build practical projects in predictive modelling, classification and data analysis, and I'm looking for opportunities in data analytics.",
};

export const skills = [
  {
    group: "Programming",
    items: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    group: "Data & Analytics",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel"],
  },
  {
    group: "Tools",
    items: ["Jupyter Notebook", "Streamlit", "Git", "GitHub", "React"],
  },
];

// Replace `link` with each project's repo or live demo URL.
export const projects = [
  {
    title: "Digit Recognizer App",
    tag: "Machine Learning",
    visual: "digits",
    description:
      "An interactive app where you draw a digit on a canvas and a trained machine-learning model predicts which number it is.",
    stack: ["Python", "Streamlit", "NumPy"],
    link: "https://github.com/Aryajambhore",
  },
  {
    title: "Titanic Survival Predictor",
    tag: "Classification",
    visual: "titanic",
    description:
      "A classification model built with scikit-learn that predicts passenger survival from features like class, age, sex and fare.",
    stack: ["Python", "Pandas", "scikit-learn"],
    link: "https://github.com/Aryajambhore",
  },
  {
    title: "Linear Regression from Scratch",
    tag: "Fundamentals",
    visual: "regression",
    description:
      "Linear regression implemented without ML libraries, covering gradient descent, model training and prediction step by step.",
    stack: ["Python", "NumPy", "Pandas", "Matplotlib"],
    link: "https://github.com/Aryajambhore",
  },
];

export const education = [
  {
    degree: "Bachelor of Information Technology",
    school: "Charles Darwin University",
    place: "Darwin, NT",
    when: "Current",
  },
  {
    degree: "Bachelor of Information Technology – Artificial Intelligence major",
    school: "Macquarie University",
    place: "Sydney, NSW",
    when: "Previously studied",
  },
];

export const courses = [
  {
    title: "Python for Data Science and Machine Learning Bootcamp",
    by: "Jose Portilla · Udemy",
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    by: "Dr. Angela Yu · Udemy",
  },
];

export const experience = [
  {
    role: "Kitchen Hand",
    company: "House Made Hospitality, Sydney",
    when: "Jan 2026 – Jul 2026",
    points: [
      "Supported food preparation, kitchen setup and service in a fast-paced environment.",
      "Maintained hygiene standards and helped train new team members on kitchen workflow.",
    ],
  },
  {
    role: "Casual Worker",
    company: "Pinnacle People / Alseasons, Sydney",
    when: "Sep 2025 – Jul 2026",
    points: [
      "Worked across corporate catering and event venues, including Qudos Bank Arena.",
      "Front-of-house and cashier work in retail stores.",
    ],
  },
];

export const certifications = [
  "RSA – Responsible Service of Alcohol",
  "Food Handler Certificate",
];
