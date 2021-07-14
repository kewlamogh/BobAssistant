# The Bob Assistant!
## Your own personal assistant!
## Inspiration
Cortana and Google Home
## How to use
See that little black text-prompt on the top-center of the screen? That is the command line, where you enter Bob's commands. [Bob isn't voice commanded or GUI]. The list of the commands is:
|command|what it does|
|---|---|
datetime| one of the first commands for Bob :)
clear| clear console
bing <query>| bing searchs <query> and opens the results in a new tab
addTodo <todoname>| adds todo to todo list
deleteTodo <todoname>| deletes todo from todo list, if <todoname> does not exist nothing is deleted
getTodos| gets todos - prints them in console
howTo <what>| similar to `bing <query>` except adds "How to " to the search query.
opn <place>| <place> must be either `gmail` or `scratch`, limited opens. 
bob-inf| gives info about bob
bob-update| refreshes page to "update" Bob (basically check `docs` folder for updates by refreshing Bob). Note: All interactions with Bob will be lost.
calc <expression>| calculates an arithmetic expression 
bob-msg _m:<msg>_r<recipients email or contact name>| drafts quick message in default mail app and prepares to send.
addContax name:<contaxname>_p:<people(s) email adresses seperated with semicolons>| adds contact with which recipients can be easily referred to in `bob-msg`
### Feel free to edit and contribute to Bob's `style.css` and `parser.js` files!
