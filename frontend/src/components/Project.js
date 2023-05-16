import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProjectByIdAction } from '../actions/ProjectsActions'
import ProjectCrousel from './ProjectCrousel';
function project() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const projectDetailR = useSelector( state => state.projectDetailR)
    const { error : projectDetailError , loading : projectDetailLoading , project } = projectDetailR

    useEffect(() => {

        dispatch(getProjectByIdAction(id))

    }, [dispatch, id])
  return (
    
    <div><ProjectCrousel images={images} / ></div>

    
  )
}

export default project