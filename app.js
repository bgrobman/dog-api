
const card = document.querySelectorAll('.card');
const cardTitle = document.querySelectorAll('.card-title');
const sr = document.querySelectorAll('#search');
const random = document.querySelectorAll('#random');
// const listImg = document.querySelectorAll('#list-image');
const remove = document.getElementsByClassName('remove');
const listImg = document.getElementById('list-img');


function getData(url){
return  fetch(url)
       .then(res => res.json())
       .catch((err) => {
         console.log(err);
       });
}

function generateOptions(data) {
var html = '<select class="custom-select" id="inputGroupSelect04">' ;
  var  op =  $.each(data,function( key, value ) {
      html += '<option value=' + value +'>' + value +'</option>';
  })

 $('#search').html(html +  '</select>');
}

function getImg(data,element,cl,divClass){
  var img = document.createElement('div');
  img.innerHTML = (`<img class='${cl}' src='${data}' alt="Image of the dog">`);
  img.setAttribute("class", divClass)
  element.prepend(img);
}

 for(let i = 0; i <card.length; i +=1 ){
  var url = `https://dog.ceo/api/breed/${cardTitle[i].textContent.toLowerCase().replace(/\s+/g, '')}/images/random`;
  getData(url)
         .then(data => data.message)
         .then( (data) => {
          getImg(data , card[i],  'card-img-top');
        });
 }

getData('https://dog.ceo/api/breeds/list')
.then(data => generateOptions(data.message));


//random img generator
for(let i = 0; i < 3 ; i += 1){
  getData('https://dog.ceo/api/breeds/image/random')
  .then(data => data.message)
  .then( (data) => {
   getImg(data , $('#random'),'img-fluid remove mb-3','col-sm-4 remove');
  });
}


//$('#random').hide().delay(2000).slideDown(5000);
     //select img
 listImg.addEventListener("click", function(){
   $('.remove').remove();
  for(let i = 0; i < 3 ; i += 1){
    getData(`https://dog.ceo/api/breed/${$('select').val()}/images/random`)
    .then(data => data.message)
    .then( (data) => {
     getImg(data , $('#random'),'img-fluid mb-3','col-sm-4 remove');
    });
  }
 $('#random').hide().delay(500).slideDown(3000);
 });


// $('#random').hide().delay(3000).slideDown(5000);

// $(document).ready(function(){
//  $('#random').hide().delay(3000).slideDown(5000);
// //});
