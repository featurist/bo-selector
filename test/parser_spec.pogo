parser = require("../parser").parser
Node = require("./renderer").Node

describe 'parser'

    parses (input) as (output) =
        it "parses #(input) as #(output)"
            parser.yy.create (data) = @new Node (data)
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
    parses "a[b ~= c]"
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
    parses "a:c(c)"
    parses "a:b(c > d)"
    parses "a[b], c[d]:e:f(g)"
