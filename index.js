document.addEventListener('DOMContentLoaded', function() {
    loadImages();
    const lightbox = document.getElementById('lightbox');
    document.getElementById('close').onclick = () => lightbox.classList.add('hidden');
    lightbox.onclick = () => lightbox.classList.add('hidden');
});

function loadImages() {
    const baseUrl = 'https://polyworlds3d.s3.us-west-1.amazonaws.com/';
    const media = [
        'FullPorscheCompressed.mp4',
        'FullTinyHouse1.jpg',
        'LargeTinyHouse2.jpg',
        'LargeLargeTinyHouse3.jpg',
        'LargeAntarcticacompressed.jpg',
        'LargeJapaneseTempleScene.jpg',
        'LargeJackstandStand2.jpg',
        'LargeJackstandcloseup.jpg',
        'LargeJackstandcloseup2.jpg',
        'LargeJackstandcloseup3.jpg',
        'LargeSleepModelRepeat.jpg',
        'LargeRoom1closeup2.jpg',
        'LargeRoom1closeup3.jpg',
        'LargeRoom1closeup.jpg',
        'SmallWizard.mp4',
        'SmallDesertWizard2.jpg',
        'SmallDesertWizard3.jpg',
        'SmallDesertWizardClose.jpg',
        'Largecampfirefinal0001-0120.mp4',
        'LargeGearAsset.mp4',
        'FullKeyBoard.jpg'
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
    if (filename.includes('Large')) return 'large';
    if (filename.includes('Small')) return 'small';
    if (filename.includes('Full')) return 'full';
    return '';
}

function showLightbox(fileSrc, clickedDiv) { 
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.innerHTML = '';

    const clonedContent = clickedDiv.firstChild.cloneNode(true);

    // Check if the cloned content is an image
    if (clonedContent.tagName === 'IMG') {
        lightboxImage.appendChild(clonedContent);
        lightbox.classList.remove('hidden');
    }
}
