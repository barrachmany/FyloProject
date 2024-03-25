let usedstorage = 0;
let maxstorage = 1000;

// Get the file input element
const fileInput = document.getElementById('fileInput');

// Function to open folder when button is clicked
function openFolder() {
    // Trigger click event on file input element
    fileInput.click();
}

// Event listener to handle file selection
fileInput.addEventListener('change', handleFileSelect);

// Function to handle file selection
function handleFileSelect(event) {
    // Get the selected file
    let selectedFile = event.target.files[0];

    if (selectedFile) {
        let fileSize = selectedFile.size / (1024);
        if (fileSize + usedstorage <= maxstorage){
            usedstorage += fileSize;
        }
        console.log(fileSize);
        document.getElementById("storageLeft").innerHTML=Math.floor(maxstorage-usedstorage); 
        document.getElementById("spanUsedMG").innerHTML=Math.ceil(usedstorage)+ " KB";
        document.getElementById("usedStorage").innerHTML = Math.ceil(usedstorage)+ " KB";
        let gradientBar = document.getElementById("gradient-bar");
        gradientBar.style.transition = 'width 2s ease-in-out';
        gradientBar.style.width = (usedstorage+3)/10+'%';
    }
    fileInput.value = null;
}
