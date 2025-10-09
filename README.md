# Captcha Solver Web App

## Summary
A simple web application that displays a CAPTCHA image from a given URL and attempts to read and display the CAPTCHA text within 15 seconds.

## Setup
Open the `index.html` file directly in your web browser. No installation or setup required.

## Usage
- Open `index.html` in your browser.
- The app automatically reads the URL parameter `?url=` for the CAPTCHA image.
- If no URL is provided, it defaults to a sample image included in the project.
- The app attempts to recognize the CAPTCHA text and displays it on the page.

## License
This project is licensed under the MIT License.

---

*Note: This implementation uses a very basic OCR method suitable for simple CAPTCHAs. For complex CAPTCHAs or robust OCR, integration with specialized OCR libraries or services is recommended.*
