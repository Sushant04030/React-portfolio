
import React ,{ useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { getServicesBgAction } from '../actions/ServicesAction'

function ServicesScreen() {
    const dispatch = useDispatch();

    const servicesBgR = useSelector( state => state.servicesBgR)
    const { error, loading , servicesBg } = servicesBgR

    useEffect(() => {
        dispatch(getServicesBgAction())

    }, [dispatch])
  return (
    <section class="services" id="services" style={{ backgroundImage : `url(${servicesBg.image})`, backgroundSize : 'cover' }}>
                <div class="max-width">
                    <h2 class="title">My services</h2>
                        <div class="serv-content">
                            <div class="card" style={{ margin : '5px'}}>
                                <div class="box">
                                    <i class="fas fa-laptop"></i>
                                    <div class="text">development</div>
                                    <p>Full development of Backend using python/django/RESTful APIs.</p>
                                </div>
                            </div>
                            <div class="card" style={{ margin : '5px'}}>
                                <div class="box">
                                    <i class="fas fa-chart-line"></i>
                                    <div class="text">Advertising</div>
                                    <p>Effective Social media Advertisement through facebook, instagram,  tiktok and SEO.</p>
                                </div>
                            </div>
                            <div class="card" style={{ margin : '5px'}}>
                                <div class="box">
                                    <i class="fas fa-code"></i>
                                    <div class="text">Apps Design</div>
                                    <p>Webapp designs using css, tailwind, JS, react, JQuery and Wordpress.</p>
                                </div>
                            </div>
                        </div>
                </div>
        </section>
  )
}

export default ServicesScreen

