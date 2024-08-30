
let body = document.getElementsByClassName('mainbody')
let home = document.getElementsByClassName('home')
let projects = document.getElementsByClassName('projects')
let contacts = document.getElementsByClassName('contacts')

const close = document.getElementById('close')
const homeFile = document.getElementById('homeFile')
const projectFile = document.getElementById('projectFile')
const contactFile = document.getElementById('contactFile')

close.addEventListener('click', ()=>{
    for (let i=0;i<body.length;i+=1){
        body[i].style.display = 'none';
       }
})

homeFile.addEventListener('click', ()=>{
    console.log("click")
    for (let i=0;i<body.length;i+=1){
        body[i].style.display = 'inline';
        home[i].style.display = 'flex';
        projects[i].style.display = 'none';
        contacts[i].style.display = 'none';
       }
})

projectFile.addEventListener('click', ()=>{
    console.log("click")
    for (let i=0;i<body.length;i+=1){
        body[i].style.display = 'inline';
        projects[i].style.display = 'flex';
        home[i].style.display = 'none';
        contacts[i].style.display = 'none';
       }
})

contactFile.addEventListener('click', ()=>{
    console.log("click")
    for (let i=0;i<body.length;i+=1){
        body[i].style.display = 'inline';
        contacts[i].style.display = 'flex';
        projects[i].style.display = 'none';
        home[i].style.display = 'none';
       }
})





