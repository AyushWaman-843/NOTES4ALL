function downloadFile(fileUrl) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop(); 
    link.click();
  }
function openPage(pageUrl) {
    window.location.href = pageUrl; 
  }