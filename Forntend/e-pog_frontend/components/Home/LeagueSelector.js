import React from 'react';
import './LeagueSelector.scss';
const LeagueSelector = () => {
    console.log("hi")
    return (
        <div>
            <div className="FluidContainer container-fluid LeagueSelector">
                <div className="container">
                    <div className="TournamentSymbol LeagueSelector__highlighted">
                        <img className="TournamentSymbol__image" src="static/lck_image.png" alt="LCK 2019 Summer Season"/>
                        <span className="TournamentSymbol__label Gilroy">LCK 2019 Summer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeagueSelector;