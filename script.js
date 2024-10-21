function add_butt(){
    let a = document.getElementById('inp').value
    let di= document.getElementById('html_div')

    let taskText = document.createElement('span');
    taskText.textContent = a;

    let b = document.createElement('div')
    b.className='js_div'

    let c = document.createElement('input')
    c.type='checkbox'
    c.className='js_check'

    let d = document.createElement('button')
    d.className='js_delete'
    let del_icon = document.createElement('i')
    del_icon.className="bi bi-trash"
    d.appendChild(del_icon)
    d.addEventListener('click', function() {
        b.remove();
    });


    b.appendChild(c)
    b.innerHTML += a
    b.appendChild(d)
    di.prepend(b)
    inp.value=''
}

function myalert(){
    alert("Only 'My Day' feature is available for now. Remaining features going live soon!")
}
function span_alt(){
    alert("Feature coming soon, stay tuned!")
}