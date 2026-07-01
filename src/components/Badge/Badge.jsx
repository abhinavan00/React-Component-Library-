import './Badge.css'
import clsx from 'clsx'

export default function Badge({ children, variant, color }) {

    const allClasses = clsx(variant, color)

    return (
        <p className={allClasses} >{children}</p>
    )
}