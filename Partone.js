import React, {Component} from 'react'
import './App.css';
export default class Partone extends React.Component {
    goToFridge = () => {
        this.props.navigation.navigate('Fridge');
      };
render() {
  return (
    <>
    <section className="banner">
    </section>
    <div className="search-bar">
        <input type="text" placeholder="Search for products..." required/>
        <button onclick="alert('Searching has been completed')">Search</button>
    </div>
    <div className="slideshow-container">
        {/* <!-- First set of images --> */}
        <div className="slideshow">
            <div className="slideshow-image image1"></div>
            <div className="slideshow-image image2"></div>
            <div className="slideshow-image image3"></div>
        </div>
        {/* <!-- Second set of images --> */}
        <div className="slideshow">
            <div className="slideshow-image image4"></div>
            <div className="slideshow-image image5"></div>
            <div className="slideshow-image image6"></div>
        </div>
        {/* <!-- Third set of images --> */}
        <div className="slideshow">
            <div className="slideshow-image image7"></div>
            <div className="slideshow-image image8"></div>
            <div className="slideshow-image image9"></div>
        </div>
    </div>


    <div className="container">
        <img src="HP_Shop.png" alt="HP Shop" classNam="image"/>
        <div className="middle">
          <div className="text">Welcome to InstiOLX, your ultimate destination for buying and selling a wide range of products right within your community.
             At InstiOLX, we understand the value of convenience and the importance of finding great deals close to home. Whether you're looking for electronics, 
             furniture, vehicles, and even more, our platform connects you with trusted sellers and buyers from your local area. Our user-friendly interface 
             makes it easy to browse listings, post ads, and discover incredible bargains. Join our growing community today and experience a safer, faster, 
             and more enjoyable way to shop. </div>
        </div>
      </div>


      <div className="product-listings">
            <div className="product">
                <img src="https://www.lg.com/content/dam/channel/wcms/in/images/dishwasher/dfb532fp_apzpeil_eail_in_c/DFB532FP-Dishwasher-front-view-350.jpg" alt="Dishwasher"/>
                <div className="product-info">
                    <h2>LG Dishwasher</h2>
                    <p>₹10,000</p>
                </div>
            </div>
        <div className="product">
            <img src="https://sathya.in/media/87913/catalog/2-35.jpg" alt="Haier Refrigerator"/>
            <div className="product-info">
                <h2 onClick={this.goToFridge}>Haier Refrigerator</h2>
                <p>₹15,000</p>
            </div>
        </div>
        <div className="product">
            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985" alt="Maruti Suzuki Swift"/>
            <div className="product-info">
                <h2>Apple Airpods Pro 2</h2>
                <p>₹7,800</p>
            </div>
        </div>
        <div className="product">
            <img src="https://www.sathya.in/media/92729/catalog/Sony%20Bravia%2065%204K%20Ultra%20HD%20Smart%20LED%20Google%20TV%2002.jpg" alt="Sony Bravia TV"/>
            <div className="product-info">
                <h2>Sony Bravia(65)</h2>
                <p>₹45,000</p>
            </div>
        </div>
        <div className="product">
            <img src="https://img.freepik.com/premium-photo/isolated-iphone-15-mobile-front-back-showcasing-sleek-desig-white-background-clean_655090-799590.jpg" alt="Iphone 12"/>
            <div className="product-info">
                <h2>Iphone 12</h2>
                <p>₹17,000</p>
            </div>
        </div>
        <div className="product">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c13fdcb-1d86-464b-92ae-bb445875e473/phantom-gx-2-academy-mg-low-top-football-boot-9pj0JD.png" alt="Nike Shoes"/>
            <div className="product-info">
                <h2>Nike Phantom</h2>
                <p>₹2,500</p>
            </div>
        </div>
        <div className="product">
            <img src="https://www.ikea.com/in/en/images/products/vimle-3-seat-sofa-gunnared-medium-grey__0514368_pe639441_s5.jpg" alt="Maruti Suzuki Swift"/>
            <div className="product-info">
                <h2>Sofa (3 seater)</h2>
                <p>₹21,000</p>
            </div>
        </div>
        <div className="product">
            <img src="https://www.kylinseating.in/uploads/wooden-restaurant-table-size-2-x-4-ft-top-marble-sunmica-361562547.jpg" alt="Maruti Suzuki Swift"/>
            <div className="product-info">
                <h2>Dining Table</h2>
                <p>₹6,000</p>
            </div>
        </div>
        <div className="product">
            <img src="https://images-cdn.ubuy.co.in/64c358c47e693518e55e1de6-lacoo-faux-leather-high-back-executive.jpg" alt="KTM Duke"/>
            <div className="product-info">
                <h2>Office Chair</h2>
                <p>₹5,000</p>
            </div>
        </div>
        <div className="product">
            <img src="https://apollo.olx.in/v1/files/o3n9v6bx3ng01-IN/image;s=272x0" alt="Honda Activa Scooter"/>
            <div className="product-info">
                <h2>Honda Activa</h2>
                <p>₹30,000</p>
            </div>
        </div>
    </div>
    </>
  )
}
}