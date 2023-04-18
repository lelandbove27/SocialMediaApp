let currentFile;

let imageInput : HTMLElement | null = <HTMLInputElement>document.getElementById('image-input');
imageInput?.addEventListener('change', function previewImage(event : any) {
    let image : HTMLImageElement = <HTMLImageElement>document.getElementById('image-preview');
    image.src = URL.createObjectURL(event.target?.files[0]);
    currentFile = event.target.files[0];
    console.log(image.src);
});

let uploadButton : HTMLElement | null = document.getElementById('upload-image-button');
uploadButton?.addEventListener('click', function uploadImage(event) {
    event.preventDefault();

    let imageInput = <HTMLInputElement>document.getElementById('image-input'); 
  
    let imageData = new FormData();
    imageData.append("image", currentFile);
  
    fetch("http://192.168.0.114:8080/uploadImage", {
      method: "POST",
      mode: 'cors',
      body: imageData
    })
    .catch(err => console.log(err));
  
    console.log("here");
  
});
