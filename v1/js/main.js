var x=1;
function addCart(){
   console.log()
    var ele = document.getElementById("addCart")
    var span = document.createElement("div")
    // span.setAttribute('id' , "id" + x);
    
     
               
                span.innerHTML=x  + ': add card button is clicked  <button class="kb-btn-link" onclick = deletetext(this.parentNode)><i class="fa fa-trash-o"></i>delete</button>';
                ele.append(span);
                x=x+1;
		}

function deletetext(x){
    console.log(x);
    x.remove();

    //span.remove()
   // console.log('i',x);
    
}



        
        