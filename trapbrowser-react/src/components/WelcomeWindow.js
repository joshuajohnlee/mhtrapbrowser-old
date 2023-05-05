import { useState, useEffect } from "react"
import ReactModal from "react-modal";

export default function WelcomeWindow() {

    document.body.style.overflow = 'hidden';

    const [welcomeOpen, setWelcomeOpen] = useState(true)

    function clickHandler() {
        setWelcomeOpen(false);
    }

    useEffect(() => {
        document.body.style.overflow = 'unset';
    }, [welcomeOpen])

    return(
        <>
            <ReactModal
            isOpen={welcomeOpen}
            className="welcome-window"
            preventScroll={false}
            style={
                {
                    overlay: {
                        background: "rgba(0, 0, 0, 0.5)",
                        overflowY: "scroll"
                    },
                    content: {
                    }
                }
            }>
                <div className="welcome-content">
                    <button onClick={clickHandler}>Close</button>
                    <h2>Welcome to the MouseHunt Trap Browser!</h2>

                    <p>This tool can be used to filter and sort weapons from MouseHunt. Once you close this window, 
                        press the Filter button to set your filters and then you will see your results. Above the
                        results, set the sorting method you want.
                    </p>

                    <p>This tool is not endorsed by or affiliated with HitGrab Inc. All weapon and base illustrations
                        are copyright of HitGrab Inc. and are used here to illustrate the given information only.
                    </p>
                    
                    <h2>Current known issues</h2>
                    <ul>
                        <li>The browser only lists weapons and not bases.</li>
                        <li>Accessibility is not properly implemented.</li>
                    </ul>
                </div>
            </ReactModal>
        </>
    )
}