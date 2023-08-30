import React from 'react'

const Cards = () => {
  return (
    <div>
        <div
          className="card mt-4"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img className="card-img-top" src="https://cdn.vox-cdn.com/thumbor/DPxsTnKUllmt22Mj3FM8RodNWU8=/0x80:2400x1600/1200x900/filters:focal(1120x990:1504x1374)/cdn.vox-cdn.com/uploads/chorus_image/image/59365469/_MG_2449.88.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Feeling Foody? Here are We</p>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100 bg-danger rounded">
                <option value="half"> Half </option>
                <option value="full"> Full </option>
              </select>

              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Cards