import './_arts.scss'
import Pic1 from "../../assets/square-1.png";

export const Arts=()=>{
    return (
      <>
        <div className="col-md-12 flexy">
          <div claddName="col-md-4">
            <img className="col-md-12 " src={Pic1} alt="First slide" />
          </div>
          <div className="col-md-8">
            <small>March 23, 2021</small>
            <h1>Fine Arts Team Spotlight</h1>
          </div>
        </div>
      </>
    );
}