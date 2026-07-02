import successIcon from '../../assets/Banner-Icons/success-icon.svg'
import warningIcon from '../../assets/Banner-Icons/warning-icon.svg'
import errorIcon from '../../assets/Banner-Icons/error-icon.svg'
import neutralIcon from '../../assets/Banner-Icons/neutral-icon.svg'
import './Banner.css'

export default function Banner({isMultiline, variant}) {

    function banner() {
        if (variant === 'success') {
            return (
                <>
                <div className='banner-container success'>
                    <div>
                        <img src={successIcon} alt='success icon' />
                        <p className='banner-title success'>Congratulations!</p>
                    </div>
                    {
                        isMultiline ? 
                        <p className='banner-msg success'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Aliquid pariatur, ipsum similique veniam.
                        </p> : null
                    }
                </div>
                </>
            )
        } else if (variant === 'warning') {
            return (
                <>
                <div className='banner-container warning'>
                    <div>
                        <img src={warningIcon} alt='warning icon' />
                        <p className='banner-title warning'>Attention!</p>
                    </div>
                    {
                        isMultiline ? 
                        <p className='banner-msg warning'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                        </p> : null
                    }
                </div>
                </>
            )

        } else if (variant === 'error') {

            return (
                <>
                <div className='banner-container error'>
                    <div>
                        <img src={errorIcon} alt='error icon' />
                        <p className='banner-title error'>
                            There is a problem with your application!
                        </p>
                    </div>
                    {
                        isMultiline ? 
                        <p className='banner-msg error'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                        </p> : null
                    }
                </div>
                </>
            )

        } else {

            return (
                <>
                <div className='banner-container'>
                    <div>
                        <img src={neutralIcon} alt='neutral icon' />
                        <p className='banner-title'>Update available</p>
                    </div>
                    {
                        isMultiline ? 
                        <p className='banner-msg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aliquid pariatur, ipsum similique veniam.
                        </p> : null
                    }
                </div>
                </>
            )
        }
    }

    return (
        <>
            {banner()}
        </>
    )
}