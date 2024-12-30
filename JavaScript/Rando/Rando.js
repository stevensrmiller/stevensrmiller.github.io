// This is a module, so other module can import it.

export class Rando
{

    // LCGs use S(i) = (S(i-1) * a + c) % m to generate pseudorandom
    // numbers. This one would have short periods for its least
    // significant bits, so we only use the high 15 bits.

    // Making this static avoids wasted space. The # symbol
    // makes them private as well, so they are not readable or
    // changeable outside the class.

    static #m = 2147483648;
    static #a = 214013;
    static #c = 2531011;
    
    // Note that the constructor can create public members
    // just by assigning something to them, but private
    // members need to be declared.

    #s;

    constructor(s)
    {
        this.#s = s;
    }


    // We can ask for the next value in the range [0, 32767].

    next()
    {
        // Note that local member functions need "this" as
        // a prefix.

        this.#nextS();

        // Local member variables need "this" too.

        return this.#s >> 16;
    }
    
    // Get the next integer value, mapped to [0, max).

    nextInt(max)
    {
        return Math.floor(max * this.nextFloat());
    }
    
    // Get next real value, mapped to [0, 1).

    nextFloat()
    {
        this.#nextS();
        return (this.#s >> 16) / 32768;
    }
    
    // Compute the next value in the sequence.
    //
    // Note all the "this" prefixes and the # symbols.
    
    #nextS()
    {
        this.#s = (this.#s * Rando.#a + Rando.#c) % Rando.#m;
    }
}