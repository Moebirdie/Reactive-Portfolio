const PdfOpener = () => {
  const openPdf = () => {
    const pdfFileName = 'Resume09232023.pdf';
    const pdfPath = `https://uploads-ssl.webflow.com/6515fbe1ba5a602a0f9586a5/65168eb37614d7887e601a1d_Resume%2009.23.2023.pdf`;

    window.open(pdfPath, '_blank');
  };

  return (
    <div>
      <button onClick={openPdf}>Open PDF</button>
    </div>
  );
};

export default PdfOpener;
