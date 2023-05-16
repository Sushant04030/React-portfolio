import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTeamsAction } from '../actions/TeamsActions'
import { getTeamsBgAction } from '../actions/TeamsActions'
import Slider01 from '../components/Slider01'

function TeamsScreen() {
    const dispatch = useDispatch();
    const teamsR = useSelector(state => state.teamsR)
    const { error, loading, teams } = teamsR

    const teamsBgR = useSelector(state => state.teamsBgR)
    const { bgerror = error, bgloading = loading, teamsBg } = teamsBgR

    useEffect(() => {

        dispatch(getTeamsAction())
        dispatch(getTeamsBgAction())

    }, [dispatch])

    return (

        <section class="teams my-2" id="teams" style={{ backgroundImage: `url(${teamsBg.image})`, backgroundSize: 'cover', backgroundAttachment: "fixed" }}>
            <div class="max-width">
                <h2 class="title">My teams</h2>
                <Slider01 slides={teams} />
                {/* {teams ? teams.map((team) => (
                    <div class="card">
                        <div class="box">
                            <img src={team.profileImage} alt="" />
                            <div class="text">{team.firstName} {team.lastName}</div>
                            <h4>{team.work} ({team.positon})</h4>
                            <p>{team.description}</p>
                        </div>
                    </div>
                )):(
                    <h3>No teams</h3>
                )} */}
            </div>
        </section>
    )
}

export default TeamsScreen