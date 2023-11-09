import { Link } from "react-router-dom";
import banner1 from "../../assets/Banner-img/banner1.jpg"
import banner2 from "../../assets/Banner-img/banner2.jpg"
import banner3 from "../../assets/Banner-img/banner3.jpg"
import banner4 from "../../assets/Banner-img/banner4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[300px] md:h-[500px] font-lato">

            <div id="slide1" className="carousel-item relative w-full">
           
                <img src={banner1}  className="w-full opacity-70" />
               
                <div className="max-w-full md:max-w-md p-3 absolute md:top-[150px] md:right-[350px]">
                    <h1 className="mb-5 text-xl md:text-5xl font-bold text-[#2f2626] italic mt-5">Delicious Foods You Find Here.</h1>
                    <p className="mb-5 text-[#fff] text-base md:text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="space-x-4">
                       <Link to={"/allfood"}> <button className="bg-[#894444] text-[#fff] py-2 px-4 font-semibold  rounded">Get Started</button></Link>
                        <Link to={"/allfood"}><button className="bg-[#2f2626] text-[#fff] py-2 px-4 font-semibold rounded">Order Now</button></Link>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full opacity-70" />
                <div className="max-w-full md:max-w-md p-3 absolute md:top-[150px] md:right-[350px]">
                    <h1 className="mb-5 text-xl md:text-5xl font-bold text-[#2f2626] italic mt-5">Delicious Foods You Find Here.</h1>
                    <p className="mb-5 text-[#fff] text-base md:text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="space-x-4">
                        <button className="bg-[#894444] text-[#fff] py-2 px-4 font-semibold  rounded">Get Started</button>
                        <button className="bg-[#2f2626] text-[#fff] py-2 px-4 font-semibold rounded">Order Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full opacity-70" />
                <div className="max-w-full md:max-w-md p-3 absolute md:top-[150px] md:right-[350px]">
                    <h1 className="mb-5 text-xl md:text-5xl font-bold text-[#2f2626] italic mt-5">Delicious Foods You Find Here.</h1>
                    <p className="mb-5 text-[#fff] text-base md:text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="space-x-4">
                        <button className="bg-[#894444] text-[#fff] py-2 px-4 font-semibold  rounded">Get Started</button>
                        <button className="bg-[#2f2626] text-[#fff] py-2 px-4 font-semibold rounded">Order Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full opacity-70" />
                <div className="max-w-full md:max-w-md p-3 absolute md:top-[150px] md:right-[350px]">
                    <h1 className="mb-5 text-xl md:text-5xl font-bold text-[#2f2626] italic mt-5">Delicious Foods You Find Here.</h1>
                    <p className="mb-5 text-[#fff] text-base md:text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="space-x-4">
                        <button className="bg-[#894444] text-[#fff] py-2 px-4 font-semibold  rounded">Get Started</button>
                        <button className="bg-[#2f2626] text-[#fff] py-2 px-4 font-semibold rounded">Order Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;