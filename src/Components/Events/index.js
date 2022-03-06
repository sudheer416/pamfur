import "./index.css";

const VerticalEvent = (props) => {
    const {obj} = props;
    return (
        <div className={`small-event bg${obj.id}`}>
         <p>{obj.title}</p>
         <p>{obj.duration}</p>
         <p>{obj.time }</p>
         </div>
     )
}

const Events = (props) => {
    const {data} = props;    
    return (<div className="events-container">
        {data.map(obj => <VerticalEvent obj={obj} />)}
    </div>)
}

export default Events;
