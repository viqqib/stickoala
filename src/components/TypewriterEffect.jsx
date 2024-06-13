import React from "react";
import Typewriter from 'typewriter-effect';

const TypewriterEffect = () => {
    let textheadd = ["Custom", "Create", "Get", "Print"]
    return(
        <span className='font-nunito font-black z-10 text-shadow-custom'>
        <Typewriter
            options={{
                strings: textheadd,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50,
                cursor: '',
            }}
        />
    </span>
    )
}

export default TypewriterEffect;
