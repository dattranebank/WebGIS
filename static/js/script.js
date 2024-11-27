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

// Sidebar toggle
const properties = document.getElementById('properties');
const toggleBtn = document.getElementById('toggle-properties-btn');

toggleBtn.addEventListener('click', () => {
    properties.classList.toggle('collapsed');
    toggleBtn.classList.toggle('collapsed');
    toggleBtn.textContent = properties.classList.contains('collapsed') ? '⮞' : '⮜';
});
