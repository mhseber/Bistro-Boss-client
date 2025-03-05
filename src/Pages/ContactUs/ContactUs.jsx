import { Helmet } from "react-helmet-async";
import contact from "../../assets/contact/banner.jpg"
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { MdAddCall } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
const ContactUs = () => {
    return (
        <div className="">
            <Helmet>
                <title>BisTro Boss || Contact Us</title>
            </Helmet>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${contact})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" relative hero-content text-neutral-content text-center">
                    <div className=" absolute bg-opacity-10 backdrop-blur-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[1096px] h-[333.67px] rounded-2xl bg-white mx-auto">
                        <h1 className="mb-5 text-6xl font-bold pt-20">CONTACT US</h1>
                        <p className="mb-5">
                            Would you like to try a dish?
                        </p>

                    </div>
                </div>
            </div>
            {/* card */}
            <SectionTitle
                subHeading="---Visit Us---"
                heading="OUR LOCATION"
            ></SectionTitle>

            {/* contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:p-0 pl-10 mb-3">
                {/* 1 */}
                <div className="card w-96 bg-gray-200 card-xs shadow-sm">
                    <div className="card-body">
                        <div className="bg-[#D1A054] w-[300px] h-[60px] rounded-xl flex items-center justify-center">
                            <MdAddCall className="text-white text-2xl" />
                        </div>
                        <h2 className="card-title">PHONE</h2>
                        <p> 01799894176</p>
                    </div>
                </div>
                {/* 2 */}
                <div className="card w-96 bg-gray-200 card-xs shadow-sm">
                    <div className="card-body">
                        <div className="bg-[#D1A054] w-[300px] h-[60px] rounded-xl flex items-center justify-center">
                            <FaLocationDot className="text-white text-2xl" />
                        </div>
                        <h2 className="card-title">ADDRESS</h2>
                        <p>44 no S K Dash Road Gandaria Old Dhaka</p>
                    </div>
                </div>
                {/* 3 */}
                <div className="card w-96 bg-gray-200 card-xs shadow-sm">
                    <div className="card-body">
                        <div className="bg-[#D1A054] w-[300px] h-[60px] rounded-xl flex items-center justify-center">
                            <Ri24HoursFill className="text-white text-2xl" />
                        </div>
                        <h2 className="card-title">WORKING HOURS</h2>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;