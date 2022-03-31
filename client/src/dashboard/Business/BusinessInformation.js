import React, { useEffect, useState } from "react";
import { apiURL } from "../../routes/api";
import axios from "axios";

const BusinessInformation = ({ setAddress, address }) => {
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const fetchState = async () => {
    await axios
      .get(`${apiURL}/api/v1/get/all/state`)
      .then((res) => setState(res.data.state))
      .catch((e) => console.log(e));
  };

  const fetchCity = async (id) => {
    await axios
      .get(`${apiURL}/api/v1/get/city?id=${id}`)
      .then((res) => setCity(res.data.city))
      .catch((e) => console.log(e));
  };

  useEffect(async () => {
    fetchState();
  }, []);

  const handleState = (e) => {
    const { value } = e.target;
    setAddress({ ...address, state: value });
    fetchCity(value);
  };

  const handleCity = (e) => {
    setAddress({ ...address, city: e.target.value });
  };

  return (
    <div className="col-md-12">
      <div className="submit-job-form">
        <div className="title">
          <i className="fas fa-headphones"></i> Business information{" "}
        </div>
        <div className="form">
          <div className="row">
            <div className="col-md-12">
              <div className="input-group">
                <label>Listing Region </label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="input-group">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="e.g 34 Wigmore Street"
                  onChange={(e) =>
                    setAddress({ ...address, add: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label>State</label>
                <select>
                  <option onChange={handleState}>Please select State</option>
                  {state &&
                    state.map((item) => (
                      <option value={item._id}>{item.stateName}</option>
                    ))}
                </select>
              </div>
              <div className="input-group">
                <label>City</label>
                <select onChange={handleCity}>
                  <option>Please select State First</option>
                  {city &&
                    city.map((item) => (
                      <option value={item._id}>{item.cityName}</option>
                    ))}
                </select>
              </div>
              <div className="input-group">
                <label>Pin</label>
                <input
                  type="text"
                  placeholder="e.g 110001"
                  onChange={(e) =>
                    setAddress({ ...address, pincode: e.target.value })
                  }
                />
              </div>
            </div>

            {/* <div className="input-group">
              <label>Phone</label>
              <input type="text" placeholder="e.g +84-669-996" />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="text" placeholder="e.g youremail@email.com" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;
