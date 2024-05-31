import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const getRandomPosition = () => ({
  top: Math.random() * (window.innerHeight - 100),
  left: Math.random() * (window.innerWidth - 100),
});

const Square = ({ style }) => {
  return (
    <animated.div
      style={{
        ...style,
        position: 'absolute',
        width: 100,
        height: 100,
        backgroundColor: 'black',
      }}
    />
  );
};

const MenuTest = () => {
  const [squares, setSquares] = useState([]);

  const generateSquares = () => {
    const newSquares = Array.from({ length: 1000 }, () => getRandomPosition());
    setSquares(newSquares);
  };

  const transitions = useTransition(squares, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
  });

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {transitions((props, square) => (
        <Square style={{ ...props, ...square }} />
      ))}
      <button onClick={generateSquares}>Generate Squares</button>
    </div>
  );
};

export default MenuTest;
