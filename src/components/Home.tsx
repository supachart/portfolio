import * as React from "react";
import anime from 'animejs';

import '../assets/scss/Home.scss';

const Home = ({
  display,
  handleOnClickContactMe,
}) => (
  <div className="Home">
    <div className="Home__heroBanner">
      <h1 className="Home__ml" dangerouslySetInnerHTML={display}>
      </h1>
    </div>
    <div
      className="Home__submit"
      onClick={handleOnClickContactMe}
    >
      CONTACT ME
    </div>
  </div>
);

export default (props) => {
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
    if (i !== 1) {
      element.push('<br />');
    }
    return element;
  }, [])
  const display = {
    __html: innerText.join(''),
  };
  const handleOnClickContactMe = () => {
    props.history.push('/contact')
  }

  React.useEffect(() => {
    anime.timeline().add({
      targets: '.Home__ml .letter',
      opacity: [0, 1],
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 2400,
      delay: (el, i) => 30 * i
    });
  });

  return Home({
    display,
    handleOnClickContactMe,
  });
};
