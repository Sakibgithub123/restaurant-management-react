import banner1 from "../../assets/Banner-img/banner1.jpg"
import banner2 from "../../assets/Banner-img/banner2.jpg"
import banner3 from "../../assets/Banner-img/banner3.jpg"
import banner4 from "../../assets/Banner-img/banner4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px] font-lato">

            <div id="slide1" className="carousel-item relative w-full">
           
                <img src={banner1} className="w-full" />
               
                <div className="max-w-md absolute top-[150px] right-[350px]">
                    <h1 className="mb-5 text-5xl font-bold text-[#52ea63] italic">Delicious Foods You Find Here.</h1>
                    <p className="mb-5 text-[#fff]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="space-x-4">
                        <button className="bg-[#FFD700] text-[#fff] py-2 px-4 font-semibold  rounded">Get Started</button>
                        <button className="bg-[#FFD700] text-[#fff] py-2 px-4 font-semibold rounded">Get Started</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;