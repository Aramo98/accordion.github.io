const block = document.querySelector(".block")
let data = [
    {
        head:"What is Frontend Mentor, and How will it help Me",
        paragraph: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto deleniti officiis numquam saepe harum, nesciunt soluta. Distinctio ut optio ipsum omnis blanditiis! A aliquid debitis itaque numquam enim, officia et.
        Iste, beatae a optio minima exercitationem voluptates, enim, rerum voluptas esse aspernatur pariatur molestiae id. Fuga veritatis debitis voluptates vel vitae dicta, odit eum magni, ad vero odio, voluptate iusto?
        Labore minus fuga vero, maxime natus omnis cumque quam architecto soluta id unde, voluptate perferendis accusamus dolore, perspiciatis reiciendis modi dignissimos esse! Natus veniam eius ipsa. Adipisci doloribus temporibus voluptates.`
    },
    {
        head:"Is Frontend Mentor Free",
        paragraph: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto deleniti officiis numquam saepe harum, nesciunt soluta. Distinctio ut optio ipsum omnis blanditiis! A aliquid debitis itaque numquam enim, officia et.
        Iste, beatae a optio minima exercitationem voluptates, enim, rerum voluptas esse aspernatur pariatur molestiae id. Fuga veritatis debitis voluptates vel vitae dicta, odit eum magni, ad vero odio, voluptate iusto?
        Labore minus fuga vero, maxime natus omnis cumque quam architecto soluta id unde, voluptate perferendis accusamus dolore, perspiciatis reiciendis modi dignissimos esse! Natus veniam eius ipsa. Adipisci doloribus temporibus voluptates.`
    },
    {
        head:"Can i use Frontend Mentor projects in my Portfolio",
        paragraph: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto deleniti officiis numquam saepe harum, nesciunt soluta. Distinctio ut optio ipsum omnis blanditiis! A aliquid debitis itaque numquam enim, officia et.
        Iste, beatae a optio minima exercitationem voluptates, enim, rerum voluptas esse aspernatur pariatur molestiae id. Fuga veritatis debitis voluptates vel vitae dicta, odit eum magni, ad vero odio, voluptate iusto?
        Labore minus fuga vero, maxime natus omnis cumque quam architecto soluta id unde, voluptate perferendis accusamus dolore, perspiciatis reiciendis modi dignissimos esse! Natus veniam eius ipsa. Adipisci doloribus temporibus voluptates.`
    },
    {
        head:"How can i get help if i'm stuck on a challenge",
        paragraph: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto deleniti officiis numquam saepe harum, nesciunt soluta. Distinctio ut optio ipsum omnis blanditiis! A aliquid debitis itaque numquam enim, officia et.
        Iste, beatae a optio minima exercitationem voluptates, enim, rerum voluptas esse aspernatur pariatur molestiae id. Fuga veritatis debitis voluptates vel vitae dicta, odit eum magni, ad vero odio, voluptate iusto?
        Labore minus fuga vero, maxime natus omnis cumque quam architecto soluta id unde, voluptate perferendis accusamus dolore, perspiciatis reiciendis modi dignissimos esse! Natus veniam eius ipsa. Adipisci doloribus temporibus voluptates.`
    },
]


data.forEach((item,index)=>{

block.innerHTML += ` <div class="blockHeader">
<h4>${item.head}</h4>
<div class="buttonBlock">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
</div>
</div>
<div class="blockContent">${item.paragraph}</div>`

})


let bool = true;
let button = document.querySelectorAll(".buttonBlock");
let blockContent = document.querySelectorAll(".blockContent")
button.forEach((btn,index)=>{
  btn.onclick = ()=>{
    btn.addEventListener("click",()=>{
        button.forEach((btnTwo,indexTwo)=>{
            blockContent[indexTwo].classList.remove("active")
            bool = true
            btnTwo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`
        })
        blockContent[index].classList.add("active")
        bool = false
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`
    })
  }
})





// const button = document.querySelector(".buttonBlock");
// const blockContent = document.querySelector(".blockContent");

// button.addEventListener("click",()=>{
//    button.classList.toggle("active")
//     blockContent.classList.toggle("active")
// })