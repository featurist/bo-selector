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
        (Renderer.(node.type) || Renderer.missing).apply(node)

    selector_list () =
        this.selectors.map @(s) @{ Renderer.render(s) }.join(", ")

    selector () =
        render(this.element)

    combinator_selector () =
        descender = ' '
        if (this.combinator == 'child')
            descender := ' > '

        render(this.left) + descender + render(this.right)

    class () =
        ".#(this.name)"

    has_attribute () =
        "[#(this.name)]"

    attribute_equals () =
        "[#(this.name) = #(this.value)]"

    attribute_contains () =
        "[#(this.name) ~= #(this.value)]"

    pseudo_class () =
        ":#(this.name)"

    pseudo_func () =
        ":" + render(this.func)

    function () =
        "#(this.name)(#(render(this.body)))"

    id () =
        "##(this.name)"

    element () =
        this.name.replace('*', '') + ((this.constraints || []).map @(c) @{ render(c) }).join("")

    missing () =
        throw (@new Error "Unable to render #(this.type)")

}

render = Renderer.render

exports.Node = Node