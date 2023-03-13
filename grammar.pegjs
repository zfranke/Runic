start
  = _ statement*

statement
  = _ (variableDeclaration / evokeStatement)+

variableDeclaration
  = "rune" _ identifier _ "=" _ value _ ";"

evokeStatement
  = "evoke" _ "(" _ (identifier / value) _ ")" _ ";"

identifier
  = [a-zA-Z]+

value
  = number / identifier

number
  = [0-9]+

_ "whitespace"
  = [ \t\n\r]*