from sly import Lexer
class BasicLexer(Lexer):
  tokens = { NAME, NUMBER, STRING }
  ignore = '\t '
  literals = {'=', '+', '-', '/', '*', '(', ')'}
