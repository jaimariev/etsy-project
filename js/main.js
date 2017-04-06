$(document).ready(function(){
// $.ajax({
//     url:"https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop%27",
//     dataType:'jsonp',
//     method:'GET',
//     success:function(resp) {
//       console.log(resp)
//     }
//   }).then(function(items){
//     var images = items.results.map(function(imageOne){
//       return {
//         title: imageOne.title.substring (0,31) + "...",
//         price: imageOne.price + " " + imageOne.currency_code,
//         url: imageOne.Images[0].url_170x135
//       };
//     })
//     var content = `<ul class="images">`
//     images.forEach(function(items){
//       content += `
//           <li>
//             <img src="${items.url}" />
//             <p>${items.title}</p>
//             <p>${items.price}</p>
//           </li>
//       `
//     })
//     $(".dataImages").html(content)
//   })

  $.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data){
    console.log(data)
  }).then(function(items){
    var images = items.results.map(function(image){
      return {
        title: image.title.substring(0,31) + "...",
        price: image.price,
        shopname: image.Shop.shop_name,
        img: image.Images[0].url_170x135
      }
    })
      var content = `<ul class="images">`
      images.forEach(function(item){
        content += `
            <li>
              <img src="${item.img}" />
              <p>${item.title}</p>
              <span>${item.shopname}</span>
              <span id="price">$${item.price}</span>
            </li>
        `
      })
      var contentStr = ""
        contentStr += `All Categories > "whiskey" (${items.count} Results)`
      $(".contentStr").html(contentStr)

      $(".dataImages").html(content)
    })

})