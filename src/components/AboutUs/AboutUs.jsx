import { Helmet } from "react-helmet";
import banner1 from "../../assets/Banner-img/banner1.jpg"
import banner2 from "../../assets/Banner-img/banner2.jpg"
import { BsCheckAll } from "react-icons/bs";

const AboutUs = () => {
    return (
        <div>  
             <Helmet>
                <title>phero|About</title>
            </Helmet>
            <div className="hero my-5 font-lato">
            <div className="hero-content flex-col justify-around lg:flex-row-reverse gap-10 ">
                <div className="text-center lg:text-left md:w-1/3">
                <h3 className="text-2xl font-semibold text-[#894444] my-5 italic">About us</h3>
                <h3 className="text-4xl font-semibold text-[#2f2626] my-5 italic">Why Choose us?</h3>
                    <p className="py-3 text-[#392623] text-base font-medium leading-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <h3 className="text-xl font-semibold text-[#2f2626] my-5 italic">Our special dish for you...</h3>
                    <ul className="space-y-2">
                        <li className="text-[#392623] text-base font-medium flex flex-row"><span className="text-3xl text-[#2f2626] pr-2"><BsCheckAll></BsCheckAll></span><span>Turmeric coconut rice, chicken sate with peanut sauce</span></li>
                        <li className="text-[#392623] text-base font-medium flex flex-row"><span className="text-3xl text-[#2f2626] pr-2"><BsCheckAll></BsCheckAll></span><span>Turmeric coconut rice, chicken sate with peanut sauce</span></li>
                        <li className="text-[#392623] text-base font-medium flex flex-row"><span className="text-3xl text-[#2f2626] pr-2"><BsCheckAll></BsCheckAll></span><span>Turmeric coconut rice, chicken sate with peanut sauce</span></li>
                    </ul>
                    <button className="bg-[#894444] ml-8 mt-5 text-[#fff] py-2 px-4 italic font-semibold rounded">Read More</button>
                </div>
                <div className="card flex-shrink-0 md:w-1/3 max-w-sm shadow-2xl bg-base-100 relative">
                    <div className="relative">
                        <img src={banner1} alt="" />
                        <img className="card bg-base-100 shadow-2xl md:absolute md:top-1/2 md:left-40" src={banner2} alt="" />
                    </div>
                </div>
            </div>
         </div>
        </div>
    );
};
// FFD700
export default AboutUs;