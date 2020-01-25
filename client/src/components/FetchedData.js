import React from 'react';
import PlayerCard from './PlayerCard';

class FetchedData extends React.Component {
   state ={
      players: []
   }

   componentDidMount() {
      fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => {
         console.log(res);
         this.setState({
            ...this.setState,
            players: res
         });
      })
      .catch(err => console.log('NOOOOOOO!!!!', err))
   }
   

   render() {
      return (
         <div>
            {this.state.players.map(player => {
               return <PlayerCard key={player.name} player={player} />
            })}
         </div>
      )
   }
}

export default FetchedData;
