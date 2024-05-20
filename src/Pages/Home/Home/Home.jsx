
import { Helmet } from 'react-helmet-async';
import Featured from '../Featured/Featured';
import Banner from '../banner/Banner';
import Category from '../category/Category';
import Popular from '../popular/Popular';
import Testimonial from '../testimonial/Testimonial';



const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Home
                </title>
            </Helmet>
         <Banner></Banner>
         <Category></Category>
         <Popular></Popular> 
         <Featured></Featured>
         <Testimonial></Testimonial>
        </div>
    );
};

export default Home;