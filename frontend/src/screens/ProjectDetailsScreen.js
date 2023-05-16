import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProjectByIdAction } from '../actions/ProjectsActions'
import ProjectCrousel from '../components/ProjectCrousel'
import ProjectSteps from '../components/ProjectSteps' 
import FormContainer from '../components/FormContainer'
import ProjectsScreen from './ProjectsScreen'


import '../script.js'


function ProjectDetailsScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const projectDetailR = useSelector(state => state.projectDetailR)
  const { error: projectDetailError, loading: projectDetailLoading, project } = projectDetailR

  useEffect(() => {

    dispatch(getProjectByIdAction(id))

  }, [dispatch, id])
  return (
    <div>
      <section className=" project_detail">
        <div className="max-width">

          <ProjectSteps />

          <ProjectCrousel />
        
        </div>
      </section>


    </div>
  )
}

export default ProjectDetailsScreen