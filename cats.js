let wrapper=document.getElementById("btn");
let button=document.createElement('button');
button.innerText="Click for random cat images";
wrapper.appendChild(button);
button.addEventListener('click',function(){
    fetch("https://api.thecatapi.com/v1/images/search")
    .then((rr)=>{
        return rr.json();
    }).then((ttt)=>{
        let img_element=document.getElementById('image');
        let img=document.createElement('img');
        img.src=ttt[0].url;
        img_element.appendChild(img);
    })
    .catch((err)=>{
        console.log(err);
    })

})