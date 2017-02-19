// global list of the urls to fetch from 
var urls = [];
urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');
urls.push('http://www.amazon.com/HTC-32GB-Unlocked-International-Version/dp/B00K6P95N2/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915717&sr=1-1&keywords=htc+one+m8+32gb+unlocked');
urls.push('http://www.amazon.com/Motorola-Moto-3rd-Generation-Unlocked/dp/B00ZQVSKSM/ref=sr_1_2?s=wireless&ie=UTF8&qid=1456915764&sr=1-2&keywords=8gb+moto+g');
urls.push('http://www.amazon.com/Apple-iPhone-Warranty-Unlocked-Cellphone/dp/B015E8UTIU/ref=sr_1_2?s=wireless&ie=UTF8&qid=1456915797&sr=1-2&keywords=64+gb+iphone+6s');
urls.push('http://www.amazon.com/Samsung-Galaxy-Note-Factory-Unlocked/dp/B013WACF4S/');
urls.push('http://www.amazon.com/HTC-One-Factory-Unlocked-Cellphone/dp/B00CMVLH66');
urls.push('http://www.amazon.com/Edition-Unlocked-Smartphone-Black-Warranty/dp/B013SEXKI8');

urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');
urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');
urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');


urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');
urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');
urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');


urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');
urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');
urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');

urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');
urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');
urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');

urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');
urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');
urls.push('http://www.amazon.com/Samsung-Galaxy-G900A-Unlocked-Cellphone/dp/B00K15Q2B0/ref=sr_1_1?s=wireless&ie=UTF8&qid=1456915636&sr=1-1&keywords=16+gb+samsung+galaxy+s5+unlocked');

var names = ['Samsung Galaxy s5','HTC One M8', 'Motorola Moto G', 'Apple Iphone 6s', 'Samsung Galaxy note 5', 'HTC One M7', 'Motorola Moto X Pure Edition','Samsung Galaxy s7 Edge', 'Samsung Galaxy s7 Edge', 'Samsung Galaxy s7 Edge', 'Samsung Galaxy s7 Edge', 'Samsung Galaxy s7 Edge', 'Samsung Galaxy s7 Edge', 'Samsung Galaxy s7 Edge', 'Samsung Galaxy s7 Edge', 'Samsung Galaxy s7 Edge', 'Samsung Galaxy s7 Edge', 'Samsung Galaxy s7 Edge', 'Samsung Galaxy s7 Edge','Samsung Galaxy s7 Edge', 'Samsung Galaxy s7 Edge', 'Samsung Galaxy s7 Edge'];

var SEMANTIC_SERVICE_URL = "http://ecology-service.cse.tamu.edu/BigSemanticsService/";


$(function () {
  
  var ref = new Firebase('https://reviews123.firebaseio.com/');
  var baseUrl = 'http://ecology-service.cs.tamu.edu/BigSemanticsService/metadata.json?url=';
  var i = 0;
  
  while(i < urls.length) {
    var url = baseUrl + urls[i]; 
    var dummyRef = ref.child("dummy/" + i.toString());
    var reviews = null;
    $.ajax({
      type: 'GET' ,
      url: url ,
      async: false ,
      success: function(data) {
        console.log('success', data);
        $('body').append('<div id="helloDiv">'+data.amazon_product.reviews+'</div>');
        reviews = data.amazon_product.reviews;
      }
    });
    
    var obj1 = {name:names[i], reviews:reviews};
    dummyRef.set({0:obj1});
    i = i + 1;
  }
});
