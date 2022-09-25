
let square_number = 25;
const button = document.getElementById('refresh');
let color = 'black';
let color_mode_click = true; 



button.addEventListener('click', fill_squares)


// Adds squares to the grid.

function fill_squares (){
    const grid = document.getElementById('grid');
    grid.innerHTML = ''


    const nodes = document.getElementById('grid')
    while (nodes.firstChild) {
        nodes.removeChild(nodes.lastChild)
    }

    grid.style.backgroundColor = '#FFFFFF'
    console.log('worked')

    
    
    for (let i = 0; i < square_number*square_number; i++){
        const square = document.createElement('div');
        let wit = String(500/square_number)+'px';
        let hei = String(500/square_number) + 'px';

        square.style.width = wit;
        square.style.height= hei;
        square.style.outline = '1px solid black';
        square.style.padding = '0px';
        square.style.margin = '0px';
        square.style.backgroundColor = 'white';
        square.classList.add('square_child')
        
        
        square.addEventListener('mousedown',function () {
            square.style.backgroundColor = color;
        })
        

        grid.appendChild(square);
    }


}

fill_squares();


// Adds mouse down functionality to child squares. 

function add_events () {
    const nodes = document.getElementById('grid').childNodes;
    for (let i = 0; i < nodes.length; i++) {

        nodes[i].addEventListener('mousedown', function () {
            nodes[i].style.backgroundColor = 'black;'
        })
    }

}


// Adds functionality to toggle grid. 

let grid_on = true;
const btn_2 = document.getElementById('add-remove');
btn_2.addEventListener('click', add_remove_grid)


function add_remove_grid () {
    console.log('clicked')
    const nodes = document.getElementById('grid').childNodes;

    if (grid_on == true) {
        grid_on = false;
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].style.outline = '0px';

        }
    } else {
        grid_on = true;
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].style.outline = '1px solid black';

        }
    }                 
}

// Functionality to change grid size via square number variable.

let slider = document.getElementById('myRange')
square_number = slider.value;


function updateSlider() {
    let slider = document.getElementById('myRange')


    console.log(slider.value)
    square_number = slider.value;
    fill_squares();
}


// Color change functionality. 

document.getElementById('red').addEventListener('click', function () {
    color = 'red'
    set_color;

})
document.getElementById('yellow').addEventListener('click', function () {
    color = 'yellow'
    set_color;

})
document.getElementById('blue').addEventListener('click', function () {
    color = 'blue'
    set_color;

})
document.getElementById('green').addEventListener('click', function () {
    color = 'green'
    set_color;

})
document.getElementById('black').addEventListener('click', function () {
    color = 'black'
    set_color;

})
document.getElementById('white').addEventListener('click', function () {
    color = 'white'
    set_color;

})

// Function to allow mouse over color adding.

function set_color () {
    const nodes = document.getElementById('grid').childNodes;
    for (i = 0; i < nodes.length; i++){
        nodes[i].addEventListener('mouseenter', function  () {
            nodes[i].style.backgroundColor = color;
        })
    }
    
}


let node = '';

function color_function () {
    node.style.backgroundColor = color;
}


const hover_button = document.getElementById('mode_hover')

hover_button.addEventListener('click', function () {
    const nodes = document.getElementById('grid').childNodes;
    for (i = 0; i < nodes.length; i++) {

        let node = nodes[i];
        node.addEventListener('mouseover', function() {
            node.style.backgroundColor = color;
        })        
        grid.replaceChild(node, nodes[i]);

    }

    console.log('worked')
    
})
 



// Function for mouse down color adding. 


/*

function set_mouse_down () {
    const nodes = document.getElementById('grid').childNodes;
    for (i = 0; i < nodes.length; i++){
        nodes[i].addEventListener('mousedown', function  () {
            square.style.backgroundColor = color;
        }
        )
        nodes[i].removeEventListener('mouseover', fill_squares);
    }

}

let btn_mode_click = document.getElementById('mode_click');
btn_mode_click.addEventListener('click', set_mouse_down)
*/