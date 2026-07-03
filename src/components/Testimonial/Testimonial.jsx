import quoteIcon from '../../assets/Testimonial-Assets/quote-icon.svg'
import './Testimonial.css'

export default function Testimonial({src, variant}) {
    if(src) {
        if(variant === 'desktop') {
            return (
                <div className='desktop-testimonial'>
                    <div className='desktop-testimonial-details'>
                        <img src={quoteIcon} alt='quote icon'/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed urna nulla vitae laoreet augue. Amet feugiat est integer 
                            dolor auctor adipiscing nunc urna, sit. 
                        </p>
                        <div>
                            <p>May Andersons</p>
                            <p>Workcation, CTO</p>
                        </div>
                    </div>
                    <img src={src} alt='testimonial person image'/>
                </div>
            )
        }
    }   
}