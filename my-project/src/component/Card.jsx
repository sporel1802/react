import React from 'react';

function Card(props,channel) {
  console.log(props.username);
  return (
    <div className="max-w-xl p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-gray-800 text-lg leading-relaxed">
        Lorem ipsum {props.username} sit {props.channel} consectetur adipisicing elit. Culpa voluptatibus quasi ducimus aspernatur harum recusandae, error dolor quod earum quisquam doloribus odit aut fugit mollitia ea quae veniam amet facere?
      </h1>
    </div>
  );
}

export default Card;
