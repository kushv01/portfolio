import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const DataViz = () => {
  const [points, setPoints] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    // Generate random points
    const newPoints = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setPoints(newPoints);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {points.map((point, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default DataViz; 