import { motion } from 'framer-motion';
import { TimelineItem } from '../types';

const timelineData: TimelineItem[] = [
  {
    date: "2023",
    title: "Founded Tech Startup",
    description: "Led development of innovative quant trading solutions"
  },
  {
    date: "2022",
    title: "Published Research Paper",
    description: "Machine learning applications in quantitative finance"
  },
  // Add more timeline items as needed
];

const About = () => {
  const education = [
    {
      school: "New Jersey Institute of Technology (NJIT)",
      degree: "B.S. in Computer Science",
      minor: "Minor in Mathematics of Finance & Actuarial Science",
      awards: ["Freshman Highlander Scholarship", "Highlander Achievement Scholar"],
      courses: [
        "Data Structures & Algorithms",
        "Programming Language Concepts (C++)",
        "Differential Equations",
        "Data Science",
        "Calculus III",
        "Discrete Mathematics",
        "Quantum Physics",
        "Database Design & Management",
        "Performance Modeling in Computing",
        "Applied Numerical Methods"
      ]
    },
    {
      school: "Ridge High School, Basking Ridge, NJ",
      degree: "High School Diploma",
      gpa: "GPA: 4.45",
      awards: ["National Honors Science Society"]
    }
  ];

  const awards = [
    {
      title: "URI Seed Grant ($3,000)",
      description: "Research Phase 2 under Dr. SangWoo Park (Only freshman accepted)"
    },
    {
      title: "YTBC Next100 Entrepreneurs",
      description: "Recognized among the top 100 young entrepreneurs"
    },
    {
      title: "Climate Launchpad India Round Finalist",
      description: "Finalist in global green business competition"
    },
    {
      title: "Entrepreneurship Campus",
      description: "Top 10 BEST Youth Ideas (2021)"
    },
    {
      title: "Future Innovators",
      description: "Children's Science Foundation"
    }
  ];



  return (
    <div className="max-w-6xl mx-auto space-y-16">
      <section>
        <h1 className="page-title">About Me.</h1>
        <div className="glass-container p-8 rounded-xl">
          <p className="text-lg text-white/80 leading-relaxed">
            I'm a Computer Science sophomore at NJIT with expected graduation December 2026, and a passion for building scalable solutions 
            at the intersection of technology and finance. With experience in both startup leadership 
            and technical development, I focus on creating innovative solutions that drive real-world impact.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="section-title">Education.</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="glass-container p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{edu.school}</h3>
              <p className="text-white/80">{edu.degree}</p>
              {edu.minor && <p className="text-white/80">{edu.minor}</p>}
              <p className="text-white/60 mt-1">{edu.gpa}</p>
              {edu.awards && (
                <div className="mt-3">
                  <div className="flex flex-wrap gap-2">
                    {edu.awards.map((award, i) => (
                      <span key={i} className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-sm">
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {edu.courses && (
                <div className="mt-4">
                  <p className="text-white/60 mb-2">Key Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="section-title">Awards & Recognition.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="glass-container p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">{award.title}</h3>
              <p className="text-white/60">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About; 