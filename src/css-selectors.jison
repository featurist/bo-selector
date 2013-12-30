/* description: Parses css selectors. */

/* lexical grammar */
%lex

%%
[_a-zA-Z][_a-zA-Z0-9-]*  return 'IDENT';
<<EOF>>                  return 'EOF';
\~\=                     return 'CONTAINS_WORD';
\*\=                     return 'CONTAINS';
"|="                     return 'CONTAINS_PREFIX';
"!="                     return 'DOES_NOT_CONTAIN';
\"[^\n\r\f\\"]*\"        return 'SINGLE_QUOTED_STRING';
\'[^\n\r\f\\']*\'        return 'DOUBLE_QUOTED_STRING';
'#'                      return '#';
","                      return ',';
"."                      return '.';
"["                      return '[';
"]"                      return ']';
"="                      return '=';
":"                      return ':';
"("                      return '(';
")"                      return ')';
">"                      return '>';
"'"                      return "'";
"*"                      return '*';
\s+                      return 'S';


/lex

/* operator associations and precedence */

%start expressions

%% /* language grammar */

expressions
    : selector_list EOF
        { return $1;}
    ;

selector_list
    : selector_list (comma selector)
        { $1.selectors.push($3); $$ = $1 }
    | selector
        { $$ = yy.create({ type: 'selector_list', selectors: [$1] }) }
    ;

comma
    : ','
    | ',' S
    ;

selector
    : combinator_selector
    | simple_selector
    ;

simple_selector
    : element constraint_list
        { $1.constraints = $2.constraints; $$ = $1 }
    | element
    | constraint_list
        { $$ = yy.create(
            { type: 'element', name: '*', constraints: $1.constraints }
          )
        }
    ;

combinator_selector
    : selector padded_child_combinator simple_selector
        { $$ = yy.create({ type: 'combinator_selector', left: $1, right: $3, combinator: 'child' }) }
    | selector S simple_selector
        { $$ = yy.create({ type: 'combinator_selector', left: $1, right: $3, combinator: 'descendant' }) }
    | '>' S simple_selector
        { $$ = yy.create({ type: 'combinator_selector', left: yy.create({ type: 'element', name: '*', constraints: [] }), right: $3, combinator: 'child' }) }
    ;

element
    : IDENT
        { $$ = yy.create({ type: 'element', name: $1, constraints: [] }) }
    | '*'
        { $$ = yy.create({ type: 'element', name: $1, constraints: [] }) }
    ;

constraint_list
    : constraint_list constraint
        { $1.constraints.push($2); $$ = $1 }
    | constraint
        { $$ = yy.create({ type: 'constraint_list', constraints: [$1] }) }
    ;

constraint
    :   class
    |   hash
    |   attrib
    |   pseudo
    ;

class
    : '.' IDENT
        { $$ = { type: 'class', name: $2 } }
    ;

hash
    : '#' IDENT
        { $$ = { type: 'id', name: $2 } }
    ;

attrib
    : '[' padded_ident ']'
        { $$ = yy.create({ type: 'has_attribute', name: $2 }) }
    | '[' padded_ident CONTAINS_WORD padded_ident_or_string ']'
        { $$ = yy.create({ type: 'attribute_contains_word', name: $2, value: $4 }) }
    | '[' padded_ident CONTAINS_PREFIX padded_ident_or_string ']'
        { $$ = yy.create({ type: 'attribute_starts_with', name: $2, value: $4 }) }
    | '[' padded_ident DOES_NOT_CONTAIN padded_ident_or_string ']'
        { $$ = yy.create({ type: 'attribute_does_not_contain', name: $2, value: $4 }) }
    | '[' padded_ident CONTAINS padded_ident_or_string ']'
        { $$ = yy.create({ type: 'attribute_contains', name: $2, value: $4 }) }
    | '[' padded_ident '=' padded_ident_or_string ']'
        { $$ = yy.create({ type: 'attribute_equals', name: $2, value: $4 }) }
    ;

padded_ident
    : S IDENT S
        { $$ = $2 }
    | S IDENT
        { $$ = $2 }
    | IDENT S
        { $$ = $1 }
    | IDENT
        { $$ = $1 }
    ;

padded_ident_or_string
    : padded_ident
    | S string S
        { $$ = $1 }
    | S string
        { $$ = $2 }
    | string S
        { $$ = $1 }
    | string
        { $$ = $1 }
    ;

padded_child_combinator
    : S '>' S
        { $$ = $2 }
    | S '>'
        { $$ = $2 }
    | '>' S
        { $$ = $1 }
    | '>'
        { $$ = $1 }
    ;

string
    : SINGLE_QUOTED_STRING
        { $$ = $1.substr(1, $1.length - 2) }
    | DOUBLE_QUOTED_STRING
        { $$ = $1.substr(1, $1.length - 2) }
    ;

pseudo
    : ':' func
        { $$ = yy.create({ type: 'pseudo_func', func: $2 }) }
    | ':' IDENT
        { $$ = yy.create({ type: 'pseudo_class', name: $2 }) }
    ;

func
    : IDENT '(' selector_list ')'
        { $$ = { type: 'function', name: $1, body: $3 } }
    ;
