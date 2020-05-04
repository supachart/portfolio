import * as React from "react";
import { arrayOf, string, shape, number } from "prop-types";

const Skills = ({
  data,
  dataChart
}) => (
  <div className="Skills">
    <div className="Skills__table">
      <h1>Skills</h1>
      <div>
        {data.map(({ name, year }) => (
          <div key={name}>{year}</div>
        ))}
      </div>
    </div>
    <div className="Skills__chart">
      <div>
        <canvas>
          <ul>
            {dataChart.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </canvas>
      </div>
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

  return Skills({ data, dataChart });
};
