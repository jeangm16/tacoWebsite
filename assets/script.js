$(document).ready(function () {

  // makes hamburger button function for mobile
  $(".sidenav").sidenav();


  // click taco gif to enter page
  $("#gif").on("click", function () {
    $(this).hide()
    // $(".container").attr("style", "transition: filter 2s")
    $(".container").attr("style", "filter:none")
  })





  function tacoRecipe() {

    getRandomMeme();



    $.ajax({
      method: "GET",
      url: "https://api.edamam.com/search",
      data: { app_id: "9febdf63", app_key: "81e8afa3f473280b371839961f1c44a0", q: "taco" },
      dataType: "json",
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("jqXHR" + jqXHR)
        console.log("-------------------------------")
        console.log("textStatus" + textStatus)
        console.log("-------------------------------")
        console.log("errorThrown" + errorThrown);
      },
      success: function (data, textStatus, jqXHR) {


        console.dir(data)
        console.log("-------------------------------")
        console.log("textStatus: " + textStatus)
        console.log("-------------------------------")
        console.log("jqXHR: " + jqXHR);

        var element = document.getElementById("randomMeme");
        element.src = getRandomMeme();

        a

      }
    }
    );
  }

  function getrandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  var memeArray = [

    "https://i.pinimg.com/736x/e3/6f/40/e36f40e3cad00b1169c6adc3df103c4d.jpg",
    "https://thetacotrail.files.wordpress.com/2017/02/nojuanever.jpg?w=500",
    "https://thetacotrail.files.wordpress.com/2017/02/tacomeme.jpg",
    "https://chelasmexicangrill.com/wp-content/uploads/2019/12/Hilarious-Taco-Memes-Fitness-Tacos.jpg",
    "https://i.pinimg.com/736x/e3/6f/40/e36f40e3cad00b1169c6adc3df103c4d.jpg",
    "https://thetacotrail.files.wordpress.com/2017/02/nojuanever.jpg?w=500",
    "https://i.pinimg.com/originals/c1/b2/66/c1b2668a328b370a1efbf6e7582c08df.jpg",
    "https://thetacotrail.files.wordpress.com/2017/02/tacomeme.jpg",
    "https://i.imgflip.com/3kvu70.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMZauHrfg-wkt7fONI64uSs2as5hDJACwjRg&usqp=CAU",
    "https://www.sheknows.com/wp-content/uploads/2018/08/xpbea1rvdr6n9syadwxv.jpeg?w=747",
    "https://i.pinimg.com/600x315/88/9c/b4/889cb45e7eb3679c4146cc768b24e439.jpg",
    "https://starecat.com/content/wp-content/uploads/tag-a-friend-so-they-have-to-open-their-phone-and-look-at-this-taco-for-no-reason.jpg",
    "https://i.redd.it/mymx4yuxjmo21.jpg",
    "https://cdn.guff.com/site_0/media/32000/31852/items/cf6490d6760c5cc29a11c812.jpg",
    "https://i.pinimg.com/originals/48/ce/18/48ce184ba6e001c8499b5c77c0d3f4a4.jpg",
    "https://i.kym-cdn.com/photos/images/original/001/770/560/2aa.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVL1ywD6PIwF-Fek5bVSA4otVYWJjVVopeaw&usqp=CAU",
    "https://cdn.guff.com/site_0/media/32000/31852/items/f674408a9fe350db688c9ea0.jpg",
    "https://cdn.designbump.com/wp-content/uploads/2020/03/word-image-50.png",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/taco-is-my-spirit-animal-funny-yummy-sassy-lassy.jpg",
    "https://i0.wp.com/www.comeeda.com/wp-content/uploads/2017/02/IMG_20161129_155230.jpg?resize=546%2C612",
    "https://tipsybartender.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-04-at-10.50.15-AM.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2BSWXN-mE8eTFyYL7Y5sxCn7bhGZoVUCUKg&usqp=CAU",
    "https://img.memecdn.com/tacos-damn-tacos_o_774101.jpg",
    "https://imgix.bustle.com/lovelace/uploads/448/e84d6260-67e4-0134-1839-060e3e89e053.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3YrwHSaX8txDfbeGyq5c31TJZOvyI9GyYqg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8oo8zhf34sOLA9vF0mZJfNfhUp6RKZYwXKw&usqp=CAU",

  ]
  function getRandomMeme() {
    var arrayLength = memeArray.length;
    var selectedMeme = memeArray[getrandomIndex(arrayLength)]
    console.log(selectedMeme)
    return selectedMeme

  }


});

var appKey = "9b50da828a1dfe82773e9e4c27d62609";
var appId = "50ec7bea";
var urlID =
  "https://api.edamam.com/search?q=taco&app_id=" + appId + "&app_key=" + appKey;
var urlID2 = "https://api.edamam.com/search?q=salsa&app_id=" + appId + "&app_key=" + appKey;


$(".tacoButton").on("click", function(){
    getTaco()
})

$(".salsaButton").on("click", function(){
    getSalsa()
})

function getTaco() {
  $.ajax({
    url: urlID,
    method: "GET",
    crossDomain: true,
    dataType: "jsonp",
  }).then(function (response) {
      console.log(response)

        $("#randomTaco").empty()

        var returnAnswer = Math.floor(Math.random() * 9) + 1

        var tacoPlace = $("<div>").addClass("card")
        var tacoTitle = $("<h3>")
        .addClass("tacoTitle")
        .text(response.hits[returnAnswer].recipe.label);
        var tacoImage = $("<img>")
        .addClass("card-img")
        .attr("src", response.hits[returnAnswer].recipe.image);
        var tacoIngredients = $("<p>")
        .addClass("card-body")
        .text(response.hits[returnAnswer].recipe.ingredientLines)

        tacoPlace.append(tacoTitle, tacoImage, tacoIngredients)
        $("#randomTaco").append(tacoPlace)

    })}

    function getSalsa() {
        $.ajax({
          url: urlID2,
          method: "GET",
          crossDomain: true,
          dataType: "jsonp",
        }).then(function (response) {
            console.log(response)
      
              $("#randomSalsa").empty()
      
              var returnAnswer = Math.floor(Math.random() * 9) + 1
      
              var salsaPlace = $("<div>").addClass("card")
              var salsaTitle = $("<h3>")
              .addClass("salsaTitle")
              .text(response.hits[returnAnswer].recipe.label);
              var salsaImage = $("<img>")
              .addClass("card-img")
              .attr("src", response.hits[returnAnswer].recipe.image);
              var salsaIngredients = $("<p>")
              .addClass("card-body")
              .text(response.hits[returnAnswer].recipe.ingredientLines)
      
              salsaPlace.append(salsaTitle, salsaImage, salsaIngredients)
              $("#randomSalsa").append(salsaPlace)
      
          })}


  // look up img tags in HTML for memeArray
  // attempt to access object variables