import { useRef } from "react";

function App() {
  const renderCount = useRef(0);
  return (
    <div>
      <div className="container">
        {
          <button id="launches-area-toggler" className="btn btn-primary mb-4">
            Toggle launches area
          </button>
        }

        <RenderCounter count={++renderCount.current} />
      </div>

      <div className="container">
        {
          <div id="launches-area" className="d-block">
            <h3>Launches area</h3>
            <ul className="list-group mb-4">
              <li className="list-group-item list-group-item-primary">
                November
                <span className="badge bg-primary ms-2 rounded-pill">4</span>
              </li>

              <li className="list-group-item">SAOCOM 1A</li>
              <li className="list-group-item">KoreaSat 5A</li>
              <li className="list-group-item">Iridium NEXT Mission 3</li>
              <li className="list-group-item">SES-11 / Echostar 105</li>
              <li className="list-group-item list-group-item-primary">
                July
                <span className="badge bg-primary ms-2 rounded-pill">3</span>
              </li>
              <li className="list-group-item">BETTYRGAMBARELLA</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">SES-11 / Echostar 105</li>
              <li className="list-group-item list-group-item-primary">
                March
                <span className="badge bg-primary ms-2 rounded-pill">1</span>
              </li>
              <li className="list-group-item">Morbi</li>
              <li className="list-group-item list-group-item-primary">
                Another month name
                <span className="badge bg-primary ms-2 rounded-pill">
                  Launches count
                </span>
              </li>
              <li className="list-group-item">Mission name(mission_name)</li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
}

const RenderCounter = ({ count }) => (
  <div className="mb-4">
    Render count{" "}
    <strong style={{ color: count > 1 ? "red" : "green" }}>{count}</strong>
  </div>
);

export default App;
