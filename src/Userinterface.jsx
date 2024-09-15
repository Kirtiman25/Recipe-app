import React from 'react'
import './App.css' 
import logo from './assets/vegthali.jfif'
import logo2 from './assets/biriyani.jfif'
import logo3 from './assets/r3.jfif'
import logo4 from './assets/r4.jfif'
import logo5 from './assets/r5.jfif'
import logo6 from './assets/r6.png'
import logo7 from './assets/r7.jfif'
import logo8 from './assets/r8.jfif'
import logo9 from './assets/20 Indian Thali Ideas.jfif'
import logo10 from './assets/maincourse .jfif'
import logo11 from './assets/desserts.jfif'
import logo12 from './assets/baking.jfif'
import logo13 from './assets/healthyeats.jfif'
function App() {
  return (
    <div>
     <>
 {/* Hello world */}
 <meta charSet="UTF-8" />
 <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <link rel="stylesheet" href="style.css" />
 <link
   href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;1,200;1,300;1,600&display=swap"
   rel="stylesheet"
 />
 <link
   rel="stylesheet"
   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
   integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
   crossOrigin="anonymous"
   referrerPolicy="no-referrer"
 />
 <title> Flavorsome Recipes</title>
 <header>
   <div className="logo">Khana Khazana </div>
   <div className="nav-bar">
     <ul>
       <li>
         <a href="#">Home</a>
       </li>
       <li>
         <a href="#">About</a>
       </li>
       <li>
         <a href="#">Recipes</a>
       </li>
       <li>
         <a href="#">Categories</a>
       </li>
       <li>
         <a href="#">Contact</a>
       </li>
     </ul>
   </div>
 </header>
  
 {/*--About Section Start--------------------------------*/}
 <section className="about">
   <h2>About Us</h2>
   <div className="main">
     <img src={logo9}alt="" />
     <div className="about-text">
       <p>
         Welcome to our recipe website, where culinary inspiration meets
         delicious creations! Whether you're a seasoned chef or a passionate
         home cook, we are here to ignite your taste buds and guide you on a
         delightful culinary journey. Our extensive collection of recipes
         covers a wide range of cuisines, from comforting classics to
         innovative fusion dishes. Each recipe is thoughtfully crafted, tested,
         and presented with step-by-step instructions, ensuring that even the
         novice cook can create extraordinary meals. We believe that cooking is
         an art form that brings people together, and our goal is to empower
         you to explore your culinary creativity and make every meal a
         masterpiece. So come on in, explore our diverse recipe collection, and
         let's embark on a delightful gastronomic adventure together!
       </p>
     </div>
   </div>
 </section>
 {/*---Recipes Section Start--------------------------------*/}
 <div className="recipe">
   <h2>Featured Recipes</h2>
   <div className="box">
     <div className="card">
       <img src={logo} alt="" />
       <div className="content">
         <h3>Recipe 1</h3>
         <p> Panjabi Roti masala .</p>
         <button>View Recipe</button>
       </div>
     </div>
     <div className="card">
       <img src= {logo2} alt="" />
       <div className="content">
         <h3>Recipe 2</h3>
         <p>Hydrabadi dum biriyani </p>
         <button>View Recipe</button>
       </div>
     </div>
     <div className="card">
     <img src= {logo3} alt="" />
       <div className="content">
         <h3>Recipe 3</h3>
         <p>Chicken Masala Curry</p>
         <button>View Recipe</button>
       </div>
     </div>
     <div className="card">
       <img src= {logo4} alt="" />
       <div className="content">
         <h3>Recipe 4</h3>
         <p>Naan panir</p>
         <button>View Recipe</button>
       </div>
     </div>
     <div className="card">
       <img src={logo5} alt="" />
       <div className="content">
         <h3>Recipe 5</h3>
         <p> Samosha </p>
         <button>View Recipe</button>
       </div>
     </div>
     <div className="card">
       <img src={logo6}alt="" />
       <div className="content">
         <h3>Recipe 6</h3>
         <p> Chicken special tanduri </p>
         <button>View Recipe</button>
       </div>
     </div>
     <div className="card">
       <img src={logo7} alt="" />
       <div className="content">
         <h3>Recipe 7</h3>
         <p>Tadaka manchurian </p>
         <button>View Recipe</button>
       </div>
     </div>
     <div className="card">
       <img src={logo8} alt="" />
       <div className="content">
         <h3>Recipe 8</h3>
         <p>Masala dosa </p>
         <button>View Recipe</button>
       </div>
     </div>
   </div>
 </div>
 {/*------------categories section------------------------------*/}
 <div className="categories">
   <h2>categories</h2>
   <div className="box">
     <div className="ca-card">
       <img src={logo10} alt="" />
       <div className="content">
         <h3>Main Courses</h3>
         <p>

"Indulge in the heart of the meal—our flavorful main course, crafted to satisfy your cravings and elevate your dining experience.".</p>
         <button>Read More</button>
       </div>
     </div>
     <div className="ca-card">
       <img src={logo11} alt="" />
       <div className="content">
         <h3>Desserts</h3>
         <p>"A vast, silent expanse where the golden sands meet the endless horizon, the desert whispers stories of resilience and timeless beauty.".</p>
         <button>Read More</button>
       </div>
     </div>
     <div className="ca-card">
       <img src={logo12} alt="" />
       <div className="content">
         <h3>Healthy Eats</h3>
         <p>"Fuel your body, feed your soul – embrace healthy eats for a happier, healthier you!".</p>
         <button>Read More</button>
       </div>
     </div>
     <div className="ca-card">
       <img src= {logo13} alt="" />
       <div className="content">
         <h3>Baking</h3>
         <p>"Wholesome ingredients, delicious results! 🍞🥑✨ Baking doesn’t have to be indulgent to be healthy—swap refined sugar for natural sweeteners, and use whole grains for a nutritious treat! #HealthyBaking #NourishYourBody"






</p>
         <button>Read More</button>
       </div>
     </div>
   </div>
 </div>
 {/*----------contact section------------------------*/}
 <section >
   <div>
      
   </div>
 </section>
 <footer>
   <div className="social-icons">
     <a href="#" className="social-icon">
       {" "}
       <i className="fab fa-facebook" />{" "}
     </a>
     <a href="#" className="social-icon">
       {" "}
       <i className="fab fa-twitter" />{" "}
     </a>
     <a href="#" className="social-icon">
       {" "}
       <i className="fab fa-instagram" />{" "}
     </a>
   </div>
   <h5>CopyRight © 2023 By Flavoursome Recipes </h5>
 </footer>
</>

    </div>
  )
}

export default App