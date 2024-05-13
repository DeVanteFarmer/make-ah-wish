import { getPairings, getKids, getCelebs } from "./database.js";

const pairings = getPairings()
const kids = getKids()
const celebs = getCelebs()

export const Pairings = () => {
    let pairingsHTML = "<ol>";
    for (const pairing of pairings) {
        const kid = kids.find(kid => kid.name === pairing.kidName);
        const celeb = celebs.find(celeb => celeb.name === pairing.celebName);
        if (kid && celeb) {
            pairingsHTML += `<li>${pairing.kidName} will be making memories with ${pairing.celebName}, a ${celeb.sport} star, by ${kid.wish} </li>`
         }        
    }
    pairingsHTML += "</ol>";
    return pairingsHTML;
}