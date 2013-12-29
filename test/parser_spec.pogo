parser = require("../parser").parser
Node = require("./renderer").Node

describe 'parser'

    parser.yy.create (data) = @new Node (data)

    parses (input) as (output) =
        it "parses #(input) as #(output)"
            parser.parse(input).render().should.equal(output.replace('*', ''))

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

    parses "a[b = c]"
    parses "a[b= c]" as "a[b = c]"
    parses "a[b =c]" as "a[b = c]"
    parses "a[b=c]" as "a[b = c]"
    parses "a[b = 'c']"
    parses "a[b= 'c']" as "a[b = 'c']"
    parses "a[b ='c']" as "a[b = 'c']"
    parses "a[b='c']" as "a[b = 'c']"
    parses 'a[b = "c"]'
    parses 'a[b= "c"]' as 'a[b = "c"]'
    parses 'a[b ="c"]' as 'a[b = "c"]'
    parses 'a[b="c"]' as 'a[b = "c"]'

    parses "a[b ~= c]"
    parses "a[b~= c]" as "a[b ~= c]"
    parses "a[b ~=c]" as "a[b ~= c]"
    parses "a[b~=c]" as "a[b ~= c]"
    parses "a[b ~= 'c']"
    parses "a[b~= 'c']" as "a[b ~= 'c']"
    parses "a[b ~='c']" as "a[b ~= 'c']"
    parses "a[b~='c']" as "a[b ~= 'c']"
    parses 'a[b ~= "c"]'
    parses 'a[b~= "c"]' as 'a[b ~= "c"]'
    parses 'a[b ~="c"]' as 'a[b ~= "c"]'
    parses 'a[b~="c"]' as 'a[b ~= "c"]'

    parses "a[b |= c]"
    parses "a[b|= c]" as "a[b |= c]"
    parses "a[b |=c]" as "a[b |= c]"
    parses "a[b|=c]" as "a[b |= c]"
    parses "a[b |= 'c']"
    parses "a[b|= 'c']" as "a[b |= 'c']"
    parses "a[b |='c']" as "a[b |= 'c']"
    parses "a[b|='c']" as "a[b |= 'c']"
    parses 'a[b |= "c"]'
    parses 'a[b|= "c"]' as 'a[b |= "c"]'
    parses 'a[b |="c"]' as 'a[b |= "c"]'
    parses 'a[b|="c"]' as 'a[b |= "c"]'

    parses "a, [b = c], c"
    parses "a b"
    parses "a > b"
    parses "a > b > c d"
    parses "*:a"
    parses ":a"
    parses ":a-b"
    parses "a:b"
    parses "a:b:c"
    parses ":a(b)"
    parses ":a-b(c)"
    parses "a:b(c)"
    parses "a:b(c > d)"
    parses "a[b = c], c[d]:e:f(g *:h:i[j]:k), :l > m[n ~= o]"
