import React from "react";

const BusinessSocials = () => {
  return (
    <div className="col-md-12">
      <div className="submit-job-form">
        <div className="title">
          <i className="fas fa-share-alt"></i> Business Social{" "}
        </div>
        <div className="form">
          <div className="input-group">
            <label>Facebook Profile Link</label>
            <input type="text" placeholder="https://facebook.com/" />
          </div>
          <div className="input-group">
            <label>Twiter Profile Link</label>
            <input type="text" placeholder="https://twitter.com/" />
          </div>
          <div className="input-group">
            <label>Instagram Profile Link </label>
            <input type="text" placeholder="https://instagram.com/" />
          </div>
          <div className="input-group">
            <label>YouTube Channel Link </label>
            <input type="text" placeholder="https://youtube.com/" />
          </div>
          <div className="input-group">
            <label>LinkedIn Profile Link </label>
            <input type="text" placeholder="https://linkedin.com/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSocials;
