import React from 'react';
import Banner from '../Banner/Banner';
import Extra1 from '../Extara1/Extra1';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Products from '../ProductsShow/Products';
import Review from '../Review/Review';

const HomepageRoot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Products></Products>
            <Extra1></Extra1>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default HomepageRoot;