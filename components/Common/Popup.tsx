import { animated, useTransition } from "react-spring";
import React from "react";
import { BsX } from "react-icons/bs";
import useMeasure from "react-use-measure";

interface Props {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void,
    className?: string,
    children: any,
}

export default function Popup(popupProps: Props) {

    const [contentBoundsRef, contentBounds] = useMeasure();

    const transitions = useTransition(popupProps.isOpen, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return <React.Fragment>
        {
            transitions.map(({ item, props }) =>
                item &&
                <animated.div ref={contentBoundsRef} onClick={() => popupProps.setOpen(false)} style={props} className="container-fluid popup d-flex align-items-center justify-content-center">
                    <div onClick={e => e.stopPropagation()} style={{ maxHeight: (contentBounds.height - 100) }} className={"popup-container" + (popupProps.className && " " + popupProps.className)}>
                        <div className="popup-exit" onClick={() => popupProps.setOpen(false)}><BsX /></div>
                        {popupProps.children}
                    </div>
                </animated.div>
            )
        }
    </React.Fragment>
}