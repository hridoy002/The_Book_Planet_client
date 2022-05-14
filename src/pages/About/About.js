import React from 'react';
import img1 from "../../images/about/about_us_banner.png"
import img2 from "../../images/about/about_us_banner2.png"
import img3 from "../../images/about/about_us_banner3.png"
import img4 from "../../images/about/about_us_banner4.png"
import img5 from "../../images/about/about_us_banner6.png"
import img6 from "../../images/about/about_us_banne7r.png"
import { Carousel } from 'react-bootstrap';

const About = () => {
    return (
        <div className='my-5 container'>
 
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3} alt="third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4} alt="fourth slide" />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="fifth slide" />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img6}
                        alt="fifth slide" />

                </Carousel.Item>

            </Carousel>

            <div className='container my-5 text-wrap' style={{ textAlign: 'justify', backgroundColor: "#EDEDED", borderRadius: "10px" }}>
                <pre className='text-wrap p-4'>
                    In the year of 2052...
                    <br />
                    Grandpa tell a story.
                    - Grandchild, what story will you hear?<br />
                    - The story of the book. <br />
                    - The story of the book planet will also come. <br />
                    - The book planet dot com? Which is the happiest company in Bangladesh?
                    - Yes, Grandchild that book planet dot com. <br />
                    _ How do you know Grandpa The book planet who? <br />
                    - Because The book planet once belonged to me and I belonged to The book planet. <br />
                    - What happened then? <br />
                    - Wait, Grandpa, I'll tell you from the beginning. <br />
                </pre>
                <p className='p-4 '>

                    About 50 years ago today. On January 19, 2012, a small dream was born in the heart of Bangladesh, which was named - The book planet dot com. This dream was seen by 5 young people of Bangladesh, whom you know as Mahmudul Hasan Sohag, Abul Hasan Liton, Ehteshamul Shams Rakib, Jubayer Bin Amin and Md. Khairul Anam. They wanted to change the book market in Bangladesh. What was the dream? The dream was to cover the area of ​​fifty six thousand square miles of Bangladesh with books, to deliver books easily to every person.
                    
                    Because the wisdom of all people can be enlightened in the light of the book, and a different Bangladesh will come through the hands of that wise man. I was also the rider of that dream of The book planet. We started from a very young age.I still remember the joy of first ordering books on The Book planet. Everyone was squealing with excitement at the order coming from outside Dhaka. Finding joy in the midst of work was the motto of all members of the book planet family. And that's why family became our workplace. Giving naughtiness in the gap of work, giving priority to all ideas while generating ideas, giving equal status to all teams and team members makes The book planet different. 
                    </p> 
                    <p className='p-4'>
                    And that different kind of love generates sales because everyone there works with passion. One by one the milestones have to be crossed. The book planet. Sales of one lakh, three lakh, five lakh to crores of rupees in a very short period of time have led The Book planet to become one of the best brands in the country. People who read books from all over the country can bring books from time to time through The book planet.Getting books in hand while sitting at home is saving them many working hours. After reading a little online, the book is going to be checked and selected, if there is a problem after the purchase, happy return is also going to be done. While there are benefits to all types of payment options, there are also occasional extra offers and gift surprises. The book planet's review library is the largest online review collection in the country.

                    There are many obstacles, but the book planet is still standing with its head held high. Because in the eyes of every team member of this company there is only one dream - the dream of seeing the whole of Bangladesh reading books. It's been seven or eight years since he retired from The Book Planet. After that you are actually grandfather, so you were not told the story of The book planet.
                    - You didn't tell Grandpa, but Mom did tell me. Couldn't say as nicely as you, but what he said was enough. That's why I went to The book planet one day without telling you. What an excitement it is to say your name. Your birthday or tomorrow? So the book planet family and your own family will celebrate your birthday together.
                    - Oh, my little grandfather. You are the representative of happy Bangladesh. You are the book planet. Let's take you to the happiest company in Bangladesh ...

                    What a long way to go!

                    The words floating in the windows of the minds of the dear people next to them have been collected and placed under house arrest in a magazine called "Baithaki". You can now share your mail ID to download a PDF copy of "Meeting" magazine on the 5th birthday of The book planet.
                </p>
            </div>
        </div>
    );
};

export default About;