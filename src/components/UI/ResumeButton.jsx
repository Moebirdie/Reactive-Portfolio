import React, { useState } from 'react';

const ResumeButton = () => {
  const [isPdfOpenerVisible, setIsPdfOpenerVisible] = useState(false);

  const openPdfAndOpener = () => {
    setIsPdfOpenerVisible(true);
    const pdfFileName = 'Resume09232023.pdf';
    const pdfPath = `./Data/${pdfFileName}`;

    window.open(pdfPath, '_blank');
  };

  return (
    <div>
      <button className='resumeButton' onClick={openPdfAndOpener}>Open PDF to Print</button>
    </div>
  );
};

export default ResumeButton;
