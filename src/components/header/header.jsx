import React from 'react'

let imgs= [
  "https://source.unsplash.com/1400x500/?cappuccino",
  "https://source.unsplash.com/1400x500/?green-coffee",
  "https://source.unsplash.com/1400x500/?coffee-beans",
  "https://source.unsplash.com/500x500/?green-coffee",
  "https://source.unsplash.com/500x500/?espresso",
  "https://source.unsplash.com/500x500/?latte-machhiato",
  "https://source.unsplash.com/500x500/?americano",
  "https://source.unsplash.com/500x500/?cappuccino",
  "https://source.unsplash.com/500x500/?hot-coffee",
  "https://source.unsplash.com/500x500/?black-coffee",
  "https://source.unsplash.com/500x500/?cold-coffee",
  "https://source.unsplash.com/500x500/?iced-coffee"
]



function header() {
  return (
    <div>
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={imgs[0]} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Italian Cappuccino</h5>
        <p>A cappuccino is an espresso based coffee drink</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={imgs[1]} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>American Green Coffee</h5>
        <p>American Coffee is an extract of raw and unroasted, green coffee beans</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={imgs[2]} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Horn of Africa and South Arabian Coffee Beans</h5>
        <p>~60% of the coffee produced worldwide is Arabica and ~40% is Robusta</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="container my-3">
  <h1 class="my-2 text-center">COFFEE  TALES</h1>
   <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
   <div class="col">
       <div class="card shadow-sm">
         <img src={imgs[8]} class="d-block w-100" alt="..."/>

         
         '<div class="card-body top-800px">
           <p class="card-text">HOT COFFEE</p>
           <div class="d-flex justify-content-between align-items-center">
             
             <small class="text-muted">A nice hot, steaming cup of joe with an incredibly welcoming smell and the perfect thing first thing in the morning is hot coffee.</small>
           </div>
         </div>
       </div>
     </div>
     <div class="col">
       <div class="card shadow-sm">
         <img src={imgs[9]} class="d-block w-100" alt="..."/>

         
         '<div class="card-body top-800px">
           <p class="card-text">HOT COFFEE</p>
           <div class="d-flex justify-content-between align-items-center">
             
             <small class="text-muted">A nice hot, steaming cup of joe with an incredibly welcoming smell and the perfect thing first thing in the morning is hot coffee.</small>
           </div>
         </div>
       </div>
     </div>
     <div class="col">
       <div class="card shadow-sm">
         <img src={imgs[10]} class="d-block w-100" alt="..."/>

         
         '<div class="card-body top-800px">
           <p class="card-text">HOT COFFEE</p>
           <div class="d-flex justify-content-between align-items-center">
             
             <small class="text-muted">A nice hot, steaming cup of joe with an incredibly welcoming smell and the perfect thing first thing in the morning is hot coffee.</small>
           </div>
         </div>
       </div>
     </div>
   <div class="col">
       <div class="card shadow-sm">
         <img src={imgs[3]} class="d-block w-100" alt="..."/>

         <div class="card-body top-1100px border-height-1100px">
           <p class="card-text">GREEN COFFEE</p>
           
           <div class="d-flex justify-content-between align-items-center">
             <small class="text-muted">Green coffee extract is an extract of unroasted, green coffee beans. It is used in the Swiss water process for decaffeinating coffee. Green coffee extract can also be prepared as an infusion from green coffee beans.</small>
           </div>
         </div>
       </div>
     </div>
     <div class="col">
       <div class="card shadow-sm">
         <img src={imgs[4]} class="d-block w-100" alt="..."/>

         
         '<div class="card-body top-800px">
           <p class="card-text">ESPRESSO</p>
           <div class="d-flex justify-content-between align-items-center">
             
             <small class="text-muted">Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under 9–10 bars of pressure through finely-ground coffee beans. Espresso coffee can be made with a wide variety of coffee beans and roast degrees.</small>
           </div>
         </div>
       </div>
     </div>
     <div class="col">
       <div class="card shadow-sm">
         <img src={imgs[11]} class="d-block w-100" alt="..."/>

         <div class="card-body top-800px">
           <p class="card-text">ICED COFFEE</p>
           <div class="d-flex justify-content-between align-items-center">
             
             <small class="text-muted">Iced coffee is a coffee beverage served cold. It may be prepared either by brewing coffee normally and then serving it over ice. In hot brewing, sweeteners and flavoring may be added before cooling, as they dissolve faster</small>
           </div>
         </div>
       </div>
     </div>

     <div class="col">
       <div class="card shadow-sm">
         <img src={imgs[5]} class="d-block w-100" alt="..." />

         <div class="card-body top-800px">
           <p class="card-text">LATTE-MACCHIATO</p>
           <div class="d-flex justify-content-between align-items-center">
             
             <small class="text-muted">In a latte macchiato, espresso is added to milk. A latte macchiato features more foam. A latte macchiato often uses only half an espresso shot or less. A latte macchiato is often a layered drink</small>
           </div>
         </div>
       </div>
     </div>
     <div class="col">
       <div class="card shadow-sm">
         <img src={imgs[6]} class="d-block w-100" alt="..."/>

         <div class="card-body top-800px">
           <p class="card-text">AMERICANO</p>
           <div class="d-flex justify-content-between align-items-center">
             
             <small class="text-muted">Americano is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength</small>
           </div>
         </div>
       </div>
     </div>
     <div class="col">
       <div class="card shadow-sm">
         <img src={imgs[7]} class="d-block w-100" alt="..." />

         <div class="card-body top-800px">
           <p class="card-text">CAPPUCCINO</p>
           <div class="d-flex justify-content-between align-items-center"></div>
             
             <small class="text-muted">A cappuccino is an espresso-based coffee drink is prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cinnamon or chocolate powder.</small>
           </div>
         </div>
       </div>
     


    

      
    
 
 </div>
 </div>
 </div>

 




  )
}

export default header





