// This file handles the QR code scanning functionality using the html5-qrcode library. 
// It initializes the camera, starts scanning, and processes the scanned QR codes.

document.addEventListener('DOMContentLoaded', function() {
  const html5QrCode = new Html5Qrcode("qr-reader");

  function onScanSuccess(decodedText, decodedResult) {
    if (isCodeValid(decodedText)) {
      showResult("✅ Valid Ticket: " + decodedText, true);
      markAsUsed(decodedText);
    } else if (usedCodes.has(decodedText)) {
      showResult("⚠️ Ticket already used: " + decodedText, false);
    } else {
      showResult("❌ Invalid Ticket: " + decodedText, false);
    }
  }

  Html5Qrcode.getCameras().then(devices => {
    if (devices && devices.length) {
      let cameraId = devices[0].id;
      html5QrCode.start(
        cameraId,
        {
          fps: 10,
          qrbox: 250
        },
        onScanSuccess
      ).catch(err => {
        console.error("Error starting scanner:", err);
      });
    }
  }).catch(err => {
    console.error("Error getting cameras:", err);
  });
});