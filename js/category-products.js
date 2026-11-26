const params =
    new URLSearchParams(window.location.search);


// Get category information
const categoryId =
    params.get("id");

const categoryName =
    params.get("name");


// Display category name
document.getElementById("categoryName")
    .textContent = categoryName || "Category";


// Example category descriptions
const categoryDescriptions = {

    "finite-element-simulations":
        "Linear & Nonlinear Analysis using the ABAQUS and ANSYS software",

    "DV-ML":
        "Data analysis & visualization and machine learning for structural engineering applications using Python and MATLAB",

    "design-analysis":
        "Historical Building Information Modelling (HBIM), structural analysis and design of RCC and Steel structures. *** All AUTOCAD, REVIT, ETABS, SAFE Files, complete drawings and detailing will be available on request. *** TO BE CONTINUED… THANK YOU. ",

    // "research":
    //     "Academic research and scientific projects."

};


// Display description
document.getElementById("categoryDescription")
    .textContent =
    categoryDescriptions[categoryId] ||
    "Projects in this category.";



// Example project data
const projects = {


    "finite-element-simulations": [
        {
            id: 1,

            title: "Air blast simulation of a composite-honeycomb sandwich using Abaqus",

            category: "Composite Structures",

            description:
                "This project involves the simulation of air blast effects on a composite sandwich structure using Abaqus software. The study focuses on understanding the structural response and failure mechanisms under blast loading conditions. The simulation results provide insights into the performance of composite materials in extreme environments, aiding in the design of safer and more resilient structures. ",

            images: [
                "Image/composite-air-blast/image6.png",
                "Image/composite-air-blast/image4.png",
                "Image/composite-air-blast/image5.png",
                "Image/composite-air-blast/image1.png",
                "Image/composite-air-blast/image2.png",
                "Image/composite-air-blast/image3.png",
            ],
            text: "View Project",
            link: "https://drive.google.com/file/d/1uuyz92dKkFt0dfA7m_ZOcuGaa8UhBZv_/view?usp=sharing"
        },

        {
            id: 2,

            title: "Deformation of Laminated Composite Plates Analysis Using Analytical and Finite Element Method",

            category: "Fibre Reinforced Polymer Composite",

            description:
                "This project involves the simulation of bending effects on a composite sandwich structure using ANSYS software. The study focuses on understanding the structural response and failure mechanisms under bending loading conditions. The simulation results provide insights into the performance of composite materials under bending, aiding in the design of safer and more resilient structures. ",

            images: [
                "Image/composite-bending/image2.png",
                "Image/composite-bending/image4.png",
                "Image/composite-bending/image3-0-deg.png",
                "Image/composite-bending/image3-90-deg.png",
                "Image/composite-bending/image1.png",
            ],
            text: "View Project",
            link: "https://drive.google.com/file/d/1YMZCBszCVW6srzinXoBp5-VFFnMjcuGz/view?usp=sharing"
        },

        {
            id: 3,

            title: "Three-point Bending Test of FRP foam-core sandwich structure",

            category: "Composite Sandwich Structures",

            description:
                `This project involves the simulation of bending effects on a FRP foam-core sandwich structure using Abaqus software. The study focuses on understanding the structural response and failure mechanisms under bending loading conditions. The simulation results provide insights into the performance of FRP foam-core sandwich structure under bending, aiding in the design of safer and more resilient structures that utilizes FRP foam-core sandwich structure.`,

            images: [
                "Image/comp-bending-abaqus/image1.png",
                "Image/comp-bending-abaqus/image2.png",
                "Image/comp-bending-abaqus/image3.png",
                "Image/comp-bending-abaqus/image4.png",
                "Image/comp-bending-abaqus/image5.png",
                "Image/comp-bending-abaqus/image6.png",
                "Image/comp-bending-abaqus/image7.png",
            ],
            text: "View Project",
            link: "https://drive.google.com/file/d/1FpNt2lbKgpVk6ElYc6ZwGGPxQCbOyRd7/view?usp=sharing"
        },

        {
            id: 4,

            title: "Bullet Impact Test on an Aluminium Plate",

            category: "Impact Test",

            description:
                `A finite element simulation of projectile impact on an aluminium plate using Abaqus to analyse its dynamic response, deformation and damage under high-velocity impact loading. The simulation provides insights into impact-resistant structural design, with relevance to civil engineering applications such as protective barriers, bridge components, structural cladding, blast-resistant systems and infrastructure exposed to accidental impact or extreme loading.`,

            images: [
                "Image/Bullet impact test/img1.png",
                "Image/Bullet impact test/img2.png",
                "Image/Bullet impact test/img3.png",
            ],
            text: " ",
            link: ""
        },
        {
            id: 5,

            title: "XFEM Crack Propagation Simulation in a Plate and Concrete Beam",

            category: "XFEM Crack Propagation",

            description:
                `Finite element simulations of crack initiation and propagation in a plate and concrete beam using the Extended Finite Element Method (XFEM), examining fracture behaviour and damage evolution under loading. The simulations demonstrate the application of fracture mechanics and computational modelling in assessing structural integrity, predicting failure mechanisms and informing the design of damage-resistant structures, particularly in concrete infrastructure and structural components subjected to complex loading conditions.`,

            images: [
                "Image/Crack growth 1/img1.png",
                "Image/Crack growth 1/img2.png",
                "Image/XFEM Crack growth of Al Plate/img1.png",
                "Image/XFEM Crack growth of Al Plate/img2.png",
                "Image/XFEM Crack growth of Al Plate/img3.png",
            ],
            text: " ",
            link: ""
        },
        {
            id: 6,

            title: "Classical Plate Analysis: Normal Stress and Stress Concentration Around a Hole",

            category: "Composite Structure",

            description:
                `A classical elasticity analysis of a plate subjected to loading to evaluate normal stress distribution and stress concentration around a hole. The study examines how geometric discontinuities influence stress distribution and structural behaviour, providing fundamental insights into stress concentration, structural design, material efficiency and the integrity of structural components commonly encountered in civil, mechanical and aerospace engineering.`,

            images: [
                "Image/Plate-Hole Analysis/img1.png",
                "Image/Plate-Hole Analysis/img2.png",
                "Image/Plate-Hole Analysis/img3.png",
                "Image/Plate-Hole Analysis/img4.png",
                "Image/Plate-Hole Analysis/img5.png",
            ],
            text: " ",
            link: ""
        },

        {
            id: 7,

            title: "Compression Analysis of a Re-entrant Auxetic Structure",

            category: "Composite Structure",

            description:
                `A numerical simulation of a re-entrant auxetic structure under compressive loading to investigate its deformation behaviour, stress distribution and mechanical response. The analysis explores the unique negative Poisson's ratio characteristics of auxetic materials and their potential for energy absorption, impact resistance and enhanced structural performance. These properties offer promising applications in civil engineering, including protective infrastructure, lightweight structural components, seismic-resistant systems and impact-resistant construction materials.`,

            images: [
                "Image/auxetic compression/img1.png",
                "Image/auxetic compression/img2.png",
                "Image/auxetic compression/img3.png",
            ],
            text: " ",
            link: ""
        },

        {
            id: 8,

            title: "Compression Analysis of a Hexagonal Honeycomb Structure",

            category: "Composite Structure",

            description:
                `A numerical simulation of a hexagonal honeycomb structure under compressive loading to investigate its deformation mechanisms, stress distribution, stiffness and energy absorption capacity. The analysis provides insights into the mechanical performance of cellular structures and their potential for developing lightweight, high-strength and energy-absorbing structural systems, with applications in bridge components, protective infrastructure, sandwich panels and other weight-efficient civil engineering structures.`,

            images: [
                "Image/Hex honeycomb compression/img1.png",
                "Image/Hex honeycomb compression/img2.png",
                "Image/Hex honeycomb compression/img3.png",
            ],
            text: " ",
            link: ""
        },
        {
            id: 9,

            title: "ANSYS Reinforced Concrete Beam - Explicit Dynamics",

            category: "Reinforced Concrete Structure",

            description:
                `RC Beam modelled using explicit dynamics. Failed elements or cracked and crushed elements are deleted from the model as the analysis is running. This is a high impact test of concrete.`,

            images: [
                "Image/RCC 3-point bending/img1.png",
                "Image/RCC 3-point bending/img2.png",
                "Image/RCC 3-point bending/img3.png",
            ],
            text: " ",
            link: ""
        },
        {
            id: 10,

            title: "Four Point Bending Test (Reinforced Concrete Beam) - ANSYS",

            category: "Reinforced Concrete Structure",

            description:
                `The four-point bending test is essential for understanding the structural performance of reinforced concrete beams. It ensures that beams can safely resist bending loads, control cracking, and perform reliably in real-world structures such as buildings and bridges.`,

            images: [
                "Image/RCC 4-point bending/img1.png",
                "Image/RCC 4-point bending/img2.png",
                "Image/RCC 4-point bending/img3.png",
                "Image/RCC 4-point bending/img4.png",
                "Image/RCC 4-point bending/img5.png",
            ],
            text: " ",
            link: ""
        },

        {
            id: 11,

            title: "Representative Volume Element (RVE) Modelling and Macromechanical Analysis of a Unidirectional (UD) Composite Ply",

            category: "Composite Structure",

            description:
                `A numerical investigation of a unidirectional composite ply using Representative Volume Element (RVE) modelling and macromechanical analysis to evaluate its effective elastic properties and overall mechanical response. The modelling approach provides insights into the relationship between constituent material properties, fibre`,

            images: [
                "Image/RVE Modelling-Composites/img1.png",
                "Image/RVE Modelling-Composites/img2.png",
                "Image/Macro-mechanics of UD ply/img1.png",
                "Image/Macro-mechanics of UD ply/img2.png",
            ],
            text: " ",
            link: ""
        },

    ],


    "design-analysis": [

        {
            id: 1,

            title: "Modelling of Heritage Building using Revit for CFD analysis",

            category: "Revit Modelling",

            description:
                "This project involves the modelling of a heritage building using Revit software for subsequent Computational Fluid Dynamics (CFD) analysis. The study focuses on creating an accurate digital representation of historic building geometry from LiDAR scan data. The Revit model serves as a basis for performing CFD simulations to analyze wind-induced pressures on the building for structural safety assessment. The results provide insights into the building's performance under various environmental conditions, aiding in the preservation and optimization of heritage structures.",

            images: [
                "Image/design/revit/HB/LiDar scan.png",
                "Image/design/revit/HB/plan-view.png",
                "Image/design/revit/HB/north-west elevation.png",
                "Image/design/revit/HB/south-east elevation.png",
                "Image/design/revit/HB/image1.png",
                "Image/design/revit/HB/image2.png",
                "Image/design/revit/HB/img5.jpeg",
                "Image/design/revit/HB/img6.png",
                "Image/design/revit/HB/img7.png",
                "Image/design/revit/HB/img8.png",
                "Image/design/revit/HB/img9.png",

            ],
            text: " ",
            link: ""
        },
        {
            id: 2,

            title: "Secondary School Building Design.",

            category: "Revit Modelling, Structural Analysis & Design, RCC",

            description:
                "Architectural modelling and structural design of a secondary school comprising 15 classrooms, 3 offices and 12 WC facilities within a 28 × 22 m building footprint. The project involved architectural drafting and design development using AutoCAD, BIM modelling in Revit, and structural modelling, analysis and design using ETABS.",

            images: [
                "Image/New school building/image1.jpg",
                "Image/New school building/Realistic Three-Story School Courtyard.png",
                "Image/New school building/ground floor.png",
                "Image/New school building/first floor.png",
                "Image/New school building/second floor.png",
                "Image/New school building/STE-B&C.png",
                "Image/New school building/STE-beam 2.png",
                "Image/New school building/STE-slab.png",
                "Image/New school building/STE-C&Stair.png",
                "Image/New school building/STE-F-Lay.png",
                "Image/New school building/STE-F.png",

            ],
            text: " ",
            link: ""
        },
        {
            id: 3,

            title: "School Hostel Building Design.",

            category: "Revit Modelling, Structural Analysis & Design, RCC",

            description:
                "Architectural modelling and structural analysis and design of a Nigerian university hostel building comprising 24 rooms, 4 kitchens and 16 WC facilities within a 40 × 8 m footprint. The project involved architectural drafting using AutoCAD, BIM-based modelling in Revit and structural modelling, analysis and design of reinforced concrete (RCC) elements using ETABS. ",

            images: [
                "Image/Hostel Building/image-1.jpg",
                "Image/Hostel Building/image-1-1.png",
                "Image/Hostel Building/image-2.jpg",
                "Image/Hostel Building/image2-2.png",
                "Image/Hostel Building/ground floor.png",
                "Image/Hostel Building/first floor.png",
                "Image/Hostel Building/second floor.png",
                "Image/Hostel Building/third floor.png",
                "Image/Hostel Building/A2.png"

            ],
            text: " ",
            link: ""
        },
        {
            id: 4,

            title: "Pile Foundation Design",

            category: "Geotechnical Engineering, Foundation Design",

            description:
                "A pile foundation design project for a 20 × 30 m swamp area, involving the application of British Standard (BS) design provisions to develop a suitable deep foundation system for challenging ground conditions. The project focused on foundation modelling, structural analysis and design using CSI SAFE, with consideration of the load-transfer mechanisms and structural requirements associated with pile-supported foundations. Such designs are essential for ensuring foundation stability, minimising excessive settlement and providing reliable support for infrastructure constructed on weak, waterlogged and low-bearing-capacity soils.",

            images: [
                "Image/design/analysis/pile-3d.png",
                "Image/design/analysis/pile-layout.png",
                "Image/design/analysis/pile-analysis.png",
                "Image/design/analysis/pile-design1.png",
                "Image/design/analysis/pile-design2.png",
                "Image/design/analysis/pile-design3.png",

            ],
            text: " ",
            link: ""
        },
        {
            id: 5,

            title: "Wind Turbine Foundation Design",

            category: "Foundation Engineering, Revit Modelling & Renewable Energy Infrastructure",

            description:
                "A wind turbine foundation design and modelling project using Autodesk Revit, focusing on the development and digital representation of foundation systems for renewable energy infrastructure. The project highlights the role of foundation engineering in supporting wind turbine structures under complex loading conditions, including self-weight, wind-induced forces and dynamic effects. Reliable foundation design is essential for ensuring structural stability, serviceability and long-term performance of wind energy installations, contributing to the development of sustainable and resilient energy infrastructure.",

            images: [
                "Image/WT Foundation/img1.png",
                "Image/WT Foundation/img2.png",
                "Image/WT Foundation/img3.png",
                "Image/WT Foundation/img4.png",

            ],
            text: " ",
            link: ""
        },
        {
            id: 6,

            title: "Multi-storey Steel Office Building Analysis and Design",

            category: "Structural Analysis, Steel Design ",

            description:
                "Structural analysis and design of a multi-storey steel office building with a 16.5 × 16.5 m footprint, using ETABS in accordance with AISC 360 design provisions. The project involved structural modelling, evaluation of load effects and assessment of the performance of steel structural members under relevant loading conditions. The design process supports the development of safe, efficient and structurally reliable steel building systems, with emphasis on material efficiency, structural stability and the application of advanced steel construction in modern infrastructure.",

            images: [

                "Image/Steel Design 1/img2.png",
                "Image/Steel Design 1/img3.png",
                "Image/Steel Design 1/img4.png",
                "Image/Steel Design 1/img5.png",
                "Image/Steel Design 1/img1.png",

            ],
            text: " ",
            link: ""
        },
        {
            id: 7,

            title: "Workshop Design",

            category: "Structural Analysis, Steel Design ",

            description:
                "Structural analysis and design of a steel workshop building with a 24 × 15 m footprint, using ETABS in accordance with relevant Eurocode provisions. The project involved structural modelling, evaluation of design loads and assessment of steel members to ensure adequate strength, stability and serviceability. The design emphasises the efficient use of structural steel in developing functional, durable and economical industrial buildings, with applications in industrial facilities, manufacturing plants and other steel-framed infrastructure.",

            images: [
                "Image/Steel design/img1.png",
                "Image/Steel design/img2.png",
                "Image/Steel design/img3.png",
                "Image/Steel design/img4.png",
                "Image/Steel design/img5.png",
                "Image/Steel design/img6.png",

            ],
            text: " ",
            link: ""
        },

    ],


    "DV-ML": [

        {
            id: 1,
            title: "Data Analysis & Visualization and Machine Learning",
            category: "Python, MATLAB",
            description: "Data analysis & visualization and machine learning using Python and MATLAB programming for structural engineering applications.",
            images: [
                "Image/ML/img9.png",
                "Image/ML/img10.png",
                "Image/ML/img1.png",
                "Image/ML/img2.png",
                "Image/ML/img3.png",
                "Image/ML/img4.png",
                "Image/ML/img5.png",
                "Image/ML/img6.png",
                "Image/ML/img7.png",
                "Image/ML/img8.png",

            ],
            text: "View Github",
            link: "https://github.com/ikponmwosaosaseredestiny",
        },


    ],


    "research": [

        {
            title: "Machine Learning Research",
            description: "Machine learning application in engineering.",
            image: "images/ml.jpg"
        },

        {
            title: "Sustainable Materials",
            description: "Research into sustainable construction materials.",
            image: "images/materials.jpg"
        }

    ]

};



// Get projects belonging to selected category
const categoryProjects =
    projects[categoryId] || [];


// Get projects container
const projectsContainer =
    document.getElementById("projectsContainer");


// Check if projects exist
if (categoryProjects.length === 0) {

    projectsContainer.innerHTML = `

        <div class="col-12">

            <div class="alert alert-warning">
                No projects found in this category.
            </div>

        </div>

    `;

}


// Create all projects
categoryProjects.forEach((project, index) => {

    const projectHTML =
        createProject(project, index);

    projectsContainer.insertAdjacentHTML(
        "beforeend",
        projectHTML
    );

});

// Display projects
// categoryProjects.forEach(project => {

//     const col =
//         document.createElement("div");

//     col.className =
//         "col-12 col-md-6 col-lg-4";


//     col.innerHTML = `

//         <div class="card h-100 border-0 shadow-sm">

//             <img
//                 src="${project.image}"
//                 class="card-img-top"
//                 alt="${project.title}"
//                 style="height: 220px; object-fit: cover;"
//             >

//             <div class="card-body">

//                 <h5 class="card-title fw-bold">
//                     ${project.title}
//                 </h5>

//                 <p class="card-text text-muted">
//                     ${project.description}
//                 </p>

//                 <button
//                     class="btn btn-primary"
//                 >
//                     View Project
//                 </button>

//             </div>

//         </div>

//     `;


//     projectsContainer.appendChild(col);

// });



/*
========================================
CREATE PROJECT
========================================
*/

function createProject(project, index) {

    const carouselId =
        `projectCarousel-${project.id}`;


    /*
        Create image slides
    */

    const slides = project.images
        .map((image, imageIndex) => {

            return `
                <div
                    class="carousel-item
                    ${imageIndex === 0 ? "active" : ""}"
                    style="background-color: #aaadaeba; height:100%, width:100%;"
                >

                    <img
                        src="${image}"
                        style="object-fit: contain; background-color: #aaadaeba;"
                        class="d-block w-100"
                        alt="${project.title}"
                    >

                </div>
            `;

        })
        .join("");


    /*
        Create carousel indicators
    */

    const indicators = project.images
        .map((image, imageIndex) => {

            return `
                <button
                    type="button"
                    data-bs-target="#${carouselId}"
                    data-bs-slide-to="${imageIndex}"
                    class="${imageIndex === 0 ? "active" : ""}"
                    aria-label="Slide ${imageIndex + 1}"
                    // style="background-color: #000000;"
                >
                </button>
            `;

        })
        .join("");


    /*
        Image gallery
    */

    const gallery = `

        <div class="col-lg-6" style="height:100%, width:100%;">

            <div class="project-gallery">

                <div
                    id="${carouselId}"
                    class="carousel slide"
                    data-bs-ride="carousel"
                >

                    <!-- Indicators -->

                    <div class="carousel-indicators">

                        ${indicators}

                    </div>


                    <!-- Images -->

                    <div class="carousel-inner">

                        ${slides}

                    </div>


                    <!-- Previous -->

                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#${carouselId}"
                        data-bs-slide="prev"
                        style="background-color: #939393b6;"
                    >

                        <span
                            class="carousel-control-prev-icon">
                        </span>

                        <span class="visually-hidden">
                            Previous
                        </span>

                    </button>


                    <!-- Next -->

                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#${carouselId}"
                        data-bs-slide="next"
                        style="background-color: #939393b6;"
                    >

                        <span
                            class="carousel-control-next-icon">
                        </span>

                        <span class="visually-hidden">
                            Next
                        </span>

                    </button>

                </div>

            </div>

        </div>
    `;


    /*
        Project information
    */

    const information = `

        <div class="col-lg-6" style="padding: 20px;">

            <div class="project-info">

                <span class="project-category">
                    ${project.category}
                </span>


                <h2 class="project-title">
                    ${project.title}
                </h2>


                <p class="project-description">
                    ${project.description}
                </p>

                ${project.text !== " " ? `<a href="${project.link}" target="_blank" class="btn btn-primary">
                   ${project.text}
                </a>` : ""}


            </div>

        </div>
    `;


    /*
        Alternate the layout.

        Project 1:
        Gallery | Information

        Project 2:
        Information | Gallery

        Project 3:
        Gallery | Information

        Project 4:
        Information | Gallery
    */

    if (index % 2 === 0) {

        return `

            <section class="project-item">

                <div class="project-card">

                    <div class="row g-0">

                        ${gallery}

                        ${information}

                    </div>

                </div>

            </section>

        `;

    } else {

        return `

            <section class="project-item">

                <div class="project-card">

                    <div class="row g-0">

                        ${information}

                        ${gallery}

                    </div>

                </div>

            </section>

        `;

    }

}
