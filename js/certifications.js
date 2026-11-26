const certifications = [
    {
        image: "Image/certifications/UD-LCA.jpg",
        title: "Life Cycle Assessment ",
        issuer: "UDEMY • Joris Simaitis",
        date: "November 2026",

        skills: [
            "Goal & Scope Definition",
            "Life Cycle Inventory Analysis",
            "Life Cycle Impact Assessment",
            "Interpretation of Results",
        ]
    },
    {
        image: "Image/certifications/UD-FEA.jpg",
        title: "Finite Element Analysis of Composite Structures ",
        issuer: "UDEMY • Prof. Aleksandr Cherniaev",
        date: "November 2026",

        skills: [
            "Micromechanics of Composites",
            "Macromechanics of a Lamina",
            "Macromechanics of Laminates",
            "Stability of Composite Structures and Complex Layup Modeling",
            "Strngth and Failure of Composites",
            "Weight-Efficient Design of Composite Structures",
        ]
    },

    {
        image: "Image/certifications/udemy-mom.jpg",
        title: "Mechanics of Materials: Exploring Structural Mechanics",
        issuer: "UDEMY • Prof. Mohamed Noureldin",
        date: "August 2026",

        skills: [
            "Behavior & Mechanical Properties of Materials",
            "Axially Loaded Members, Thermal effects and strain energy",
            "Stresses in Beams",
            "Analysis of Stress and Strain; Principal Stresses, Maximum Shear Stresses, Mohr’s Circle for Plane Stress"
        ]
    },

    {
        image: "Image/certifications/continuum.jpg",
        title: "Introduction to Continuum Mechanics",
        issuer: "YouTube • Dr. Cleyton",
        date: "July 2026",

        skills: [
            "Preliminary Mathematics",
            "Stress, strain and displacements in two and three dimensions",
            "Constitutive equations",
            "Governing equations of elasticity and simple solutions",
            "Strain energy aand virtual work",
            "Theories of failure"
        ]
    },
    {
        image: "Image/certifications/construction-management-maryLand.jpg",
        title: "The Construction Management Industry and Profession",
        issuer: "Coursera • University of Maryland",
        date: "November 2025",

        skills: [
            "Construction Management",
            "Structural Engineering",
            "Construction Professionals",

        ]
    },

    {
        image: "Image/certifications/sustainable-construction-maryland.jpg",
        title: "Sustainable Construction Management",
        issuer: "Coursera • University of Maryland",
        date: "November 2025",

        skills: [
            "Sustainable construction",
            "Structural Engineering",
            "Construction Professionals",

        ]
    },

    {
        image: "Image/certifications/understaing-research-uniLondon.jpg",
        title: "Understanding Research Methods",
        issuer: "Coursera • University of London",
        date: "October 2025",

        skills: [
            "Research methods",
            "Methodologies",
            "Research for scientists",

        ]
    },

    {
        image: "Image/certifications/building-materials-health-pearsons.jpg",
        title: "Building Materials and Human Health",
        issuer: "Coursera • The New School Pearsons",
        date: "November 2025",

        skills: [
            "Human health",
            "Building materials",
            "safety",

        ]
    },

    {
        image: "Image/certifications/FEM-coursera-project.jpg",
        title: "FEM - Linear, Nonlinear Analysis & Post-Processing",
        issuer: "Coursera • Project Network",
        date: "October 2025",

        skills: [
            "Finite element methods",
            "Linear analysis",
            "Nonlinear analysis",

        ]
    },


    {
        image: "Image/certifications/python-data-science-IBM.jpg",
        title: "Python for Data Science, AI & Development",

        issuer: "Coursera • IBM",

        date: "October 2025",

        skills: [
            "Python Programming",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Data Cleaning",
               "Seaborn",
        ]
    },

    {
        image: "Image/certifications/data-visualization-python-IBM.jpg",
        title: "Data Visualization with Python",

        issuer: "Coursera • IBM",

        date: "November 2025",

        skills: [
            "Seaborn",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Data Cleaning"
        ]
    },

    {
        image: "Image/certifications/intro-to-data-analytics-IBM.jpg",
        title: "Introduction to Data Analytics",

        issuer: "Coursera • IBM",

        date: "October 2025",

        skills: [
            "Seaborn",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Data Cleaning"
        ]
    },

    {
        image: "Image/certifications/intro-MATLAB-vandabilt.jpg",
        title: "Introduction to Programming with MATLAB",

        issuer: "Coursera • Vanderbilt University",

        date: "October 2025",

        skills: [
            "MATLAB",
            "Vectors, Array, Matrices",
            "NumPy",
            "Matplotlib",
            "Data Cleaning"
        ]
    },

    {
        image: "Image/certifications/product-design-arizona.jpg",
        title: "Engineering and Product Design Process",

        issuer: "Coursera • Arizona State University",

        date: "November 2025",

        skills: [
            "Product Design",
            "Vectors, Array, Matrices",
            "NumPy",
            "Matplotlib",
            "Data Cleaning"
        ]
    },

    {
        image: "Image/certifications/prototyping-arizona.jpg",
        title: "Prototyping",

        issuer: "Coursera • Arizona State University",

        date: "November 2025",

        skills: [
            "Product Prototyping",
            "NumPy",
            "Matplotlib",
            "Data Cleaning"
        ]
    },

    {
        image: "Image/certifications/prototyping-arizona.jpg",
        title: "Design Thinking for Innovation",

        issuer: "Coursera • University of Virginia",

        date: "October 2025",

        skills: [
            "Design thinking",
            "NumPy",
            "Matplotlib",
            "Data Cleaning"
        ]
    },


];

const grid = document.getElementById("certificationGrid");

const modal = document.getElementById("exampleModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalIssuer = document.getElementById("modalIssuer");

const modalDate = document.getElementById("modalDate");

const modalSkills = document.getElementById("modalSkills");

// const close = document.querySelector(".close");


certifications.forEach(cert => {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `

<img src="${cert.image}" alt="${cert.title}">

<div class="card-content">

<h3>${cert.title}</h3>

<h5>${cert.issuer}</h5>

<p>Issued: ${cert.date}</p>

</div>

`;

    card.onclick = () => {

        // button.dataset.bsToggle

        // Step 2: Initialize the Bootstrap modal instance
        const modalInstance = new bootstrap.Modal(modal);

        // Step 3: Show the modal programmatically
        modalInstance.show();

        modalImage.src = cert.image;
        modalImage.alt = cert.title;

        modalTitle.textContent = cert.title;

        modalIssuer.textContent = cert.issuer;

        modalDate.textContent = "Issued: " + cert.date;

        modalSkills.innerHTML = "";

        cert.skills.forEach(skill => {

            modalSkills.innerHTML += `<li>${skill}</li>`;

        });

    };

    grid.appendChild(card);

});

// close.onclick = () => {

//     // modal.style.display = "none";

// }

window.onclick = (e) => {

    // if (e.target === modal) {

    //     // modal.style.display = "none";

    // }

}

document.addEventListener("keydown", (e) => {

    // if (e.key === "Escape") {

    //     modal.style.display = "none";

    // }

});
