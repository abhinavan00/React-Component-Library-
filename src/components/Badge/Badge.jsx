import './Badge.css'

export default function Badge({ children, variant, color }) {

    const variantClass = variant ? variant : ''
    const colorClass = color ? color : ''

    const badgeClasses = `${variantClass} ${colorClass}`

    return (
        <p className={badgeClasses} >{children}</p>
    )
}