$(function () {
  
  var ref = new Firebase('https://blinding-heat-6421.firebaseio.com/');
  var dummyRef = ref.child("dummy/6");
  
  var name="";
  var price = "0.0";
  var image = null;
  var screen_size = null;
  var camera = null;
  var ram = null;
  var internal_storage = null;
  var reviews_location = null;
  var rating = null;
  
  name = "Motorola Moto X Pure Edition";
  price = "$399.97";
  reviews_location = "http://www.amazon.com/Edition-Unlocked-Smartphone-Black-Warranty/dp/B013SEXKI8";
  rating = "4.3 out of 5 stars";
  image = "http://i.ebayimg.com/images/g/G0QAAOSwP~tW5dyO/s-l1600.jpg";
  ram = "3GB";
  camera = "21.0 MP";
  internal_storage = "16GB";
  screen_size = "5.7\"";
  
   var obj1 = {name:name, price:price, image:image, screen_size: screen_size, camera:camera, ram:ram, internal_storage:internal_storage, reviews_location:reviews_location, rating:rating};
    dummyRef.set({0:obj1});
  
  name = "Samsung Galaxy s7 Edge";
  price = "$771.38";
  reviews_location = "http://www.amazon.com/Samsung-Galaxy-S7-G935F-Unlocked/dp/B01CJU9V62/";
  rating = "4.4 out of 5 stars";
  image = "http://i.ebayimg.com/images/g/wI0AAOSwHxVW7DTU/s-l1600.jpg";
  ram = "4GB";
  camera = "12.0 MP";
  internal_storage = "32GB";
  screen_size = "5.5\"";
  
   obj1 = {name:name, price:price, image:image, screen_size: screen_size, camera:camera, ram:ram, internal_storage:internal_storage, reviews_location:reviews_location, rating:rating};
   dummyRef = ref.child("dummy/7");
    dummyRef.set({0:obj1});
  
  name = "HTC One M9";
  price = "$363.93";
  reviews_location = "http://www.amazon.com/HTC-Factory-Unlocked-Cellphone-Silver/dp/B00V59AZAK";
  rating = "4.0 out of 5 stars";
  image = "http://i.ebayimg.com/images/g/70sAAOSwT6pVkyzR/s-l1600.jpg";
  ram = "3GB";
  camera = "20.0 MP";
  internal_storage = "32GB";
  screen_size = "5.0\"";
  obj1 = {name:name, price:price, image:image, screen_size: screen_size, camera:camera, ram:ram, internal_storage:internal_storage, reviews_location:reviews_location, rating:rating};
   dummyRef = ref.child("dummy/8");
    dummyRef.set({0:obj1});
  
  name = "Samsung Galaxy s6";
  price = "$316.0";
  reviews_location = "http://www.amazon.com/Samsung-Galaxy-S6-White-Pearl/dp/B00V5LZNFK";
  rating = "4.3 out of 5 stars";
  image = "http://i.ebayimg.com/images/g/h0MAAOSwo0JWMSjW/s-l1600.jpg";
  ram = "3GB";
  camera = "16.0 MP";
  internal_storage = "32GB";
  screen_size = "5.0\"";
  obj1 = {name:name, price:price, image:image, screen_size: screen_size, camera:camera, ram:ram, internal_storage:internal_storage, reviews_location:reviews_location, rating:rating};
   dummyRef = ref.child("dummy/9");
    dummyRef.set({0:obj1});
 
  name = "Apple Iphone 5s";
  price = "$319.99";
  reviews_location = "http://www.amazon.com/Apple-iPhone-5s-Unlocked-Cellphone/dp/B00F3J4B5S";
  rating = "4.1 out of 5 stars";
  image = "http://i.ebayimg.com/images/g/u~8AAOSw3KFWf~ho/s-l1600.jpg";
  ram = "1GB";
  camera = "8.0 MP";
  internal_storage = "16GB";
  screen_size = "4.0\"";
  obj1 = {name:name, price:price, image:image, screen_size: screen_size, camera:camera, ram:ram, internal_storage:internal_storage, reviews_location:reviews_location, rating:rating};
   dummyRef = ref.child("dummy/10");
    dummyRef.set({0:obj1});
 
  name = "OnePlus X";
  price = "$272.17";
  reviews_location = "http://www.amazon.com/OnePlus-E1001-Screen-Unlocked-Smartphone/dp/B017ILBSSQ";
  rating = "3.9 out of 5 stars";
  image = "http://i.ebayimg.com/images/g/9g8AAOSwDuJWyCbK/s-l1600.jpg";
  ram = "3GB";
  camera = "8.0 MP";
  internal_storage = "16GB";
  screen_size = "5.0\"";
  obj1 = {name:name, price:price, image:image, screen_size: screen_size, camera:camera, ram:ram, internal_storage:internal_storage, reviews_location:reviews_location, rating:rating};
   dummyRef = ref.child("dummy/11");
    dummyRef.set({0:obj1});
 
  name = "Samsung Galaxy Grand Prime";
  price = "$143.94";
  reviews_location = "http://www.amazon.com/Samsung-Factory-Unlocked-International-Packaging/dp/B00YT13T3Q";
  rating = "3.8 out of 5 stars";
  image = "http://i.ebayimg.com/images/g/aOUAAOSwkNZUdQHB/s-l1600.jpg";
  ram = "1GB";
  camera = "8.0 MP";
  internal_storage = "8GB";
  screen_size = "5.0\"";
  obj1 = {name:name, price:price, image:image, screen_size: screen_size, camera:camera, ram:ram, internal_storage:internal_storage, reviews_location:reviews_location, rating:rating};
   dummyRef = ref.child("dummy/12");
    dummyRef.set({0:obj1});
 
  name = "HTC Desire 610";
  price = "$119.94";
  reviews_location = "http://www.amazon.com/HTC-610-Unlocked-Quad-Core-Smartphone/dp/B00R25VZGO";
  rating = "3.7 out of 5 stars";
  image = "http://i.ebayimg.com/images/g/9xEAAOSwDNdVmGSa/s-l1600.jpg";
  ram = "1GB";
  camera = "8.0 MP";
  internal_storage = "8GB";
  screen_size = "4.7\"";
  obj1 = {name:name, price:price, image:image, screen_size: screen_size, camera:camera, ram:ram, internal_storage:internal_storage, reviews_location:reviews_location, rating:rating};
   dummyRef = ref.child("dummy/13");
    dummyRef.set({0:obj1});
 
  name = "Motorola Moto E";
  price = "$99.99";
  reviews_location = "http://www.amazon.com/Motorola-Moto-2nd-Generation-Unlocked/dp/B00TFAVFLE/";
  rating = "4.1 out of 5 stars";
  image = "http://i.ebayimg.com/images/g/O1IAAOSwKtVWzKos/s-l1600.jpg";
  ram = "1GB";
  camera = "5.0 MP";
  internal_storage = "8GB";
  screen_size = "4.5\"";
  obj1 = {name:name, price:price, image:image, screen_size: screen_size, camera:camera, ram:ram, internal_storage:internal_storage, reviews_location:reviews_location, rating:rating};
   dummyRef = ref.child("dummy/14");
    dummyRef.set({0:obj1});
 
  name = "Samsung Galaxy Alpha G850a";
  price = "$279.99";
  reviews_location = "http://www.amazon.com/Samsung-Galaxy-Alpha-G850M-32GB/dp/B00V0UGIJ6/";
  rating = "4.3 out of 5 stars";
  image = "http://i.ebayimg.com/images/g/QocAAOSwnGJWThYB/s-l1600.jpg";
  ram = "2GB";
  camera = "12.0 MP";
  internal_storage = "32GB";
  screen_size = "4.7\"";
  obj1 = {name:name, price:price, image:image, screen_size: screen_size, camera:camera, ram:ram, internal_storage:internal_storage, reviews_location:reviews_location, rating:rating};
   dummyRef = ref.child("dummy/15");
    dummyRef.set({0:obj1});
 
  name = "HTC One Xplus";
  price = "$268.97";
  reviews_location = "http://www.amazon.com/HTC-Unlocked-4-7-inch-Smartphone-Beats/dp/B008V7ENVQ/";
  rating = "3.8 out of 5 stars";
  image = "http://i.ebayimg.com/images/g/ZZAAAOSwHnFV5mOd/s-l1600.jpg";
  ram = "1GB";
  camera = "8.0 MP";
  internal_storage = "64GB";
  screen_size = "4.7\"";
  obj1 = {name:name, price:price, image:image, screen_size: screen_size, camera:camera, ram:ram, internal_storage:internal_storage, reviews_location:reviews_location, rating:rating};
   dummyRef = ref.child("dummy/16");
    dummyRef.set({0:obj1});
 
  name = "Google Nexus 6P";
  price = "$548.89";
  reviews_location = "http://www.amazon.com/Huawei-Nexus-6P-Aluminum-smartphone/dp/B015YCRZ0G/";
  rating = "4.6 out of 5 stars";
  image = "http://i.ebayimg.com/images/g/3I8AAOSw~otWeZ1B/s-l1600.jpg";
  ram = "3GB";
  camera = "12.0 MP";
  internal_storage = "64GB";
  screen_size = "5.7\"";
  obj1 = {name:name, price:price, image:image, screen_size: screen_size, camera:camera, ram:ram, internal_storage:internal_storage, reviews_location:reviews_location, rating:rating};
   dummyRef = ref.child("dummy/17");
    dummyRef.set({0:obj1});
 
  name = "Google Nexus 5X";
  price = "$337.38";
  reviews_location = "http://www.amazon.com/LG-Nexus-5X-Unlocked-Smartphone/dp/B0178GE4FU/";
  rating = "4.3 out of 5 stars";
  image = "http://i.ebayimg.com/images/g/W0QAAOSwE99W6xWu/s-l1600.jpg";
  ram = "2GB";
  camera = "5.0 MP";
  internal_storage = "16GB";
  screen_size = "5.2\"";
  obj1 = {name:name, price:price, image:image, screen_size: screen_size, camera:camera, ram:ram, internal_storage:internal_storage, reviews_location:reviews_location, rating:rating};
   dummyRef = ref.child("dummy/18");
    dummyRef.set({0:obj1});
});
