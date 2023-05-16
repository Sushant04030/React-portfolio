import React, {
    // useState,
    useEffect
} from 'react'
import Typewriter from 'typewriter-effect';
// import Script from 'react-inline-script'


import AboutScreen from '../screens/AboutScreen'
import ServicesScreen from '../screens/ServicesScreen'
import SkillsScreen from '../screens/SkillsScreen'
import TeamsScreen from '../screens/TeamsScreen'
import ContactMeScreen from '../screens/ContactMeScreen'
import ProjectsScreen from '../screens/ProjectsScreen'


import { useDispatch , useSelector} from 'react-redux'
import { getPersonalInfoAction } from '../actions/HomeActions'



function HomeScreen () {

    const dispatch = useDispatch();

    const personalInfoR = useSelector( state => state.personalInfoR)
    const { error, loading, personalInfo } = personalInfoR

    useEffect(() => {

        dispatch(getPersonalInfoAction()) 

    }, [dispatch])


return (
    <div>

        {personalInfo && personalInfo.length ? personalInfo.map((personalinfo) => (
        <section class="home" id="home" 
                style={{
                backgroundImage: `url(${personalinfo.bgimage})`
            }}
            >
        <div class="max-width">
            <div class="home-content">

         <><div class="text-1">Hello, my name is</div>
                <div class="text-2">{personalinfo.firstName} {personalinfo.lastName}</div></>
                <div class="text-3">And I'm a {" "}<span>
                    <Typewriter
                        options={{
                            strings: ['Web Developer', 'Backend Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                        </span>
                </div>
                    {/* <div class="text-3">And I'm a 
                    {" "}
                        <span>
                        <Typical
                            loop={Infinity}
                            wrapper="c"
                            steps={[
                                'Web developer',
                                3000,
                                'Backend Developer',
                                4000,
                                'Open Sourcer',
                                10000,
                            ]}/>
                        </span>

                    </div> */}
                <a href="#">Hire me </a>
                
            </div>
        </div>
    </section>
                )) : null}

    <AboutScreen />
    <ServicesScreen />
    <SkillsScreen />
    <TeamsScreen />
    <ProjectsScreen butt01 />
    <ContactMeScreen />
    </div>
    
)

}

export default HomeScreen