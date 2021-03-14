import {useState} from 'react';
import './DrumBand.css'

const soundOne = [
  {
    keyCode: 81,  // Q
    keyTrigger: './img/ele-cart.png',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,  // W
    keyTrigger: './img/duck-cart.jpg',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,  // E
    keyTrigger: './img/hor-cart.png',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,  // A
    keyTrigger: './img/cyn.jpg',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,   // S
    keyTrigger: './img/dog.jpg',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,    // D
    keyTrigger: './img/micky.png',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,    // Z
    keyTrigger: './img/oba.jpg',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,    // X
    keyTrigger: './img/stu.jpg',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,  // C
    keyTrigger: './img/super-man.jpg',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];


const DrumBand = () => {
    const [show, setShow] = useState(<>&nbsp;</>);

    return (
        <div className='DrumBand'>
            <div className='Curr-Drum'>
                <p id="show-txt">
                    {show}
                </p>
            </div>
            <div className='Drum'>
                {soundOne.map((sound, ind) => {
                    return <Box className='Box' sound={sound} key={ind} setShow={setShow}/>
                })}
            </div>
        </div>
    );
}

const Box = (props) => {

    const playSound = () => {
        const sound = document.getElementById(props.sound.keyCode);
        sound.play();
        props.setShow(props.sound.id);
    };

    return (
        <div className='Box-item' 
          id={props.sound.id} onClick={playSound}>
            <img src={require(`${props.sound.keyTrigger}`).default} alt=''/>
            <audio src={props.sound.url} id={props.sound.keyCode}/>
        </div>
    );
}

export default DrumBand;
