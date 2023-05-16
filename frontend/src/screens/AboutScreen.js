import React , { useEffect} from 'react'
import Typewriter from 'typewriter-effect';

import { useDispatch , useSelector} from 'react-redux'
import { getPersonalInfoAction } from '../actions/HomeActions'
import { Link } from 'react-router-dom'

function AboutScreen() {

    const dispatch = useDispatch();

    const personalInfoR = useSelector( state => state.personalInfoR)
    const { error, loading, personalInfo } = personalInfoR


    useEffect(() => {

        dispatch(getPersonalInfoAction()) 


    }, [dispatch])
  return (
        <section class="about" id="about">
            {personalInfo && personalInfo.length ? personalInfo.map((personalinfo) => (
                <div class="max-width">
                    <h2 class="title">About me</h2>
                    <div class="about-content">
                        <div class="column left">
                            {/* <div class='image-about my-2' style={{
                backgroundImage: `url(${personalinfo.profileImage})`,
                backgroundSize: 'cover',
            }} /> */}
                        <img src={personalinfo.profileImage} alt=""/>
                        </div>
                        <div class="column right">
                            <div class="text "
                                    // style={{ color:'red', display:'inline', }}
                                    >I'm {personalinfo.firstName} and I'm a{' '} 
                                <span>
                                    <Typewriter
                                        options={{
                                            strings: ['Web Developer', 'Backend Developer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </div>
                            <p>{personalinfo.aboutDescrip}</p>
                            <Link to="/cv/">Open CV</Link>
                        </div>
                    </div>
                </div>
            )) : null}
        </section>
  )
}

export default AboutScreen