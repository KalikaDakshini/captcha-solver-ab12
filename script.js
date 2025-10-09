// Function to get URL parameter
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Default captcha image
const defaultImage = 'sample.png';

// Get captcha URL from parameter or use default
const captchaUrl = getQueryParam('url') || defaultImage;

// Set the captcha image source
const imgElement = document.getElementById('captcha-img');
imgElement.src = captchaUrl;

// Function to perform simple OCR (placeholder)
function recognizeCaptcha(imageData) {
  // For demonstration purposes, this placeholder always returns "ABC123".
  // In real-world, integrate OCR library or API here.
  return "ABC123";
}

// Load image and attempt to recognize
function processCaptcha() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  let timeoutFlag = false;

  // Timeout after 15 seconds
  const timeout = setTimeout(() => {
    timeoutFlag = true;
    document.getElementById('result').innerText = 'Recognition timed out.';
  }, 15000);
  
  img.crossOrigin = "Anonymous";
  img.onload = () => {
    if (timeoutFlag) return;
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, img.width, img.height);
    const text = recognizeCaptcha(imageData);
    clearTimeout(timeout);
    if (!timeoutFlag) {
      document.getElementById('result').innerText = 'Recognized Text: ' + text;
    }
  };
  img.onerror = () => {
    clearTimeout(timeout);
    document.getElementById('result').innerText = 'Failed to load image.';
  };
  img.src = captchaUrl;
}

// Start processing after image loads
if (captchaUrl) {
  processCaptcha();
} else {
  document.getElementById('result').innerText = 'No CAPTCHA URL provided.';
}
