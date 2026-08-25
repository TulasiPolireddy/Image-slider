// Initial list of demo images
let images = [
  'https://wallpapers-clan.com/wp-content/uploads/2025/08/nezuko-in-a-chibi-demon-form-desktop-wallpaper-cover.jpg',
  'https://wallpapers-clan.com/wp-content/uploads/2025/05/zenitsu-smiling-demon-slayer-yellow-desktop-wallpaper-cover.jpg',
  'https://wallpapers-clan.com/wp-content/uploads/2024/06/demon-slayer-tanjiro-smile-turquoise-desktop-wallpaper-preview.jpg',
  'https://images8.alphacoders.com/136/1368293.jpeg'
];

let currentIndex = 0;
let currentZoom = 1;
let autoPlayInterval = null;

// DOM Elements
const mainImage = document.getElementById('mainImage');
const thumbnailContainer = document.getElementById('thumbnailContainer');
const imageCounter = document.getElementById('imageCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Zoom Buttons
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const resetZoomBtn = document.getElementById('resetZoomBtn');

// Action Buttons
const autoPlayBtn = document.getElementById('autoPlayBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const deleteBtn = document.getElementById('deleteBtn');
const sliderContainer = document.getElementById('sliderContainer');

// Input Elements
const addUrlBtn = document.getElementById('addUrlBtn');
const imageUrlInput = document.getElementById('imageUrlInput');
const fileInput = document.getElementById('fileInput');

// 1. Initialize Slider
function updateSlider() {
  if (images.length === 0) {
    mainImage.src = 'https://via.placeholder.com/800x500?text=No+Images+Available';
    imageCounter.textContent = '0 / 0';
    thumbnailContainer.innerHTML = '';
    return;
  }

  // Ensure index is in bounds
  if (currentIndex >= images.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = images.length - 1;

  mainImage.src = images[currentIndex];
  imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
  resetZoom();
  renderThumbnails();
}

// 2. Render Thumbnails
function renderThumbnails() {
  thumbnailContainer.innerHTML = '';
  images.forEach((imgUrl, index) => {
    const thumb = document.createElement('img');
    thumb.src = imgUrl;
    thumb.classList.add('thumbnail-item');
    if (index === currentIndex) thumb.classList.add('active');

    thumb.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });

    thumbnailContainer.appendChild(thumb);
  });
}

// 3. Navigation
prevBtn.addEventListener('click', () => {
  if (images.length === 0) return;
  currentIndex--;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  if (images.length === 0) return;
  currentIndex++;
  updateSlider();
});

// 4. Zoom Controls
function applyZoom() {
  mainImage.style.transform = `scale(${currentZoom})`;
}

zoomInBtn.addEventListener('click', () => {
  if (currentZoom < 3) {
    currentZoom += 0.2;
    applyZoom();
  }
});

zoomOutBtn.addEventListener('click', () => {
  if (currentZoom > 0.6) {
    currentZoom -= 0.2;
    applyZoom();
  }
});

function resetZoom() {
  currentZoom = 1;
  applyZoom();
}
resetZoomBtn.addEventListener('click', resetZoom);

// 5. Add Image via URL
addUrlBtn.addEventListener('click', () => {
  const url = imageUrlInput.value.trim();
  if (url) {
    images.push(url);
    currentIndex = images.length - 1;
    imageUrlInput.value = '';
    updateSlider();
  }
});

// 6. Add Image via Local File Upload
fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      images.push(event.target.result);
      currentIndex = images.length - 1;
      updateSlider();
    };
    reader.readAsDataURL(file);
  }
});

// 7. Delete Current Image
deleteBtn.addEventListener('click', () => {
  if (images.length === 0) return;
  images.splice(currentIndex, 1);
  if (currentIndex > 0) currentIndex--;
  updateSlider();
});

// 8. Autoplay
autoPlayBtn.addEventListener('click', () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
    autoPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  } else {
    autoPlayInterval = setInterval(() => {
      currentIndex++;
      updateSlider();
    }, 2500);
    autoPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }
});

// 9. Fullscreen Mode
fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    sliderContainer.requestFullscreen().catch(err => alert(err.message));
  } else {
    document.exitFullscreen();
  }
});

// Initialize on Load
updateSlider();
