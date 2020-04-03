import React from 'react';

import { Card } from './styles';

export default function Topics() {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <Card>
      {data.map((p) => (
        <div className="topic">
          <img
            src="https://ait.live/wp-content/uploads/2020/01/AITNEWS-36.jpg"
            alt="image"
          />
          <span>App {p}</span>
        </div>
      ))}
    </Card>
  );
}
