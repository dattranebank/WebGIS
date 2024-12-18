// Tạo map và giới hạn phạm vi tại Việt Nam
const map = L.map('map', {
    center: [14.0583, 108.2772],  // Tọa độ trung tâm của Việt Nam
    zoom: 7,
    maxBounds: [
        [7, 103],  // Góc dưới trái
        [25, 110]   // Góc trên phải
    ],
    maxBoundsViscosity: 1.0 // Đảm bảo rằng các thao tác zoom sẽ giữ trong phạm vi này
});

// Thêm tile layer
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);


/*===================================================
                      GEOJSON
===================================================*/
//var vietnamData = L.geoJSON(vietnamJS).addTo(map);
//var vietnamData2 = L.geoJSON(vietnamJS2).addTo(map);
//var provincesData = L.geoJSON(provincesJS).addTo(map);
//var gadm41Data = L.geoJSON(gadm41JS).addTo(map);

// var gadm41Data = L.geoJSON(gadm41JS, {
//     onEachFeature: function (feature, layer) {
//         layer.bindPopup(`<b>Name: </b>` + feature.properties.name)
//     }}).addTo(map)

    // Thêm các polygon vào bản đồ
// L.geoJSON(gadm41JS, {
//       onEachFeature: function (feature, layer) {
//         // Gắn popup hiển thị các thuộc tính của polygon
//         var properties = feature.properties;
//         var popupContent = "<b>Thuộc tính:</b><br>";
//
//         for (var key in properties) {
//           popupContent += key + ": " + properties[key] + "<br>";
//         }
//
//         layer.bindPopup(popupContent);
//       }
//     }).addTo(map);

//     // Thêm các polygon vào bản đồ
// L.geoJSON(vietnamJS, {
//       onEachFeature: function (feature, layer) {
//         // Gắn popup hiển thị các thuộc tính của polygon
//         var properties = feature.properties;
//         var popupContent = "<b>Thuộc tính:</b><br>";
//
//         for (var key in properties) {
//           popupContent += key + ": " + properties[key] + "<br>";
//         }
//
//         layer.bindPopup(popupContent);
//       }
//     }).addTo(map);
//
//     // Thêm các polygon vào bản đồ
// L.geoJSON(provincesJS, {
//       onEachFeature: function (feature, layer) {
//         // Gắn popup hiển thị các thuộc tính của polygon
//         var properties = feature.properties;
//         var popupContent = "<b>Thuộc tính:</b><br>";
//
//         for (var key in properties) {
//           popupContent += key + ": " + properties[key] + "<br>";
//         }
//
//         layer.bindPopup(popupContent);
//       }
//     }).addTo(map);
//
//
//     // Thêm các polygon vào bản đồ
// L.geoJSON(dongthapJS, {
//       onEachFeature: function (feature, layer) {
//         // Gắn popup hiển thị các thuộc tính của polygon
//         var properties = feature.properties;
//         var popupContent = "<b>Thuộc tính:</b><br>";
//
//         for (var key in properties) {
//           popupContent += key + ": " + properties[key] + "<br>";
//         }
//
//         layer.bindPopup(popupContent);
//       }
//     }).addTo(map);

    // Thêm các polygon vào bản đồ
L.geoJSON(dongthap_caphuyenJS, {
      onEachFeature: function (feature, layer) {
        // Gắn popup hiển thị các thuộc tính của polygon
        var properties = feature.properties;
        var popupContent = "<b>Thuộc tính:</b><br>";

        for (var key in properties) {
          popupContent += key + ": " + properties[key] + "<br>";
        }

        layer.bindPopup(popupContent);
      }
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

// Sidebar Dashboard toggle
const dashboard = document.getElementById('dashboard');
const toggleDashboardBtn = document.getElementById('toggle-dashboard-btn');

function updateZoomControlPosition() {
    // Điều chỉnh `left` theo trạng thái Layers
    zoomControl.style.left = layers.classList.contains('collapsed') ? '1850px' : '1550px';

    // Điều chỉnh `top` theo trạng thái Dashboard
    zoomControl.style.top = dashboard.classList.contains('collapsed') ? '800px' : '500px';
}

// Sự kiện toggle cho Layers
toggleLayersBtn.addEventListener('click', () => {
    layers.classList.toggle('collapsed');
    toggleLayersBtn.classList.toggle('collapsed');
    toggleLayersBtn.textContent = layers.classList.contains('collapsed') ? '⮜' : '⮞';

    // Cập nhật vị trí nút zoom
    updateZoomControlPosition();
});

// Sự kiện toggle cho Dashboard
toggleDashboardBtn.addEventListener('click', () => {
    dashboard.classList.toggle('collapsed');
    toggleDashboardBtn.classList.toggle('collapsed');
    toggleDashboardBtn.textContent = dashboard.classList.contains('collapsed') ? '▲' : '▼';

    // Cập nhật vị trí nút zoom
    updateZoomControlPosition();
});