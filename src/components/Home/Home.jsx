import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import TopSeller from "./TopSeller";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import Cheifs from "../Cheifs/Cheifs";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";


const Home = ({ title }) => {

    const [topSellFood, setTopSellFood] = useState([]);
    useEffect(() => {
        fetch('https://restaurant-management-server-two.vercel.app/topSell')
            .then(res => res.json())
            .then(data => setTopSellFood(data))
    }, [])
    // console.log(topSellFood)
    return (

        <div className="my-5">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="my-5">
                <Banner ></Banner>
            </div>
            <div className="mt-10 font-lato">
                <h3 className="my-5 font-semibold text-4xl text-[#2f2626] italic">Top Selling Food</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        topSellFood.slice(0, 6).map(topSellFood => <TopSeller key={topSellFood.id} topSellFood={topSellFood} ></TopSeller>)
                    }
                </div>
                <Link to={"/allfood"}><button className="my-5 w-1/3 bg-[#2f2626]  text-[#fff] py-2 px-4 font-semibold rounded">See All</button></Link>
            </div>
            <div className="my-5">
                <Services></Services>
            </div>
            <div className="my-5">
                <Cheifs></Cheifs>
            </div>

        </div>
    );
};

export default Home;