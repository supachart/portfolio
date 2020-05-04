import * as React from "react";
import anime from 'animejs';

import '../assets/scss/Home.scss';

const Home = ({
  display,
}) => (
  <div className="Home">
    <div className="Home__heroBanner">
      <h1 className="Home__ml" dangerouslySetInnerHTML={display}>
      </h1>
    </div>
    <div className="Home__submit">CONTACT ME</div>
  </div>
);

export default () => {
  const heroTexts = [
    'Hi,',
    "I'm ",
    'Supachart Tansutiraphong.',
    'Full-stack developer.',
  ];
  const innerText = heroTexts.reduce((element, word, i) => {
    if (i === 2) {
      element.push(word.replace(/\S/g, "<span class='letter letter--red'>$&</span>"));
    }
    else {
      element.push(word.replace(/\S/g, "<span class='letter'>$&</span>"));
    }
    if (i != 1) {
      element.push('<br />');
    }
    return element;
  }, [])
  const display = {
    __html: innerText.join(''),
  };

  React.useEffect(() => {
    anime.timeline().add({
      targets: '.Home__ml .letter',
      opacity: [0, 1],
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 30 * i
    });
  });

  return Home({
    display,
  });
};
