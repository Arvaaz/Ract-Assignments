import './App.css';
import Postview from './Postview';

const LandingPage = () =>{
    return(
        <div className="LandingPage">
            <span className="img-container">
                <img src="./landing.jpg" alt="Cover Image"/>
            </span>
            <span className="text-container">
                <span className="text">
                    <h1>
                        click me for new page
                        <button type='submit'>
                            <a href="http://localhost:3000/">
                            </a>
                                Enter
                        </button>
                    </h1>
                </span>       
            </span>
        </div>
    )
}
export default LandingPage;