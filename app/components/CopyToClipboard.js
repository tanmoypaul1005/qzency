"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { iCopy } from '@/util/imageImports';

const CopyToClipboard = ({ content }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleCopyClick = () => {
      navigator.clipboard.writeText(content)
        .then(() => {
          console.log('Content copied to clipboard');
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 1000); // Reset animation state after 1 second
        })
        .catch(err => {
          console.error('Failed to copy content: ', err);
        });
    };

  return (
    <div className={`${isAnimating ? 'animate-bounce' : ''}`} onClick={handleCopyClick}>
    <Image
      style={{ minWidth: '18px', minHeight: '18px' }}
      className="cursor-pointer"
      src={iCopy}
      alt="copy"
    />
        </div>
  );
};

CopyToClipboard.propTypes = {
  content: PropTypes.string.isRequired,
};

export default CopyToClipboard;