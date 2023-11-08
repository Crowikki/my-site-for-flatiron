document.getElementById("showImageButton").addEventListener("click", function() {
    const imageContainer = document.getElementById("imageContainer");
    const displayedImage = document.getElementById("displayedImage");

    displayedImage.src = "https://i.pinimg.com/736x/54/d5/fd/54d5fd3e3434bac27aa753fe2f6df8ec.jpg";
   
    imageContainer.style.display = "block";
});

