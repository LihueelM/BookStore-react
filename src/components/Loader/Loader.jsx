import { ColorRing } from "react-loader-spinner";
import './Loader.css'

const Loader = () => {
    return(
        <div className="container-loader">
            <ColorRing
            width='200'
            height='200' />
        </div>
    )
}

export default Loader;