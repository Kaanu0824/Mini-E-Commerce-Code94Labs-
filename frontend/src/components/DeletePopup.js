import React, { useEffect, useRef, useState } from 'react';

const PopupComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Popup</button>
      {isOpen && (
        <div ref={popupRef}>
          {/* Popup content */}
          <div>This is a popup</div>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;
