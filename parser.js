/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"selector_list":4,"EOF":5,"comma":6,"selector":7,",":8,"S":9,"combinator_selector":10,"simple_selector":11,"element":12,"constraint_list":13,">":14,"IDENT":15,"*":16,"constraint":17,"class":18,"hash":19,"attrib":20,"pseudo":21,".":22,"#":23,"[":24,"padded_ident":25,"]":26,"INCLUDES":27,"padded_ident_or_string":28,"DASHMATCH":29,"=":30,"string":31,"STRING":32,":":33,"func":34,"(":35,")":36,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:",",9:"S",14:">",15:"IDENT",16:"*",22:".",23:"#",24:"[",26:"]",27:"INCLUDES",29:"DASHMATCH",30:"=",32:"STRING",33:":",35:"(",36:")"},
productions_: [0,[3,2],[4,3],[4,1],[6,1],[6,2],[7,1],[7,1],[11,2],[11,1],[11,1],[10,5],[10,3],[12,1],[12,1],[13,2],[13,1],[17,1],[17,1],[17,1],[17,1],[18,2],[19,2],[20,3],[20,5],[20,5],[20,5],[25,3],[25,2],[25,2],[25,1],[28,1],[28,3],[28,2],[28,2],[28,1],[31,1],[21,2],[21,2],[34,4]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1];
break;
case 2: $$[$0-2].selectors.push($$[$0]); this.$ = $$[$0-2] 
break;
case 3: this.$ = yy.create({ type: 'selector_list', selectors: [$$[$0]] }) 
break;
case 8: $$[$0-1].constraints = $$[$0].constraints; this.$ = $$[$0-1] 
break;
case 10: this.$ = yy.create(
            { type: 'element', name: '*', constraints: $$[$0].constraints }
          )
        
break;
case 11: this.$ = yy.create({ type: 'combinator_selector', left: $$[$0-4], right: $$[$0], combinator: 'child' }) 
break;
case 12: this.$ = yy.create({ type: 'combinator_selector', left: $$[$0-2], right: $$[$0], combinator: 'descendant' }) 
break;
case 13: this.$ = yy.create({ type: 'element', name: $$[$0], constraints: [] }) 
break;
case 14: this.$ = yy.create({ type: 'element', name: $$[$0], constraints: [] }) 
break;
case 15: $$[$0-1].constraints.push($$[$0]); this.$ = $$[$0-1] 
break;
case 16: this.$ = yy.create({ type: 'constraint_list', constraints: [$$[$0]] }) 
break;
case 21: this.$ = { type: 'class', name: $$[$0] } 
break;
case 22: this.$ = { type: 'id', name: $$[$0] } 
break;
case 23: this.$ = yy.create({ type: 'has_attribute', name: $$[$0-1] }) 
break;
case 24: this.$ = yy.create({ type: 'attribute_contains', name: $$[$0-3], value: $$[$0-1] }) 
break;
case 25: this.$ = yy.create({ type: 'attribute_starts_with', name: $$[$0-3], value: $$[$0-1] }) 
break;
case 26: this.$ = yy.create({ type: 'attribute_equals', name: $$[$0-3], value: $$[$0-1] }) 
break;
case 27: this.$ = $$[$0-1] 
break;
case 28: this.$ = $$[$0] 
break;
case 29: this.$ = $$[$0-1] 
break;
case 30: this.$ = $$[$0] 
break;
case 32: this.$ = $$[$0-2] 
break;
case 33: this.$ = $$[$0] 
break;
case 34: this.$ = $$[$0-1] 
break;
case 35: this.$ = $$[$0] 
break;
case 36: this.$ = yy.create({ type: 'string', value: $$[$0] }) 
break;
case 37: this.$ = yy.create({ type: 'pseudo_func', func: $$[$0] }) 
break;
case 38: this.$ = yy.create({ type: 'pseudo_class', name: $$[$0] }) 
break;
case 39: this.$ = { type: 'function', name: $$[$0-3], body: $$[$0-1] } 
break;
}
},
table: [{3:1,4:2,7:3,10:4,11:5,12:6,13:7,15:[1,8],16:[1,9],17:10,18:11,19:12,20:13,21:14,22:[1,15],23:[1,16],24:[1,17],33:[1,18]},{1:[3]},{5:[1,19],6:20,8:[1,21]},{5:[2,3],8:[2,3],9:[1,22],36:[2,3]},{5:[2,6],8:[2,6],9:[2,6],36:[2,6]},{5:[2,7],8:[2,7],9:[2,7],36:[2,7]},{5:[2,9],8:[2,9],9:[2,9],13:23,17:10,18:11,19:12,20:13,21:14,22:[1,15],23:[1,16],24:[1,17],33:[1,18],36:[2,9]},{5:[2,10],8:[2,10],9:[2,10],17:24,18:11,19:12,20:13,21:14,22:[1,15],23:[1,16],24:[1,17],33:[1,18],36:[2,10]},{5:[2,13],8:[2,13],9:[2,13],22:[2,13],23:[2,13],24:[2,13],33:[2,13],36:[2,13]},{5:[2,14],8:[2,14],9:[2,14],22:[2,14],23:[2,14],24:[2,14],33:[2,14],36:[2,14]},{5:[2,16],8:[2,16],9:[2,16],22:[2,16],23:[2,16],24:[2,16],33:[2,16],36:[2,16]},{5:[2,17],8:[2,17],9:[2,17],22:[2,17],23:[2,17],24:[2,17],33:[2,17],36:[2,17]},{5:[2,18],8:[2,18],9:[2,18],22:[2,18],23:[2,18],24:[2,18],33:[2,18],36:[2,18]},{5:[2,19],8:[2,19],9:[2,19],22:[2,19],23:[2,19],24:[2,19],33:[2,19],36:[2,19]},{5:[2,20],8:[2,20],9:[2,20],22:[2,20],23:[2,20],24:[2,20],33:[2,20],36:[2,20]},{15:[1,25]},{15:[1,26]},{9:[1,28],15:[1,29],25:27},{15:[1,31],34:30},{1:[2,1]},{7:32,10:4,11:5,12:6,13:7,15:[1,8],16:[1,9],17:10,18:11,19:12,20:13,21:14,22:[1,15],23:[1,16],24:[1,17],33:[1,18]},{9:[1,33],15:[2,4],16:[2,4],22:[2,4],23:[2,4],24:[2,4],33:[2,4]},{11:35,12:6,13:7,14:[1,34],15:[1,8],16:[1,9],17:10,18:11,19:12,20:13,21:14,22:[1,15],23:[1,16],24:[1,17],33:[1,18]},{5:[2,8],8:[2,8],9:[2,8],17:24,18:11,19:12,20:13,21:14,22:[1,15],23:[1,16],24:[1,17],33:[1,18],36:[2,8]},{5:[2,15],8:[2,15],9:[2,15],22:[2,15],23:[2,15],24:[2,15],33:[2,15],36:[2,15]},{5:[2,21],8:[2,21],9:[2,21],22:[2,21],23:[2,21],24:[2,21],33:[2,21],36:[2,21]},{5:[2,22],8:[2,22],9:[2,22],22:[2,22],23:[2,22],24:[2,22],33:[2,22],36:[2,22]},{26:[1,36],27:[1,37],29:[1,38],30:[1,39]},{15:[1,40]},{9:[1,41],26:[2,30],27:[2,30],29:[2,30],30:[2,30]},{5:[2,37],8:[2,37],9:[2,37],22:[2,37],23:[2,37],24:[2,37],33:[2,37],36:[2,37]},{5:[2,38],8:[2,38],9:[2,38],22:[2,38],23:[2,38],24:[2,38],33:[2,38],35:[1,42],36:[2,38]},{5:[2,2],8:[2,2],9:[1,22],36:[2,2]},{15:[2,5],16:[2,5],22:[2,5],23:[2,5],24:[2,5],33:[2,5]},{9:[1,43]},{5:[2,12],8:[2,12],9:[2,12],36:[2,12]},{5:[2,23],8:[2,23],9:[2,23],22:[2,23],23:[2,23],24:[2,23],33:[2,23],36:[2,23]},{9:[1,46],15:[1,29],25:45,28:44,31:47,32:[1,48]},{9:[1,46],15:[1,29],25:45,28:49,31:47,32:[1,48]},{9:[1,46],15:[1,29],25:45,28:50,31:47,32:[1,48]},{9:[1,51],26:[2,28],27:[2,28],29:[2,28],30:[2,28]},{26:[2,29],27:[2,29],29:[2,29],30:[2,29]},{4:52,7:3,10:4,11:5,12:6,13:7,15:[1,8],16:[1,9],17:10,18:11,19:12,20:13,21:14,22:[1,15],23:[1,16],24:[1,17],33:[1,18]},{11:53,12:6,13:7,15:[1,8],16:[1,9],17:10,18:11,19:12,20:13,21:14,22:[1,15],23:[1,16],24:[1,17],33:[1,18]},{26:[1,54]},{26:[2,31]},{15:[1,40],31:55,32:[1,48]},{9:[1,56],26:[2,35]},{9:[2,36],26:[2,36]},{26:[1,57]},{26:[1,58]},{26:[2,27],27:[2,27],29:[2,27],30:[2,27]},{6:20,8:[1,21],36:[1,59]},{5:[2,11],8:[2,11],9:[2,11],36:[2,11]},{5:[2,24],8:[2,24],9:[2,24],22:[2,24],23:[2,24],24:[2,24],33:[2,24],36:[2,24]},{9:[1,60],26:[2,33]},{26:[2,34]},{5:[2,25],8:[2,25],9:[2,25],22:[2,25],23:[2,25],24:[2,25],33:[2,25],36:[2,25]},{5:[2,26],8:[2,26],9:[2,26],22:[2,26],23:[2,26],24:[2,26],33:[2,26],36:[2,26]},{5:[2,39],8:[2,39],9:[2,39],22:[2,39],23:[2,39],24:[2,39],33:[2,39],36:[2,39]},{26:[2,32]}],
defaultActions: {19:[2,1],45:[2,31],56:[2,34],60:[2,32]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 15;
break;
case 1:return 5;
break;
case 2:return 27;
break;
case 3:return 29;
break;
case 4:return 32;
break;
case 5:return 32;
break;
case 6:return 23;
break;
case 7:return 8;
break;
case 8:return 22;
break;
case 9:return 24;
break;
case 10:return 26;
break;
case 11:return 30;
break;
case 12:return 33;
break;
case 13:return 35;
break;
case 14:return 36;
break;
case 15:return 14;
break;
case 16:return "'";
break;
case 17:return 16;
break;
case 18:return 9;
break;
}
},
rules: [/^(?:[_a-zA-Z][_a-zA-Z0-9-]*)/,/^(?:$)/,/^(?:~=)/,/^(?:\|=)/,/^(?:"[^\n\r\f\\"]*")/,/^(?:'[^\n\r\f\\']*')/,/^(?:#)/,/^(?:,)/,/^(?:\.)/,/^(?:\[)/,/^(?:\])/,/^(?:=)/,/^(?::)/,/^(?:\()/,/^(?:\))/,/^(?:>)/,/^(?:')/,/^(?:\*)/,/^(?:\s+)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}