// var x = 0;
// function addCart() {

//     var topDiv = document.createElement("div");
//     topDiv.classList.add('kb-card-top-div');

//     var cardDiv = document.createElement("div");
//     // cardDiv.style.border = '1px solid black';
//     // cardDiv.style.padding = '5px';
// //     // cardDiv.style.marginBottom = '5px';

// //     cardDiv.classList.add('kb-border');

// //     var span = document.createElement("span");
// //     x = x + 1;
// //     span.innerText = x + ': add card button is clicked';


// //     var button = document.createElement("button");
// //     button.innerText = 'delete';
// //     button.addEventListener('click', function deleteDiv() { topDiv.remove() });
// //     button.classList.add('My-class-name');

// //     var icon = document.createElement('i');
// //     icon.classList.add('fa');
// //     icon.classList.add('fa-trash-o');

// //     button.append(icon);


// //     cardDiv.append(span);
// //     cardDiv.append(button);

// //     topDiv.append(cardDiv);
// //     var cards = document.getElementById("addCart");
// //     cards.append(topDiv);

// // }


 function addCart(){


      var Div = document.createElement("div");
    


      var text = document.createElement("textarea");
      text.classList.add("kb-textarea");


     //  var button = document.createElement("button");
     //  button.innerText = 'delete';
     //  button.addEventListener('click', function deleteDiv() { Div.remove() });
     //  button.classList.add('kb-delete-btn');


     // var icon = document.createElement('i');
     // icon.classList.add('fa');
     // icon.classList.add('fa-trash-o');
        //var buttonDiv = document.createElement("div");
         // buttonDiv.classList.add("kb-buttondiv")


       // button.append(icon);
     
var Header = document.createElement("header");
Header.classList.add("kb-card-header");


var icon = document.createElement('i');
icon.classList.add("fa");
icon.classList.add("fa-ellipsis-h");


  

        var addButton= document.createElement("add");
       addButton.innerText ='Add';
    addButton.addEventListener('click', function addBtn() {
     
         Div.innerHTML =  Header.innerHTML;
        Header.innerHTML = text.value;
        Div.classList.add("kb-card-div")
        
       
        Div.append(Header);
        Header.append(icon);

    

//         // Div.innerText = count +' ' + ':'+ ' ' + text.value+ ' '  ;
//         // Div.append(button);        
      });
       addButton.classList.add("kb-add-btn");



     var cancelButton= document.createElement("cancel");
     cancelButton.innerText= 'Cancel';
      cancelButton.addEventListener('click', function cancelDiv() {
         Div.remove() 
        });
    cancelButton.classList.add("kb-cancel-btn");

     // mainDiv.append(Div);
     Div.append(text);
  // Div.append(button);
     Div.append(addButton);
     Div.append(cancelButton);
 
   var cards = document.getElementById("addCart");
//     //  cards.addEventListener('click', function () => { 'disabled= true' });
          cards.append(Div);
         cards.append(addButton);
         cards.append(cancelButton);
      
 }




