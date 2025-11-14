const searchbar = document.getElementById("membersearch")
const figure = document.querySelectorAll("figure")

searchbar.addEventListener("input", () => {
    const query = searchbar.value.toLowerCase();

    figure.forEach(fig => {
        const name = fig.dataset.name.toLowerCase();
        if (name.includes(query)) {
            fig.style.display = "";
        } else {
            fig.style.display = "none";
        }
    })
})
