import successIcon from '../../assets/Banner-Icons/success-icon.svg'
import warningIcon from '../../assets/Banner-Icons/warning-icon.svg'
import errorIcon from '../../assets/Banner-Icons/error-icon.svg'
import neutralIcon from '../../assets/Banner-Icons/neutral-icon.svg'
import './Banner.css'

export default function Banner({variant}) {

    return (
        <div className='banner-container'>
            <div>
                <img src={successIcon} alt='success icon' />
                <p className='banner-title'>Congratulations!</p>
            </div>
            {
                variant === 'multi-line' ? 
                <p className='banner-msg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aliquid pariatur, ipsum similique veniam.
                </p> : null
            }
        </div>
    )
}