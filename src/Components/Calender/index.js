import Calendar from "react-calendar";
import "./index.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Events from "../Events/index";
import SmallEvent from "../SmallEvent/index";
import '@fortawesome/fontawesome-free-solid';

const list = [
  {
    id: 1,
    title: 'design scrum',
    time: "11:00 AM",
    duration: "45 mins"    
  },
  {
    id: 2,
    title: 'coldplay concert',
    time: "09:20 PM",
    duration: "120 mins"    
  },
  {
    id: 3,
    title: 'Q2 planning',
    time: "01:20 PM",
    duration: "60 mins"    
  }
]

const longCalandar = () => (
  <div>
  <div className="long-calender">
        <div className="flex">
          <div className="flex-item">Mo</div>
          <div className="flex-item">Tu</div>
          <div className="flex-item">We</div>
          <div className="flex-item">Th</div>
          <div className="flex-item">Fr</div>
          <div className="flex-item">Sa</div>
          <div className="flex-item">Su</div>
        </div>
        <div className="flex">
          <div className="flex-item">28</div>
          <div className="flex-item">01</div>
          <div className="flex-item">02</div>
          <div className="flex-item">03</div>
          <div className="flex-item">04</div>
          <div className="flex-item">05</div>
          <div className="flex-item">06</div>
        </div>
        <div className="flex">
          <div className="flex-item">07</div>
          <div className="flex-item">08</div>
          <div className="flex-item">09</div>
          <div className="flex-item">10</div>
          <div className="flex-item">11</div>
          <div className="flex-item"> 12</div>
          <div className="flex-item"> 13</div>
        </div>
        <div className="flex">
          <div className="flex-item"> 14</div>
          <div className="flex-item"> 15</div>
          <div className="flex-item"> 16</div>
          <div className="flex-item"> 17</div>
          <div className="flex-item"> 18</div>
          <div className="flex-item"> 19</div>
          <div className="flex-item"> 20</div>
        </div>
        <div className="flex">
          <div className="flex-item"> 21</div>
          <div className="flex-item"> 22</div>
          <div className="flex-item"> 23</div>
          <div className="flex-item"> 24</div>
          <div className="flex-item"> 25</div>
          <div className="flex-item"> 26</div>
          <div className="flex-item"> 27</div>
        </div>
        <div className="flex">
          <div className="flex-item">28</div>
          <div className="flex-item">29</div>
          <div className="flex-item">30</div>
          <div className="flex-item">31</div>
          <div className="flex-item">01</div>
          <div className="flex-item">02</div>
          <div className="flex-item">03</div>
        </div>
      </div>
      <div className="long-calender">
      <div className="flex">
        <div className="flex-item">Mo</div>
        <div className="flex-item">Tu</div>
        <div className="flex-item">We</div>
        <div className="flex-item">Th</div>
        <div className="flex-item">Fr</div>
        <div className="flex-item">Sa</div>
        <div className="flex-item">Su</div>
      </div>
      <div className="flex">
        <div className="flex-item">28</div>
        <div className="flex-item">01</div>
        <div className="flex-item">02</div>
        <div className="flex-item">03</div>
        <div className="flex-item">04</div>
        <div className="flex-item">05</div>
        <div className="flex-item">06</div>
      </div>
      <div className="flex">
        <div className="flex-item">07</div>
        <div className="flex-item">08</div>
        <div className="flex-item">09</div>
        <div className="flex-item">10</div>
        <div className="flex-item">11</div>
        <div className="flex-item"> 12</div>
        <div className="flex-item"> 13</div>
      </div>
      <div className="flex">
        <div className="flex-item"> 14</div>
        <div className="flex-item"> 15</div>
        <div className="flex-item"> 16</div>
        <div className="flex-item"> 17</div>
        <div className="flex-item"> 18</div>
        <div className="flex-item"> 19</div>
        <div className="flex-item"> 20</div>
      </div>
      <div className="flex">
        <div className="flex-item"> 21</div>
        <div className="flex-item"> 22</div>
        <div className="flex-item"> 23</div>
        <div className="flex-item"> 24</div>
        <div className="flex-item"> 25</div>
        <div className="flex-item"> 26</div>
        <div className="flex-item"> 27</div>
      </div>
      <div className="flex">
        <div className="flex-item">28</div>
        <div className="flex-item">29</div>
        <div className="flex-item">30</div>
        <div className="flex-item">31</div>
        <div className="flex-item">01</div>
        <div className="flex-item">02</div>
        <div className="flex-item">03</div>
      </div>
    </div>
  </div>
)
const shortCalandar = () => (
  <div className="short-calender">
      <div className="flex">
        <div className="flex-item">
          <div>Mo</div>
          <div>28</div>
        </div>
        <div className="flex-item">
          <div>Tu</div>
          <div>28</div>
        </div>
        <div className="flex-item">
          <div>We</div>
          <div>28</div>
        </div>
        <div className="flex-item active">
          <div>Th</div>
          <div>28</div>
        </div>
        <div className="flex-item">
          <div>Fr</div>
          <div>28</div>
        </div>
        <div className="flex-item">
          <div>Sa</div>
          <div>28</div>
        </div>
        <div className="flex-item">
          <div>Su</div>
          <div>28</div>
        </div>
      </div>
    </div>
)


const Cal = (props) => {  
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => setIsExpanded(!isExpanded);
  return (
    <div className="cal-rect">     
      {isExpanded ? longCalandar() : shortCalandar()}      
      <button className="events-toggler" onClick={toggle}>
      {isExpanded ?  
        <FontAwesomeIcon icon={["fa-solid", "fa-angle-up"]} /> : 
        <FontAwesomeIcon icon={["fa-solid", "fa-angle-down"]} />
      }
      </button>
      <SmallEvent data={list}/>
      {!isExpanded && <Events data={list} />}      
    </div>
  );
};

export default Cal;
