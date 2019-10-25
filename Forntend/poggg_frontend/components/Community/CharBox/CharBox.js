import React from 'react';

const CharBox = () => {
    return (
        <>
            <div className="CharBox">
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Aatrox.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Ahri.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Akali.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Alistar.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Amumu.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Anivia.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Annie.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Ashe.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/AurelionSol.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Bard.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Blitzcrank.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Brand.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Braum.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Caitlyn.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Camille.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Cassiopeia.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Chogath.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Corki.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Darius.png"/></div>
                <div className="ChampImg"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Diana.png"/></div>
            </div>
            <style jsx global>
                {`
                    .CharBox {
                        width: 1000px;
                        margin: 0 auto;
                    }
                    .ChampImg {
                        display: inline-block;
                    }
                    .ChampImg + .ChampImg {
                        margin-right: 10px;
                        margin-bottom: 24px;
                    }
                    .ChampImg img {
                        width: 60px;
                        height: 60px;
                    }
                `}
            </style>
        </>
    );
}

export default CharBox;