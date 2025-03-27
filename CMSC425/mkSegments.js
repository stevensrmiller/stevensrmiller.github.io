<!DOCTYPE html>
<html>
<body>

<h2>My First JavaScript</h2>

<button type="button"
onclick="document.getElementById('demo').innerHTML = number()">
Click me to display Date and Time.</button>

<p id="demo"></p>

<script>

rangePairSets = [
                  [
                    [
                      [1, -10], [-13, -12],
                    ],
                    [
                      [10, 11], [14, 15],
                    ],
                    [
                      [-10.5, -11.5], [12.5, 13.5],
                    ],
                    [
                      [11, 12], [-14.5, -13.5],
                    ],
                  ],
                  [
                    [
                      [2, -10], [-13, -12],
                    ],
                    [
                      [10, 11], [14, 15],
                    ],
                    [
                      [-10.5, -11.5], [12.5, 13.5],
                    ],
                    [
                      [11, 12], [-14.5, -13.5],
                    ],
                  ],
                  [
                    [
                      [3, -10], [-13, -12],
                    ],
                    [
                      [10, 11], [14, 15],
                    ],
                    [
                      [-10.5, -11.5], [12.5, 13.5],
                    ],
                    [
                      [11, 12], [-14.5, -13.5],
                    ],
                  ],
                ]
                
function number()
{
	seed = parseInt(Date().substring(22, 24)) * 10000000
	rando = new Rando(seed)
    
    s = "<pre>"
    
    // Choose each of the rangePairSets one at a time, at random.
    
    rpsIndexMax = 2;
    
    headings = ["<b>Part B(i):</b><br>", "<b>Part B(ii):</b><br>", "<b>Part B(iii):</b><br>"]
    
    for (rpsNum = 0; rpsNum < 3; rpsNum++)
    {
    	s = s + headings[rpsNum]
        
    	rpsIndex = rando.nextInt(rpsIndexMax + 1)
        
        rps = rangePairSets[rpsIndex]
        console.log(rps)

		// Get the coordinates of the line segments.

		// From 1
        
        rp = rps[0]
        
        r = rp[0]
        
        x1 = inside(r[0], r[1], rando.nextFloat())
        
        r = rp[1]

		y1 = inside(r[0], r[1], rando.nextFloat())
        
        // To 1
        
        rp = rps[1]
        
        r = rp[0]
        
        x2 = inside(r[0], r[1], rando.nextFloat())
        
        r = rp[1]

		y2 = inside(r[0], r[1], rando.nextFloat())
        
        // From 2
        
        rp = rps[2]
        
        r = rp[0]
        
        x1p = inside(r[0], r[1], rando.nextFloat())
        
        r = rp[1]

		y1p = inside(r[0], r[1], rando.nextFloat())
        
        // To 2
        
        rp = rps[3]
        
        r = rp[0]
        
        x2p = inside(r[0], r[1], rando.nextFloat())
        
        r = rp[1]

		y2p = inside(r[0], r[1], rando.nextFloat())

        s = s + `Segment S : x1  = ${six(x1)}  y1  = ${six(y1)}  x2  = ${six(x2)}  y2  = ${six(y2)}<br>`
        s = s + `Segment S': x1' = ${six(x1p)}  y1' = ${six(y1p)}  x2' = ${six(x2p)}  y2' = ${six(y2p)}<br>`
        s = s + "<br>"
        
        rangePairSets[rpsIndex] = rangePairSets[rpsIndexMax]
        rpsIndexMax--
    }
    
    s = s + "</pre>"
    return s
}

function six(n)
{
	s = `      ${n}`
    ln = s.length
    return s.substring(ln-6, ln)
}

function inside(f, t, r)
{
	v = f + r * (t - f)
    
    v = Math.trunc(v * 100) / 100
    
	return v
}
      class Rando
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
        console.log(this.#s)
            this.#s = (this.#s * Rando.#a + Rando.#c) % Rando.#m;
        console.log(this.#s)
        }
      }
</script>
</body>
</html> 
