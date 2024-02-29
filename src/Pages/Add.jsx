import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ADD_USER } from "../Action/Action";

const Add = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  const [deg, setdeg] = useState("");
  const [salary, setsalary] = useState("");
  const [contact, setcontact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 1000);
    let obj = { id, name, email, password, city, deg, salary, contact };
    dispatch(ADD_USER(obj));
    setname("");
    setemail("");
    setpassword("");
    setcity("");
    setdeg("");
    setsalary("");
    setcontact("");
    alert("Record added");
    navigate('/')
  };

  return (
    <center>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit} className="w-25">
        <div>
          <tr>
          <td>Name :- </td>
          <td>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
          </td>
          </tr>
          <td>Email : - </td>
          <td>
            <input
              type="text"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
          </td>
          <tr>
            <td>Password :- </td>
            <td>
              <input
                type="text"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
              />
            </td>
          </tr>
          <tr>
            <td>City :- </td>
            <td>
              <input type="text" onChange={(e) => setcity(e.target.value)}  value={city}/>
             
            </td>
          </tr>
          <tr>
            <td>Degignation :- </td>
            <td>
              <input type="text" onChange={(e) => setdeg(e.target.value)} value={deg}/>
              
            </td>
          </tr>
          <tr>
            <td>Salary :- </td>
            <td>
              <input type="text" onChange={(e) => setsalary(e.target.value)}  value={salary}/>
             
            </td>
          </tr>
          <tr>
            <td>Contact :- </td>
            <td>
              <input type="text" onChange={(e) => setcontact(e.target.value)} value={contact}/>
              
            </td>
          </tr>{" "}
          
        </div>
        <button type="submit" className="mt-3 btn btn-sm btn-primary">
          Submit
        </button>
      </form>

    
      <Link to={`/`}>View</Link>
    </center>
  );
};

export default Add;
