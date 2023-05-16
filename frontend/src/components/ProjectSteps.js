import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDispatch , useSelector} from 'react-redux'
import { getProjectsAction } from '../actions/ProjectsActions'


function ProjectSteps() {
    const dispatch = useDispatch();

    const projectsR = useSelector( state => state.projectsR)
    const { error : projectsError , loading : projectsLoading , projects } = projectsR

    useEffect(() => {
        dispatch(getProjectsAction()) 

    }, [dispatch])
  return (
    <div className='titles'>
        {projects ? projects.map(project => (
            <Link to={`/project/${project._id}`}>
                <h2>{project.title}</h2>
            </Link>
        )) : (<></>) }
    </div>
  )
}

export default ProjectSteps