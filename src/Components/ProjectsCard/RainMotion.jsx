import '../../App.css';
import { useEffect } from 'react';
const RainMotion = ({backgroundStyle}) => {
    useEffect(() => {
        const backgroundAnimation = document.getElementById('background-animation');
        if (backgroundAnimation) {
            for (let i = 0; i < 50; i++) {
                const dot = document.createElement('div')
                dot.classList.add('rain-dot')
                dot.style.left = `${Math.random() * 100}vw`
                dot.style.animationDelay = `${Math.random() * 5}s`
                dot.style.setProperty('--i', Math.random())
                backgroundAnimation.appendChild(dot)
                dot.style.backgroundColor = backgroundStyle;
            }
        }
    }, []);
    return (
        <div><div id="background-animation"></div></div>
    )
}
export default RainMotion;