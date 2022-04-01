import React, { useState } from "react";
import DashboardStructure from "../DashboardStructure";

import axios from "axios";

import { notifyError, notifySuccess } from "../../utils/toast";

import { Loader } from "../../components/loader/Loader";

// apis

import { apiURL } from "../../routes/api";

const Gallary = ({
  history,
  gallaryImage,
  setGallaryImage,
  gallaryTitle,
  setGallaryTitle,
}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    // const formData = new FormData();
    // formData.append("title", gallaryTitle);
    // formData.append("images", gallaryImage);
    setLoading(true);
    const formData = {
      title: gallaryTitle,
      images: gallaryImage,
    };
    await axios
      .post(`${apiURL}/api/v1/employer/new/gallary`, formData, config)
      .then((res) => {
        setLoading(false);
        notifySuccess("added Sucessfully");
        history.push("/");
      })
      .catch((e) => notifyError(e.message));
  };

  const handleImage = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setGallaryImage((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  return (
    <>
      {/* {loading && <Loader />} */}
      {/* <DashboardStructure captionTitle="Add a gallary"> */}
      <div className="col-md-12">
        <div className="submit-job-form">
          <div className="title">
            <i className="far fa-images"></i> Add a New Gallary
          </div>
          <div className="form">
            <div className="row">
              <div className="col-md-6">
                <div className="input-group">
                  <label>Gallay Title</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    onChange={(e) => setGallaryTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label>Gallery Images </label>
                  <div className="file-area">
                    <input
                      type="file"
                      name="gallery"
                      id="gallery"
                      required="required"
                      multiple
                      onChange={handleImage}
                    />
                    <div className="file-dummy">
                      <div className="success">
                        Great, your files are selected. Keep on.
                      </div>
                      <div className="default">
                        <i className="fas fa-upload"></i>
                        <br />
                        Add Image
                      </div>
                    </div>
                  </div>
                  <p className="small">Maximum file size: 64 MB. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-md-12 submit-job">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Save & Preview
          </button>
        </div> */}
      {/* </DashboardStructure> */}
    </>
  );
};

export default Gallary;
