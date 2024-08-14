document.getElementById('customizeForm').addEventListener('input', updatePreview);
document.getElementById('bgType').addEventListener('change', handleBgTypeChange);

function handleBgTypeChange() {
    const bgType = document.getElementById('bgType').value;
    const bgColorContainer = document.getElementById('bgColorContainer');
    const gradientColorsContainer = document.getElementById('gradientColorsContainer');

    if (bgType === 'gradient') {
        bgColorContainer.style.display = 'none';
        gradientColorsContainer.style.display = 'block';
    } else {
        bgColorContainer.style.display = 'block';
        gradientColorsContainer.style.display = 'none';
    }
}

function updatePreview() {
    const productName = document.getElementById('productName').value || 'Nombre del producto';
    const mainMessage = document.getElementById('mainMessage').value || 'Lorem ipsum dolor sit.';
    const subMessage = document.getElementById('subMessage').value || 'Lorem ipsum dolor sit amet.';
    const bgType = document.getElementById('bgType').value;
    const textColor = document.getElementById('textColor').value;
    const appStoreLink = document.getElementById('appStoreLink').value || '#';
    const playStoreLink = document.getElementById('playStoreLink').value || '#';
    const twitterLink = document.getElementById('twitterLink').value || '#';
    const facebookLink = document.getElementById('facebookLink').value || '#';

    let backgroundStyle = '';
    if (bgType === 'gradient') {
        const gradientStartColor = document.getElementById('gradientStartColor').value;
        const gradientEndColor = document.getElementById('gradientEndColor').value;
        backgroundStyle = `background: linear-gradient(to right, ${gradientStartColor}, ${gradientEndColor});`;
    } else {
        const bgColor = document.getElementById('bgColor').value;
        backgroundStyle = `background-color: ${bgColor};`;
    }

    const iframe = document.getElementById('previewIframe');
    const doc = iframe.contentDocument || iframe.contentWindow.document;

    // Actualiza textos
    doc.querySelector('h1').textContent = mainMessage;
    doc.querySelector('p').textContent = subMessage;
    doc.querySelector('h4').textContent = `${productName} © 2024 - Todos los derechos reservados`;

    // Actualiza estilos
    doc.body.style = backgroundStyle;
    doc.body.style.color = textColor;

    // Actualiza enlaces
    doc.querySelector('a[href*="apps.apple.com"]').href = appStoreLink;
    doc.querySelector('a[href*="play.google.com"]').href = playStoreLink;
    doc.querySelector('a[href*="twitter.com"]').href = twitterLink;
    doc.querySelector('a[href*="facebook.com"]').href = facebookLink;
}

function downloadTemplate() {
    const productName = document.getElementById('productName').value || 'Nombre del producto';
    const mainMessage = document.getElementById('mainMessage').value || 'Lorem ipsum dolor sit.';
    const subMessage = document.getElementById('subMessage').value || 'Lorem ipsum dolor sit amet.';
    const bgType = document.getElementById('bgType').value;
    const textColor = document.getElementById('textColor').value;
    const appStoreLink = document.getElementById('appStoreLink').value || '#';
    const playStoreLink = document.getElementById('playStoreLink').value || '#';
    const twitterLink = document.getElementById('twitterLink').value || '#';
    const facebookLink = document.getElementById('facebookLink').value || '#';

    let backgroundStyle = '';
    if (bgType === 'gradient') {
        const gradientStartColor = document.getElementById('gradientStartColor').value;
        const gradientEndColor = document.getElementById('gradientEndColor').value;
        backgroundStyle = `background: linear-gradient(to right, ${gradientStartColor}, ${gradientEndColor});`;
    } else {
        const bgColor = document.getElementById('bgColor').value;
        backgroundStyle = `background-color: ${bgColor};`;
    }

    const template = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ProductAd - Presentation</title>
<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
<style>
    body {
        ${backgroundStyle}
        color: ${textColor};
        font-family: 'Source Sans Pro', sans-serif;
    }
    .slide-in-bottom {
        animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
</style>
</head>
<body class="leading-normal tracking-normal">
<div class="h-screen pb-14 bg-right bg-cover" style="background-image:url('assets/bg.svg');">
    <!-- Nav -->
    <div class="w-full container mx-auto p-6">
        <div class="w-full flex items-center justify-between">
            <a class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">${productName}</a>
            <div class="flex w-1/2 justify-end content-center">		
                <a class="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4" href="${twitterLink}">
                    <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>
                </a>
                <a class="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4" href="${facebookLink}">
                    <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
                </a>
            </div>
        </div>
    </div>
    <!-- Main content -->
    <div class="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 id="mainMessage" class="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                ${mainMessage}
            </h1>
            <p id="subMessage" class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
                ${subMessage}
            </p>
            <div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                <a href="${appStoreLink}" target="_blank">
                    <img src="assets/app-store-badge.png" class="h-12 pr-4 bounce-top-icons" alt="Download on the App Store">
                </a>
                <a href="${playStoreLink}" target="_blank">
                    <img src="assets/google-play-badge.png" class="h-12 pr-4 bounce-top-icons" alt="Get it on Google Play">
                </a>
            </div>
        </div>
        <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
            <img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="assets/devices.svg" alt="Device Preview">
        </div>
    </div>
    <!-- Footer -->
    <footer class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
        <a class="text-gray-500 no-underline hover:no-underline" href="#">${productName} &copy; 2024 - Todos los derechos reservados</a>
    </footer>
</div>
</body>
</html>
`;

    // Crea un enlace de descarga
    const blob = new Blob([template], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'customized-template.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}