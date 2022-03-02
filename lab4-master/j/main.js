
//querySelectorAll returns a nodeList of one or more 
//elements satisfying the selector
const paras = document.querySelectorAll('p');

//forEach is an array method also avaialble for use 
//with nodeLists. It lets us easily iterate over a 
//nodeList's childNodes. item is a madeup temp vaiable
//used to represent each item in turn of the nodeList.
paras.forEach( (item) => {
    // inside this arrow function we add the class and 
    //event listener to each childNode.
    item.classList.add('myp');

    item.addEventListener('click', (e) => {
        e.target.classList.toggle('myp');
    });
});
const first = document.images[0];
first.addEventListener('click', e => {
    e.target.src="https://unsplash.it/199";
});

//we can refer to the body tag this way.
//check the console to see all the properties and methods!
console.log(document.body);

//displays the containing element of area1
console.log(document.querySelector('.area1').parentElement);

//displays all the different childnodes of area1
console.log(document.querySelector('.area1').childNodes);

//displays all the elements nodes of area1
console.log(document.querySelector('.area1').children);

//Twiddle down the little arrows in the console to checkout 
//all the properties, methods, and events associated with 
//the above elements.