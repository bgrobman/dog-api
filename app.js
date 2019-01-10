


const card = document.querySelectorAll('.card');
const cardTitle = document.querySelectorAll('.card-title');
const sr = document.querySelectorAll('#search');

function getData(url){
return  fetch(url)
       .then(res => res.json())
       .catch((err) => {
         console.log(err);
       });
}

function generateOptions(data) {
var html = '<select>' ;
  var  op =  $.each(data,function( key, value ) {
      html += '<option value=' + value +'>' + value +'</option>';
  })

 $('#search').html(html +  '</select>');
}

function getImg(data,element,cl){
  var img = document.createElement('div');
  img.innerHTML = (`<img class='${cl}' src='${data}' alt="Image of the dog">`);
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


//random img

  getData('https://dog.ceo/api/breeds/image/random')
  .then(data => data.message)
  .then( (data) => {
   getImg(data , $('#random'),'img-fluid-random mt-2');
  });

// select img
getData(`https://dog.ceo/api/breed/${$('select').val()}/images/random`)
.then(data => data.message)
.then( (data) => {
 getImg(data , search,'img-fluid-random');
});


$(document).ready(function(){
 $('#random').hide().delay(3000).slideDown(5000);
});
