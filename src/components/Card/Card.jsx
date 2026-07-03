import cloudUploadIcon from '../../assets/Card-Icons/cloud-upload-icon.svg'
import './Card.css'

export default function Card() {

    return (
        <div className='card-container'>
            <div className='card-content'>
                <p className='title'>Easy Deployment</p>
                <p className='text'>
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. 
                    Et magna sit morbi lobortis.
                </p>
                <div className='upload-icon'>
                    <img src={cloudUploadIcon} alt='cloud upload icon' />
                </div>
            </div>
        </div>
    )
}