parser = require("../parser").parser
Node = require("./renderer").Node

describe 'parser'

    parser.yy.create (data) = @new Node (data)

    parses (input) as (output) =
        it "parses #(input) as #(output)"
            parser.parse(input).render().should.equal(output)

    parses (input) =
        parses (input) as (input)

    parses "*"
    parses "a"
    parses "a, b"
    parses "a,b" as "a, b"
    parses "a, b,c" as "a, b, c"
    parses "a.b"
    parses "a.b.c"
    parses "#a"
    parses "#a.b"
    parses ".a #b"
    parses "a[b]"
    parses "a[b][c]"

    parses "a[b = c]"
    parses "a[b= c]" as "a[b = c]"
    parses "a[b =c]" as "a[b = c]"
    parses "a[b=c]" as "a[b = c]"
    parses "a[b = 'c']" as "a[b = c]"
    parses "a[b= 'c']" as "a[b = c]"
    parses "a[b ='c']" as "a[b = c]"
    parses "a[b='c']" as "a[b = c]"
    parses 'a[b = "c"]' as "a[b = c]"
    parses 'a[b= "c"]' as 'a[b = c]'
    parses 'a[b ="c"]' as 'a[b = c]'
    parses 'a[b="c"]' as 'a[b = c]'

    parses "a[b ~= c]"
    parses "a[b~= c]" as "a[b ~= c]"
    parses "a[b ~=c]" as "a[b ~= c]"
    parses "a[b~=c]" as "a[b ~= c]"
    parses "a[b ~= 'c']" as "a[b ~= c]"
    parses "a[b~= 'c']" as "a[b ~= c]"
    parses "a[b ~='c']" as "a[b ~= c]"
    parses "a[b~='c']" as "a[b ~= c]"
    parses 'a[b ~= "c"]' as "a[b ~= c]"
    parses 'a[b~= "c"]' as 'a[b ~= c]'
    parses 'a[b ~="c"]' as 'a[b ~= c]'
    parses 'a[b~="c"]' as 'a[b ~= c]'

    parses "a[b |= c]"
    parses "a[b|= c]" as "a[b |= c]"
    parses "a[b |=c]" as "a[b |= c]"
    parses "a[b|=c]" as "a[b |= c]"
    parses "a[b |= 'c']" as "a[b |= c]"
    parses "a[b|= 'c']" as "a[b |= c]"
    parses "a[b |='c']" as "a[b |= c]"
    parses "a[b|='c']" as "a[b |= c]"
    parses 'a[b |= "c"]' as "a[b |= c]"
    parses 'a[b|= "c"]' as 'a[b |= c]'
    parses 'a[b |="c"]' as 'a[b |= c]'
    parses 'a[b|="c"]' as 'a[b |= c]'

    parses "a[b *= c]"
    parses "a[b*= c]" as "a[b *= c]"
    parses "a[b *=c]" as "a[b *= c]"
    parses "a[b*=c]" as "a[b *= c]"
    parses "a[b *= 'c']" as "a[b *= c]"
    parses "a[b*= 'c']" as "a[b *= c]"
    parses "a[b *='c']" as "a[b *= c]"
    parses "a[b*='c']" as "a[b *= c]"
    parses 'a[b *= "c"]' as "a[b *= c]"
    parses 'a[b*= "c"]' as 'a[b *= c]'
    parses 'a[b *="c"]' as 'a[b *= c]'
    parses 'a[b*="c"]' as 'a[b *= c]'

    parses "a[b ^= c]"
    parses "a[b^= c]" as "a[b ^= c]"
    parses "a[b ^=c]" as "a[b ^= c]"
    parses "a[b^=c]" as "a[b ^= c]"
    parses "a[b ^= 'c']" as "a[b ^= c]"
    parses "a[b^= 'c']" as "a[b ^= c]"
    parses "a[b ^='c']" as "a[b ^= c]"
    parses "a[b^='c']" as "a[b ^= c]"
    parses 'a[b ^= "c"]' as "a[b ^= c]"
    parses 'a[b^= "c"]' as 'a[b ^= c]'
    parses 'a[b ^="c"]' as 'a[b ^= c]'
    parses 'a[b^="c"]' as 'a[b ^= c]'

    parses "a[b $= c]"
    parses "a[b$= c]" as "a[b $= c]"
    parses "a[b $=c]" as "a[b $= c]"
    parses "a[b$=c]" as "a[b $= c]"
    parses "a[b $= 'c']" as "a[b $= c]"
    parses "a[b$= 'c']" as "a[b $= c]"
    parses "a[b $='c']" as "a[b $= c]"
    parses "a[b$='c']" as "a[b $= c]"
    parses 'a[b $= "c"]' as "a[b $= c]"
    parses 'a[b$= "c"]' as 'a[b $= c]'
    parses 'a[b $="c"]' as 'a[b $= c]'
    parses 'a[b$="c"]' as 'a[b $= c]'

    parses "a b"

    parses "a > b"
    parses "a> b" as "a > b"
    parses "a >b" as "a > b"
    parses "a>b" as "a > b"
    parses "a>b >c" as "a > b > c"
    parses "a > b > c d"

    parses "> a" as "> a"
    parses ">a" as "> a"
    parses ">a:not(>b)" as "> a:not(> b)"
    parses "> a > b" as "> a > b"

    parses "a ~ b"
    parses "a~ b" as "a ~ b"
    parses "a ~b" as "a ~ b"
    parses "a~b" as "a ~ b"

    parses "a + b"
    parses "a+ b" as "a + b"
    parses "a +b" as "a + b"
    parses "a+b" as "a + b"

    parses "*:a"
    parses ":a"
    parses ":a-b"
    parses "a:b"
    parses "a:b:c"
    parses ":a(b)"
    parses ":a-b(c)"
    parses "a:b(c)"
    parses "a:b(c > d)"

    parses ":has(> a)" as ":has(> a)"
    parses ":not(:not(b))" as ":not(:not(b))"

    parses "a:nth-child(123)" as "a:nth-child(123)"

    parses "a[b = c], c[d]:e:f(g *:h:i[j]:k), :l > m[n ~= o][p = 'q'].r.s" as (
        "a[b = c], c[d]:e:f(g *:h:i[j]:k), :l > m[n ~= o][p = q].r.s"
    )
