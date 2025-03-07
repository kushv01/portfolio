import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function FloatingFormula({ x, y, formula, delay, size = 'text-base' }: { 
  x: number; 
  y: number; 
  formula: string; 
  delay: number;
  size?: string;
}) {
  return (
    <motion.div
      className={`absolute ${size} font-thin text-white/50`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.3, 0],
        y: [0, -50, 0],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        textShadow: '0 0 15px rgba(255,255,255,0.1)'
      }}
    >
      {formula}
    </motion.div>
  );
}

const mathFormulas = [
  // Basic Math & Statistics
  "μ = E[X]",
  "σ² = E[(X-μ)²]",
  "P(A|B) = P(A∩B)/P(B)",
  "∑(n=1)^∞ 1/n²",
  
  // Calculus
  "∫ f(x) dx",
  "d/dx[e^x] = e^x",
  "∇ · F = ∂F₁/∂x + ∂F₂/∂y",
  "∮ F · dr = 0",
  
  // Linear Algebra
  "Ax = λx",
  "det(A-λI) = 0",
  "A = UΣVᵀ",
  
  // Machine Learning
  "H = -∑ pᵢlog(pᵢ)",
  "L = ∑(y-ŷ)²",
  "sigmoid(x) = 1/(1+e⁻ˣ)",
  
  // Data Science
  "R² = 1 - SSᵣ/SSₜ",
  "χ² = ∑(O-E)²/E",
];

const bigFormulas = [
  "∫∫∫ dV = ∭ρ(x,y,z)dxdydz",
  "f'(x) = lim[h→0] (f(x+h)-f(x))/h",
  "P(X=k) = (λᵏe⁻ᵏ)/k!",
];

export default function DataBackground() {
  const [elements, setElements] = useState<Array<{ x: number; y: number; formula: string; size: string }>>([]);

  useEffect(() => {
    // Generate regular math formulas with more spacing
    const newElements = Array.from({ length: 12 }, () => ({
      x: Math.random() * 90 + 5, // Keep away from edges
      y: Math.random() * 90 + 5,
      formula: mathFormulas[Math.floor(Math.random() * mathFormulas.length)],
      size: 'text-base'
    }));

    // Add a few bigger formulas
    const bigElements = Array.from({ length: 2 }, () => ({
      x: 20 + Math.random() * 60,
      y: 20 + Math.random() * 60,
      formula: bigFormulas[Math.floor(Math.random() * bigFormulas.length)],
      size: 'text-xl'
    }));

    setElements([...newElements, ...bigElements]);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {/* Floating Math Formulas */}
      {elements.map((el, i) => (
        <FloatingFormula
          key={`formula-${i}`}
          x={el.x}
          y={el.y}
          formula={el.formula}
          delay={i * 0.5}
          size={el.size}
        />
      ))}
    </div>
  );
} 