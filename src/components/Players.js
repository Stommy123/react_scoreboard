import React from 'react';
import Player from './Player'

const Players = ({ players, changeScore, removePlayer, highScore }) => (
    <div>
        {
            players.map((player, i) => {
                return (
                    <Player isHighScore={highScore === player.score} changeScore={changeScore} player={player} removePlayer={removePlayer} key={i} />
                )
            })
        }
    </div>
)


export default Players