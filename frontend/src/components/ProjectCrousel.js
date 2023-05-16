import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProjectByIdAction } from '../actions/ProjectsActions'
import  ImageSlider  from './craousel';


function ProjectCrousel() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
    const { id } = useParams();
    const dispatch = useDispatch();

    const projectDetailR = useSelector( state => state.projectDetailR)
    const { error : projectDetailError , loading : projectDetailLoading , project } = projectDetailR

    useEffect(() => {

        dispatch(getProjectByIdAction(id))

    }, [dispatch, id])

    console.log()
    return (
        <div>
            <div  className="project_detail_div" style={{padding: "20px 0px",}}>
                <div>
                    { project ? project.map(pro =>(
                            <ImageSlider slides={pro.projectimages} />
                    )):<></>} 
                </div> 
            </div>
        </div>
    )
}
export default ProjectCrousel