export interface Props {
    className: string,
    svgClassName?: string,
}

export default function ShoppingBasket(props: Props) {
    return <svg className={props.svgClassName} xmlns="http://www.w3.org/2000/svg" width="35.342" height="29.981" viewBox="0 0 35.342 29.981">
        <path id="shopping-basket" className={props.className} stroke-width="0.5px" d="M32.887 37.2h-3.521l-4.9-8.777a1.052 1.052 0 0 0-1.383-.4.946.946 0 0 0-.426 1.311l4.394 7.866H7.785l4.393-7.869a.946.946 0 0 0-.426-1.311 1.052 1.052 0 0 0-1.383.4l-4.9 8.78H1.955A1.908 1.908 0 0 0 0 39.05v2.155a1.9 1.9 0 0 0 1.82 1.849l3.433 13.533a1.014 1.014 0 0 0 .995.743h22.34a1.014 1.014 0 0 0 .995-.743l3.441-13.534a1.9 1.9 0 0 0 1.819-1.848V39.05a1.908 1.908 0 0 0-1.956-1.85zm-30.84 1.938H32.8v1.981H2.047zM29.6 48.251h-4.48l.684-5.192h5.117zM18.445 55.39v-5.2H22.8l-.685 5.2zm-5.715 0l-.685-5.2H16.4v5.2zm-8.8-12.331h5.113l.684 5.192H5.243zm7.179 0H16.4v5.192h-4.61zm7.34 5.192v-5.192h5.292l-.684 5.192zM5.735 50.192h4.248l.685 5.2H7.054zm22.046 5.2h-3.605l.685-5.2H29.1z" data-name="004-shopping-basket" transform="translate(.25 -27.6)" />
    </svg>
}
