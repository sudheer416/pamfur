import "./index.css";

const Event = (props) => {
   const {obj}  = props;
   console.log(obj);
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
    console.log(data);
    return (
        <div className="small-events-container">
        {data.map(obj => <Event obj={obj} />)}
        </div>
    )
}

export default Events;
