import PropTypes from 'prop-types';
import './style.css'
function Cards(props) {

    return (
        <>
            <div className="card">
                <img src={props.url} alt="" />
                <h2>{props.heading}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure ab iste molestias ratione distinctio.</p>
            </div>
        </>
    );
}
Cards.PropTypes = {
    url: PropTypes.string,
    heading: PropTypes.string,
};
Cards.defaultProps = {
    url: "./src/assets/placeholder1.png",
    heading: "rahul gurjar you can do it",
};




function Card() {
    return (
        <>
        
        <Cards url="./src/assets/react.svg" heading="ha bhai rahul" />
        <Cards url="./src/assets/circle.svg" heading="code is woring properly"/>
  
        <Cards url="./src/assets/SmallLogo.png" heading="code is woring properly" />
        {/* <Cards url="./src/assets/twitter.png" heading="code is woring properly" /> */}
            
        <Cards />
        </>
    );
}

export default Card

