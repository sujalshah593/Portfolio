import { motion } from "framer-motion";

// Small simple line
export const SmallLine = ({ className = "", delay = 0, width = "40", height = "2" }) => {
  return (
    <div className={className}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <motion.line
          x1="0"
          y1="1"
          x2={width}
          y2="1"
          stroke="#06b6d4"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay }}
        />
      </svg>
    </div>
  );
};

// Small arrow line
export const SmallArrow = ({ className = "", direction = "right" }) => {
  const paths = {
    right: "M 0 10 L 15 10 M 10 5 L 15 10 L 10 15",
    left: "M 15 10 L 0 10 M 5 5 L 0 10 L 5 15",
    up: "M 10 15 L 10 0 M 5 5 L 10 0 L 15 5",
    down: "M 10 0 L 10 15 M 5 10 L 10 15 L 15 10",
  };

  return (
    <div className={className}>
      <svg width="20" height="20" viewBox="0 0 20 20">
        <motion.path
          d={paths[direction]}
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6 }}
        />
      </svg>
    </div>
  );
};

// Small dot connector
export const SmallDotLine = ({ className = "", dots = 3 }) => {
  return (
    <div className={className}>
      <svg width={dots * 12} height="4" viewBox={`0 0 ${dots * 12} 4`}>
        {Array.from({ length: dots }).map((_, i) => (
          <motion.circle
            key={i}
            cx={6 + i * 12}
            cy="2"
            r="1.5"
            fill="#8b5cf6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          />
        ))}
      </svg>
    </div>
  );
};

// Small bracket
export const SmallBracket = ({ className = "", type = "square" }) => {
  const paths = {
    square: "M 2 2 L 2 18 M 18 2 L 18 18",
    round: "M 6 2 Q 2 2 2 10 Q 2 18 6 18 M 14 2 Q 18 2 18 10 Q 18 18 14 18",
    curly:
      "M 6 2 Q 2 2 2 6 Q 2 10 6 10 Q 2 10 2 14 Q 2 18 6 18 M 14 2 Q 18 2 18 6 Q 18 10 14 10 Q 18 10 18 14 Q 18 18 14 18",
  };

  return (
    <div className={className}>
      <svg width="20" height="20" viewBox="0 0 20 20">
        <motion.path
          d={paths[type]}
          stroke="#ec4899"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
      </svg>
    </div>
  );
};

// Small underline
export const SmallUnderline = ({ className = "", style = "straight" }) => {
  const paths = {
    straight: "M 0 8 L 30 8",
    wavy: "M 0 8 Q 7.5 4 15 8 T 30 8",
    double: "M 0 6 L 30 6 M 0 10 L 30 10",
  };

  return (
    <div className={className}>
      <svg width="30" height="12" viewBox="0 0 30 12">
        <motion.path
          d={paths[style]}
          stroke="#10b981"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
      </svg>
    </div>
  );
};

// Small cross/plus
export const SmallCross = ({ className = "", type = "plus" }) => {
  const rotation = type === "cross" ? 45 : 0;

  return (
    <div className={className}>
      <svg width="16" height="16" viewBox="0 0 16 16">
        <g transform={`rotate(${rotation} 8 8)`}>
          <motion.line
            x1="8"
            y1="2"
            x2="8"
            y2="14"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.line
            x1="2"
            y1="8"
            x2="14"
            y2="8"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
        </g>
      </svg>
    </div>
  );
};

// Small corner
export const SmallCorner = ({ className = "", position = "top-left" }) => {
  const paths = {
    "top-left": "M 12 4 L 4 4 L 4 12",
    "top-right": "M 4 4 L 12 4 L 12 12",
    "bottom-left": "M 12 12 L 4 12 L 4 4",
    "bottom-right": "M 4 12 L 12 12 L 12 4",
  };

  return (
    <div className={className}>
      <svg width="16" height="16" viewBox="0 0 16 16">
        <motion.path
          d={paths[position]}
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6 }}
        />
      </svg>
    </div>
  );
};

// Small zigzag
export const SmallZigzag = ({ className = "", peaks = 3 }) => {
  const width = peaks * 10;
  let path = "M 0 10";
  for (let i = 0; i < peaks; i++) {
    path += ` L ${5 + i * 10} 2 L ${10 + i * 10} 10`;
  }

  return (
    <div className={className}>
      <svg width={width} height="12" viewBox={`0 0 ${width} 12`}>
        <motion.path
          d={path}
          stroke="#a855f7"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
      </svg>
    </div>
  );
};

// Small circle with line
export const SmallCircleLine = ({ className = "", position = "left" }) => {
  const lines = {
    left: { x1: 0, y1: 10, x2: 6, y2: 10 },
    right: { x1: 14, y1: 10, x2: 20, y2: 10 },
    top: { x1: 10, y1: 0, x2: 10, y2: 6 },
    bottom: { x1: 10, y1: 14, x2: 10, y2: 20 },
  };

  return (
    <div className={className}>
      <svg width="20" height="20" viewBox="0 0 20 20">
        <motion.circle
          cx="10"
          cy="10"
          r="3"
          stroke="#06b6d4"
          strokeWidth="2"
          fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.line
          {...lines[position]}
          stroke="#06b6d4"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
      </svg>
    </div>
  );
};

// Small star
export const SmallStar = ({ className = "" }) => {
  return (
    <div className={className}>
      <svg width="16" height="16" viewBox="0 0 16 16">
        <motion.path
          d="M 8 2 L 9.5 6 L 14 6 L 10.5 9 L 12 13 L 8 10 L 4 13 L 5.5 9 L 2 6 L 6.5 6 Z"
          stroke="#fbbf24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, rotate: -180 }}
          animate={{ pathLength: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        />
      </svg>
    </div>
  );
};
