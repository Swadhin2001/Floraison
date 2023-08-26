const observer = new IntersectionObserver ((entries) => {
    entries.forEach ((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add ('show');
        }
    });
});

const hidden_up_downElements = document.querySelectorAll ('.hidden-up-down');
hidden_up_downElements.forEach ((el) => observer.observe(el));