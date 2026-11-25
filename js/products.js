const categories = [

    {
        id: "finite-element-simulations",
        name: "Finite Element Analysis",
        description: "Linear & Nonlinear Analysis using the ABAQUS and ANSYS software",
        image: "Image/composite-air-blast/image1.png",
        projectCount: 9
    },

    {
        id: "DV-ML",
        name: "Data Visualization & Machine Learning",
        description: "Computational Analysis, Data analysis & visualization, and machine learning for structural engineering applications using Python and MATLAB",
        image: "Image/ML/model-plot.png",
        projectCount: "N/A"
    },

    {
        id: "design-analysis",
        name: "Structural Analysis and Design",
        description: "Historical Building Information Modelling (HBIM), Reinforced concrete and Steel analysis and Design",
        image: "Image/design/revit/HB/image1.png",
        projectCount: "N/A"
    },

    // {
    //     id: "research",
    //     name: "Research",
    //     description: "Academic research and scientific projects.",
    //     image: "images/research.jpg",
    //     projectCount: 10
    // }

];


// Get the container
const categoryContainer =
    document.getElementById("categoryContainer");


// Create category cards
categories.forEach(category => {

    const col = document.createElement("div");

    col.className =
        "col-12 col-sm-6 col-lg-4 col-xl-3";


    col.innerHTML = `

        <div
            class="card h-100 shadow-sm border-0 category-card"
            style="cursor: pointer;"
        >

            <img
                src="${category.image}"
                class="card-img-top"
                alt="${category.name}"
                style="height: 200px; object-fit: cover;"
            >

            <div class="card-body">

                <h5 class="card-title fw-bold">
                    ${category.name}
                </h5>

                <p class="card-text text-muted">
                    ${category.description}
                </p>

               

            </div>

        </div>

    `;

    //  <span class="badge bg-primary">
    //                 ${category.projectCount} Projects
    //             </span> 


    // Get the card
    const card =
        col.querySelector(".category-card");


    // CLICK EVENT
    card.onclick = function () {

        // Encode the category information
        const categoryId =
            encodeURIComponent(category.id);

        const categoryName =
            encodeURIComponent(category.name);


        // Send information to next page
        window.location.href =
            `category-products.html?id=${categoryId}&name=${categoryName}`;

    };


    // Add card to page
    categoryContainer.appendChild(col);

});
