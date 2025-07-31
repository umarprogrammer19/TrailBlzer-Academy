// Bootstrap JavaScript setup
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js"

// Initialize Bootstrap components when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

    // Initialize popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl))
})
