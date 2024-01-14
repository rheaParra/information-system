import React from "react";
import "./App.scss";

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="navbar">
        <div className="left">
          <img className="left-img" src="./seed-bag.png" alt="" />
          <span className="left-span">
            Rice<span className="left-span-crafters">Crafters</span>
          </span>
        </div>
        <div className="right">
          <span className="right-span" onClick={() => scrollToSection("home")}>
            Home
          </span>
          <span
            className="right-span"
            onClick={() => scrollToSection("article")}
          >
            Article
          </span>
          <span
            className="right-span"
            onClick={() => scrollToSection("product")}
          >
            Product
          </span>
          <span
            className="right-span"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </span>
        </div>
      </div>
      {/* For Home */}
      <div id="home">
        <div className="content-container">
          <div className="home-left">
            {/* Left content goes here */}
            <h1 className="home-left-h1">Rice Crafters</h1>
            <p className="home-left-p">
              Welcome to Rice Crafters, a haven for those who appreciate the
              magic of good rice. We're not just a store, we're a community of
              food lovers who believe that every grain of rice tells a story. We
              offer a selection of exquisite rice varieties, including the Don
              Quijote Premium Japanese Rice, known for its silky texture and
              full flavor, and the hearty Jasponica White, renowned for its
              robust taste and high nutritional value.
            </p>
            <button
              className="home-left-button"
              onClick={() => scrollToSection("product")}
            >
              Buy now
            </button>
          </div>
          <div className="home-right">
            {/* Right content goes here */}
            <img src="./wheat-sack.png" alt="" />
          </div>
        </div>
      </div>
      <div id="article" className="content-container">
        <div className="article-content">
          <h1 className="article-h1">Article</h1>
          <div className="article-cards">
            <div className="article-card">
              <img
                className="img-1"
                src="https://ricetoday.irri.org/wp-content/uploads/2021/02/rice-grains.jpg"
                alt="Delicious Rice Varieties"
              />
              <h2>Discover the Diversity of Delicious Rice Varieties</h2>
              <p>
                Explore the world of rice and learn about unique and flavorful
                varieties that will elevate your culinary experience.
              </p>
              <a
                href="https://armcommodities.com/different-types-of-rice/"
                target="_blank"
                className="article-button"
              >
                <button className="article-button">Read more..</button>
              </a>
            </div>

            <div className="article-card">
              <img
                className="img-2"
                src="https://images.slurrp.com/prodrich_article/zvixmuzgxej.webp?impolicy=slurrp-20210601&width=880&height=500"
                alt="Cooking Tips for Perfect Rice"
              />
              <h2>
                Mastering the Art of Cooking Rice: Tips for Perfectly Fluffy
                Grains
              </h2>
              <p>
                Unlock the secrets to cooking flawless rice every time with our
                expert tips and techniques for achieving the perfect texture and
                flavor.
              </p>
              <a
                href="https://www.delish.com/cooking/a20089653/how-to-cook-rice/"
                target="_blank"
                className="article-button"
              >
                <button className="article-button">Read more..</button>
              </a>
            </div>

            <div className="article-card">
              <img
                className="img-3"
                src="https://be-still-farms.com/cdn/shop/articles/different-types-brown-polished-rice-as-background-closeup_1500x.jpg?v=1689341540"
                alt="Health Benefits of Rice"
              />
              <h2>
                The Nutritional Powerhouse: Exploring the Health Benefits of
                Rice
              </h2>
              <p>
                Delve into the nutritional benefits of incorporating rice into
                your diet and discover why it's a staple in healthy and balanced
                meals.
              </p>
              <a
                href="https://nspirement.com/2023/11/14/rice-the-nutritional-powerhouse.html"
                target="_blank"
                className="article-button"
              >
                <button className="article-button">Read more..</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="product" class="content-container">
        <div class="product-content">
          <h1 class="product-h1">Product</h1>

          <div className="products">
            <div class="product">
              <img src="https://img.ph.my-best.com/product_images/f6baa2c963b2a429fd26f10226024660.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=531e9f9272501c685fb6a9274eb1e122" alt="" />
              <h2>Jasponica White</h2>
              <p class="price"><a href="https://shopee.ph/Do%C3%B1a-Maria-Jasponica-White-5kg-i.316244156.5255092673?position=1&stm_referrer=https%3A%2F%2Fshopee.ph%2Fmall%2Fsearch%3Fkeyword%3Ddona%2520maria%2520jasponica%2520white%25205kg&utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_13282110000&utm_term=ahxrtzvb916p" target="_blank">Price: ₱450</a></p>
            </div>

            <div class="product">
              <img src="https://img.ph.my-best.com/product_images/144849ef237635f621ee069cba9abd44.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=d99fa4709134d650650313e7af46a201" alt="" />
              <h2>Don Quijote</h2>
              <p class="price"><a href="https://shopee.ph/Don-Quijote-Premium-Japanese-(Sushi)-Rice-25kg-i.153088503.3556838176?position=0&utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_13282110000&utm_term=ahxtpfethty5" target="_blank">Price: ₱1,100</a></p>
            </div>

            <div class="product">
              <img src="https://img.ph.my-best.com/product_images/c71a18728d074b1b66a9a01173c6ad94.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=2c62f78a1e1a89c1c7e2e364963eb167" alt="" />
              <h2>Super Angelica</h2>
              <p class="price"><a href="https://shopee.ph/(RESEALABLE)-Master-Chef-Premium-Super-Angelica-Dinorado-Rice-5kg-i.153088503.5710933876?position=2&utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_13282110000&utm_term=ahxtvirfdjkj" target="_blank">Price: ₱269</a></p>
            </div>

            <div class="product">
              <img src="https://img.ph.my-best.com/product_images/91f36f8a961c138e6ffc8ac52108718c.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=86cc2cfbe86aadb17d915b1efef9cf67" alt="" />
              <h2>Jasponica Brown</h2>
              <p class="price"><a href="https://shopee.ph/Do%C3%B1a-Maria-Jasponica-Brown-5kg-i.316244156.4755093981?position=1&utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_13282110000&utm_term=ahxty21fujdy" target="_blank">Price: ₱450</a></p>
            </div>

            <div class="product">
              <img src="https://img.ph.my-best.com/product_images/d4d43c266fd05a958e15e60ba1094ff7.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=bdb4489d0dfbae4ea76018b2b049c5f1" alt="" />
              <h2>Premium Malagkit</h2>
              <p class="price"><a href="https://shopee.ph/Sacred-Grains-Premium-Malagkit-Rice-5-Kg.-Glutinous-Rice-i.252367798.4643552564?position=6&stm_referrer=https%3A%2F%2Fshopee.ph%2Fmall%2Fsearch%3Fkeyword%3Dglutinous%2520rice&utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_13282110000&utm_term=ahxu3as5h567" target="_blank">Price: ₱300</a></p>
            </div>

            <div class="product">
              <img src="https://img.ph.my-best.com/product_images/244e62b0b00b22ae67355370914e3d97.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=f762f2419a01c605a801b064772ca075" alt="" />
              <h2>Organic Red</h2>
              <p class="price"><a href="https://shopee.ph/Goldmine-Organic-Red-Rice-5KG-i.282880623.7451295961?position=2&utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_13282110000&utm_term=ahxubm4d23if" target="_blank">Price: ₱425</a></p>
            </div>

            <div class="product">
              <img src="https://img.ph.my-best.com/product_images/2201c42b4537c90e781a59c1de7d8cb1.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=14db88a4a5361df6638d62eb581409bb" alt="" />
              <h2>Farmboy</h2>
              <p class="price"><a href="https://shopee.ph/Farmboy-Sinandomeng-5kg-i.386772003.6479339002?position=0&utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_13282110000&utm_term=ahxugw624v6s" target="_blank">Price: ₱295</a></p>
            </div>

            <div class="product">
              <img src="https://img.ph.my-best.com/product_images/8983effdd22840e6de39534c3847e2ce.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=37aa2e9d7be458024b578a5a6344ca10" alt="" />
              <h2>Riso Carnaroli</h2>
              <p class="price"><a href="https://shopee.ph/Mazza-Carnaroli-Risotto-Rice-1kg-i.266728113.5036519259?position=89&stm_referrer=https%3A%2F%2Fshopee.ph%2Fmall%2Fsearch%3Fkeyword%3Drice%26page%3D1&utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_13282110000&utm_term=ahxuoq68kzuu" target="_blank">Price: ₱220</a></p>
            </div>

            <div class="product">
              <img src="https://img.ph.my-best.com/product_images/ba24f0891f51ccc8f332c7c80e14a0ad.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=7b19e88a57214315b4e30a2a9754f0df" alt="" />
              <h2>Basmati Rice</h2>
              <p class="price"><a href="https://shopee.ph/Jordan-Farms-Basmati-2kg-i.386772003.8515175789?position=1&utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_13282110000&utm_term=ahxuyrwd4reb" target="_blank">Price: ₱485</a></p>
            </div>

            <div class="product">
              <img src="https://img.ph.my-best.com/product_images/92311d3816ca9da4a4a71461f7bfef22.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=5da4dae495b1e61ed4653890582a9792" alt="" />
              <h2>Black Rice</h2>
              <p class="price"><a href="https://shopee.ph/Goldmine-Black-Rice-2KG-i.282880623.6370433673?position=21&stm_referrer=https%3A%2F%2Fshopee.ph%2Fmall%2Fsearch%3Fkeyword%3Drice&utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_13282110000&utm_term=ahxv4s6fmrfy" target="_blank">Price: ₱178</a></p>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="content-container">
      <h2>Contact</h2>
      <p>Let's connect!</p>

      <form action="#" method="post" id="contact-form" className="content-container-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <a href="google.com">
        <button type="button">Connect</button>
        </a>
      </form>
    </div>


      <footer>
      <p>&copy; 2024 RiceCrafters | Created with ❤️ BSIE-4</p>
      </footer>
    </>
  );
};

export default App;
