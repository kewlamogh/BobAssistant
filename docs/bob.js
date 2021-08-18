let todos = [];
let custmOpns = {};
let contax = {};
custmOpns['scratch'] = 'https://scratch.mit.edu';
custmOpns['diary'] = 'https://onedrive.live.com/edit.aspx?resid=53FFA026F34A670C!651&ithint=file%2cdocx&wdOrigin=OFFICECOM-WEB.START.MRU';
document.getElementById("chat").innerHTML += "<h1><br></h1>";
process("clear");
process("help");
function process(cmd) {
  inject2(cmd);
  let chars = cmd.split("");
  if (listsAreSame(chars, "datetime".split(""))) {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let currentDate = new Date();
    let time = currentDate.getHours()+5 + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    inject(today + " at " + time);
    return;
  }
  if (cmd.indexOf('what is ') >= 0) {
    inject('<a href= "https://www.bing.com/search?q=what+is+'+pars(7, chars).replace(' ', '+')+'">Here</a>');
    return;
  }
  if (listsAreSame(chars, "clear".split(''))) {
    document.getElementById('chat').innerHTML = "";
    return;
  }
  if (cmd.indexOf('bing ') >= 0) {
    inject("<a href = 'https://www.bing.com/search?q="+pars(5, chars).replace(' ', '+')+"'>Here</a>");
    return;
  }
  if (cmd == 'you suck!') {
    inject('Sorry to hear that! If you need an update, comment it at <a target = "_blank" href = "https://replit.com/@AmoghTheCool/Bob-web?v=1">here</a> and Amogh will <b>try</b> to update. Keep typing <code>bob-update</code> to refresh.')
    return;
  }
  if (cmd.indexOf('define ') >= 0) {
    inject('<a href = "https://www.bing.com/search?q=meaning+of+'+pars(6, chars).replace(' ', '+')+'">Here</a>');
    return;
  }
  if (cmd.indexOf('add todo ') >= 0) {
    inject('appended');
    todos.push(pars(9, chars));
    return;
  } 
  if (cmd == 'get todos') {
    inject("Todos: "+ todos.toString().replace(',', ", "));
    return;
  }
  if (cmd.indexOf('delete todo ') >= 0) {
    for (var i =0; i<=todos.length -1; i++) {
      if (todos[i] == pars(12, chars)) {
        todos.splice(i, 1);
      }
    }
    inject("Done.")
    return;
  }
  if (cmd.indexOf('how to ') >= 0) {
    inject('https://bing.com/search?q=how+to+' +pars(7, chars).replace(' ', '+'))
    return;
  }
  if (cmd.indexOf('open ') >= 0) {
    switch (pars(5, chars)) {
      case 'gmail':
        window.open("https://gmail.com", '_blank')
        inject('gmail')
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
  if (cmd.indexOf('add contact ') >= 0) {
    const name = cmd.split('name:')[1].split(' people:')[0];
    const email = cmd.split(' people:')[1];
    contax[name] = email;
    inject('Contact added')
    return;
  }
  if (cmd == 'info') {
    inject('Your amazing, useful, assistant called Bob! Orginially made in Python, Bob is an awesome AI assistant to help us Devs get through our day. <br>"Bob is marvelous, simply marvelous!"<br>-Unnamed Client')
    return;                 
  }
  if (cmd.indexOf('message ') >= 0) {
    var msg = cmd.split('body:')[1].split('to:')[0];
    var toWho = cmd.split('to:')[1] //[bob-quickMsg,msg,przon]
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
  if (cmd.indexOf('calculate ') >= 0) {
    try {
      inject("Answer: "+ eval(pars(10, chars)));
      return;
    } catch {
      inject("<div id = 'redTex'>Invalid expression!</div>")
      return;
    }
  }
  if (cmd == 'help'){
    inject('Commands: [datetime - gets time, clear - clears, bing <something> - searchs something on bing, add todo <name> - adds todo to todo list, delete todo <todo> - deletes todo, get todos - gets todos, how to <what> - searchs how to do something, open <what> - opns something, bob-inf - gives info about bob, bob-update - updates bob, calc <expression> - calculates something, message body:<text> to:<emailadress/contact> - sends quick message for you, add contact name:<contactname> people:<emailadress> - adds contact to Bob Contax, opn <pname>in repl]')
    return;
  }
  if ('hello' == cmd || 'hello!' == cmd) {
    inject('Hello to you too!')
    return;
  }
  if ('thanks' == cmd || 'thanks!' == cmd || 'thx' == cmd || 'thx!' == cmd) {
    inject('Welcome! If you like me, please upvote the project here: <a href = "https://replit.com/@AmoghTheCool/Bob-web?v=1"> </a>');
    return;
  }
  inject('<div id = "redTex">Invalid: '+cmd+"</div>");
  localStorage.setItem('contax', JSON.stringify(contax));
}
document.getElementById('textbar').addEventListener('keypress', function (event) {
  if (event.keyCode == 13) { wut();document.getElementById('textbar').value = '';}
}) 
function pars(startIndx, li) {
  let out = '';
  for (var i = startIndx; i <= li.length - 1; i++) {
    out += li[i];
  }
  return out
}
function listsAreSame(l1, l2) {
  for (var i = 0; i <= l1.length; i++) {
    if (l1[i] != l2[i]) {
      return false
    }
  }
  return true
}
function indexparse(i1, i2, l) {
  let outp = '';
  for (var p = i1; p <= i2; p++) {
    outp += l[p];
  }
  return outp;
}
function inject(w) {
  let d = new Date()
  document.getElementById('chat').innerHTML += `<div class = "r"><br>`+w+`</div><br><h1><br></h1>`
}


function inject2(w) {
  let d = new Date()
  document.getElementById('chat').innerHTML += `<div class = "l"><br>`+w+`</div><br><h1><br></h1>`
}
function wut() {
  process(document.getElementById('textbar').value)
}
