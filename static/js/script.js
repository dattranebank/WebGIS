// Tạo map và giới hạn phạm vi tại Việt Nam
const map = L.map('map', {
    center: [14.0583, 108.2772],  // Tọa độ trung tâm của Việt Nam
    zoom: 6,
    minZoom:6,
    maxBounds: [
        [5, 102],  // Góc dưới trái
        [26, 111]   // Góc trên phải
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
// Thêm các polygon vào bản đồ
var vietnamLayer=L.geoJSON(vietnamJS, {
    onEachFeature: function (feature, layer) {
        var properties = feature.properties;

        // Gắn sự kiện click để hiển thị thuộc tính
        layer.on('click', function () {
            var sidebar = document.getElementById('properties-content');
            var content = "<b>Thuộc tính:</b><br>";

            // Hiển thị thuộc tính của polygon
            for (var key in properties) {
                content += key + ": " + properties[key] + "<br>";
            }

            sidebar.innerHTML = content;

            // Hiển thị sidebar nếu đang ẩn
            var sidebarContainer = document.getElementById('properties');
            sidebarContainer.classList.remove('collapsed');
        });

        // Gắn popup hiển thị các thuộc tính
        var popupContent = "<b>Thuộc tính:</b><br>";
        for (var key in properties) {
            popupContent += key + ": " + properties[key] + "<br>";
        }
        layer.bindPopup(popupContent);
    },
      style: function (feature) {
    // Tùy chọn màu sắc và kiểu đường viền cho polygon
    return {
      color: "#0067ff",  // Màu đường viền (blue)
      weight: 3,         // Độ dày đường viền
      opacity: 1,        // Độ mờ của đường viền
      fillColor: "#d1ffff",  // Màu nền (light blue)
      fillOpacity: 0.3   // Độ mờ của màu nền
    };
  }
    }).addTo(map);

// Thêm các polygon vào bản đồ
var provincesLayer=L.geoJSON(provincesJS, {
      onEachFeature: function (feature, layer) {
        // Gắn popup hiển thị các thuộc tính của polygon
        var properties = feature.properties;
        var popupContent = "<b>Thuộc tính:</b><br>";

        for (var key in properties) {
          popupContent += key + ": " + properties[key] + "<br>";
        }

        layer.bindPopup(popupContent);
      },
      style: function (feature) {
    // Tùy chọn màu sắc và kiểu đường viền cho polygon
    return {
      color: "#03ad00",  // Màu đường viền (blue)
      weight: 3,         // Độ dày đường viền
      opacity: 1,        // Độ mờ của đường viền
      fillColor: "#fffacd",  // Màu nền (light blue)
      fillOpacity: 0.3   // Độ mờ của màu nền
    };
  }
    }).addTo(map);

// Thêm các polygon vào bản đồ
var dongthapLayer=L.geoJSON(dongthapJS, {
      onEachFeature: function (feature, layer) {
        // Gắn popup hiển thị các thuộc tính của polygon
        var properties = feature.properties;
        var popupContent = "<b>Thuộc tính:</b><br>";

        for (var key in properties) {
          popupContent += key + ": " + properties[key] + "<br>";
        }

        layer.bindPopup(popupContent);
      },
      style: function (feature) {
    // Tùy chọn màu sắc và kiểu đường viền cho polygon
    return {
      color: "#000000",  // Màu đường viền (blue)
      weight: 3,         // Độ dày đường viền
      opacity: 1,        // Độ mờ của đường viền
      fillColor: "#c4c4c4",  // Màu nền (light blue)
      fillOpacity: 0.3   // Độ mờ của màu nền
    };
  }
    }).addTo(map);

// Thêm các polygon vào bản đồ
var dongthapCaphuyenLayer=L.geoJSON(dongthap_caphuyenJS, {
      onEachFeature: function (feature, layer) {
        // Gắn popup hiển thị các thuộc tính của polygon
        var properties = feature.properties;
        var popupContent = "<b>Thuộc tính:</b><br>";

        for (var key in properties) {
          popupContent += key + ": " + properties[key] + "<br>";
        }

        layer.bindPopup(popupContent);
      },
      style: function (feature) {
    // Tùy chọn màu sắc và kiểu đường viền cho polygon
    return {
      color: "#ff0000",  // Màu đường viền (blue)
      weight: 3,         // Độ dày đường viền
      opacity: 1,        // Độ mờ của đường viền
      fillColor: "#a4a4a4",  // Màu nền (light blue)
      fillOpacity: 0.3   // Độ mờ của màu nền
    };
  }
    }).addTo(map);

// Thêm các polygon vào bản đồ
var tramchimLayer=L.geoJSON(tramchimJS, {
      onEachFeature: function (feature, layer) {
        // Gắn popup hiển thị các thuộc tính của polygon
        var properties = feature.properties;
        var popupContent = "<b>Thuộc tính:</b><br>";

        for (var key in properties) {
          popupContent += key + ": " + properties[key] + "<br>";
        }

        layer.bindPopup(popupContent);
      },
      style: function (feature) {
    // Tùy chọn màu sắc và kiểu đường viền cho polygon
    return {
      color: "#ff7e00",  // Màu đường viền (blue)
      weight: 3,         // Độ dày đường viền
      opacity: 1,        // Độ mờ của đường viền
      fillColor: "#2e90ff",  // Màu nền (light blue)
      fillOpacity: 0.3   // Độ mờ của màu nền
    };
  }
    }).addTo(map);



/*===================================================
               Turn on/off title layers
===================================================*/
document.getElementById("Open Street Map").addEventListener("change", function(e) {
    if (e.target.checked) {
        osm.addTo(map);
    } else {
        map.removeLayer(osm);
    }
});

document.getElementById("vqgtramchim").addEventListener("change", function(e) {
    if (e.target.checked) {
        tramchimLayer.addTo(map);
    } else {
        map.removeLayer(tramchimLayer);
    }
});

document.getElementById("dongthap_caphuyen").addEventListener("change", function(e) {
    if (e.target.checked) {
        dongthapCaphuyenLayer.addTo(map);
    } else {
        map.removeLayer(dongthapCaphuyenLayer);
    }
});

document.getElementById("dongthap").addEventListener("change", function(e) {
    if (e.target.checked) {
        dongthapLayer.addTo(map);
    } else {
        map.removeLayer(dongthapLayer);
    }
});

document.getElementById("provinces").addEventListener("change", function(e) {
    if (e.target.checked) {
        provincesLayer.addTo(map);
    } else {
        map.removeLayer(provincesLayer);
    }
});

document.getElementById("vietnam").addEventListener("change", function(e) {
    if (e.target.checked) {
        vietnamLayer.addTo(map);
    } else {
        map.removeLayer(vietnamLayer);
    }
});


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


