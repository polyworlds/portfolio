document.addEventListener('DOMContentLoaded', function() {
    loadImages();
    const lightbox = document.getElementById('lightbox');
    document.getElementById('close').onclick = () => lightbox.classList.add('hidden');
    lightbox.onclick = () => lightbox.classList.add('hidden');
});

function loadImages() {
    const baseUrl = 'http://sandboxtest.lol/wp-content/uploads/2023/12/';
    const media = [
        'fullPorsche-911-FINAL.mov',
        'largeAntarctica-Actual-Final.png',
        'largeJapanese-Temple-Scene.png',
        'largeJackstand.png',
        'largeJackstand-close-up.png',
        'largeJackstand-close-up-2.png',
        'largeJackstand-close-up-3.png',
        'fullTiny-House-1.png',
        'largeTiny-House-2.png',
        'largeTiny-House-3.png',
        'largeSleep-Model-Repeat.png',
        'largeRoom1-close-up-2.png',
        'largeRoom1-close-up-3.png',
        'largeRoom1-close-up.png',
        'smallWizard.mp4',
        'smallDesert-Wizard-2.png',
        'smallDesert-Wizard-3.png',
        'smallDesert-Wizard-Close.png',
        'largecamp-fire-final0001-0120.mp4',
        'largeGear-Asset.mp4',
        'fullKey-Board.png'
    ].map(file => baseUrl + file); 


    const gallery = document.getElementById('gallery');

    media.forEach(url => {
        const div = document.createElement('div');
        div.className = `tile ${getFileClass(url)}`;
        div.onclick = () => showLightbox(url, div);

        let content;
        if (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov')) {
            content = document.createElement('video');
            content.muted = true;
            content.autoplay = false;
            content.loop = true;
            content.controls = true;
        } else {
            content = document.createElement('img');
        }
        content.src = url;

        div.appendChild(content);
        gallery.appendChild(div);
    });
}

function getFileClass(filename) {
    if (filename.includes('large')) return 'large';
    if (filename.includes('small')) return 'small';
    if (filename.includes('full')) return 'full';
    return '';
}

function showLightbox(fileSrc, clickedDiv) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.innerHTML = '';

    const clonedContent = clickedDiv.firstChild.cloneNode(true);
    lightboxImage.appendChild(clonedContent);
    lightbox.classList.remove('hidden');
}
