import banner from '../../images/banner/banner.jpg'
import useCustomHook from '../CustooHook/useCustomHook';
import Products from '../Products/Products';
import arif from '../../images/author/arif.jpg'
import abulasad from '../../images/author/abulasad.jpg'
import sofa from '../../images/author/ahmadSofa.jpg'
import humayun from '../../images/author/humayun.jpg'
import jahangir from '../../images/author/jahangir.jpg'

import reading from "../../images/reading.jpg"
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const [items] = useCustomHook();
    
    return (
        <div>
            {/* banner section  */}
            <div className="banner">
                <img src={banner} className='w-100' style={{ height: '400px' }} alt="" />
            </div>

            {/*bonus part*/}
            <div className='row container mx-auto my-5'>
                <div data-aos="fade-down" data-aos-delay="70"
                    data-aos-duration="1000" className='col-lg-6 col-12 text-start'>
                    <h2> WHY YOU SHOULD READ EVERY DAY</h2>
                    <p>There are so many benefits to reading books.

                        But let's face it: It can be challenging to motivate ourselves to read a 382-page book when we can watch the movie, listen to the audiobook, or watch a YouTube video summary instead.

                        Am I right?

                        However, if most of your daily reading consists of social media posts, text messages, and news headlines, you're missing out.

                        So, what are the benefits of reading books? </p>
                        <p>
                        If you're interested in reading more books but need some motivation, this article's for you. After all, when you understand the importance of reading books, you're more likely to do it.
                        </p>
                        <button data-aos="fade-right" data-aos-delay="200"
                    data-aos-duration="1500" className='btn btn-lg' style={{backgroundColor:"#182D36",color:"white"}}>Read More</button>
                </div>
                <div data-aos="fade-up" data-aos-delay="90"
                    data-aos-duration="1500"
                    className='col-12 col-lg-6'>
                    <img className='w-100' src={reading} alt="" />
                </div>
            </div>

            {/* Inventory Products  */}
            <div className='mt-5'>
                <h2 className='my-5'>Stock Products</h2>
                <div className="cardContainer w-75 mx-auto">
                    {
                        items.slice(0, 6).map(item =>
                            <Products className="row" key={item._id} item={item} />

                        )
                    }
                </div>
                <Link to={'/manageInventories'}> <button className='btn btn-lg w-50 mb-5 text-light' style={{backgroundColor:"#182D36"}} > Manage Inventory</button> </Link>
            </div>

            {/* bonus part chart */}
            <div className='bg-light authors-container container'>
                <h2 className='text-center'>Weekly Most Demanded Author</h2>
                <div className='d-flex authors'>
                    <div className='author'>
                        <img src={arif} alt="" />
                        <p>Arif Azad</p>
                    </div>
                    <div className='author'>
                        <img src={abulasad} alt="" />
                        <p>Abul Asad</p>
                    </div>
                    <div className='author'>
                        <img src={sofa} alt="" />
                        <p>Ahmad Sofa</p>
                    </div>
                    <div className='author'>
                        <img src={humayun} alt="" />
                        <p>Humayun Ahmed</p>
                    </div>
                    <div className='author'>
                        <img src={jahangir} alt="" />
                        <p>Dr. Khondakar Abdullah Jahangir</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;