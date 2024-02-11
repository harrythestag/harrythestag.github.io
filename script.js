function showOverlay(imageSrc) {
    var overlayImage = document.getElementById('overlay-image');
    overlayImage.src = imageSrc;
    overlayImage.style.maxWidth = '90%';
    overlayImage.style.maxHeight = '90%';
    overlayImage.style.width = '';
    overlayImage.style.height = '';
    overlayImage.style.cursor = 'zoom-in';
    overlayImage.style.left = window.innerWidth / 2 +'px';
    overlayImage.style.top = window.innerHeight / 2 +'px';
    //overlayImage.onclick = function(e) { toggleImageSize(overlayImage, e); };
    document.getElementById('overlay').style.display = 'block';
}

/*function toggleImageSize(image, e) {
    if (image.style.width === '' && image.style.height === '') {
        image.style.cursor = 'move';
        image.style.width = 'auto';
        image.style.height = 'auto';
        image.style.maxWidth = 'none';
        image.style.maxHeight = 'none';
        
    } else {
        image.style.width = '';
        image.style.height = '';
        image.style.maxWidth = '90%';
        image.style.maxHeight = '90%';
        image.style.cursor = 'zoom-in';
        image.style.left = window.innerWidth / 2 +'px';
        image.style.top = window.innerHeight / 2 +'px';
    }
}*/

function hideOverlay(e) {
    if (e.target.id === 'overlay') {
        document.getElementById('overlay').style.display = 'none';
    }
}

window.onload = function() {
    loadContent('home');
};

function loadContent(page) {
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = document.getElementById(page).innerHTML ;
    attachEventHandlers();
}

function attachEventHandlers() {
    document.querySelectorAll('.image-description').forEach(function(description) {
        description.addEventListener('click', function() {
            var fullDescription = this.getAttribute('data-full-description');
            if (this.textContent === fullDescription) {
                this.textContent = fullDescription.substring(0, 40) + '...';
            } else {
                this.textContent = fullDescription;
            }
        });
    });

    document.querySelectorAll('.image-description').forEach(function(description) {
        var fullDescription = description.getAttribute('data-full-description');
        description.textContent = fullDescription.substring(0, 40) + '...';
    });
}