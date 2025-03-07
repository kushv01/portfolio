import { motion } from 'framer-motion';

const Landing = () => {





  const stats = [
    {
      number: "15+",
      label: "B2B Products"
    },
    {
      number: "35%",
      label: "Efficiency Boost"
    },
    {
      number: "98%",
      label: "Data Accuracy"
    },
    {
      number: "40%",
      label: "System Optimization"
    }
  ];

  const techStack = [
    {
      category: "Data & ML",
      items: ["Python", "NumPy", "Pandas", "SiKit", "Matplotlib", "Seaborn", "SciKit-learn", "TensorFlow", "PyTorch", "NLP", "Deep Learning", "Clustering", "XGBoost", "Prompt Engineering", "MATLAB", "Time Series Analysis", "Optimization", "Monte Carlo Simulations", "Markov Chains", "PowerBI"]
    },
    {
      category: "Development",
      items: ["JavaScript", "React.js", "Node.js", "Express.js", "Three.js", "Tailwind.CSS", "GSAP", "Full Stack", "Systems Design", "AWS", "Docker", "Firebase", "Git", "CI/CD", "Agile & Scrum", "API Dev", "Multithreading", "Concurrency"]
    },
    {
      category: "Languages",
      items: ["English", "Hindi", "Mandarin"]
    },
  ];

  return (
    <div className="min-h-screen">
      
      <div className="max-w-4xl mx-auto pt-20 pb-16">
        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl font-bold mb-4 text-center page-title">
                Hi, I'm Kushagra<span className="text-[#ff4d00]">.</span>
              </h1>
              <h1 className="text-3xl font-thin mb-6 text-center page-title">
                Decoding Markets, Engineering Solutions.
              </h1>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="md:w-1/2 aspect-square max-w-[300px] rounded-2xl overflow-hidden relative group bg-[#ff4d00]/50 border border-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/assets/headshot.png"
              alt="Kushagra's Profile"
              className="w-full h-full object-cover rounded-2xl border border-[#2563eb]/10 hover:border-[#2563eb]/30 transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* Centered Resume Button */}
        <div className="flex justify-center mb-16">
          <motion.a
            href="/assets/kushagraVermaResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="minimal-button px-6 py-3 rounded-lg font-medium text-[#ff4d00] border-[#ff4d00] border-2 relative overflow-hidden hover:bg-[#ff4d00]/10 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Resume
          </motion.a>
        </div>

        {/* Main Title */}


        <h2 className="text-2xl text-gray-300 mb-8 font-light text-center">
          Developer • Researcher • Founder
        </h2>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-[#ff4d00]">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics Explanation */}
        <motion.div
          className="mt-8 text-center max-w-2xl mx-auto text-white/60 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>
            At Nexuzforge, led the delivery of 15+ diverse B2B solutions ranging from web applications to creative services.
            Implemented AI-driven automation achieving 35% efficiency improvements in client operations, while maintaining 98% accuracy
            in production ML models. Reduced system downtime by 40% through optimized cloud architecture and automated deployment pipelines.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="mt-12 w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-[#ff4d00] text-center font-bold mb-6 text-2xl italic">Stack</h3>
          <div className="grid grid-col-1 gap-6">
            {techStack.map((category, index) => (
              <div key={index} className="text-center">
                <h4 className="text-white/80 text-sm mb-2">{category.category}</h4>
                <div className="flex flex-wrap text-white-60 justify-center gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing; 