'use client'

import Typewriter from 'typewriter-effect';


function TypewriterEfecto() {
    return (
        <>
                <Typewriter
                    options={{
                        strings: ['Frontend','Backend','Fullstack'],
                        autoStart: true,
                        loop: true,
                        delay: 75, // velocidad de tipeo
                        deleteSpeed: 50, // velocidad de borrado
                    }}
                />
        </>
    );
}

export default TypewriterEfecto