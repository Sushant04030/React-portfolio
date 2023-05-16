import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectsAction } from '../actions/ProjectsActions'
import { Link } from "react-router-dom"
import { Button, CardGroup, Card } from "react-bootstrap"

function ProjectsScreen({ butt01 }) {

    const dispatch = useDispatch();

    const projectsR = useSelector(state => state.projectsR)
    const { error: projectsError, loading: projectsLoading, projects } = projectsR

    useEffect(() => {

        dispatch(getProjectsAction())


    }, [dispatch])
 
    return (
        <section class="projects" id="projects" style={{ textAlign: "center", alignItems: "center", background: 'white', padding: "20px 0px", }}><br/><br/><br/>
        <div class="max-width">
            
            {butt01 ? (<>
                        <h2 class="title" style={{ color: "black" }} >My Projects</h2><br/>
                        {/* <div style={{color:"black" , height:"10px" , width : "30px;"}}></div> <br/> */}
                        </>
                        ):<></>}
            <div className='cardGroup' >
                {projects ?
                    projects.map(project => (
                        //     <div class="card" style={{ background: 'none' }}>
                        //         <div class="box">
                        //             <img src={project.image} alt="" />
                        //             <div class="text" style={{ color: "blue" }}>{project.title}</div>
                        //         </div>
                        //     </div>
                        <Link to={`/project/${project._id}/`}>
                            <div className="card" style={{ display: 'block' }}>
                                {butt01 ? (
                                    <Card.Body>
                                        <Card.Img variant="top" src={project.image} />
                                        <div className='cardTitle' >{project.title}</div>
                                    </Card.Body>
                                ) : (
                                    <Card.Body>
                                        <Button className="pro" variant="outline-primary" style={{ height: '5rem', width: '16rem' , color:"#1877f2" , borderRadius: '10px' ,margin : '5px' }}>{project.title}</Button>
                                    </Card.Body>
                                )}
                            </div>
                        </Link>
                    )
                    ) : (
                        <h4> No Projects </h4>
                    )}

            </div>
            {/* </div> */}
            </div>
        </section>
    )
}

export default ProjectsScreen