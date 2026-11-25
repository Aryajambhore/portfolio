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
    items: ["Jupyter Notebook", "Streamlit", "React", "Express", "PostgreSQL", "Git"],
  },
];

// Replace `link` with each project's repo or live demo URL.
export const projects = [
  {
    title: "Darwin SmartGrow",
    tag: "Full-stack · IoT",
    visual: "smartgrow",
    description:
      "An IoT monitoring dashboard for a community-garden irrigation pilot in Darwin. Tracks soil moisture, temperature, humidity and tank level across four irrigation zones, with water-use analytics, alerts and fail-safe manual controls. Runs on a realistic sensor simulation or live PostgreSQL data through an Express REST API.",
    stack: ["React", "Tailwind CSS", "Recharts", "Express", "PostgreSQL"],
    link: "https://github.com/Aryajambhore/SmartGrow",
  },
  {
    title: "Handwritten Digit Recognizer",
    tag: "Machine Learning",
    visual: "digits",
    description:
      "Draw a digit in the browser and a model trained on MNIST predicts it live, with a confidence score and probability chart. The drawing is preprocessed MNIST-style (cropped, scaled and centred by mass) and classified by a neural network (~98% accuracy) or logistic regression (~92%).",
    stack: ["Python", "Streamlit", "scikit-learn", "OpenCV"],
    link: "https://github.com/Aryajambhore/digit-classifier",
  },
  {
    title: "Fake News Detector",
    tag: "NLP",
    visual: "fakenews",
    description:
      "An NLP model that classifies news articles as real or fake. Text is turned into TF-IDF features and classified with a Passive Aggressive Classifier, reaching 99.5% accuracy on the Kaggle Fake and Real News dataset.",
    stack: ["Python", "scikit-learn", "TF-IDF", "Jupyter"],
    link: "https://github.com/Aryajambhore/Fake-News-detector",
  },
  {
    title: "Linear Regression from Scratch",
    tag: "Fundamentals",
    visual: "regression",
    description:
      "Predicts used-car selling prices from the CarDekho dataset with linear regression written without ML libraries: hand-coded gradient descent, feature scaling, categorical encoding and MSE loss.",
    stack: ["Python", "NumPy", "Pandas", "Matplotlib"],
    link: "https://github.com/Aryajambhore/Linear-regression-from-scratch",
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
