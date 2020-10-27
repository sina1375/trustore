import { animated, useTransition } from "react-spring";
import React from "react";

interface Props {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void,
    className?: string,
    children: any,
}

export default function Popup(popupProps: Props) {

    const transitions = useTransition(popupProps.isOpen, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return <React.Fragment>
        {
            transitions.map(({ item, props }) =>
                item &&
                <animated.div onClick={() => popupProps.setOpen(false)} style={props} className="container-fluid popup d-flex align-items-center justify-content-center">
                    <div onClick={e => e.stopPropagation()} className={"popup-container" + (popupProps.className && " " + popupProps.className)}>
                        {popupProps.children}
                    </div>
                </animated.div>
            )
        }
    </React.Fragment>
}