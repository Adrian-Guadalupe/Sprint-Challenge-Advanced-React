import React from 'react';

const PlayerCard = ({ player }) => {
   return (
      <div>
         <h3>{player.name}</h3>
         <p>{player.country}</p>
         <p># of Searches: {player.searches}</p>
      </div>
   )
}

export default PlayerCard;
