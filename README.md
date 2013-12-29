# bo-selector

A CSS selector parser based on [jison](http://zaach.github.io/jison/)

### Example

```js
var parser = require('bo-selector').parser;
var selector = 'p#zomg[title ~= noway] > b.yes-way, :that(:is(v.awesome))';
var ast = parser.parse(selector);
console.log(require('util').inspect(ast, false, null));
```


```js
{ type: 'selector_list',
  selectors:
   [ { type: 'selector',
      element:
       { type: 'element',
         name: 'p',
         constraints:
          [ { type: 'pseudo_func',
              func:
               { type: 'function',
                 name: 'has',
                 body:
                  { type: 'selector_list',
                    selectors:
                     [ { type: 'selector',
                         element:
                          { type: 'element',
                            name: '*',
                            constraints: [ { type: 'class', name: 'foo' } ] } } ] } } } ] } },
    { type: 'selector',
      element: { type: 'element', name: 'b', constraints: [] } } ] }
```

### License

BSD