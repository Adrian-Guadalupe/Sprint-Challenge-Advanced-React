import React from 'react';

const PlayerCard = ({ player }) => {
   return (
      <div className='player-card'>
         <h2>{player.name}</h2>
         <p>{player.country}</p>
         <p># of Searches: {player.searches}</p>
      </div>
   )
}

export default PlayerCard;
