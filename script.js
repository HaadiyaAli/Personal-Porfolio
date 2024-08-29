
let body = document.getElementsByClassName('mainbody')
const close = document.getElementById('close')
const show = document.getElementById('show')

close.addEventListener('click', ()=>{
    for (let i=0;i<body.length;i+=1){
        body[i].style.display = 'none';
       }
})

show.addEventListener('click', ()=>{
    for (let i=0;i<body.length;i+=1){
        body[i].style.display = 'inline';
       }
})




