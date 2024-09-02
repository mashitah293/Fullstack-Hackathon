import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
    return (
        <div>
            <style>{'body{background-color:white;}'}</style><br />
            <h1 style={{ textAlign: "center", backgroundColor: "#778DA9", color: "white" }}>
                Maxcomp Sales & Services</h1>

            {/* Top Carousel of homepage */}
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://www.archieelectronic.com/wp-content/uploads/2019/10/electronics1.jpg" alt="First slide" style={{ height: "600px", width: "100%" }} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="pic1.jpeg" alt="Second slide" style={{ height: "600px", width: "100%" }} />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>

            {/* Centered and resized Accordion */}
            <h1 style={{ textAlign: "center", backgroundColor: "#778DA9", color: "white" }}>Store Information</h1>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <div style={{ width: "50%", maxWidth: "800px" }}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>About Us</Accordion.Header>
                            <Accordion.Body>
                                A computer shop is a retail establishment specializing in the sale, repair, and maintenance of computers and related equipment. These shops often offer a wide range of products, including desktop computers, laptops, tablets, peripherals (such as keyboards, mice, and monitors), and accessories like cables, adapters, and storage devices. In addition to hardware, many computer shops also sell software, including operating systems, office suites, antivirus programs, and various applications.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Location (Click the image for Google Maps)</Accordion.Header>
                            <Accordion.Body>
                                <a href="https://www.google.com/maps/place/Maxcomp+sales+%26+services/@3.8265634,103.3348999,17z/data=!3m1!4b1!4m6!3m5!1s0x31c8bac2236f294d:0x96ec7dfc9dd67dc9!8m2!3d3.8265634!4d103.3374748!16s%2Fg%2F1vhlvp49?entry=ttu" target='_blank' rel="noopener noreferrer">
                                    <img src="maps.png" alt="Google Maps Location" style={{ width: "100%" }} />
                                </a>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>

            <br />

            {/* Promotion card layout */}
            <h2 style={{ textAlign: "center", fontWeight: "bold", backgroundColor: "#778DA9", color: "white" }}>Discount and Promotion</h2>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="sales.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">PROMO MERDEKA SALES</h5>
                        <p className="card-text">This promo available until 31th August 2024. Don't miss out visit to our shop now!</p>
                    </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="opening.jpg" alt="Card image cap" style={{ height: "110%" }} />
                    <div className="card-body">
                        <h5 className="card-title">GRAND OPENING!</h5>
                        <p className="card-text">We are now OPEN our new franchise! Visit our new shop and get the best new shopping experience!</p>
                    </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="sales2.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">DISCOUNT!</h5>
                        <p className="card-text">More discounts for new customers. Promotion available until 31th December 2024</p>
                    </div>
                </div>
            </div>
            <br />

            {/* Brand Partner Carousel */}
            <div>
            <h2 style={{ textAlign: "center", fontWeight: "bold", backgroundColor: "#778DA9", color: "white" }}>Partner Brands</h2>
                <div id="brandCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center">
                                <img src="https://logolook.net/wp-content/uploads/2023/09/Sony-Logo-225x127.png" className="img-fluid mx-2" alt="Sony" style={{ maxHeight: '100px' }} />
                                <img src="https://logos-world.net/wp-content/uploads/2023/03/Panasonic-Logo.png" className="img-fluid mx-2" alt="Panasonic" style={{ maxHeight: '100px' }} />
                                <img src="https://pngimg.com/uploads/samsung_logo/samsung_logo_PNG16.png" className="img-fluid mx-2" alt="Samsung" style={{ maxHeight: '100px' }} />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center">
                                <img src="https://images.squarespace-cdn.com/content/v1/502a8efb84ae42cbccf920c4/1585574686746-VCDIHSO21O76WR72WIAD/LG-Logo.png" className="img-fluid mx-2" alt="LG" style={{ maxHeight: '100px' }} />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/2560px-Intel_logo_%282006-2020%29.svg.png" className="img-fluid mx-2" alt="Intel" style={{ maxHeight: '100px' }} />
                                <img src="https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo-1995-present.png" className="img-fluid mx-2" alt="Asus" style={{ maxHeight: '100px' }} />
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#brandCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only" style={{ display: "none" }}>Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#brandCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only" style={{ display: "none" }}>Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;



