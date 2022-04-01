import React, { useState } from "react";

const BusinessSocials = ({ setSocial, social }) => {
  return (
    <div className="col-md-12">
      <div className="submit-job-form">
        <div className="title">
          <i className="fas fa-share-alt"></i> Business Social{" "}
        </div>
        <div className="form">
          <div className="input-group">
            <label>Facebook Profile Link</label>
            <input
              type="text"
              placeholder="https://facebook.com/"
              onChange={(e) =>
                setSocial({
                  ...social,
                  facebook: e.target.value,
                })
              }
            />
          </div>
          <div className="input-group">
            <label>Twiter Profile Link</label>
            <input
              type="text"
              placeholder="https://twitter.com/"
              onChange={(e) =>
                setSocial({
                  ...social,
                  twitter: e.target.value,
                })
              }
            />
          </div>
          <div className="input-group">
            <label>Instagram Profile Link </label>
            <input
              type="text"
              placeholder="https://instagram.com/"
              onChange={(e) =>
                setSocial({
                  ...social,
                  instagram: e.target.value,
                })
              }
            />
          </div>
          <div className="input-group">
            <label>YouTube Channel Link </label>
            <input
              type="text"
              placeholder="https://youtube.com/"
              onChange={(e) =>
                setSocial({
                  ...social,
                  youtube: e.target.value,
                })
              }
            />
          </div>
          <div className="input-group">
            <label>LinkedIn Profile Link </label>
            <input
              type="text"
              placeholder="https://linkedin.com/"
              onChange={(e) =>
                setSocial({
                  ...social,
                  linkedin: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSocials;
