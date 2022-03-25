import React from "react";

const Gallary = () => {
  return (
    <div className="col-md-12">
      <div className="submit-job-form">
        <div className="title">
          <i className="far fa-images"></i> Media
        </div>
        <div className="form">
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <label>Logo</label>
                <div className="file-area">
                  <input
                    type="file"
                    name="logo"
                    id="logo"
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
                <p className="small">
                  The image will be shown on listing cards.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <label>Cover Image</label>
                <div className="file-area">
                  <input
                    type="file"
                    name="cover"
                    id="cover"
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
                <p className="small">
                  The image will be shown on listing cards.{" "}
                </p>
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
            <div className="col-md-6">
              <div className="input-group">
                <label>Video</label>
                <input
                  type="text"
                  placeholder="A link to a video about your company"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
