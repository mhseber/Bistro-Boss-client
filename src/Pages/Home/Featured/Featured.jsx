import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FeaturedImg from '../../../assets/home/featured.jpg';
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item">
            </SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60   pb-20 pt-12 py-20 px-36">
                <div>
                    <img src={FeaturedImg} alt="img" />
                </div>
                <div className="md:ml-10">
                    <p>Mar 14, 2024</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error magni mollitia natus expedita nam vero hic obcaecati tempore voluptate possimus?</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;