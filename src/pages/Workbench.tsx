import { motion } from 'framer-motion';

function Workbench() {
  const research = {
    title: "Biogas Optimization Research",
    description: "Published research on biogas optimization in Harvard Alumni Network. Developed predictive methane yield models achieving 10% cost reduction through innovative biomass processing techniques.",
    stack: "Research • Statistical Analysis • Predictive Modeling",
    metrics: ["Published Research", "10% Cost Reduction", "Harvard Alumni Network"]
  };

  const workExperience = [
    {
      title: "Co-founder & CTO",
      company: "Nexuzforge Private Limited",
      period: "July 2022 - Present",
      description: "Leading technical strategy and product development for B2B SaaS solutions.",
      achievements: [
        "Led delivery of 20+ AI-driven B2B SaaS products",
        "40% reduction in system downtime",
        "30% increase in client retention",
        "35% boost in operational efficiency",
        "50% faster software delivery time"
      ]
    },
    {
      title: "Data Analyst",
      company: "Mathnasium Bridgewater",
      period: "Jan 2023 - June 2024",
      description: "Developed comprehensive analytics systems and performance tracking methodologies.",
      achievements: [
        "45% reduction in reporting time",
        "40% increase in instructor efficiency",
        "20% improvement in learning outcomes",
        "30% faster data retrieval"
      ]
    },
    {
      title: "Research Author",
      company: "Independent",
      period: "Aug 2022 - Aug 2023",
      description: "Conducted research on biogas production optimization with significant findings.",
      achievements: [
        "15% improvement in efficiency",
        "Published in Harvard Alumni Network",
        "Validated by Duke & Harvard Medical scholars",
        "10% reduction in production costs"
      ]
    },
    {
      title: "Business Intelligence Researcher",
      company: "Nawvel",
      period: "May 2021 - Aug 2021",
      description: "Conducted market research and strategy analysis for global companies.",
      achievements: [
        "100+ hours of podcast analysis",
        "25% improvement in decision-making",
        "20+ company research reports",
        "Used by HEC Paris alumni teams"
      ]
    },
    {
      title: "Incubator Participant",
      company: "Climate Launchpad",
      period: "Mar 2021 - July 2021",
      description: "Developed sustainable energy solutions for dairy farms.",
      achievements: [
        "80% projected farmer income increase",
        "Finalist in 5+ global competitions",
        "15+ investor connections",
        "30+ farmer validations"
      ]
    }
  ];

  const projects = [
    {
      title: "CarbonForge",
      description: "Blockchain-powered carbon credit trading platform with NFT integration. Built for transparency and efficiency in carbon markets.",
      stack: "Solidity • React • Node.js • IPFS • Smart Contracts",
      metrics: [
        "40% faster transactions",
        "98% data accuracy",
        "Best Business Idea in Energy",
        "IIT & BITS Finalist"
      ]
    },
    {
      title: "ML-Based Sentiment Analysis",
      description: "NLP-powered stock market prediction system analyzing social media sentiment.",
      stack: "Python • NLP • MongoDB • AWS • Deep Learning",
      metrics: [
        "1M+ tweets analyzed",
        "78% prediction accuracy",
        "2-4% price fluctuation tracking"
      ]
    },
    {
      title: "Volatility Prediction System",
      description: "LSTM-based deep learning model for intraday stock market volatility prediction.",
      stack: "Python • TensorFlow • Pandas • Financial APIs",
      metrics: [
        "82% accuracy rate",
        "15% reduced forecast errors",
        "12% strategy improvement"
      ]
    },
    {
      title: "Power BI Analytics Suite",
      description: "Comprehensive business intelligence dashboard with predictive analytics integration.",
      stack: "Power BI • DAX • SQL • Python",
      metrics: [
        "35% faster decisions",
        "10% better forecasting",
        "Real-time analytics"
      ]
    },
    {
      title: "Blockchain Implementation",
      description: "Custom blockchain with advanced cryptographic security and optimized verification.",
      stack: "Java • Cryptography • P2P Networking",
      metrics: [
        "256-bit encryption",
        "30% faster verification",
        "Distributed consensus"
      ]
    },
    {
      title: "Monte Carlo Simulation",
      description: "Financial modeling tool for option pricing and risk assessment using C++.",
      stack: "C++ • CUDA • Statistical Models • Risk Analysis",
      metrics: [
        "1M+ scenarios processed",
        "18% better risk assessment",
        "20% faster computation"
      ]
    },
    {
      title: "Vizion Z Renewables",
      description: "Decentralized biomass energy model for rural dairy farmers in India.",
      stack: "Financial Modeling • Sustainability • Market Analysis",
      metrics: [
        "2x energy production",
        "80% income increase",
        "7+ competition finals"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-16">
      {/* Research Section */}
      <section>
        <h1 className="page-title">Research.</h1>
        <motion.div
          className="glass-container p-6 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="project-title">{research.title}</h3>
          <p className="text-white/70 mb-4">{research.description}</p>
          <div className="tech-stack mb-4">{research.stack}</div>
          <div className="flex flex-wrap gap-2">
            {research.metrics.map((metric, i) => (
              <span key={i} className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-sm">
                {metric}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Work Experience Section */}
      <section>
        <h1 className="page-title">Work Experience.</h1>
        <div className="space-y-6">
          {workExperience.map((work, index) => (
            <motion.div
              key={index}
              className="glass-container p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{work.title}</h3>
                  <p className="text-white/60">{work.company}</p>
                </div>
                <span className="text-white/40 text-sm mt-2 md:mt-0">{work.period}</span>
              </div>
              <p className="text-white/70 mb-4">{work.description}</p>
              <div className="flex flex-wrap gap-2">
                {work.achievements.map((achievement, i) => (
                  <span key={i} className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-sm">
                    {achievement}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="section-title">Projects.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-container p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="text-white/50 font-mono text-sm mb-4">{project.stack}</div>
              <div className="flex flex-wrap gap-2">
                {project.metrics.map((metric, i) => (
                  <span key={i} className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-sm">
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Workbench; 