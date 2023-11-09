
import databaseImg from "../../assets/Banner-img/database.webp"
import { BsCheckAll } from "react-icons/bs";
const Blog = () => {
    return (
        <div className="max-w-full md:max-w-2xl mx-auto text-center">
            <h3 className="text-4xl text-[#894444] font-semibold my-5">Blog Page</h3>
            <h3 className="text-lg font-semibold text-[#2f2626] my-5 italic">Questions & Answered</h3>
            <img className="border-[2px] border-[#2f2626]" src={databaseImg} alt="" />
            <div className="space-y-3 my-5 text-left pl-10">
                <h3 className="text-3xl text-[rgb(57,38,35)] font-semibold"><li>What is One way data binding?</li></h3>
                <p className="text-base text-[#392623] font-semibold leading-8 flex flex-row"><span className="text-3xl text-[#392623] pr-2"><BsCheckAll></BsCheckAll></span> <span>In React, one-way data binding, also known as "unidirectional data flow," is a fundamental concept that describes how data is passed between components within a React application.
                     In a one-way data binding system, data flows in a single direction, from parent components to child components, and child components cannot directly modify the data in their parent components. </span></p>
                <h3 className="text-3xl text-[#392623] font-semibold"><li>What is NPM in node.js?</li></h3>
                <p className="text-base text-[#392623] font-semibold leading-8 flex flex-row"><span className="text-3xl text-[#392623] pr-2"><BsCheckAll></BsCheckAll></span> <span>NPM stands for "Node Package Manager," and it is a package manager for JavaScript and Node.js.
                     NPM is used to manage and distribute open-source libraries and packages of code that can be easily integrated into Node.js applications.</span></p>
                <h3 className="text-3xl text-[#392623] font-semibold"><li>Different between Mongodb database vs mySQL database.</li></h3>
                <p className="text-base text-[#392623] font-semibold leading-8 flex flex-row"><span className="text-3xl text-[#392623] pr-2"><BsCheckAll></BsCheckAll></span> <span>Differences are here :</span></p>
                <div className="overflow-x-auto">
                <table className="table  table-zebra">
                        {/* head */}
                        <thead className="text-left md:text-center">
                            <tr className="text-lg text-[#00072D]">
                                <th className="hidden md:visible"></th>
                                <th>Mongodb</th>
                                <th>MySQL</th>
                            </tr>
                        </thead>
                        <tbody className="text-justify md:leading-8">
                            {/* row 1 */}
                            <tr>
                                <th className="hidden md:visible">1.Data Model</th>
                                <td>MongoDB is a NoSQL database that uses a document-based data model. It stores data in collections of JSON-like documents, where each document can have a different structure. This flexibility is suitable for semi-structured or unstructured data.</td>
                                <td>MySQL is a relational database management system (RDBMS) that uses tables to store data. Data in MySQL is structured, and tables have a predefined schema with columns and data types.</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th className="hidden md:visible">2.Query Language</th>
                                <td>MongoDB uses a query language called MongoDB Query Language (MQL) to interact with the database. MQL is designed for querying JSON-like documents and supports a wide range of queries, including complex and nested queries.</td>
                                <td>MySQL uses SQL (Structured Query Language), which is a powerful and standardized language for querying and managing relational data. SQL supports joins, transactions, and complex queries.</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th className="hidden md:visible">3.Use Cases</th>
                                <td>MongoDB is often chosen for use cases with large amounts of unstructured or semi-structured data, such as content management systems, real-time analytics, and applications with rapidly changing requirements.</td>
                                <td>MySQL is a reliable choice for applications that require strict data consistency and transactions, such as e-commerce systems, financial applications, and traditional relational database use cases.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Blog;