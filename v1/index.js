

/**
  1) create div const cardDiv  =  document.createElement('div')

        2) create span , add text
        3) create button

        4) appned span into div
        5) apenbutton div
        6) append div to placeholder


 * 
 */

var x = 0;
// Named function
// Without name function is called anonymous function
//document.body.addEventListener('doubleclick', () => console.log('some one clidked on body'));

function mouseOver(){
    console.log('Someone moved mouse over to header');
}
document.getElementById('kbHeader').addEventListener('mouseover', mouseOver);

function addCart() {

    var topDiv = document.createElement("div");
    topDiv.classList.add('kb-card-top-div');

    var cardDiv = document.createElement("div");
    // cardDiv.style.border = '1px solid black';
    // cardDiv.style.padding = '5px';
    // cardDiv.style.marginBottom = '5px';

    cardDiv.classList.add('kb-border');

    var span = document.createElement("span");
    x = x + 1;
    span.innerText = x + ': add card button is clicked';


    var button = document.createElement("button");
    button.innerText = ' delete ';
    button.addEventListener('click', function deleteDiv() { topDiv.remove() });
    button.classList.add('My-class-name');

    var icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-trash-o');

    button.append(icon);


    cardDiv.append(span);
    cardDiv.append(button);

    topDiv.append(cardDiv);
    var cards = document.getElementById("addCart");
    cards.append(topDiv);

}

