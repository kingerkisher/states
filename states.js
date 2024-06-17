document.addEventListener('DOMContentLoaded', () => {

    // First we get hold of the input field
    var states = document.getElementById('states');
    
    // set an event listener to check when the enter key is pressed
    states.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {

            // ensure that the input field is not empty when the enter key is pressed
            if (states.value != '') {

                // states your conditions 
                var list = document.getElementById('list');
                list.className = 'list-group'

                var li = document.createElement('li');

                li.className = 'text-capitalize list-group-item mt-1'
                li.innerText = states.value;
                console.log(li.innerText);
                list.appendChild(li);
                console.log(states.value);

                // add click functions to the added lists
                // single click 

            }
        }
    })
})

setInterval(() => {
    var states = document.getElementById('states');
    states.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            states.value = '';
        }
    });
}, 3000);