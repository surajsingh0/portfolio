const BASE_IMAGES_PATH = "assets/images/";
const DEFAULT_IMAGE = "default-preview.svg";
const GITHUB_ICON = "github-icon.png";

const projectsContainer = document.querySelector("#projectsContainer");
const aboutMeBtn = document.querySelector("#aboutMeBtn");
const aboutMeModal = document.querySelector("#aboutMeModal");
const backdrop = document.querySelector("#backdrop");
const aboutMeCloseBtn = document.querySelector("#closeBtn");

const myProjects = [
    {
        id: 1,
        name: "Zling",
        description:
            "A link-in-bio platform providing users with dynamic page creation, AI-powered personalization, and real-time analytics to enhance online presence and audience engagement. This streamlines navigation and content promotion across various social media platforms.",
        techStack: ["Golang", "Next.js", "PostgreSQL"],
        links: {
            demo: "https://zling0.vercel.app/",
            repository: "coming-soon.html",
        },
        images: ["zling-01.webp", "zling-02.webp", "zling-03.webp"],
    },
    {
        id: 2,
        name: "Logo Maker",
        description:
            "An interactive design tool providing users with real-time multi-element editing, transformation, and live styling to create custom graphics. This facilitates a dynamic design workflow with precise control over visual elements.",
        techStack: ["React"],
        links: {
            demo: "https://svg-logomaker.vercel.app/",
            repository: "https://github.com/surajsingh0/logo-maker",
        },
        images: ["logo-maker-01.webp", "logo-maker-02.webp"],
    },
    {
        id: 3,
        name: "Multiplayer Typing Game",
        description:
            "A real-time platform providing users a competitive environment to race against others by typing passages as quickly and accurately as possible. This delivers a dynamic and engaging experience with responsive UI and live performance tracking.",
        techStack: ["Golang", "WebSockets", "TypeScript", "Canvas API"],
        links: {
            demo: "https://typeracer0.netlify.app/",
            repository: "https://github.com/surajsingh0/typeracer",
        },
        images: ["type-racer.webp"],
    },
    {
        id: 3,
        name: "GHP Tracker",
        description:
            "GHP (Goal Habit Progression) is an intuitive platform designed to help users track their habits and achieve their goals. The application features comprehensive habit tracking, goal progression with customizable milestones, streaks and rewards to boost motivation, and a mobile app for on-the-go access. It offers a range of plans from a free basic option to premium Pro and Team packages, catering to individual users and collaborative teams alike.",
        techStack: ["JavaScript", "Flask"],
        links: {
            demo: "https://ghptrack.com/",
            repository: "https://github.com/surajsingh0/ghp-tracker",
        },
        images: ["ghp.webp"],
    },
    {
        id: 4,
        name: "Go-Migrate-Easy",
        description:
            "Go-Migrate-Easy is a production-ready database migration tool built in Go. It offers a dual interface (programmatic API and standalone CLI) for managing database schemas across PostgreSQL, MySQL, and SQLite. Key features include comprehensive testing, automated transaction handling with rollback for data integrity, and an intuitive version tracking system to ensure consistent and ordered schema updates.",
        techStack: ["Go"],
        links: {
            demo: "https://github.com/surajsingh0/go-migrate-easy",
            repository: "https://github.com/surajsingh0/go-migrate-easy",
        },
        images: [],
    },
    {
        id: 5,
        name: "S3 File Editor",
        description:
            "S3 File Editor is a lightweight Flask/JavaScript web app for direct in-browser viewing and editing of files in AWS S3. It features intelligent file type handling, real-time saving, and supports various text files. Users can browse their S3 bucket, edit files, and save changes directly back to S3. ",
        techStack: ["Flask", "JavaScript"],
        links: {
            demo: "https://github.com/surajsingh0/s3-file-editor",
            repository: "https://github.com/surajsingh0/s3-file-editor",
        },
        images: ["s3-file-editor.webp"],
    },
    {
        id: 6,
        name: "SecureVault",
        description:
            "SecureVault is a robust password manager designed to securely store and manage your sensitive credentials. Featuring a user-friendly interface and advanced encryption, it ensures that your data remains protected and easily accessible. With SecureVault, you can confidently safeguard your passwords and other critical information in one secure place.",
        techStack: ["React", "Flask"],
        links: {
            demo: "coming-soon.html",
            repository: "https://github.com/surajsingh0/securevault",
        },
        images: ["securevault.webp"],
    },
    {
        id: 7,
        name: "TyPeAce",
        description:
            "TyPeAce is a minimalist game designed to elevate your typing skills. With its clean, distraction-free interface, it focuses on improving both speed and accuracy. Ideal for users seeking a streamlined experience to enhance their typing proficiency.",
        techStack: ["React"],
        links: {
            demo: "https://typeace.vercel.app/",
            repository: "https://github.com/surajsingh0/typeace",
        },
        images: ["typeace.webp"],
    },
    {
        id: 8,
        name: "Palette Box",
        description:
            "Palette Box is a minimalist tool designed for generating and copying random color palettes swiftly. Ideal for design inspiration on the go, it offers a clean and intuitive interface, making it easy to explore and utilize color combinations for your creative projects.",
        techStack: ["React"],
        links: {
            demo: "https://palette-box.vercel.app/",
            repository: "https://github.com/surajsingh0/palette-box",
        },
        images: ["pbox.webp"],
    },
];

class Carousel {
    constructor(container, images) {
        this.currentSlide = 0;
        this.autoplayInterval = null;
        this.container = this.createCarousel(container, images);

        if (images.length <= 1) return;

        this.slides = this.container.querySelectorAll(".carousel-image");
        this.dots = this.container.querySelectorAll(".carousel-dot");
        this.setupEventListeners();
        this.startAutoplay();
    }

    createCarousel(container, images) {
        const carouselContainer = document.createElement("div");
        carouselContainer.classList.add("carousel-container");

        const track = document.createElement("div");
        track.classList.add("carousel-track");

        const hasMultipleImages = images.length > 1;

        if (hasMultipleImages) {
            const prevButton = document.createElement("button");
            prevButton.classList.add("carousel-button", "prev");
            prevButton.innerHTML =
                '<span class="material-symbols-outlined">chevron_left</span>';

            const nextButton = document.createElement("button");
            nextButton.classList.add("carousel-button", "next");
            nextButton.innerHTML =
                '<span class="material-symbols-outlined">chevron_right</span>';

            carouselContainer.appendChild(prevButton);
            carouselContainer.appendChild(nextButton);
        }

        images.forEach((image, index) => {
            const img = document.createElement("img");
            img.src = image.startsWith("data:")
                ? image
                : `${BASE_IMAGES_PATH}${image}`;
            img.classList.add("carousel-image");
            if (index === 0) img.classList.add("active");
            track.appendChild(img);
        });

        carouselContainer.appendChild(track);

        if (hasMultipleImages) {
            const dotsContainer = document.createElement("div");
            dotsContainer.classList.add("carousel-dots");

            images.forEach((_, index) => {
                const dot = document.createElement("button");
                dot.classList.add("carousel-dot");
                if (index === 0) dot.classList.add("active");
                dot.setAttribute("data-index", index);
                dotsContainer.appendChild(dot);
            });

            carouselContainer.appendChild(dotsContainer);
        }

        container.appendChild(carouselContainer);
        return carouselContainer;
    }

    updateSlide(newIndex) {
        this.slides[this.currentSlide].classList.remove("active");
        this.dots[this.currentSlide].classList.remove("active");
        this.currentSlide = newIndex;
        this.slides[this.currentSlide].classList.add("active");
        this.dots[this.currentSlide].classList.add("active");
    }

    nextSlide() {
        const newIndex = (this.currentSlide + 1) % this.slides.length;
        this.updateSlide(newIndex);
    }

    prevSlide() {
        const newIndex =
            (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlide(newIndex);
    }

    startAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
        this.autoplayInterval = setInterval(() => this.nextSlide(), 5000);
    }

    resetAutoplay() {
        this.startAutoplay();
    }

    setupEventListeners() {
        const nextBtn = this.container.querySelector(".next");
        const prevBtn = this.container.querySelector(".prev");
        const dots = this.container.querySelectorAll(".carousel-dot");

        nextBtn.addEventListener("click", () => {
            this.nextSlide();
            this.resetAutoplay();
        });

        prevBtn.addEventListener("click", () => {
            this.prevSlide();
            this.resetAutoplay();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                this.updateSlide(index);
                this.resetAutoplay();
            });
        });

        this.container.addEventListener("mouseenter", () => {
            if (this.autoplayInterval) {
                clearInterval(this.autoplayInterval);
                this.autoplayInterval = null;
            }
        });

        this.container.addEventListener("mouseleave", () => {
            this.startAutoplay();
        });
    }
}

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
    <img src="${BASE_IMAGES_PATH}${GITHUB_ICON}" alt="GitHub" class="github-icon">
  </a>`;

    const projectDescription = document.createElement("p");
    projectDescription.classList.add("desc");
    projectDescription.textContent = project.description;
    projectDetails.appendChild(projectDescription);

    const images =
        project.images && project.images.length > 0
            ? project.images
            : [DEFAULT_IMAGE];
    new Carousel(projectDetails, images);

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

const toggleAboutMeModal = () => {
    toggleAboutMe();
    toggleBackdrop();
    if (!aboutMeBtn.classList.contains("active")) {
        aboutMeBtn.innerText = "< Projects";
    } else {
        aboutMeBtn.innerText = "About Me";
    }
    aboutMeBtn.classList.toggle("active");
};

aboutMeBtn.addEventListener("click", toggleAboutMeModal);
aboutMeCloseBtn.addEventListener("click", toggleAboutMeModal);

const initialState = () => {
    aboutMeBtn.innerText = "< Projects";
    aboutMeBtn.classList.add("active");
    aboutMeModal.classList.remove("hidden");
    backdrop.classList.remove("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
    populateProjects();

    initialState();
});
