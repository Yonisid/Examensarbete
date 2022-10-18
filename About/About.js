let x = document.getElementById("form_sample");
let createform = document.createElement('form');
createform.setAttribute("action", "");
createform.setAttribute("method", "post"); 
x.appendChild(createform);

let heading = document.createElement('h2'); 
heading.innerHTML = "Contact Form ";
createform.appendChild(heading);

let line = document.createElement('hr');
createform.appendChild(line);

let linebreak = document.createElement('br');
createform.appendChild(linebreak);

let namelabel = document.createElement('label');
namelabel.innerHTML = "Your Name : ";
createform.appendChild(namelabel);

let inputelement = document.createElement('input');
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

let emaillabel = document.createElement('label');
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

let emailelement = document.createElement('input');
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

let emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

let messagelabel = document.createElement('label');
messagelabel.innerHTML = "Your Message : ";
createform.appendChild(messagelabel);

let texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

let messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

let submitelement = document.createElement('input');
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);