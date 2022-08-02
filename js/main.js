const links = document.querySelectorAll(".banner__arrow");
for (const link of links) {
link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}