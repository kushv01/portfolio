import { motion } from 'framer-motion';
import { useState } from 'react';

function Logbook() {
  const [selectedLog, setSelectedLog] = useState<number | null>(null);

  const logs = [
    {
      date: "March 2024",
      reading: "Reading this month: 'Quantum Computing: An Applied Approach' by Jack D. Hidary",
      title: "Quantum Computing in Financial Markets",
      category: "Advanced Computing",
      description: "Deep dive into quantum algorithms for financial applications, focusing on portfolio optimization and risk analysis using Qiskit.",
      tags: ["Quantum Computing", "Finance", "Qiskit", "Optimization"],
      notes: `
        Study Notes:
        - Quantum Basics:
          • Superposition and entanglement are key for financial modeling
          • Quantum gates can represent complex financial operations
          • Need at least 50-100 qubits for meaningful financial applications
        
        Research Findings:
        1. Portfolio Optimization:
           • Quantum algorithms show 100x speedup potential
           • Tested QAOA for portfolio rebalancing
           • Current limitation: noise in quantum systems
        
        2. Risk Analysis:
           • Implemented VaR calculations on quantum circuit
           • Monte Carlo simulations show promising results
           • Challenge: maintaining quantum coherence
        
        Implementation Details:
        \`\`\`python
        # Sample Qiskit code for portfolio optimization
        from qiskit import QuantumCircuit, execute, Aer
        
        def create_portfolio_circuit(assets):
            qc = QuantumCircuit(len(assets), len(assets))
            for i in range(len(assets)):
                qc.h(i)  # Create superposition
            return qc
        \`\`\`
        
        Personal Thoughts:
        - Quantum advantage still 3-5 years away for finance
        - Need to focus on error correction first
        - Hybrid classical-quantum approaches most promising
        
        Action Items:
        1. Implement basic portfolio optimizer
        2. Test with real market data
        3. Compare with classical algorithms
        4. Study quantum error correction
        
        Progress Tracking:
        - [x] Basic Qiskit setup
        - [x] Simple quantum circuits
        - [ ] Real data integration
        - [ ] Performance benchmarking
      `
    },
    {
      date: "February 2024",
      reading: "Reading this month: 'Inside the Black Box' by Rishi K. Narang",
      title: "High-Frequency Trading Systems Architecture",
      category: "Quantitative Finance",
      description: "Building and optimizing low-latency trading systems with focus on market microstructure and order book dynamics.",
      tags: ["HFT", "C++", "Market Microstructure", "Low Latency"],
      notes: `
        System Architecture:
        1. Data Flow:
            • Market data ingestion (UDP multicast)
            • Order book reconstruction
            • Signal generation
            • Risk checks
            • Order management
        
        Implementation Notes:
        \`\`\`cpp
        // Lock-free order book implementation
        class OrderBook {
            std::atomic<Price> best_bid_;
            std::atomic<Price> best_ask_;
            lockfree::queue<Order> orders_;
        public:
            void update(const MarketData& md) noexcept;
        };
        \`\`\`
        
        Performance Metrics:
        - Market data processing: < 1 microsecond
        - Order book updates: < 500 nanoseconds
        - Signal generation: < 2 microseconds
        - Total roundtrip: < 5 microseconds
        
        Key Learnings:
        1. Hardware Considerations:
            • CPU affinity crucial
            • NUMA awareness needed
            • Network card optimization
        
        2. Software Optimization:
            • Zero-copy messaging
            • Custom memory allocators
            • Careful use of templates
        
        Challenges Faced:
        - Clock synchronization issues
        - Jitter in network stack
        - Cache coherency problems
        
        Research Notes:
        - Tested different order book designs
        - Analyzed impact of different matching engines
        - Studied various exchange protocols
        
        Market Microstructure Insights:
        1. Price Formation:
            • Order flow imbalance signals
            • Toxic flow detection
            • Spread dynamics
        
        2. Risk Management:
            • Position limits
            • Order rate checks
            • Value checks
        
        Further Reading:
        - "Flash Boys" by Michael Lewis
        - "Algorithmic Trading" by Ernie Chan
        - Exchange technical specifications
      `
    },
    {
      date: "January 2024",
      title: "Advanced Market Microstructure",
      category: "Quantitative Finance",
      description: "Deep dive into order book dynamics and high-frequency trading patterns.",
      tags: ["HFT", "Market Microstructure", "Order Flow", "Python"],
      notes: `
        Research Notes:
        - Order book imbalance signals are promising
        - Latency is still king in HFT
        - Market making strategies need careful risk management
        
        Key Observations:
        1. Price impact models need revision for modern markets
        2. Tick size changes significantly affect strategy performance
        3. Co-location becoming increasingly important
        
        Code Snippets:
        - Implemented basic order book reconstruction
        - Built real-time imbalance calculator
        - Testing various alpha signals
        
        Further Research:
        Look into machine learning for order flow prediction
      `
    },
    {
      date: "December 2023",
      title: "Smart Contract Security: Lessons from Recent DeFi Hacks",
      category: "Blockchain",
      description: "Examining recent DeFi vulnerabilities and implementing secure smart contract patterns. Focus on reentrancy guards and flash loan attack prevention.",
      tags: ["Ethereum", "Smart Contracts", "Security", "DeFi"]
    },
    {
      date: "November 2023",
      title: "Real-time Data Processing with Apache Kafka",
      category: "Data Engineering",
      description: "Implementation of real-time market data processing pipeline using Kafka streams. Handling high-frequency trading data with minimal latency.",
      tags: ["Kafka", "Stream Processing", "Java", "Big Data"]
    },
    {
      date: "October 2023",
      title: "Advanced SQL Optimization Techniques",
      category: "Database",
      description: "Deep dive into query optimization, indexing strategies, and performance tuning in PostgreSQL for large-scale financial data.",
      tags: ["SQL", "Database", "Performance", "PostgreSQL"]
    },
    {
      date: "March 2023",
      title: "Building Scalable Microservices",
      category: "System Design",
      description: "Implementing and optimizing microservices architecture for high-load systems.",
      tags: ["Kubernetes", "Docker", "Microservices", "DevOps"],
      notes: `
        Architecture Notes:
        - Service discovery is crucial
        - Circuit breakers prevent cascade failures
        - Monitoring needs to be comprehensive
        
        Learnings:
        1. Start with monolith, split when necessary
        2. Service boundaries should follow business domains
        3. Async communication helps with scaling
        
        Problems Faced:
        - Data consistency between services
        - Deployment complexity
        - Monitoring overhead
        
        Solutions:
        - Implemented event sourcing
        - Used Kubernetes operators
        - Set up proper observability
      `
    },
    {
      date: "June 2022",
      title: "Fundamentals of System Design",
      category: "Backend Development",
      description: "Learning the basics of distributed systems and scalable architectures.",
      tags: ["System Design", "Architecture", "Scalability"],
      notes: `
        Basic Principles:
        - Start simple
        - Scale when needed
        - Monitor everything
        
        Key Concepts:
        1. Load balancing
        2. Caching strategies
        3. Database scaling
        
        Reading Notes:
        - Designing Data-Intensive Applications
        - System Design Interview
        - Various engineering blogs
        
        Practice Projects:
        - Built basic URL shortener
        - Implemented chat system
        - Created simple cache
      `
    },
    {
      date: "January 2022",
      title: "Getting Started with React and TypeScript",
      category: "Frontend Development",
      description: "Learning modern frontend development with React and TypeScript.",
      tags: ["React", "TypeScript", "Frontend", "Web Dev"],
      notes: `
        Learning Path:
        - JavaScript fundamentals
        - TypeScript basics
        - React concepts
        
        Key Concepts:
        1. Components and props
        2. State management
        3. TypeScript interfaces
        
        Project Notes:
        - Built todo app
        - Created portfolio site
        - Implemented basic dashboard
        
        Resources Used:
        - Official docs
        - Frontend Masters
        - YouTube tutorials
      `
    }
  ];

  return (
    <div className="">
      <h1 className="page-title">Logbook<span className="text-[#ff4d00]">.</span></h1>
      <p className="text-[#ff4d00] italic mb-12 text-lg">
        A collection of technical notes, research findings, and development insights.
      </p>
      <div className="">
        <div className="space-y-8 grid grid-cols-1 gap-4">
          {logs.map((log, index) => (
            <motion.article
              key={index}
              className="glass-container p-6 rounded-xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedLog(selectedLog === index ? null : index)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold text-white">{log.title}</h2>
                  <p className="text-white/50 text-sm">{log.category}</p>
                </div>
                <time className="text-white/40 text-sm">{log.date}</time>
              </div>

              <p className="text-white/70 mb-4 leading-relaxed">
                {log.description}
              </p>

              {selectedLog === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <pre className="text-white/70 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                    {log.notes}
                  </pre>
                </motion.div>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {log.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>


    </div>
  );
}

export default Logbook; 