let btn = document.querySelector('button');
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", function(){
   let item = document.createElement("li");
   item.innerText=inp.value;
   ul.appendChild(item)
   inp.value= "";
   let del = document.createElement('button')
   del.innerText ="delete";
   del.classList.add("delete")
   item.appendChild(del);
})
let deal = document.querySelectorAll('.delete')
for(del of deal){
    del.addEventListener("click",function)
}