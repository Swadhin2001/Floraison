const observer = new IntersectionObserver ((entries) => {
    entries.forEach ((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add ('show');
        }
    });
});

const hidden_up_downElements = document.querySelectorAll ('.hidden-up-down');
hidden_up_downElements.forEach ((el) => observer.observe(el));


const observer1 = new IntersectionObserver ((entries) => {
    entries.forEach ((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add ('show');
        }
    });
});

const hidden_down_upElements = document.querySelectorAll ('.hidden-down-up');
hidden_down_upElements.forEach ((el1) => observer.observe(el1));