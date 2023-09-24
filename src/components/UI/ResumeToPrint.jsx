const PdfOpener = () => {
  const openPdf = () => {
    const pdfFileName = 'Resume09232023.pdf';
    const pdfPath = `/data/${pdfFileName}`;

    window.open(pdfPath, '_blank');
  };

  return (
    <div>
      <button onClick={openPdf}>Open PDF</button>
    </div>
  );
};

export default PdfOpener;
