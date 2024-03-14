import React, { useState, useEffect } from 'react';

function Button() {
  const [buttons, setButtons] = useState([]);
  const [currentButtonIndex, setCurrentButtonIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentButtonIndex < 3) {
        setButtons(prevButtons => [...prevButtons, <button key={currentButtonIndex}>Button {currentButtonIndex + 1}</button>]);
        setCurrentButtonIndex(prevIndex => prevIndex + 1);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentButtonIndex]);

  return (
    <div>
      {buttons}
    </div>
  );
}

export default Button;
