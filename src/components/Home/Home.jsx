import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import TopSeller from "./TopSeller";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import Cheifs from "../Cheifs/Cheifs";


const Home = () => {
    const [topSellFood, setTopSellFood] = useState([]);
    const [foodLength,seFoodLength]=useState(6)
    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setTopSellFood(data))
    }, [])
    return (
        <div className="my-5">
            <div className="my-5">
                <Banner ></Banner>
            </div>
            <div className="my-5">
                <AboutUs></AboutUs>
            </div>
            <div className="mt-10 font-lato">
                <h3 className="my-5 font-semibold text-2xl text-[#fff] bg-[#FFD700] italic">Our Sell</h3>
                <h3 className="my-5 font-semibold text-4xl text-[#FFD700] italic">Top Selling Food</h3>
                <div className="grid grid-cols-2 gap-10">
                    {
                        topSellFood.slice(0,foodLength).map(topSellFood => <TopSeller key={topSellFood.id} topSellFood={topSellFood} ></TopSeller>)
                    }
                </div>
                <button className="my-5 w-1/3 bg-[#FFD700]  text-[#fff] py-2 px-4 font-semibold rounded">See All</button>
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