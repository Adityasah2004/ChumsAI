
// import { FaDiscord, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from '../assets/logoDark.png';
import '../styles/Footer.css';
import { Link } from "react-router-dom";

const handleClick = async () => {
    history.push("/privacy");
    };

function Down() {
    return (
        <footer className="flex flex-col py-5 items-center">
            <div className="footer-div1 text-white w-full">
                <div className="footer-logo-div flex items-center justify-center lg:pl-24">
                    <img src={logo} alt="" className="footer-logo" />
                    Chums AI
                </div>
                <div className="subscribe-div flex flex-col gap-4">
                    <div>
                        <h6>Subscribe to our newsletter</h6>
                        <p className="text-gray-500 whitespace-nowrap">Get updates about new features on your email <br /> first by subscribing to our news letter subscription</p>
                    </div>
                    <div className="subscribe-input-div flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">
                            mail
                        </span>
                        <input type="email" placeholder="Enter your email" className="sub-input focus:ring-0" />
                        <button className="sub-btn">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-div2 relative w-full">
                <img src="./footer-img.svg" alt="" className="footer-img" />
                <div className="flex flex-col gap-3">
                    <h6 className="text-left">Quick Links</h6>
                    <div className="flex flex-col items-start gap-1">
                        <a href="/" className="text-gray-500 hover:underline">Home</a>
                        {/* <a href="#" className="text-gray-500 hover:underline">Services</a> */}                     
                         <Link to="/contact" className="text-gray-500 hover:underline">Contact</Link> 
                                        
{/*                         <a href="/contact" className="text-gray-500 hover:underline">Contact us</a> */}
                    </div>
                </div>
                {/* <div className="flex flex-col gap-3">
                    <h6 className="text-left">Follow us</h6>
                    <div className="flex flex-col items-start gap-1">
                        <a href="#" className="text-gray-500 hover:underline">Twitter</a>
                        <a href="#" className="text-gray-500 hover:underline">Facebook</a>
                        <a href="#" className="text-gray-500 hover:underline">LinkedIn</a>
                    </div>
                </div> */}
                <div className="flex flex-col gap-3">
                    <h6 className="text-left">Legal</h6>
                    <div className="flex flex-col items-start gap-1">
                        <Link to="/privacy" className="text-gray-500 hover:underline">Privacy Policy</Link>
                        <Link to="/terms" className="text-gray-500 hover:underline">Terms & Conditions</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h6 className="text-left">For Developer</h6>
                    <div className="flex flex-col items-start gap-1">
                        <a href ="#" className="text-gray-500 hover:underline">Documentation</a>
                        <a href="#" className="text-gray-500 hover:underline">API</a>
                    </div>
                </div>
            </div>
            <hr className=" w-10/12 my-0 mx-auto border-slate-600" />
            <div className="footer-last-div w-10/12 text-white flex justify-between items-center py-5 gap-2">
                <div className="whitespace-nowrap year-line text-gray-500">
                    &copy; &nbsp;
                    {new Date().getFullYear()} Chums AI™. All rights reserved.
                </div>
                <div className="flex items-center gap-4">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                            <path d="M16.9225 1.26675C15.6558 0.676253 14.2844 0.24767 12.8557 4.3809e-05C12.8432 -0.000356776 12.8308 0.00199384 12.8192 0.00693043C12.8077 0.011867 12.7974 0.0192697 12.7891 0.0286162C12.6176 0.342911 12.4176 0.752445 12.2843 1.06674C10.769 0.838162 9.22803 0.838162 7.71275 1.06674C7.57941 0.742921 7.37941 0.342911 7.19845 0.0286162C7.18893 0.00956808 7.16035 4.3809e-05 7.13178 4.3809e-05C5.70317 0.24767 4.34123 0.676253 3.065 1.26675C3.05548 1.26675 3.04595 1.27627 3.03643 1.28579C0.445883 5.16209 -0.268423 8.93362 0.0839681 12.6671C0.0839681 12.6861 0.0934922 12.7052 0.11254 12.7147C1.82687 13.9719 3.47454 14.7338 5.10315 15.2386C5.13173 15.2481 5.1603 15.2386 5.16982 15.2195C5.55078 14.6957 5.89365 14.1433 6.1889 13.5623C6.20795 13.5242 6.1889 13.4861 6.1508 13.4766C5.60793 13.2671 5.09363 13.0194 4.58885 12.7337C4.55076 12.7147 4.55076 12.6575 4.57933 12.629C4.68409 12.5528 4.78886 12.4671 4.89362 12.3909C4.91267 12.3718 4.94124 12.3718 4.96029 12.3813C8.23657 13.8766 11.77 13.8766 15.0082 12.3813C15.0272 12.3718 15.0558 12.3718 15.0749 12.3909C15.1796 12.4766 15.2844 12.5528 15.3891 12.6385C15.4272 12.6671 15.4272 12.7242 15.3796 12.7432C14.8844 13.0385 14.3605 13.2766 13.8177 13.4861C13.7796 13.4957 13.7701 13.5433 13.7796 13.5718C14.0844 14.1528 14.4272 14.7052 14.7987 15.229C14.8272 15.2386 14.8558 15.2481 14.8844 15.2386C16.5225 14.7338 18.1702 13.9719 19.8845 12.7147C19.9036 12.7052 19.9131 12.6861 19.9131 12.6671C20.3321 8.35265 19.2178 4.60969 16.9606 1.28579C16.9511 1.27627 16.9416 1.26675 16.9225 1.26675ZM6.68415 10.3908C5.70317 10.3908 4.8841 9.48602 4.8841 8.3717C4.8841 7.25739 5.68412 6.3526 6.68415 6.3526C7.6937 6.3526 8.49372 7.26691 8.4842 8.3717C8.4842 9.48602 7.68418 10.3908 6.68415 10.3908ZM13.3224 10.3908C12.3414 10.3908 11.5224 9.48602 11.5224 8.3717C11.5224 7.25739 12.3224 6.3526 13.3224 6.3526C14.332 6.3526 15.132 7.26691 15.1225 8.3717C15.1225 9.48602 14.332 10.3908 13.3224 10.3908Z" fill="white" />
                        </svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M18.9 0H1.1C0.808262 0 0.528473 0.115893 0.322183 0.322183C0.115893 0.528473 0 0.808262 0 1.1V18.9C0 19.1917 0.115893 19.4715 0.322183 19.6778C0.528473 19.8841 0.808262 20 1.1 20H10.68V12.25H8.08V9.25H10.68V7C10.6261 6.47176 10.6885 5.93813 10.8627 5.43654C11.0369 4.93495 11.3188 4.47755 11.6885 4.09641C12.0582 3.71528 12.5068 3.41964 13.0028 3.23024C13.4989 3.04083 14.0304 2.96225 14.56 3C15.3383 2.99521 16.1163 3.03528 16.89 3.12V5.82H15.3C14.04 5.82 13.8 6.42 13.8 7.29V9.22H16.8L16.41 12.22H13.8V20H18.9C19.0445 20 19.1875 19.9715 19.321 19.9163C19.4544 19.861 19.5757 19.78 19.6778 19.6778C19.78 19.5757 19.861 19.4544 19.9163 19.321C19.9715 19.1875 20 19.0445 20 18.9V1.1C20 0.955546 19.9715 0.812506 19.9163 0.679048C19.861 0.54559 19.78 0.424327 19.6778 0.322183C19.5757 0.220038 19.4544 0.139013 19.321 0.0837326C19.1875 0.0284524 19.0445 0 18.9 0Z" fill="white" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/chums-ai/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M17.7778 0C18.3671 0 18.9324 0.234126 19.3491 0.650874C19.7659 1.06762 20 1.63285 20 2.22222V17.7778C20 18.3671 19.7659 18.9324 19.3491 19.3491C18.9324 19.7659 18.3671 20 17.7778 20H2.22222C1.63285 20 1.06762 19.7659 0.650874 19.3491C0.234126 18.9324 0 18.3671 0 17.7778V2.22222C0 1.63285 0.234126 1.06762 0.650874 0.650874C1.06762 0.234126 1.63285 0 2.22222 0H17.7778ZM17.2222 17.2222V11.3333C17.2222 10.3727 16.8406 9.45133 16.1613 8.77204C15.482 8.09274 14.5607 7.71111 13.6 7.71111C12.6556 7.71111 11.5556 8.28889 11.0222 9.15556V7.92222H7.92222V17.2222H11.0222V11.7444C11.0222 10.8889 11.7111 10.1889 12.5667 10.1889C12.9792 10.1889 13.3749 10.3528 13.6666 10.6445C13.9583 10.9362 14.1222 11.3319 14.1222 11.7444V17.2222H17.2222ZM4.31111 6.17778C4.80618 6.17778 5.28098 5.98111 5.63104 5.63104C5.98111 5.28098 6.17778 4.80618 6.17778 4.31111C6.17778 3.27778 5.34444 2.43333 4.31111 2.43333C3.81309 2.43333 3.33547 2.63117 2.98332 2.98332C2.63117 3.33547 2.43333 3.81309 2.43333 4.31111C2.43333 5.34444 3.27778 6.17778 4.31111 6.17778ZM5.85556 17.2222V7.92222H2.77778V17.2222H5.85556Z" fill="white" />
                        </svg>
                    </a>
                    <a href="https://x.com/chums_ai?s=21">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M11.9021 8.71701L19.3471 0H17.5825L11.1198 7.56856L5.95544 0H0L7.80825 11.4462L0 20.5867H1.76458L8.59054 12.5932L14.0446 20.5867H20L11.9021 8.71701ZM9.48607 11.5462L8.69495 10.4066L2.39982 1.33814H5.10992L10.189 8.65672L10.9801 9.79634L17.584 19.3103H14.8739L9.48607 11.5462Z" fill="white" />
                        </svg>
                    </a>
                    <a href="https://medium.com/@chumsai">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 6C9.5913 6 11.1174 6.63214 12.2426 7.75736C13.3679 8.88258 14 10.4087 14 12C14 13.5913 13.3679 15.1174 12.2426 16.2426C11.1174 17.3679 9.5913 18 8 18C6.4087 18 4.88258 17.3679 3.75736 16.2426C2.63214 15.1174 2 13.5913 2 12C2 10.4087 2.63214 8.88258 3.75736 7.75736C4.88258 6.63214 6.4087 6 8 6ZM17 7C18.5 7 19.5 9.239 19.5 12C19.5 14.761 18.5 17 17 17C15.5 17 14.5 14.761 14.5 12C14.5 9.239 15.5 7 17 7ZM21 7.5C21.38 7.5 21.712 8.327 21.88 9.746L21.927 10.189L21.946 10.424L21.976 10.918L21.986 11.177L21.998 11.718L22 12L21.998 12.282L21.986 12.823L21.976 13.083L21.946 13.576L21.926 13.811L21.881 14.254C21.712 15.674 21.381 16.5 21 16.5C20.62 16.5 20.288 15.673 20.12 14.254L20.073 13.811C20.0661 13.7327 20.0598 13.6544 20.054 13.576L20.024 13.082C20.0201 12.9957 20.0168 12.9094 20.014 12.823L20.002 12.282V11.718L20.014 11.177L20.024 10.917L20.054 10.424L20.074 10.189L20.119 9.746C20.288 8.326 20.619 7.5 21 7.5Z" fill="white" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/chums.ai?igsh=MWh0NWRxdWY1aGIyYg%3D%3D&utm_source=qr">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Down;
