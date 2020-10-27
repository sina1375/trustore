import { useState } from "react";

export default function Test() {
    const [state, setState] = useState(0);

    return <div onClick={() => setState(2)}>
        {state}
    </div>
}