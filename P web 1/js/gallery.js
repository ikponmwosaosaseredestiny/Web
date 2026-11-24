
// ======================================
// GALLERY IMAGE DATA
// ======================================

const galleryImages = [

    {
        image: "image/Industry Experience/img1.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img2.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img3.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img4.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img5.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img6.jpg",
        title: " ",
        description: " "
    },
    // {
    //     image: "image/Industry Experience/img7.jpg",
    //     title: " ",
    //     description: " "
    // },
    {
        image: "image/Industry Experience/img8.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img9.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img10.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img11.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img12.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img13.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img14.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img15.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img16.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img17.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img18.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img19.jpg",
        title: " ",
        description: " "
    },
    {
        image: "image/Industry Experience/img20.jpg",
        title: " ",
        description: " "
    },


];


// ======================================
// ELEMENTS
// ======================================

const galleryGrid = document.getElementById("galleryGrid");

const imageModalElement = document.getElementById("imageModal");

const imageModal = new bootstrap.Modal(imageModalElement);

const fullImage = document.getElementById("fullImage");

const imageTitle = document.getElementById("imageTitle");

const imageDescription = document.getElementById("imageDescription");

const imageCounter = document.getElementById("imageCounter");

let currentIndex = 0;


// ======================================
// DISPLAY GALLERY IMAGES
// ======================================

function displayGallery() {

    galleryGrid.innerHTML = "";

    galleryImages.forEach((item, index) => {

        const column = document.createElement("div");

        column.className = "col-12 col-sm-6 col-lg-4";

        column.innerHTML = `

            <div class="gallery-card"
                 onclick="openImage(${index})">

                <img src="${item.image}"
                     alt="${item.title}"
                     loading="lazy">

                <div class="gallery-overlay">

                    <h5>${item.title}</h5>

                    <i class="fa-solid fa-expand"></i>

                </div>

            </div>

        `;

        galleryGrid.appendChild(column);

    });

}


// ======================================
// OPEN IMAGE MODAL
// ======================================

function openImage(index) {

    currentIndex = index;

    updateModal();

    imageModal.show();

}


// ======================================
// UPDATE MODAL CONTENT
// ======================================

function updateModal() {

    const item = galleryImages[currentIndex];

    fullImage.src = item.image;

    fullImage.alt = item.title;

    imageTitle.textContent = item.title;

    imageDescription.textContent = item.description;

    imageCounter.textContent =
        `${currentIndex + 1} of ${galleryImages.length}`;

}


// ======================================
// NEXT IMAGE
// ======================================

function nextImage() {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    updateModal();

}


// ======================================
// PREVIOUS IMAGE
// ======================================

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    updateModal();

}


// ======================================
// BACK BUTTON
// ======================================

function goBack() {

    if (window.history.length > 1) {

        window.history.back();

    } else {

        window.location.href = "index.html";

    }

}


// ======================================
// KEYBOARD NAVIGATION
// ======================================

document.addEventListener("keydown", function (event) {

    if (!imageModalElement.classList.contains("show")) {
        return;
    }

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        previousImage();
    }

});


// ======================================
// INITIALIZE GALLERY
// ======================================

displayGallery();
