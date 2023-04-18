var currentFile;
var imageInput = document.getElementById('image-input');
imageInput === null || imageInput === void 0 ? void 0 : imageInput.addEventListener('change', function previewImage(event) {
    var _a;
    var image = document.getElementById('image-preview');
    image.src = URL.createObjectURL((_a = event.target) === null || _a === void 0 ? void 0 : _a.files[0]);
    currentFile = event.target.files[0];
    console.log(image.src);
});
var uploadButton = document.getElementById('upload-image-button');
uploadButton === null || uploadButton === void 0 ? void 0 : uploadButton.addEventListener('click', function uploadImage(event) {
    event.preventDefault();
    var imageInput = document.getElementById('image-input');
    var imageData = new FormData();
    imageData.append("image", currentFile);
    fetch("http://192.168.0.114:8080/uploadImage", {
        method: "POST",
        mode: 'cors',
        body: imageData
    })
        .catch(function (err) { return console.log(err); });
    console.log("here");
});
