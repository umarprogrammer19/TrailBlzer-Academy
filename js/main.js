// Main JavaScript file for EduPro Academy

// Import Bootstrap
const bootstrap = window.bootstrap

// Initialize Bootstrap components when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

    // Initialize popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl))

    // Course filter functionality
    const filterButtons = document.querySelectorAll(".filter-btn")
    const courseCards = document.querySelectorAll(".course-card")

    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter")

            // Update active button
            filterButtons.forEach((btn) => btn.classList.remove("btn-primary-purple"))
            filterButtons.forEach((btn) => btn.classList.add("btn-outline-secondary"))
            this.classList.remove("btn-outline-secondary")
            this.classList.add("btn-primary-purple")

            // Filter courses
            courseCards.forEach((card) => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "block"
                } else {
                    card.style.display = "none"
                }
            })
        })
    })

    // Search functionality
    const searchInput = document.querySelector("#courseSearch")
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchTerm = this.value.toLowerCase()

            courseCards.forEach((card) => {
                const title = card.querySelector(".card-title").textContent.toLowerCase()
                const description = card.querySelector(".card-text").textContent.toLowerCase()

                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = "block"
                } else {
                    card.style.display = "none"
                }
            })
        })
    }

    // Form validation
    const forms = document.querySelectorAll(".needs-validation")
    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add("was-validated")
        })
    })

    // Newsletter subscription
    const newsletterForms = document.querySelectorAll("form[data-newsletter]")
    newsletterForms.forEach((form) => {
        form.addEventListener("submit", function (e) {
            e.preventDefault()
            const email = this.querySelector('input[type="email"]').value

            // Simulate API call
            setTimeout(() => {
                alert("Thank you for subscribing to our newsletter!")
                this.reset()
            }, 1000)
        })
    })

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute("href"))
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
        })
    })

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in")
            }
        })
    }, observerOptions)

    // Observe all cards and sections
    document.querySelectorAll(".card, .feature-icon").forEach((el) => {
        observer.observe(el)
    })
})

// Course wishlist functionality
function toggleWishlist(button) {
    const icon = button.querySelector("i") || button
    const isWishlisted = icon.classList.contains("fas")

    if (isWishlisted) {
        icon.classList.remove("fas")
        icon.classList.add("far")
        button.innerHTML = button.innerHTML.replace("❤️", "🤍")
    } else {
        icon.classList.remove("far")
        icon.classList.add("fas")
        button.innerHTML = button.innerHTML.replace("🤍", "❤️")
    }
}

// Course enrollment simulation
function enrollCourse(courseId) {
    // Simulate enrollment process
    const button = event.target
    const originalText = button.textContent

    button.textContent = "Enrolling..."
    button.disabled = true

    setTimeout(() => {
        alert("Successfully enrolled in the course!")
        button.textContent = "Go to Course"
        button.disabled = false
    }, 2000)
}

// Add to cart functionality
function addToCart(courseId) {
    // Simulate add to cart
    const button = event.target
    const originalText = button.textContent

    button.textContent = "Adding..."
    button.disabled = true

    setTimeout(() => {
        alert("Course added to cart!")
        button.textContent = originalText
        button.disabled = false
    }, 1000)
}
