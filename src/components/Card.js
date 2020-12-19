
import './Card.css';
import React, { useState } from 'react';
import aani from './drumroll.mp3';
import aani1 from './ah.mp3';

function Card(tehtavat) {
  const [number, setNumber] = useState(1)
  const [card, setCard] = useState(tehtavat.tehtavat[number])


  const changeCard = () => {
    setNumber(number + 1)
    console.log(number)
    var x = document.getElementById("myAudio");
    var y = document.getElementById("myAudio1");
    x.play();
    setTimeout(() => {
      setCard(tehtavat.tehtavat[number])
      y.play();
    }, 4000);

  }

  console.log(tehtavat)
  return (
    <div className="Card" onClick={changeCard}>
      <div className="teksti">
        <b>
          <h1>
            {card}
          </h1>
        </b>
      </div>
      <audio id="myAudio">
        <source src={aani} type="audio/mpeg" />
      </audio>
      <audio id="myAudio1">
        <source src={aani1} type="audio/mpeg" />
      </audio>
    </div>
  );
}


export default Card;
