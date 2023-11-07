import banner1 from "../../assets/Banner-img/banner1.jpg"
import banner2 from "../../assets/Banner-img/banner2.jpg"
import { BsCheckAll } from "react-icons/bs";

const AboutUs = () => {
    return (
        <div>
             
            <div className="hero my-5 font-lato">
            <div className="hero-content flex-col justify-around lg:flex-row-reverse gap-10 ">
                <div className="text-center lg:text-left w-1/3">
                <h3 className="text-2xl font-semibold text-[#894444] my-5 italic">About us</h3>
                <h3 className="text-4xl font-semibold text-[#2f2626] my-5 italic">Why Choose us?</h3>
                    <p className="py-3 text-[#392623] text-base font-medium leading-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <h3 className="text-xl font-semibold text-[#2f2626] my-5 italic">Our special dish for you...</h3>
                    <ul className="space-y-2">
                        <li className="text-[#392623] text-base font-medium flex flex-row"><span className="text-3xl text-[#2f2626] pr-2"><BsCheckAll></BsCheckAll></span><span>Turmeric coconut rice, chicken sate with peanut sauce</span></li>
                        <li className="text-[#392623] text-base font-medium flex flex-row"><span className="text-3xl text-[#2f2626] pr-2"><BsCheckAll></BsCheckAll></span><span>Turmeric coconut rice, chicken sate with peanut sauce</span></li>
                        <li className="text-[#392623] text-base font-medium flex flex-row"><span className="text-3xl text-[#2f2626] pr-2"><BsCheckAll></BsCheckAll></span><span>Turmeric coconut rice, chicken sate with peanut sauce</span></li>
                    </ul>
                    {/* <button className="text-xl pl-8 italic underline text-[#2f2626] font-semibold mt-3">Read More</button> */}
                    <button className="btn ml-8 mt-5 btn-outline italic text-[#2f2626] ">Read More</button>
                    {/* <button className="bg-[#894444]  italic underline ml-8 mt-3 text-[#2f2626] py-2 px-4 font-semibold rounded">Read More</button> */}
                </div>
                <div className="card flex-shrink-0 w-1/3 max-w-sm shadow-2xl bg-base-100 relative">
                    <div className="relative">
                        <img src={banner1} alt="" />
                        <img className="card bg-base-100 shadow-2xl absolute top-1/2 left-40" src={banner2} alt="" />
                    </div>
                </div>
            </div>
         </div>
        </div>
    );
};
// FFD700
export default AboutUs;