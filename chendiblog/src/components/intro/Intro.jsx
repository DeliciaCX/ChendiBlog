import "./intro.scss";
import Typewriter from 'typewriter-effect';

export default function Intro() {

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt=""/>
                </div>
            </div>


            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Chendi Xie</h1>
                    <h3>
                        Full time <span>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Information Technology Student')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(2500)
                                    .start();
                            }}
                        />
                        </span>
                    </h3>
                </div>
                <a href="#blog">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    );
}
