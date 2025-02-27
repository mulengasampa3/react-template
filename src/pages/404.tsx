
import { Link } from "react-router-dom";
import CompanyLogo from "../assets/images/icons/Logo.png";

const fourZerofour: React.FC = () =>{
    return(
        <div className="layout relative bg-white h-screen w-screen">
            <div className="overlay bg-company-color-secondary absolute image-container w-full h-screen flex items-center justify-center">
                <img src={CompanyLogo} alt="" className="overlay sm:w-[400px] w-[300px]   sm:h-[400px] h-[300px]" />
            </div>
            <div className="bg-[#00000042] flex-col backdrop-blur-md absolute image-container w-full h-screen flex items-center justify-center">
                <h1 className="sm:text-[280px] text-[140px] text-white sm:leading-[250px] leading-[120px] animate-jelloEffect font-extrabold">404!</h1>
                <span className="page-not-found sm:text-[40px] text-30px]  text-white">Page Not Found</span>
                <Link to="/" className="go-back text-white sm:text-[20px] text-16px] sm:mt-5 mt-3 bg-company-color-secondary sm:p-5 p-3 rounded-[12px] hover:bg-[#626262]">Go to Homepage</Link>
            </div>
        </div>
    ) 
};

export default fourZerofour;