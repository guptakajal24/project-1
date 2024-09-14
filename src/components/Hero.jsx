const HeroSection =() => {
    return (
    
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BESt</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondey-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/amazon.png" alt="Amazon" />
                        </a>
                        <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/flipkart.png" alt="Flipkart" />
                        </a>
                </div>

            </div>
            
        </div>
        <div className="hero-image">
            <img src="/images/shoe_image.png" alt="hero" />
        </div>


    </main>
    );
};

export  default  HeroSection;