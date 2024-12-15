// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navList = document.querySelector(nav)

    
}


// Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};