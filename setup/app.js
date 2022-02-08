// local reviews data
const reviews = [
  {
    id: 0,
    name: "sara jones",
    job: "ux designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
  },
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let nextButton = document.body.querySelector(".next-btn")
let prevButton = document.body.querySelector(".prev-btn")
let randomButton = document.body.querySelector(".random-btn")


let imgContainer=document.body.querySelector(".img-container")
let author=document.body.querySelector("#author")
let job=document.body.querySelector("#job")
let info=document.body.querySelector("#info")
let reviewId=document.getElementById('0')
let reviewIdNum=parseInt(reviewId.id)


nextButton.addEventListener('click', function(){
 for(i=0;i<reviews.length-1;i++){ 
   if (reviewId.id===`${i}`&&i<reviews.length){
    imgContainer.innerHTML=`<img src=${reviews[i+1].img} id="person-img" alt="" />`
    author.innerText=`${reviews[i+1].name}`
    job.innerHTML=`${reviews[i+1].job}`
    info.innerHTML=`${reviews[i+1].text}`
    reviewId.id=i+1
    break
   } else if (reviewId.id===`${reviews.length-1}`){
    imgContainer.innerHTML=`<img src=${reviews[0].img} id="person-img" alt="" />`
    author.innerText=`${reviews[0].name}`
    job.innerHTML=`${reviews[0].job}`
    info.innerHTML=`${reviews[0].text}`
    reviewId.id=0
    break
   } else{
     continue
   }

   }} )  

   prevButton.addEventListener('click', function(){
    for(i=0;i<reviews.length;i++){ 
      if (reviewId.id===`${i}`&&i!="0"){
       imgContainer.innerHTML=`<img src=${reviews[i-1].img} id="person-img" alt="" />`
       author.innerText=`${reviews[i-1].name}`
       job.innerHTML=`${reviews[i-1].job}`
       info.innerHTML=`${reviews[i-1].text}`
       reviewId.id=i-1
       break
      } else if (reviewId.id==="0"){
       imgContainer.innerHTML=`<img src=${reviews[reviews.length-1].img} id="person-img" alt="" />`
       author.innerText=`${reviews[reviews.length-1].name}`
       job.innerHTML=`${reviews[reviews.length-1].job}`
       info.innerHTML=`${reviews[reviews.length-1].text}`
       reviewId.id=reviews.length-1
       break
      } else{
        continue
      }
   
      }} ) 
      
randomButton.addEventListener('click',function(){
  let randomNum=Math.floor(Math.random()*reviews.length)
  imgContainer.innerHTML=`<img src=${reviews[randomNum].img} id="person-img" alt="" />`
       author.innerText=`${reviews[randomNum].name}`
       job.innerHTML=`${reviews[randomNum].job}`
       info.innerHTML=`${reviews[randomNum].text}`
       reviewId.id=randomNum-1
})
      
   


