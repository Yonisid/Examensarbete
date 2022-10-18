function createElement(tag, html, attributes = {}) {
    const el = document.createElement(tag)

    if (html) {
        el.innerHTML = html;
    }

    Object.keys(attributes).forEach(key => {
        el[key] = attributes[key];
    })

    return el
}

window.addEventListener('DOMContentLoaded', () => {
    let x = document.getElementById("form_sample");
    let createform = createElement('form', null, {
        action: "",  
        method: "post"
    });
    createform.setAttribute("action", "");
    createform.setAttribute("method", "post"); 
    x.appendChild(createform);

    let heading = createElement('h2', "Contact Form"); 
    //heading.innerHTML = "Contact Form ";
    createform.appendChild(heading);

    let line = document.createElement('hr');
    createform.appendChild(line);

    let linebreak = document.createElement('br');
    createform.appendChild(linebreak);

    let namelabel = createElement('label', "Your Name : ");
    //namelabel.innerHTML = "Your Name : ";
    createform.appendChild(namelabel);

    let inputelement = createElement('input', null, {
        type: "text",
        name: "dname"
    });
    //inputelement.setAttribute("type", "text");
    //inputelement.setAttribute("name", "dname");
    createform.appendChild(inputelement);

    let emaillabel = createElement('label', "Your Email : ");
    //emaillabel.innerHTML = "Your Email : ";
    createform.appendChild(emaillabel);

    let emailelement = createElement('input', null, {
        type: "text",
        name: "dname",
    });
    // emailelement.setAttribute("type", "text");
    // emailelement.setAttribute("name", "demail");
    createform.appendChild(emailelement);

    let emailbreak = createElement('br');
    createform.appendChild(emailbreak);

    let messagelabel = createElement('label', "Your Message : ");
    // let messagelabel = document.createElement('label');
    // messagelabel.innerHTML = "Your Message : ";
    createform.appendChild(messagelabel);

    let texareaelement = createElement('textarea', null, {name: 'dmessage'});
    // let texareaelement = document.createElement('textarea');
    // texareaelement.setAttribute("name", "dmessage");
    createform.appendChild(texareaelement);

    let messagebreak = createElement('br');
    createform.appendChild(messagebreak);

    // let submitelement = document.createElement('input');
    // submitelement.setAttribute("type", "submit");
    // submitelement.setAttribute("name", "dsubmit");
    // submitelement.setAttribute("value", "Submit");

    let submitelement = createElement('input', null, {
        type: "submit",
        name: "dsubmit",
        value: "Submit",
    });

    createform.appendChild(submitelement);

})