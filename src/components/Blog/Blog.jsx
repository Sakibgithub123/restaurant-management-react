
import databaseImg from "../../assets/Banner-img/database.webp"
import { BsCheckAll } from "react-icons/bs";
const Blog = () => {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl text-[#FFD700] font-semibold my-5">Blog Page</h3>
            <h3 className="text-4xl font-semibold text-[#FFD700] my-5 italic">Questions & Answered</h3>
            <img className="border-[2px] border-[#FFD700]" src={databaseImg} alt="" />
            <div className="space-y-3 my-5 text-left pl-10">
                <h3 className="text-3xl text-[#392623] font-semibold"><li>What is One way data binding?</li></h3>
                <p className="text-base text-[#392623] font-semibold leading-8 flex flex-row"><span className="text-3xl text-[#392623] pr-2"><BsCheckAll></BsCheckAll></span> <span>Lorem ipsum dolor sit amet.</span></p>
                <h3 className="text-3xl text-[#392623] font-semibold"><li>What is NPM in node.js?</li></h3>
                <p className="text-base text-[#392623] font-semibold leading-8 flex flex-row"><span className="text-3xl text-[#392623] pr-2"><BsCheckAll></BsCheckAll></span> <span>Lorem ipsum dolor sit amet.</span></p>
                <h3 className="text-3xl text-[#392623] font-semibold"><li>Different between Mongodb database vs mySQL database.</li></h3>
                <p className="text-base text-[#392623] font-semibold leading-8 flex flex-row"><span className="text-3xl text-[#392623] pr-2"><BsCheckAll></BsCheckAll></span> <span>Lorem ipsum dolor sit amet.</span></p>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-lg text-[#00072D]">
                                <th></th>
                                <th>Mongodb</th>
                                <th>MySQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
};

export default Blog;