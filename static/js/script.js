// Tạo map và giới hạn phạm vi tại Việt Nam
const map = L.map('map', {
    center: [14.0583, 108.2772],  // Tọa độ trung tâm của Việt Nam
    zoom: 7,
    maxBounds: [
        [8.2, 102.1],  // Góc dưới trái
        [23.4, 109.5]   // Góc trên phải
    ],
    maxBoundsViscosity: 1.0 // Đảm bảo rằng các thao tác zoom sẽ giữ trong phạm vi này
});

// Thêm tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 7,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Sidebar Properties toggle
const properties = document.getElementById('properties');
const togglePropertiesBtn = document.getElementById('toggle-properties-btn');

togglePropertiesBtn.addEventListener('click', () => {
    properties.classList.toggle('collapsed');
    togglePropertiesBtn.classList.toggle('collapsed');
    togglePropertiesBtn.textContent = properties.classList.contains('collapsed') ? '⮞' : '⮜';
});

// Sidebar Layers toggle
const layers = document.getElementById('layers');
const toggleLayersBtn = document.getElementById('toggle-layers-btn');
const zoomControl = document.querySelector('.leaflet-control-zoom');

toggleLayersBtn.addEventListener('click', () => {
    layers.classList.toggle('collapsed');
    toggleLayersBtn.classList.toggle('collapsed');
    toggleLayersBtn.textContent = layers.classList.contains('collapsed') ? '⮜' : '⮞';

    // Điều chỉnh vị trí nút zoom
    if (layers.classList.contains('collapsed')) {
        zoomControl.style.left = '1850px'; // Vị trí khi sidebar thu gọn
    } else {
        zoomControl.style.left = '1550px'; // Vị trí khi sidebar mở rộng
    }
});

