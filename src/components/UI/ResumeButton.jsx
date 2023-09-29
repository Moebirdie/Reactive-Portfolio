import React, { useState } from 'react';

const ResumeButton = () => {
  const [isPdfOpenerVisible, setIsPdfOpenerVisible] = useState(false);

  const openPdfAndOpener = () => {
    setIsPdfOpenerVisible(true);
    const pdfPath = `https://uploads-ssl.webflow.com/6515fbe1ba5a602a0f9586a5/65168eb37614d7887e601a1d_Resume%2009.23.2023.pdf`;

    window.open(pdfPath, '_blank');
  };

  return (
    <div>
      <button className='resumeButton' onClick={openPdfAndOpener}>Open PDF to Print</button>
    </div>
  );
};

export default ResumeButton;
