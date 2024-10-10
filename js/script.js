// Menu

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 100 * index);
    })
}
);

// Body



// Footer
document.getElementById('year').textContent = new Date().getFullYear();