const projectsContainer = document.querySelector("#projectsContainer");
const aboutMeBtn = document.querySelector("#aboutMeBtn");
const aboutMeModal = document.querySelector("#aboutMeModal");
const backdrop = document.querySelector("#backdrop");

const myProjects = [
    {
        id: 1,
        name: "SwapLocal",
        description:
            "SwapLocal is a community platform that simplifies local item exchanges, promoting sustainability and connection. Users can list items, set exchange ranges, and swap with neighbors, reducing waste and saving money. The platform highlights environmental and economic benefits, fostering a circular economy and building stronger local ties.",
        techStack: ["Django (DRF)", "React"],
        links: {
            demo: "coming-soon.html",
            repository: "https://github.com/surajsingh0/swaplocal-client",
        },
        image: "swaplocal.webp",
    },
    {
        id: 2,
        name: "GHP Tracker",
        description:
            "GHP (Goal Habit Progression) is an intuitive platform designed to help users track their habits and achieve their goals. The application features comprehensive habit tracking, goal progression with customizable milestones, streaks and rewards to boost motivation, and a mobile app for on-the-go access. It offers a range of plans from a free basic option to premium Pro and Team packages, catering to individual users and collaborative teams alike.",
        techStack: ["JavaScript", "Flask"],
        links: {
            demo: "coming-soon.html",
            repository: "https://github.com/surajsingh0/ghp-tracker",
        },
        image: "ghp.webp",
    },
    {
        id: 3,
        name: "SecureVault",
        description:
            "SecureVault is a robust password manager designed to securely store and manage your sensitive credentials. Featuring a user-friendly interface and advanced encryption, it ensures that your data remains protected and easily accessible. With SecureVault, you can confidently safeguard your passwords and other critical information in one secure place.",
        techStack: ["React", "Flask"],
        links: {
            demo: "coming-soon.html",
            repository: "https://github.com/surajsingh0/securevault",
        },
        image: "securevault.webp",
    },
    {
        id: 4,
        name: "TyPeAce",
        description:
            "TyPeAce is a minimalist game designed to elevate your typing skills. With its clean, distraction-free interface, it focuses on improving both speed and accuracy. Ideal for users seeking a streamlined experience to enhance their typing proficiency.",
        techStack: ["React"],
        links: {
            demo: "https://typeace.vercel.app/",
            repository: "https://github.com/surajsingh0/typeace",
        },
        image: "typeace.webp",
    },
    {
        id: 4,
        name: "Palette Box",
        description:
            "Palette Box is a minimalist tool designed for generating and copying random color palettes swiftly. Ideal for design inspiration on the go, it offers a clean and intuitive interface, making it easy to explore and utilize color combinations for your creative projects.",
        techStack: ["React"],
        links: {
            demo: "https://palette-box.vercel.app/",
            repository: "https://github.com/surajsingh0/palette-box",
        },
        image: "pbox.webp",
    },
];

const createProjectCard = (project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    const projectDetails = document.createElement("div");
    projectDetails.classList.add("project-details");
    projectCard.appendChild(projectDetails);

    const projectHeader = document.createElement("div");
    projectHeader.classList.add("project-header");
    projectDetails.appendChild(projectHeader);

    const projectName = document.createElement("h3");
    projectName.textContent = project.name;
    projectHeader.appendChild(projectName);

    const projectLinks = document.createElement("div");
    projectLinks.classList.add("project-links");
    projectHeader.appendChild(projectLinks);

    const projectDemoLink = document.createElement("a");
    projectDemoLink.href = project.links.demo;
    projectDemoLink.target = "_blank";
    projectDemoLink.innerHTML = `<span class="material-symbols-outlined">open_in_new</span>`;
    projectLinks.appendChild(projectDemoLink);

    projectLinks.innerHTML += `<a href="${project.links.repository}" target="_blank">
    <img src="github-icon.png" alt="GitHub" class="github-icon">
  </a>`;

    const projectDescription = document.createElement("p");
    projectDescription.classList.add("desc");
    projectDescription.textContent = project.description;
    projectDetails.appendChild(projectDescription);

    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectDetails.appendChild(projectImage);

    const projectTechStack = document.createElement("p");
    projectTechStack.classList.add("tech-stack");
    const techStackHTML = project.techStack
        .map((tech) => `<span>${tech}</span>`)
        .join("");
    projectTechStack.innerHTML = `Tech Stack: ${techStackHTML}`;
    projectDetails.appendChild(projectTechStack);

    return projectCard;
};

const populateProjects = () => {
    myProjects.forEach((project) => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });
};

const toggleBackdrop = () => {
    backdrop.classList.toggle("hidden");
};

const toggleAboutMe = () => {
    aboutMeModal.classList.toggle("hidden");
};

aboutMeBtn.addEventListener("click", () => {
    toggleAboutMe();
    toggleBackdrop();
    if (!aboutMeBtn.classList.contains("active")) {
        aboutMeBtn.innerText = "X";
    } else {
        aboutMeBtn.innerText = "About Me";
    }
    aboutMeBtn.classList.toggle("active");
});

const initialState = () => {
    aboutMeBtn.innerText = "X";
    aboutMeBtn.classList.add("active");
    aboutMeModal.classList.remove("hidden");
    backdrop.classList.remove("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
    populateProjects();

    initialState();
});
