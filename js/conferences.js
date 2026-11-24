const certifications = [
    {
        image: "Image/certifications/SN-Certification.jpg",
        title: "Environmental Intelligence: How Sensing Technologies Are Advancing Sustainability",
        issuer: "Springer Nature ",
        date: "October 2026 : (online)",

        skills: [
            "Exploring the role of sensing technologies in advancing sustainability efforts in the construction industry.",
        ]
    },

    {
        image: "Image/certifications/istruct.jpg",
        title: "Annual Academics Conference 2026",
        issuer: "The Institution of Structural Engineers (IStructE)",
        date: "September 2026 : (online)",

        skills: [
            "Yearly conference that brings together structural engineers, academics, and industry professionals to share knowledge, research, and best practices in the field of structural engineering.",
        ]
    },
    {
        image: "Image/certifications/aci.jpg",
        title: "2026 24 Hours of Concrete Knowledge",
        issuer: "AMERICAN CONCRETE INSTITUTE (ACI)",
        date: "July 2026 : (online)",

        skills: [
            "Comprehensive overview of the latest developments in concrete technology, design, and construction from leading experts in the field.",
        ]
    },

    {
        image: "Image/certifications/enc.jpg",
        title: "Decarbonization in practice: solving Scope 1, 2 & 3 challenges",
        issuer: "E&C Group",
        date: "May 2026 : (webinar)",

        skills: [
            "Key challenges businesses face in reducing emissions, including data transparency, supplier engagement, operational complexity, and increasing regulatory expectations.",
            "Market intelligence on emerging solutions such as electrification, renewable energy sourcing, and low-carbon technologies that are helping organizations accelerate decarbonization efforts.",
            "Clearer understanding of how leading organizations are transforming climate ambition into measurable action across their operations and value chains through real-world examples and actionable insights.",

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