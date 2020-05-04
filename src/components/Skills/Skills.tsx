import * as React from "react";
import { arrayOf, string, shape, number } from "prop-types";
import anime from 'animejs';

import './Skills.scss';

const Skills = ({
  data,
  dataChart,
}) => (
  <div className="Skills">
    <div className="Skills__text">
      <h1>Skills</h1>
      <div className="Skills__table">
        {data.map(({ name, year }) => (
          <div
            key={name}
            className="Skills__column"
          >
            <div>{name}</div>
            <div>{year} years</div>
          </div>
        ))}
      </div>
    </div>
    <div className="Skills__chart">
      <h2 className="Skills__ml6">
        {dataChart.map((skill, i)=> (
          <span key={skill + i} className={`Skills__letters letters-` + i}>{skill}</span>
        ))}
      </h2>
    </div>
  </div>
);

Skills.propType = {
  data: arrayOf(shape({
    name: string,
    year: number,
  })),
  dataChart: arrayOf(string),
};

export default () => {
  const data = [
    { name: 'React', year: 3 },
    { name: 'Node JS', year: 1 },
    { name: 'Ruby on Rails', year: 1 },
    { name: 'jQuery', year: 3 },
    { name: 'ASP .NET', year: 5 },
  ];
  const dataChart = [
    'JavaScript', 'HTML 5', 'CSS', 'SCSS', 'NodeJS', 'SQL', 'Git', 'Restful',
    'GraphQL', 'Ruby on Rails', 'Jest', 'SQL'
  ];
  const ml4 = {
    opacityIn: [0, 1],
    scaleIn: [0.2, 1],
    scaleOut: 3,
    durationIn: 800,
    durationOut: 600,
    delay: 500,
  }

  React.useEffect(() => {
    const loopAnime = anime.timeline({ loop: true })

    for (let i = 0; i <= dataChart.length; i++) {
      loopAnime.add({
        targets: '.Skills__ml6 .letters-' + i,
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.Skills__ml6 .letters-' + i,
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      })
    }
    loopAnime.add({
      targets: '.Skills__ml6',
      opacity: 0,
      duration: 500,
      delay: 500
    });
  }, [])

  return Skills({ data, dataChart });
};
