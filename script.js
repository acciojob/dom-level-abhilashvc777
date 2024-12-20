//your JS code here. If required.
const ul = document.querySelector("ul")
const li = document.querySelectorAll("ul li")
let n;
for(let i=0; i<li.length;i++){
	if(li[i].id==="level"){
		n=i
	}
}
alert(`The level of the element is: ${n}`)