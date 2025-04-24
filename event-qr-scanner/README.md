# Event QR Scanner

This project is a web application designed for scanning and validating QR codes for event attendees. It utilizes the `html5-qrcode` library to provide a seamless scanning experience and validates the scanned codes against a predefined list of valid codes.

## Project Structure

```
event-qr-scanner
├── assets
│   ├── css
│   │   └── styles.css          # CSS styles for the application
│   └── js
│       ├── scanner.js          # Handles QR code scanning functionality
│       └── validation.js       # Contains validation logic for QR codes
├── data
│   └── valid-codes.js          # Exports an array of valid QR code strings
├── index.html                  # Main HTML file for the application
├── favicon.ico                 # Favicon for the web application
└── README.md                   # Documentation for the project
```

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd event-qr-scanner
   ```

2. **Open `index.html`** in your web browser to run the application.

## Usage Guidelines

- Ensure your device has a camera enabled for scanning QR codes.
- Point the camera at the QR code to scan it.
- The application will validate the scanned code and provide feedback on its validity.

## Deployment Information

To deploy this application on a server:

1. Ensure all files are uploaded to your server.
2. Configure your server to serve static files.
3. Access the application via the server's URL.

## Features

- Real-time QR code scanning using the device camera.
- Validation against a list of predefined valid codes.
- User-friendly interface with clear feedback messages.

## License

This project is licensed under the MIT License.