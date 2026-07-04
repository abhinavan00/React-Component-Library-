import quoteIcon from '../../assets/Testimonial-Assets/quote-icon.svg'
import testimonialLogo from '../../assets/Testimonial-Assets/testimonial-logo.svg'
import dotPattern from '../../assets/Testimonial-Assets/dot-pattern.svg'
import './Testimonial.css'

export default function Testimonial({src, variant}) {

    const desktopClass = variant === 'desktop' ? 'desktop' : ''

    if(src) {
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
    } else {
        return (
            <div className={`no-img-testimonial ${desktopClass}`}>
                <img src={testimonialLogo} alt='workaction logo' className='testimonial-logo'/>
                <div className={`testimonial-details ${desktopClass}`}>
                    <p className='text'>
                        “Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nemo expedita voluptas culpa sapiente alias molestiae. 
                        Numquam corrupti in laborum sed rerum et corporis.”
                    </p>
                    <div className={desktopClass}>
                        <p className='person-name'>May Andersons</p>
                        {variant === 'desktop' && <span>/</span>}
                        <p className='person-role'>Workcation, CTO</p>
                    </div>
                </div>
                <img src={dotPattern} className={`dot-pattern ${desktopClass}`} />
            </div>
        )
    }   
}