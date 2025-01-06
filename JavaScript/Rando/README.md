# Rando

JavaScript has no restartable random number generator. That is, you can't give it a seed value and rely
on it to generate the same pseudo-random sequence every time. For my purposes, that's no good.

I researched Linear Congruential Generators, a family of pseudo-random number genertors that are very
fast and well developed. However, nearly all of those that have documented good properties require
a 64-bit integer data type. JavaScript's latest version include the bigint, which is arbitrarily long.
But I wanted to have a generator that worked in JavaScript older (and, therefore, probably more common)
number type. This is simply an IEEE-754 double, which uses 52 bits for the mantissa (thus, 53 bits of
integer range, since the leftmost "1" is assumed after normalization).

The only half-way good generator I could find that was sure to work within 53 bits was Microsoft's
rand implementation for C. It does a fair job of distributing 32768 values evenly, with a long period.
That's not a lot of values, but for mixing up a homework assignment or flipping few coins, it will do.

This is also a fairly simple example of JavaScript "class" keyword, used to define objects.