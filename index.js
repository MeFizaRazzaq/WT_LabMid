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
    Card.setAttribute('class','faq');
    //question node
    const question=document.createElement('h3');
    const textQ=document.createTextNode(QUES);
    question.append(textQ);
    question.classList.add('faq-title');
    Card.appendChild(question);
    //expand
    question.addEventListener('click',()=>{

    })
    //answer node
    const answer=document.createElement('p');
    const textA=document.createTextNode(ANS);
    answer.append(textA);
    answer.classList.add('faq-text')
    Card.appendChild(answer);

    //adding toggle button
    const tbtn=document.createElement('button');
    tbtn.classList.add('faq-toggle');
    Card.appendChild(tbtn);
    const i1=document.createElement('i');
    const i2=document.createElement('i'); 
    //i1.classList.add('fas fa-chevron-down');
    tbtn.appendChild(i1);
    i1.setAttribute('class','fas fa-chevron-down');
    tbtn.appendChild(i2);
    i2.setAttribute('class','fas fa-times');


    
    tbtn.addEventListener('click',()=>{
        Container.removeChild(Card);
    })
})






/*
acces the button
add a toggle button to it
assign the classes

*/


