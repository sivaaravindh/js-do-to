let cont=document.querySelector(".container");
let car1=document.createElement("div");
car1.classList.add("col");
cont.appendChild(car1);

let car=document.createElement("form");
car.classList.add("form");
car1.appendChild(car);

let d=document.createElement("h4");
d.setAttribute("class","number");
d.innerHTML="Enter the text:"
  car.appendChild(d);
car.appendChild(d);

let c=document.createElement("textarea");
c.setAttribute("type","text");
  c.setAttribute("id","number");
  car.appendChild(c);
car.appendChild(c);

let plus=document.createElement("button");
  plus.setAttribute("name","submit")
  plus.innerHTML="subitt";
  car.appendChild(plus);

  let car2=document.createElement("div");
  
  car2.classList.add("right");
  cont.appendChild(car2);

let car3=document.createElement("div");
car3.setAttribute("id","post")
car3.classList.add("post");
car2.appendChild(car3);



let form=document.querySelector("form");
let input=document.querySelector("textarea");
let post=document.querySelector("#post");
console.log(post.parentNode);
form.addEventListener("submit", e=>{
  e.preventDefault();
  read();
})



let data={};
 
function  read(){
    data["text"]=input.value;
    console.log(data);
    creat();
}

function  creat(){

    post.innerHTML +=`<div> <p>${data.text}</p>
      <span class="option">
          <i onClick="new2(this)" class="fa fa-edit"></i>
          <i onClick="delete1(this)" class="fa fa-trash"></i>
      </span>
      </div>`
      input.value=" ";
    }

    function delete1(e) {
      e.parentNode.parentNode.remove();
    };

    function new2(e) {
      input.value=e.parentNode.previousElementSibling.innerText;
      e.parentNode.remove();
    }