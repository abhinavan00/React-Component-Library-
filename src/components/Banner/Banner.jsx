import successIcon from '../../assets/Banner-Icons/success-icon.svg'
import './Banner.css'

export default function Banner() {
    return (
        <div className='banner'>
            <div>
                <img src={successIcon} alt='success icon' />
                <p className='msg'>Congratulations!</p>
            </div>
            <p className='msg-detail'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquid pariatur, ipsum similique veniam.
            </p>
        </div>
    )
}