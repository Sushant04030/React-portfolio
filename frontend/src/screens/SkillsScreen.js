import React ,{ useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { getPersonalInfoAction } from '../actions/HomeActions'

function SkillsScreen() {

    const dispatch = useDispatch();
    const personalInfoR = useSelector( state => state.personalInfoR)
    const { error, loading, personalInfo } = personalInfoR


    useEffect(() => {

        dispatch(getPersonalInfoAction())

    }, [dispatch])

  return (

    <section class="skills" id="skills">
        {personalInfo && personalInfo.length ? personalInfo.map((personalinfo) => (
        <div class="max-width">
            <h2 class="title">My skills</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">Details :</div>
                    <p>{personalinfo.skillsDescrip}</p>
                    <a href="#">Read more</a>
                </div>
                <div class="column right">

                    {personalinfo.skills ? personalinfo.skills.map((skill) => (
                        <div class="bars">
                                <div class="info">
                                    <span>{skill.title}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div class="line2" style={{width:`${skill.level}%` }} />
                                <div class="line" 
                                // style={{ ':before ': { width : `${skill.level}%` }}}
                                ></div>
                            </div>
                    )) : null }
                </div>
            </div>
        </div>
                )) : null}

    </section>
  )
}

export default SkillsScreen