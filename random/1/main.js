const btn = document.querySelectorAll('button');

let container = document.querySelector('#container');


btn.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'red'){
            container.style.backgroundColor = 'red';
        };
        if (button.id == 'blue'){
            container.style.backgroundColor = 'blue';
        };
        if (button.id == 'pink'){
            container.style.backgroundColor = 'pink';
        };
        if (button.id == 'green'){
            container.style.backgroundColor = 'green';
        }
    })
})



document.addEventListener("keydown", ()=> {
    container.style.backgroundColor = 'black';
}
)