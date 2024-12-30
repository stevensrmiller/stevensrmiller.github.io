// This imports all exported items from Prining.js.
// To access one, treat "p" as though it contained
// an object reference, using the dot operator.
//
// By exporting/importing code, you don't need to
// have multiple script tags to load a lot of shared
// definitions.

import * as p from "./Printing.js";

// Note that this code actually runs when you load this
// module with a script tag. You have attach the button's
// event listener here, because only code contained in
// the modules that import/export to each other can access
// any of their functions.

document.getElementById("btn").addEventListener('click', say);

// This function will now run whenever the button with id
// "btn" is clicked.

function say()
{
    p.printAt("output", "Hello Module World");
}