import "./Banner.css"
const Banner = () =>{
    return(
        <>  
            <div className='banner-container'>
                <img className='banner-img' src={require('../../images/people-reading.jpg')} alt="banner" />
                <h4 className='about-us'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt enim, excepturi voluptas sapiente saepe perferendis asperiores debitis vel tenetur nihil, autem aspernatur explicabo possimus neque.</h4>
            </div>
            


        </>
    )
}

export default Banner