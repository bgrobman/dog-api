
const card = document.querySelectorAll('.card');
const cardTitle = document.querySelectorAll('.card-title');
const search = document.getElementById('search');
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
 search.innerHTML =  html  + '</select>';
}

 for(let i = 0; i <card.length; i +=1 ){
  var url = `https://dog.ceo/api/breed/${cardTitle[i].textContent.toLowerCase().replace(/\s+/g, '')}/images/random`;
  getData(url)
         .then(data => data.message)
         .then( (data) => {
          var img = document.createElement('div');
          img.innerHTML = (`<img class="card-img-top" src='${data}' alt="Image of the dog">`);
          card[i].prepend(img);
         });
 }

getData('https://dog.ceo/api/breeds/list')
.then(data => generateOptions(data.message));



  getData(`https://dog.ceo/api/breed/${$('select').val()}/images/random`)
  .then(data => data.message)
  .then(data => {
   var img = document.createElement('div');
   img.innerHTML = `<img src='${data}' alt="random img of selected dog">`;
   $('#search').html(img);
  });
