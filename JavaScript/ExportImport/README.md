# Importing and Exporting

There appears to be some disagreement among JavaScript coders as to how
best to handle the question of sharing reuseable code and spreading your
application across multiple files. Some use what, to me, look like complicated
bundlers that package it all up into one JavaScript file. Others put a
lot of script tags into each HTML file.

For now, I am using import and export. This lets the JavaScript files themselves
decide what they need and do the work of getting it. The downside is that
any JavaScript file that uses import or export becomes a "module," and
modules cannot provide presistent definitions accessible by JavaScript
outside of them. They _can_ make calls with persistent effects, like
adding event handlers (which this example does).

This has the potential to keep this pretty neat, since all of your JavaScript
is in the JavaScript files, with only one script tag in your HTML page.

But we'll see...