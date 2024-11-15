import '../../App.css';
const ProjectsCard = (props) => {
    return (
        <div className='projects-card'>
            <div className="card-head">
                <h3>{props.title}</h3>
            </div>
            <div className="card-body">
                <p className="card-des">{props.des}</p>
                <div className="img-wrapper"> <img src={props.img} alt="" /></div>
            </div>
            <div className="card-footer">
                <a className='live-link' href={props.live} target='blank'>See Live</a>
                <a className='code-link' href={props.code} target='blank'>Source Code</a>
            </div>
        </div>
    )
}

export default ProjectsCard;
