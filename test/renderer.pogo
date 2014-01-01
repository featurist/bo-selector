Node (source) =
    this.extend (source)
    this

Node.prototype = {
    extend (source) =
        for @(key) in (source)
            self.(key) = source.(key)

    render () = Renderer.render (self)
}

Renderer = {

    render (node) =
        if (node :: String)
            node
        else
            (Renderer.(node.type) || Renderer.missing).apply(node)

    selector_list () =
        this.selectors.map @(s) @{ Renderer.render(s) }.join(", ")

    combinator_selector () =
        descender = ' '
        if (this.combinator == 'child')
            descender := ' > '

        render(this.left) + descender + render(this.right)

    immediate_child () =
        "> #(render(this.child))"

    class () =
        ".#(this.name)"

    has_attribute () =
        "[#(this.name)]"

    attribute_equals () =
        "[#(this.name) = #(render(this.value))]"

    attribute_does_not_equal () =
        "[#(this.name) != #(render(this.value))]"

    attribute_contains_word () =
        "[#(this.name) ~= #(render(this.value))]"

    attribute_contains_prefix () =
        "[#(this.name) |= #(render(this.value))]"

    attribute_contains () =
        "[#(this.name) *= #(render(this.value))]"

    attribute_starts_with () =
        "[#(this.name) ^= #(render(this.value))]"

    attribute_ends_with () =
        "[#(this.name) $= #(render(this.value))]"

    pseudo_class () =
        ":#(this.name)"

    pseudo_func () =
        ":" + render(this.func)

    function () =
        if (this.args)
            "#(this.name)(#(render(this.args)))"
        else
            "#(this.name)()"

    id () =
        "##(this.name)"

    element () =
        this.name + Renderer.constraint_list.call(this)

    constraint_list () =
        ((this.constraints || []).map @(c) @{ render(c) }).join("")

    string () =
        "#(this.value)"

    previous_sibling () =
        "#(render(this.left)) ~ #(render(this.right))"

    adjacent_sibling () =
        "#(render(this.left)) + #(render(this.right))"

    missing () =
        throw (@new Error "Unable to render #(this.type)")

}

render = Renderer.render

exports.Node = Node