import { getCelebs } from "./database.js";

const celebs = getCelebs()

// When the celebrity name is clicked, it should display their sport.
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.dataset.type === "celeb") {
        const celebName = itemClicked.textContent;
        const celebSport = itemClicked.dataset.sport
        alert(`${celebName} is a ${celebSport} star!`);
    }
});

export const Celebs = () => {
    let celebsHTML = "<ol>";
    for (const celeb of celebs) {
        celebsHTML += `<li data-type="celeb" data-sport="${celeb.sport}">${celeb.name}</li>`
        
    }
    celebsHTML += "</ol>";
    return celebsHTML;
}