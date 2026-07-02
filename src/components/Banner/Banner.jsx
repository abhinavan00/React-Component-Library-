import successIcon from '../../assets/Banner-Icons/success-icon.svg'
import './Banner.css'

export default function Banner() {
    return (
        <div className='banner-container'>
            <img src={successIcon} alt='success icon' />
            <div>
                <p>Congratulations!</p>
                <p></p>
            </div>
        </div>
    )
}