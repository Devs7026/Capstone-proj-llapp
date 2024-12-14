import React from 'react';
import Image1 from '../images/download.jpg';
import Image2 from '../images/person2.jpg';
import Image3 from '../images/person3.jpg';
import Image4 from '../images/person4.jpg';

const Testimonials = () => {
    return(
        <section>
       
<div className="testi">
              <div className='head'><h2>People's Say on Our Restaurant</h2></div>
      <div className="reviews">
               <div className='per1'><p><h1>Salami Khan</h1><img src={Image1} alt="Person1"></img> "I loved the Vibes in the Restaurant. Great place to meet-up with your loved ones!"</p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
               <div className='per2'><p><h1>Kumar Sen</h1><img src={Image2} alt="Person2"></img> "Little Lemon is a Mediterranean restaurant known for its fresh flavors, warm ambiance, and a focus on healthy, vibrant cuisine. It’s a welcoming spot that captures the essence of Mediterranean dining.Loved it!"</p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
               <div className='per3'><p><h1>Kendrick Saloony</h1><img src={Image3} alt="Person3"></img> "Their Service was Superb. Food was great too!"</p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
               <div className='per4'><p><h1>Karthose Kutty</h1><img src={Image4} alt="Person4"></img> "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse."</p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
       </div>
</div>
        </section>

    );
};

export default Testimonials;