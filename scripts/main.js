import { Kids } from "./kids.js"
import { Celebs } from "./celebrities.js"
import { Pairings } from "./pairings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Make ah Wish</h1>
<p class="details">
    <section class="info">
        <h2>Kids</h2>
        ${Kids()}
        <h2>Celebrities</h2>
        ${Celebs()}
    </section>
</p> 
    <section class="pairings">
        <h2>Pairings</h2>
        ${Pairings()}   
    </section>
`

mainContainer.innerHTML = applicationHTML