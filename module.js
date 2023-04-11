exports.home=function()
{

const html = ` <!DOCTYPE html>
<html>
<head>
  <title>Travel Site</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
    
    #header {
      background-color: #333;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    
    #header h1 {
      margin: 0;
      font-size: 36px;
    }
    
    #nav {
      background-color: #f2f2f2;
      padding: 10px;
    }
    
    #nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    
    #nav li {
      float: left;
    }
    
    #nav li a {
      display: block;
      color: #333;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    
    #nav li a:hover {
      background-color: #ddd;
    }
    
    #banner {
      background-image: url('https://www.w3schools.com/w3images/forestbridge.jpg');
      background-size: cover;
      background-position: center;
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    #banner h2 {
      font-size: 48px;
      color: #fff;
      text-shadow: 2px 2px #000;
      margin: 0;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.5);
    }
    
    #content {
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      max-width: 1200px;
      margin: auto;
    }
    
    .article {
      flex-basis: 45%;
      margin-bottom: 20px;
    }
    
    .article img {
      max-width: 100%;
      height: auto;
    }
    
    .article h3 {
      font-size: 24px;
      margin: 10px 0;
    }
    
    .article p {
      font-size: 16px;
      line-height: 1.5;
      margin: 10px 0;
    }
    
    .article a {
      display: block;
      font-size: 16px;
      color: #333;
      text-decoration: none;
      margin-top: 10px;
    }
    
    .article a:hover {
      text-decoration: underline;
    }
    
    #footer {
      background-color: #333;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    
    #footer p {
      margin: 0;
      font-size: 14px;
    }
    
    @media (max-width: 768px) {
      #content {
        flex-direction: column;
        align-items: center;
      }
      
      .article {
        flex-basis: 100%;
      }
    }
  </style>
</head>
<body>
  <header id="header">
    <h1>"Heaven Is Myth But Nepal Is Real"</h1>
  </header
  <nav id="nav">
  <ul>
    <li><a href="http://localhost:3000">Home</a></li>
    <li><a href="http://localhost:3000/Travel_destination">Travel Destinations</a></li>
    <li><a href="travel_pac.html">Packages</a></li>
    <li><a href="travel.html">Travel</a></li>
    <li><a href="contact_us.html">contact us
    </a></li>
  </ul>
</nav>
<section id="banner">
  <h2>Enjoy and explore whole Nepal</h2>
</section>
<section id="content">
  <article class="article">
    <img src="https://www.nationsonline.org/gallery/Nepal/Mount-Everest-morning.jpg" alt="Mountains">
    <h3>Explore the Mountains</h3>
    <p>explore mountain</p>
    <a href="#">Read More</a>
  </article>
  <article class="article">
    <img src="https://www.mountainmarttreks.com/public/uploads/Trekking-to-Everest-Camp-Trek-e1531037034294%20(1).webp" alt="Rocks">
    <h3>Discover the Great Outdoors</h3>
    <p>Discover your own destiny.</p>
    <a href="#">Read More</a>
  </article>
  <article class="article">
    <img src="https://www.travelandleisure.com/thmb/yTXraNrnwAhrDXxesOyo_9hGglE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/safari-truck-giraffes-micato-safaris-SAFARIGUIDETIPS0721-2549bb165aa34dc193cb8b6f3958654b.jpg" alt="Safari">
    <h3>Embark on a Safari</h3>
    <p>explore different types of animal.</p>
    <a href="#">Read More</a>
  </article>
  <article class="article">
    <img src="https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/4:3/pass/gettyimages-1146431497.jpg" alt="Nature">
    <h3>Immerse Yourself in Nature</h3>
    <p>Enjoy Nature.</p>
    <a href="#">Read More</a>
  </article>
</section>
<footer id="footer">
  <p>&copy; 2023 Travel Site</p>
</footer>
</body>
</html>
`
}

exports.travel_destination = function(){
  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Travel Destination Page</title>
    <style>
      /* Reset default browser styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
  
      /* Set gradient background image */
      body {
        background: linear-gradient(to bottom, #00bfff, #1e90ff);
        background-image: url("https://images.unsplash.com/photo-1624324147039-d1eaa76c4623");
        background-position: center;
        background-size: cover;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-family: Arial, sans-serif;
      }
  
      /* Style the container for the page content */
      .container {
        background-color: rgba(0, 0, 0, 0.6);
        padding: 20px;
        border-radius: 10px;
        max-width: 800px;
        width: 90%;
        margin: 0 auto;
        text-align: center;
      }
  
      /* Style the headings */
      h1, h2, h3 {
        margin-bottom: 20px;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
      }
  
      h1 {
        font-size: 50px;
      }
  
      h2 {
        font-size: 40px;
      }
  
      h3 {
        font-size: 30px;
      }
  
      /* Style the paragraph text */
      p {
        margin-bottom: 10px;
        line-height: 1.5;
        font-size: 20px;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
      }
  
      /* Style the image */
      img {
        max-width: 100%;
        height: auto;
        margin: 20px 0;
        border-radius: 5px;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
      }
  
      /* Style the link */
      a {
        color: white;
        text-decoration: none;
        border-bottom: 2px solid white;
        transition: border-bottom 0.2s ease-in-out;
      }
  
      a:hover {
        border-bottom: 2px solid transparent;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Travel Destination Page</h1>
      <img src="https://images.unsplash.com/photo-1499936963098-2400f7a16f0d" alt="Travel Destination">
      <h2>Welcome to [Destination Name]!</h2>
      <p>exploring.</p>
      <p>Here are some things you can do during your visit:</p>
      <h3>1. [Activity Name]</h3>
      <p>bunjijumping.</p>
      <img src="https://images.unsplash.com/photo-1556742049-f3a4b7f443ad" alt="[Activity Name]">
      <h3>2. [Activity Name]</h3>
      <p>sketting.</p>
      <img src="https://images.unsplash.com/photo-1552053831-5f5c17f8d5e5" alt="[Activity Name]">
      <h3>3. [Activity Name]</h3>
      <p>hiking.</p>
      <img src="https://images.unsplash.com/photo-1552034557-40f8dfe7f2a3" alt="[Activity Name]">
      <h3>4. [Activity Name]</h3>
      <p>paragliding.</p>
      <img src="https://images.unsplash.com/photo-1591539568451-bc347f70b418" alt="[Activity Name]">
      <p>For more information about our travel destination, please visit our <a href="#">website</a>.</p>
    </div>
    </body>
</html>
  `
}