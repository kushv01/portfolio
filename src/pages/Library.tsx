import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Book {
  title: string;
  author: string;
  description: string;
  tags: string[];
}

const books: Book[] = [
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    description: "A novel about friendship, betrayal, and redemption set in Afghanistan, following the journey of Amir and Hassan.",
    tags: ["reading"]
  },
  {
    title: "The TATAS",
    author: "Girish Kuber",
    description: "A historical account of the Tata family and their contributions to India's economic and industrial growth.",
    tags: ["reading"]
  },
  {
    title: "Python for Finance",
    author: "Yves Hilpisch",
    description: "A guide to using Python for financial analysis, trading strategies, and quantitative finance.",
    tags: ["finance", "programming"]
  },
  {
    title: "Stochastic Finance with Python",
    author: "Various",
    description: "Covers stochastic processes and financial modeling using Python.",
    tags: ["finance", "programming"]
  },
  {
    title: "Modern C",
    author: "Jens Gustedt",
    description: "A guide to modern C programming techniques with best practices.",
    tags: ["programming"]
  },
  {
    title: "The C Programming Language (2nd Edition)",
    author: "Brian W. Kernighan, Dennis M. Ritchie",
    description: "The definitive guide to C programming, written by its creators.",
    tags: ["programming"]
  },
  {
    title: "The Cognitive Neurosciences",
    author: "Michael S. Gazzaniga",
    description: "A comprehensive book on cognitive neuroscience, exploring brain functions and cognition.",
    tags: ["reading"]
  },
  {
    title: "The Devil's Chessboard",
    author: "David Talbot",
    description: "An investigative book on the CIA and its covert operations, focusing on former director Allen Dulles.",
    tags: ["reading"]
  },
  {
    title: "White Nights",
    author: "Fyodor Dostoevsky",
    description: "A novella about dreams, loneliness, and unrequited love in St. Petersburg.",
    tags: ["reading"]
  },
  {
    title: "Building Progressive Web Apps",
    author: "Tal Ater",
    description: "A guide to building modern web applications that provide a native-like experience on mobile and desktop.",
    tags: ["programming"]
  },
  {
    title: "Codeless Data Structures and Algorithms",
    author: "Various",
    description: "A book explaining fundamental data structures and algorithms without requiring programming knowledge.",
    tags: ["programming"]
  },
  {
    title: "Laws of UX",
    author: "Jon Yablonski",
    description: "A design book that explores psychological principles in user experience and interface design.",
    tags: ["programming"]
  },
  {
    title: "Learning React",
    author: "Alex Banks, Eve Porcello",
    description: "A comprehensive introduction to building applications using React and related modern web technologies.",
    tags: ["programming"]
  },
  {
    title: "Learning Web App Development",
    author: "Semmy Purewal",
    description: "A beginner-friendly book that covers essential web development concepts and techniques.",
    tags: ["programming"]
  },
  {
    title: "Web Development with Node & Express",
    author: "Ethan Brown",
    description: "A practical guide to building scalable web applications using Node.js and Express.js.",
    tags: ["programming"]
  },
  {
    title: "Systems Analysis and Design",
    author: "Dennis, Wixom, Roth",
    description: "A textbook on methodologies and techniques for analyzing and designing information systems.",
    tags: ["programming"]
  },
  {
    title: "Hands-on Machine Learning with Scikit-Learn, Keras & TensorFlow",
    author: "Aurélien Géron",
    description: "A hands-on guide to implementing machine learning models with modern libraries.",
    tags: ["programming"]
  },
  {
    title: "Python for Data Analysis",
    author: "Wes McKinney",
    description: "A book covering data manipulation and analysis techniques using Python and pandas.",
    tags: ["programming"]
  },
  {
    title: "Algorithmic Gaming and Notes",
    author: "Various",
    description: "Covers algorithms used in gaming and AI-driven gaming strategies.",
    tags: ["programming"]
  },
  {
    title: "Vector and Tensor Calculus",
    author: "Various",
    description: "A book on vector and tensor analysis with applications in physics and engineering.",
    tags: ["mathematics"]
  },
  {
    title: "Stochastic Calculus for Finance",
    author: "Various",
    description: "Covers stochastic processes and financial mathematics.",
    tags: ["finance", "mathematics"]
  },
  {
    title: "Probability and Statistics for Computer Science",
    author: "Various",
    description: "An introduction to probability and statistics with a focus on computer science applications.",
    tags: ["mathematics"]
  },
  {
    title: "Optimization Techniques",
    author: "Various",
    description: "Covers mathematical optimization methods and applications.",
    tags: ["mathematics"]
  },
  {
    title: "Introduction to Linear Algebra",
    author: "Gilbert Strang",
    description: "A widely used textbook on linear algebra and its applications.",
    tags: ["mathematics"]
  },
  {
    title: "Mathematical Thinking and Problem Solving",
    author: "Various",
    description: "Discusses mathematical logic, problem-solving techniques, and critical thinking.",
    tags: ["mathematics"]
  },
  {
    title: "Active Portfolio Management",
    author: "Richard Grinold, Ronald Kahn",
    description: "A well-regarded book on portfolio optimization and investment management.",
    tags: ["finance"]
  },
  {
    title: "Lambda Calculus and Its Applications",
    author: "Various",
    description: "Covers functional programming and the mathematical basis of computation.",
    tags: ["mathematics", "programming"]
  },
  {
    title: "Introduction to Vector Calculus",
    author: "Various",
    description: "A mathematical foundation book on vector calculus and its applications.",
    tags: ["mathematics"]
  },
  {
    title: "High-Performance Compiler Design",
    author: "Various",
    description: "Covers concepts in compiler optimization and advanced compiler techniques.",
    tags: ["programming"]
  },
  {
    title: "50-Quantitative Comparisons",
    author: "Various",
    description: "A book on quantitative reasoning and problem-solving techniques.",
    tags: ["finance", "mathematics"]
  },
  {
    title: "A Practical Guide to Quantitative Finance",
    author: "Various",
    description: "Covers key quantitative finance concepts for traders and analysts.",
    tags: ["finance"]
  },
  {
    title: "Sequentially Quantitative Finance",
    author: "Various",
    description: "A book on mathematical finance and quantitative modeling.",
    tags: ["finance", "mathematics"]
  }
];

const Library: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('');

  // Extract unique tags and capitalize them
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    books.forEach(book => book.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort().map(tag => tag.toUpperCase());
  }, []);

  // Filter books based on selected tag
  const filteredBooks = useMemo(() => {
    if (!selectedTag) return books;
    return books.filter(book => 
      book.tags.includes(selectedTag.toLowerCase())
    );
  }, [selectedTag]);

  return (
    <div className="min-h-screen p-8">
      <h1 className="page-title text-5xl mb-8">Library.</h1>
      
      {/* Filter Section */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedTag === tag
                  ? 'text-[#ff4d00] border border-[#ff4d00]'
                  : ' text-white/70 border border-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book, index) => (
          <motion.div
            key={book.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-container group hover:transform hover:scale-[1.02] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
            <p className="text-neon-orange mb-3">{book.author}</p>
            <p className="text-white/70 mb-4 text-sm">{book.description}</p>
            <div className="flex flex-wrap gap-2">
              {book.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-black/30 rounded-full text-xs text-white/50"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredBooks.length === 0 && (
        <div className="text-center text-white/50 mt-8">
          No books found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default Library; 