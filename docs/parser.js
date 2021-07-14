let todos = []; //todos
let custmOpns = {}; //opns other than gmail 
let contax = {}; //contacts
custmOpns['scratch'] = 'https://scratch.mit.edu';
function process(cmd) {
  //always return out of the process func if cmd is valid and execed
  //if you don't then the error at the bottom will execute
  //:)
  let chars = cmd.split(""); // chars
  if (listsAreSame(chars, "datetime".split(""))) { //comparing lists, slightly inneficient
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let currentDate = new Date();
    let time = currentDate.getHours()+5 + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds(); //concat
    
    inject(today + " at " + time);
    return;
  }
  if (cmd.indexOf('whatIs ') >= 0) {
    window.open('https://www.bing.com/search?q=what+is+'+pars(7, chars).replace(' ', '+'), '_blank');
    return;
  }
  if (listsAreSame(chars, "clear".split(''))) {
    document.getElementById('chat').innerHTML = "";
    return;
  }
  if (cmd.indexOf('bing ') >= 0) {
    window.open('https://www.bing.com/search?q='+pars(5, chars).replace(' ', '+'), '_blank')
    inject('<a href = "https://www.bing.com/search?q='+pars(5, chars).replace(' ', '+')+'" target = "_blank">Link here</a>');
    return;
  }
  if (cmd == 'you suck!') {
    inject('Sorry to hear that! If you need an update, comment it at <a target = "_blank" href = "https://replit.com/@AmoghTheCool/Bob-web?v=1">here</a> and Amogh will <b>try</b> to update. Keep typing <code>bob-update</code> to refresh.')
    return;
  }
  if (cmd.indexOf('def ') >= 0) {
    window.open('https://www.bing.com/search?q=meaning+of+'+pars(4, chars).replace(' ', '+'), '_blank')
    return;
  }
  if (cmd.indexOf('addTodo ') >= 0) {
    inject('appended');
    todos.push(pars(8, chars));
    return;
  } 
  if (cmd == 'getTodos') {
    inject("Todos: "+ todos.toString().replace(',', ", "));
    return;
  }
  if (cmd.indexOf('deleteTodo ') >= 0) {
    for (var i =0; i<=todos.length -1; i++) {
      if (todos[i] == pars(11, chars)) {
        todos.splice(i, 1);
      }
    }
    return;
  }
  if (cmd.indexOf('howTo ') >= 0) {
    window.open('https://bing.com/search?q=how+to+' +pars(6, chars).replace(' ', '+'), '_blank')
    return;
  }
  if (cmd.indexOf('opn ') >= 0) {
    switch (pars(4, chars)) {
      case 'gmail':
        window.open("https://gmail.com", '_blank')
        return;
    }
    if (pars(4, chars).indexOf('repl') >= 0) {
      let project = pars(4, chars).split('_in')[0].split('opn ')[0].replace(' ', '-'); //opn <n> in repl
      if (!(project in ['talk-', 'apps-', 'home-'])) {
        let uname = '@AmoghTheCool';
        window.open('https://replit.com/'+uname+'/'+project, '_blank')
        return;
      }
    } 
    if (custmOpns[pars(4, chars)] != null) {
      window.open(custmOpns[pars(4, chars)], '_blank');
      return;
    } else {
      inject('<div id = "redTex">Invalid Shortcut!</div>')
      return;
    }
  }
  if (cmd.indexOf('addContax ') >= 0) {
    const name = cmd.split('name:')[1].split('_p')[0];
    const email = cmd.split('_p')[1];
    contax[name] = email;
    inject('Contact added')
    return;
  }
  if (cmd == 'bob-inf') {
    inject('Your amazing, useful, assistant called Bob! Orginially made in Python, Bob is an awesome AI assistant to help us Devs get through our day. <br>"Bob is marvelous, simply marvelous!"<br>-Unnamed Client')
    return;                 
  }
  if (cmd.indexOf('bob-msg ') >= 0) {
    var msg = cmd.split('_m:')[1].split('_r:')[0];
    var toWho = cmd.split('_r:')[1] //[bob-quickMsg,msg,przon]
    if (contax[toWho] == null) {
      window.open('mailto:'+toWho+'?subject=Quick Message&body='+msg+'\n - Sent with Bob')
    } else {
      toWho = contax[toWho];
      window.open('mailto:'+toWho+'?subject=Quick Message&body='+msg+'\n - Sent with Bob')
    }
    inject('"'+msg+'" drafted to send to '+toWho);
    return;
  }
  if (cmd == 'bob-update') {
    window.location.href = 'https://bob-web.amoghthecool.repl.co';
    return;
  }
  if (cmd.indexOf('calc ') >= 0) {
    try {
      inject("Answer: "+ eval(pars(5, chars)));
      return;
    } catch {
      inject("<div id = 'redTex'>Invalid expression!</div>")
      return;
    }
  }
  if (cmd == 'bob-cmds'){
    inject('Commands: [datetime - gets time, tglAco - toggles show command with bobs answer, clear - clears, bing <something> - searchs something on bing, addTodo <name> - adds todo to todo list, deleteTodo <todo> - deletes todo, getTodos - gets todos, howTo <what> - searchs how to do something, opn <what> - opns something, bob-inf - gives info about bob, bob-update - updates bob, calc <expression> - calculates something, bob-quickMsg _m:<msg>_r:<emailadress/contact> - sends quick message for you, addContax name:<contactname>_p:<emailadress> - adds contact to Bob Contax, opn <pname>in repl]')
    return;
  }
  if ('hello' == cmd || 'hello!' == cmd) {
    inject('Hello to you too!')
    return;
  }
  if ('thanks' == cmd || 'thanks!' == cmd || 'thx' == cmd || 'thx!' == cmd) {
    inject('Welcome! If you like me, please upvote the project here: <a href = "https://github.com/kewlamogh/BobAssistant">Bob</a>');
    return;
  }
  inject('<div id = "redTex">Invalid: '+cmd+"</div>"); //id  = 'redText' makes the text red - usually used in errors
  localStorage.setItem('contax', JSON.stringify(contax));
}
document.getElementById('cmd').addEventListener('keypress', function (event) {
  if (event.keyCode == 13) { call();document.getElementById('cmd').value = '';}
}) 
//gets "slice" of list
function pars(startIndx, li) {
  let out = '';
  for (var i = startIndx; i <= li.length - 1; i++) {
    out += li[i];
  }
  return out
}
//comparing lists
function listsAreSame(l1, l2) {
  for (var i = 0; i <= l1.length; i++) {
    if (l1[i] != l2[i]) {
      return false
    }
  }
  return true
}

function inject(w) {
    document.getElementById('chat').innerHTML = "<h1></h1>>"+cmd.value+"<br>"+w+document.getElementById('chat').innerHTML; //nothing to modify here
}
function call() {
  process(document.getElementById('cmd').value)
}
