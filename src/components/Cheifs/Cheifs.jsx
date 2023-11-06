
import chef1 from "../../assets/Chef-img/chef1.jpg"
import chef2 from "../../assets/Chef-img/chef2.webp"
import chef3 from "../../assets/Chef-img/chef3.jpg"
import chef5 from "../../assets/Chef-img/chef5.jpg"
import { FaFacebook } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { BiLogoGoogle } from "react-icons/bi";

const Cheifs = () => {
    return (
        <div className="font-lato ">
            <h3 className="text-2xl font-semibold text-[#fff] bg-[#FFD700] my-5 italic">Our Cheifs</h3>
            <h3 className="text-4xl font-semibold text-[#FFD700] my-5 italic">They alawys try their best for your happiness</h3>

            <div className="mb-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                        src={chef1}
                        className="w-full h-96 border-[#FFD700] border-[2px]"
                        alt="Louvre" />
                    <div
                        className="absolute flex justify-center text-left p-10 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#d0cfc9] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        <div className="">
                            <h3 className="text-[#fff] italic text-3xl font-bold">Alex Jone</h3>
                            <h3 className="text-orange-600 text-2xl font-medium">French Cusine</h3>
                            <p className="text-lg text-[#392623] leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam a officiis.</p>
                            <div className="flex flex-row gap-5 pt-3">
                                <button className="text-4xl"><FaFacebook></FaFacebook></button>
                                <button className="text-4xl"><BsTwitter></BsTwitter></button>
                                <button className="text-4xl"><BiLogoGoogle></BiLogoGoogle></button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                        src={chef2}
                        className="w-full h-96 border-[#FFD700] border-[2px]"
                        alt="Louvre" />
                    <div
                        className="absolute flex justify-center text-left p-10 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#d0cfc9] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        <div className="">
                            <h3 className="text-[#fff] italic text-3xl font-bold">Daniel Franky</h3>
                            <h3 className="text-orange-600 text-2xl font-medium">French Cusine</h3>
                            <p className="text-lg text-[#392623] leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam a officiis.</p>
                            <div className="flex flex-row gap-5 pt-3">
                                <button className="text-4xl"><FaFacebook></FaFacebook></button>
                                <button className="text-4xl"><BsTwitter></BsTwitter></button>
                                <button className="text-4xl"><BiLogoGoogle></BiLogoGoogle></button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                        src={chef3}
                        className="w-full h-96 border-[#FFD700] border-[2px]"
                        alt="Louvre" />
                    <div
                        className="absolute flex justify-center text-left p-10 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#d0cfc9] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        <div className="">
                            <h3 className="text-[#fff] italic text-3xl font-bold">Tom Cook</h3>
                            <h3 className="text-orange-600 text-2xl font-medium">Cook</h3>
                            <p className="text-lg text-[#392623] leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam a officiis.</p>
                            <div className="flex flex-row gap-5 pt-3">
                                <button className="text-4xl"><FaFacebook></FaFacebook></button>
                                <button className="text-4xl"><BsTwitter></BsTwitter></button>
                                <button className="text-4xl"><BiLogoGoogle></BiLogoGoogle></button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                        src={chef5}
                        className="w-full h-96 border-[#FFD700] border-[2px]"
                        alt="Louvre" />
                    <div
                        className="absolute flex justify-center text-left p-10 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#d0cfc9] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        <div className="">
                            <h3 className="text-[#fff] italic text-3xl font-bold">Michel Smart</h3>
                            <h3 className="text-orange-600 text-2xl font-medium">Cook</h3>
                            <p className="text-lg text-[#392623] leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam a officiis.</p>
                            <div className="flex flex-row gap-5 pt-3">
                                <button className="text-4xl"><FaFacebook></FaFacebook></button>
                                <button className="text-4xl"><BsTwitter></BsTwitter></button>
                                <button className="text-4xl"><BiLogoGoogle></BiLogoGoogle></button>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Cheifs;