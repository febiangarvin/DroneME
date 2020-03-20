import React, { useState } from 'react';
import { Button, Fade } from 'reactstrap';

const Example = (props) => {
    const [fadeIn, setFadeIn] = useState(false);

    const menu1 = () => setFadeIn(!fadeIn);
    const menu2 = () => setFadeIn(!fadeIn);

    return (
        <div>
            <div>
                <Button color="primary" onClick={menu1}>Toggle Fade</Button>
                <Fade in={fadeIn} tag="h5" className="mt-3">
                    This content will fade in and out as the button is pressed
            </Fade>
            </div>
            <div>
                <Button color="primary" onClick={menu2}>Toggle Fade</Button>
                <Fade in={fadeIn} tag="h5" className="mt-3">
                    This content will fade in and out as the button is pressed
            </Fade>
            </div>
        </div>
    );
}

export default Example;
