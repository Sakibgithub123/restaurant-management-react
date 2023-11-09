import logo from "../../../assets/Banner-img/Restaurant-Logo.png"
import { FaFacebook } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { BiLogoGoogle } from "react-icons/bi";

const Footer = () => {
    return (
     <div className="bg-[#2f2626]">
           <footer className="footer font-lato p-10   text-[#fff]">
            <aside className="text-center">
                <img src={logo} width={60} alt="" />
                <p className="text-xl  font-semibold text-left">Food Circle<br /><address className="text-lg">Address : 302,mirpur,Dhaka.</address></p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <header className="footer-title">Social Media</header>
               <div className="flex flex-row gap-10">
               <a className="link link-hover text-xl"><BsTwitter></BsTwitter></a>
                <a className="link link-hover text-xl"><BiLogoGoogle></BiLogoGoogle></a>
                <a className="link link-hover text-xl"><FaFacebook></FaFacebook></a>
               </div>
               <input type="text" placeholder="Enter your email" className="input input-bordered my-3" />  <button className="bg-[#894444] text-[#fff] py-2 px-4 font-semibold rounded">Subscribe Us</button>
            </nav>
        </footer>
        <p className="text-[#fff] pb-4">&copy; copyright by Food Circle Ltd. </p>
     </div>
    );
};

export default Footer;