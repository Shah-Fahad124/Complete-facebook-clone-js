const fileInput = document.querySelector('input[type="file"]');
let postImagecontainer = document.querySelector('.post-image-container');


fileInput.addEventListener(
    'change', (event) => {
        let image = document.createElement('img');
        let path = event.target.value;
        let originalpath = path.slice(12)
        image.src = `img/${originalpath}`;
        // image.src = 'img/download (1).jpg';
        postImagecontainer.appendChild(image)
    }
)