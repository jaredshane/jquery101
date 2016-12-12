console.log('hello world');


// $('h1').html('hi')
$('h1:first-of-type').html('whats up?');

//document ready function
//
// $(document).ready(function () {
//
// })

// in vanilla js

// document.addEventListener('DOMContentLoaded', function () {
//
// })


//append

var foods = ['apple', 'banana', 'egg', 'bread', 'meat']

  for (var i = 0; i < foods.length; i++) {
    $('ul').append(`<li>${foods[i]}</li>`)
  }

//wrap the ul with a div
$('ul').wrap('<div class="foods"></div>');

//assign a value to the input field
$('input:text').val('Hello friends')
$(':submit').click(function () {
  console.log($('input:text').val());
})


$.getJSON('https://randomuser.me/api?nat=us', function (data) {
  console.log(data);
  console.log(data.results[0]);
  $('h1').last().append(` Hello, ${data.results[0].name.first}`)
})
