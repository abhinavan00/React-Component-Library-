import quoteIcon from '../../assets/Testimonial-Assets/quote-icon.svg'
import './Testimonial.css'

export default function Testimonial({src, variant}) {
    if(src) {
        const desktopClass = variant === 'desktop' ? 'desktop' : ''
        return (
            <div className={`testimonial-with-img ${desktopClass}`}>
                <div className={`testimonial-details ${desktopClass}`}>
                    <img src={quoteIcon} alt='quote icon'/>
                    <p className='text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed urna nulla vitae laoreet augue. Amet feugiat est integer 
                        dolor auctor adipiscing nunc urna, sit. 
                    </p>
                    <div>
                        <p className='person-name'>May Andersons</p>
                        <p className='person-role'>Workcation, CTO</p>
                    </div>
                </div>
                <img src={src} alt='testimonial person image' className={`person-img ${desktopClass}`}/>
            </div>
        )   
    }   
}