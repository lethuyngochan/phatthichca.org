document.querySelectorAll('.label').forEach(function (label) {
    label.addEventListener('click', function () {
        // Tìm phần tử .branch ngay dưới .label vừa được click
        var branch = this.nextElementSibling;
        if (branch && branch.classList.contains('branch')) {
            // Nếu .branch đang hiển thị, ẩn nó đi
            if (branch.style.display === 'block' || branch.style.display === '') {
                branch.style.display = 'none';
            } else {
                // Nếu .branch đang ẩn, hiển thị nó
                branch.style.display = 'block';
            }
        }
    });
});


// Get the zoomable element and the buttons
const zoomElement = document.getElementById('zoom-element');
const zoomInButton = document.getElementById('zoom-in-btn');
const zoomOutButton = document.getElementById('zoom-out-btn');

// Initial zoom scale
let scale = 1;

// Zoom In functionality
zoomInButton.addEventListener('click', function() {
    scale += 0.1; // Increase the scale by 0.1 (zoom in)
    zoomElement.style.transform = `scale(${scale})`;
});

// Zoom Out functionality
zoomOutButton.addEventListener('click', function() {
    scale -= 0.1; // Decrease the scale by 0.1 (zoom out)
    if (scale < 0.1) scale = 0.1; // Prevent the scale from becoming too small
    zoomElement.style.transform = `scale(${scale})`;
});

