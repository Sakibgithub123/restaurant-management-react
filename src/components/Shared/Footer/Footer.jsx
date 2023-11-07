import logo from "../../../assets/Banner-img/Restaurant-Logo.png"

const Footer = () => {
    return (
        <footer className="footer font-lato p-10 bg-[#2f2626]  text-[#fff]">
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
        </footer>
    );
};

export default Footer;