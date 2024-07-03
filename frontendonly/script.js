function send() {
    let v  = document.querySelector('input').value;
    let b = document.createElement('li');
    
    let s = document.createElement('button')
    s.textContent = 'delete';
    b.textContent = v + '  ';
    b.appendChild(s);

    let list = document.querySelector('ul');
    list.appendChild(b);
    document.querySelector('input').value = '';   // nkhawi el input       

    s.onclick = function() {
    b.style.display = 'none';
}
}
