interface Props {
    type?: "primary" | "secondary",
}

export default function Spiner(props: Props) {
    return <div className="spinner" role="spinner">
        <div className={"spinner-icon" + (!props.type || props.type === "primary" ? " primary" : " secondary")}></div>
    </div>
}

export function LightSpiner(props: Props) {
    return <div className="light-spinner" role="spinner">
        <div className={"light-spinner-icon" + (!props.type || props.type === "primary" ? " primary" : " secondary")}></div>
    </div>
}