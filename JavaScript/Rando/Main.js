// Note that we are using modules here.

import * as p from "./Printing.js"
import * as r from "./Rando.js"

// Attach the listener.

document.getElementById("btn").addEventListener('click', say);

// Create the generator and seed it.

const rando = new r.Rando(2426);

// Each button press gets the next pseudo-random number.

function say()
{
    p.printAt("output", rando.nextFloat());
}

