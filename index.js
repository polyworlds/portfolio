document.addEventListener('DOMContentLoaded', function() {
    loadImages(); // Load images only once
    const lightbox = document.getElementById('lightbox');
    document.getElementById('close').onclick = () => lightbox.classList.add('hidden');
});


document.getElementById('lightbox').onclick = () => lightbox.classList.add('hidden');

function loadImages() {
    const media = [
        'fullPorsche 911 FINAL.mov',
        'largeAntarctica Actual Final.png',
        'largeJapanese Temple Scene.png',
        'largeJackstand.png',
        'largeJackstand close up.png',
        'largeJackstand close up 2.png',
        'largeJackstand close up 3.png',
        'fullTiny House 1.png',
        'largeTiny House 2.png',
        'largeTiny House 3.png',
        'largeSleep, Model, Repeat.png',
        'largeRoom1 close up 2.png',
        'largeRoom1 close up 3.png',
        'largeRoom1 close up.png',
        
        
        
        'smallWizard.mp4',
        'smallDesert Wizard 2.png',
        'smallDesert Wizard 3.png',
        'smallDesert Wizard Close.png',
       
        'largecamp fire final0001-0120.mp4',
        //'smallDoor scene change final0001-0180.mp4',
        'largeGear Asset.mp4',
      
      
       
        'fullKey Board.png',
      ];
    const gallery = document.getElementById('gallery');

    media.forEach(file => {
        const div = document.createElement('div');
        div.className = `tile ${getFileClass(file)}`;
        div.onclick = () => showLightbox(file);

        let content;
        if (file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.mov')) {
            content = document.createElement('video');
            content.muted = true; // Mute the video to allow autoplay
            content.autoplay = true; // Autoplay the video
            content.loop = true; // Optional: Loop the video
            // Remove controls attribute to hide video controls
            content.src = `./images/${file}`;
        } else {
            content = document.createElement('img');
            content.src = `./images/${file}`;
        }

        div.appendChild(content);
        gallery.appendChild(div);
    });
}

function getFileClass(filename) {
    // This function could be expanded if "large" or "full" are also possible prefixes
    if (filename.startsWith('large')) return 'large';
    if (filename.startsWith('small')) return 'small';
    if (filename.startsWith('full')) return 'full';
    return ''; // Default to no specific class
}

function showLightbox(fileSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.innerHTML = ''; // Clear previous content

    let content;
    if (fileSrc.endsWith('.mp4') || fileSrc.endsWith('.webm') || fileSrc.endsWith('.mov')) {
        content = document.createElement('video');
        content.src = `./images/${fileSrc}`;
        content.muted = true; // Mute the video to allow autoplay
        content.autoplay = true; // Autoplay the video
        content.loop = true; // Optional: Loop the video
        // Remove controls attribute to hide video controls
    } else {
        content = document.createElement('img');
        content.src = `./images/${fileSrc}`;
    }

    lightboxImage.appendChild(content);
    lightbox.classList.remove('hidden');
}
