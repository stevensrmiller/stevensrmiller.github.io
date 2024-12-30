function sayHello()
{
    // Note that "document" contains a reference to
    // an object that is the root node of the Document
    // Object Model. This is created by the browser
    // when it loads a page.
    //
    // Note that the DOM has its own functions and
    // other properties, so don't expect them to all
    // exactly match any HTML tags or attributes.

    // Here, we use the DOM's getElementById function
    // to get a reference to the first element with id
    // "output." You should only ever use any given id
    // once in a page.

    var e = document.getElementById("output");

    // And here we use our reference to that element
    // to change the HTML it contains. Note that we
    // aren't just putting text into it, but bona
    // fide HTML. Use this approach to selectively write
    // to different sections of your page.
    
    e.innerHTML = "Hello <h2>JS</h2> World";
}