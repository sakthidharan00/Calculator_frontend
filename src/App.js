
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import react, { useEffect, useState } from "react";
import HistoryIcon from '@mui/icons-material/History';
import axios from "axios";


function App() {

  let [value, setValue] = useState([]);
  let [history, setHistory] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://calculator-backend.onrender.com/calculator/data").then((doc) => {

        setHistory(doc.data.history);
      });
    }
    catch {
      console.log("error");
    }
  }, []);



  const equal = async () => {
    if (value ===  0) {
      alert("Invalid Input....")
    }
    else {
      try {

        await axios.put("https://calculator-backend.onrender.com/calculator/data/", { data: value }).then((doc) => {

          const result = eval(value);
          console.log(doc);
          setValue(result);
          setHistory(doc.data.history);
        })

      }
      catch {
        setValue("ERROR....😒")
      }
    }


  }





  return (
    <div className="container-fluid">
      <h3 className="bg-primary">Calculator</h3>
      <div className=" container calculator ">
        {/* row1 */}
        <div className="row">

          <div className="input-group col" >
            <p id="his-dis" className='text-muted' ><HistoryIcon  /> {history}</p>
            <input className="form-control" type="text" placeholder="0" value={value} disabled />
          </div>

        </div>
        <div className="button">

          {/* row 2 */}
          <div className="row">
            <div className="col-3">
              <button onClick={() => setValue(history)}><HistoryIcon /></button>
            </div>
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>/</button>
            </div>
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>*</button>
            </div>
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)} >-</button>
            </div>

          </div>






          {/* row 3 */}
          <div className="row">
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>7</button>
            </div>
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>8</button>
            </div>
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>9</button>
            </div>
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>+</button>
            </div>

          </div>








          {/* row 4 */}

          <div className="row">
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>4</button>
            </div>
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>5</button>
            </div>
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>6</button>
            </div>
            <div className="col-3">
              <button onClick={() => setValue(value.slice(0, -1))}>Del</button>
            </div>

          </div>



          {/* row 5 */}

          <div className="row">
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>1</button>
            </div>
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>2</button>
            </div>
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>3</button>
            </div>
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>.</button>
            </div>

          </div>





          {/* row 6 */}

          <div className="row">
            <div className="col-3">
              <button onClick={() => setValue("")}>Clr</button>
            </div>
            <div className="col-3">
              <button onClick={(e) => setValue(value += e.target.innerText)}>0</button>
            </div>

            <div className="col-6 ">
              <button className="equals" onClick={equal} >=</button>
            </div>

          </div>

        </div>





      </div>

    </div>





  )





}

export default App;
