import './Badge.css'
import clsx from 'clsx'

export default function Badge({ children, variant, color }) {

    const allClasses = clsx('badge', variant, color)

    return (
        <p className={allClasses} >{children}</p>
    )
}