import React, { useState, useEffect } from 'react';
import styles from './TypingEffect.module.css';

const TypingEffect = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setIndex(0);
    setShowCursor(true);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setShowCursor(false);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <h1 className={className} style={{ position: 'relative' }}>
      {/* Invisible text to reserve exact final space and prevent layout shifts */}
      <span style={{ visibility: 'hidden' }}>{text}</span>

      {/* Visible typing text positioned absolutely over the invisible one */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          whiteSpace: 'pre-wrap'
        }}
      >
        {displayedText}
        <span className={`${styles.cursor} ${!showCursor ? styles.hidden : ''}`}>
          |
        </span>
      </span>
    </h1>
  );
};

export default TypingEffect;
