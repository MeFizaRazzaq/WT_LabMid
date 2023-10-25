const Container=document.getElementById("Container");
const Dropdown=document.querySelectorAll('.faq-toggle');

console.log(Dropdown);

Dropdown.forEach(toggle=>{
    console.log(toggle)
    toggle.addEventListener('click',()=>{
        const parent=toggle.parentNode;
        parent.classList.toggle('active');
    })
})

const Add=document.getElementById("addbtn");
Add.addEventListener('click',()=>{
    const QUES=document.getElementById("Ques").value;
    const ANS=document.getElementById("Ans").value;
    //console.log(Ques);
    const Card=document.createElement('div');
    Container.appendChild(Card);
    //question node
    const question=document.createElement('h3');
    const textQ=document.createTextNode(QUES);
    question.append(textQ);
    Card.appendChild(question);
    //answer node
    


})






/*
acces the button
add a toggle button to it
assign the classes

*/


