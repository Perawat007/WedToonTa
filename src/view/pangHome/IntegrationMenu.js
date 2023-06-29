import React from 'react'
const IntegrationMenu = () => {

    const PlayGame = () => {
        console.log('playGame');
    }

    return (
        <>
            <div className="integration-menu" style={{ left: '-57px' }}>
                <div className="integration-menu-inner-content">
                    <div className="integration-menu-items">
                        <div className="side-menu-calendar-btn pointer">
                            <img src="asset_web/img/reward/mission.png" alt="reward" />
                        </div>
                        <div className="side-menu-vip-btn pointer">
                            <img src="asset_web/img/reward/vip.png" alt="reward" />
                        </div>
                        <div className="sidebar-lucky-spin-btn pointer">
                            <img src="asset_web/img/reward/lucky-spin.png" alt="reward" />
                        </div>
                        <div className="side-angpow-btn pointer hide">
                            <img src="asset_web/img/reward/angpow.png" alt="reward" />
                        </div>
                        <div className="side-menu-tournament-btn pointer hide"
                            onClick={() => PlayGame()}>
                            <img src="asset_web/img/reward/leaderboard.png" alt="reward" />
                        </div>
                    </div>
                    <div className="integration-menu-toggle-arrow-button pointer">
                        <i className="fa-solid fa-sort-down"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntegrationMenu