import { getKids } from "./database.js";

const kids = getKids()
// When the kid name is clicked, it should display their wish.
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.dataset.type === "kid") {
        const kidName = itemClicked.textContent;
        const kidWish = itemClicked.dataset.wish
        alert(`${kidName}'s wish is ${kidWish}`);
    }
});

export const Kids = () => {
    let kidsHTML = "<ol>";
    for (const kid of kids) {
        kidsHTML += `<li data-type="kid" data-wish="${kid.wish}">${kid.name}</li>`
        
    }
    kidsHTML += "</ol>";
    return kidsHTML;
}