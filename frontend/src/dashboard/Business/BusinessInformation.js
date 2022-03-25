import React from "react";

const BusinessInformation = () => {
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
                <input type="text" placeholder="e.g 34 Wigmore Street" />
              </div>
              <div className="input-group">
                <label>State</label>
                <select>
                  <option>Please select Country</option>
                </select>
              </div>
              <div className="input-group">
                <label>City</label>
                <input type="text" placeholder="51.4980073" />
              </div>
              <div className="input-group">
                <label>Pin</label>
                <input type="text" placeholder="e.g 110001" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="e.g 34 Wigmore Street, London"
                />
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1639134857889!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="input-group">
              <label>Phone</label>
              <input type="text" placeholder="e.g +84-669-996" />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="text" placeholder="e.g youremail@email.com" />
            </div>
            <div className="input-group">
              <label>Website</label>
              <input
                type="text"
                name="website"
                placeholder="e.g yourwebsite.com"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;
