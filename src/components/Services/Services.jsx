import service1 from "../../assets/Service-img/service1.png"
import service2 from "../../assets/Service-img/service2.jpeg"
import service3 from "../../assets/Service-img/service3.jpeg"

const Services = () => {
    return (
        
        <div className="font-lato">
             <h3 className="text-2xl font-semibold text-[#fff] bg-[#FFD700] my-5 italic">Our Service</h3>
            <h3 className="text-4xl font-semibold text-[#FFD700] my-5 italic">Why we are the best</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-base-400 gap-5 rounded p-5">
                <div className='flex flex-row justify-left items-center '>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src={service1} />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl pl-5">Prickly Pear Tonic</h3>
                </div>
                <div className="text-left py-3">
                    <p className="text-lg text-[#392623] leading-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Quae molestias dolor consequatur
                        dolorem nemo cupiditate aperiam repellat ratione aliquam minus.</p>
                    <button className="text-2xl italic underline text-[#FFD700] font-semibold">Read More</button>
                </div>
            </div>
            <div className="bg-base-400 gap-5 rounded p-5">
                <div className='flex flex-row justify-left items-center '>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src={service2} />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl pl-5">Prickly Pear Tonic</h3>
                </div>
                <div className="text-left py-3">
                    <p className="text-lg text-[#392623] leading-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Quae molestias dolor consequatur
                        dolorem nemo cupiditate aperiam repellat ratione aliquam minus.</p>
                    <button className="text-2xl italic underline text-[#FFD700] font-semibold">Read More</button>
                </div>
            </div>
            <div className="bg-base-400 gap-5 rounded p-5">
                <div className='flex flex-row justify-left items-center '>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src={service3} />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl pl-5">Prickly Pear Tonic</h3>
                </div>
                <div className="text-left py-3">
                    <p className="text-lg text-[#392623] leading-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Quae molestias dolor consequatur
                        dolorem nemo cupiditate aperiam repellat ratione aliquam minus.</p>
                    <button className="text-2xl italic underline text-[#FFD700] font-semibold">Read More</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;