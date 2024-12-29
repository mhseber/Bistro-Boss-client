import { Helmet } from "react-helmet-async";
import Banner from "../Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Number from "../Number/Number";
import PopularMenu from "../PopularMenu/PopularMenu";
import ShouldTry from "../ShouldTry/ShouldTry";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BisTro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Number></Number>
            <ShouldTry></ShouldTry>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;