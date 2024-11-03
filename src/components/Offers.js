const Offers = ({offerimg,  discount, status, seasonname, passtime, price, passDay, passHour, passMinint, passSecond 
}) => {
  
  // Function to format numbers as two digits
  const formatTime = (time) => {
    return String(time).padStart(2, '0');
  };
 const Time=(pass)=>{
 return passtime && formatTime(pass)
 }
  return (




    <div
      className="maxoff text-between my-md-2 d-sm-flex justify-content-center m-1 border rounded"
      style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
    >
      <div
        className="child text-Center  d-md-flex d-none"
        style={{   height: "6em" }}
      >
        <img
          src={offerimg}
          alt="offer1"
          className="rounded "
          style={{ width: "80%", height: "90%" }}
        />
      </div>

      <div className="child  px-2 w-sm-100     p-1  " style={{  }}>
        <p className="pb-0 mb-0 text-between"  style={{width:"80%"}}>
          <span  style={{ color: "#EF4444", fontSize: "20px" }}>{discount}</span> 
          off
          
          <button
            type="button"
            className="text-center rounded-pill px-3"
            style={{
              backgroundColor: status === "active" ? "green" : "#FEE2E2", // Conditional background color
              color: status === "active" ? "white" : "black", // Conditional text color
              border: "none",
              outline: "none",
            }}
          >
            {status === "active" ? "active" : "inactive"} {/* Conditional text */}
          </button>

        </p>
        <div className="text">Lorem ipsum dolor sit.</div>

        <div className="time">
          <div className="zero text-between">
            <div
              className="first px-2 py-1 rounded text-light m-1"
              style={{ backgroundColor: "#EF4444" }}
            >
              {Time(passDay)}
            </div>
            :
            <div
              className="first px-2 py-1 rounded text-light m-1"
              style={{ backgroundColor: "#EF4444" }}
            >
              {Time(passHour)}
            </div>
            :
            <div
              className="first px-2 py-1 rounded text-light m-1"
              style={{ backgroundColor: "#EF4444" }}
            >
              {Time(passMinint)}
            </div>
            :
            <div
              className="first px-2 py-1 rounded text-light m-1"
              style={{ backgroundColor: "#EF4444" }}
            >
              {Time(passSecond)}
            </div>
          </div>
        </div>
      </div>

      <div
        className="child px-1 pt-1 d-md-block d-none"
        style={{
          width: "30%",
          height: "auto",
          fontSize: "12px",
          borderLeft: "2px dashed #E5E7EB",
        }}
      >
        <div
          className="id rounded text-center py-2"
          style={{
            backgroundColor: "#ECFDF5",
            border: "1px dashed #87F18B",
          }}
        >
          {seasonname}
        </div>
        <p className="detail" style={{ color: "#6B7290" }}>
          * This coupon applies when shopping more than
          <span style={{ fontWeight: "bold" }}> {price} </span>
        </p>
      </div>
    </div>
  );
};

export default Offers;
