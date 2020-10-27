import { useEffect, useState } from "react"

interface Props {
    src: string,
    alt: string,
    className?: string,
}

export default function LazyLoadingImage(props: Props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
    }, [props.src]);


    return <div className={"lazy-loading-image d-flex justify-content-center" + (loading ? " loading" : "")} >
        <img loading="lazy" src={props.src} alt={props.alt} className={props.className} onLoad={() => setLoading(false)} />
    </div>
}