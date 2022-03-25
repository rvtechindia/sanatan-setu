import React from "react";

export const AddCompany = () => {
  return (
    <section class="padding40 " style="margin-top: -90px;">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="submit-job-form">
              <div class="title">
                <i class="fas fa-align-justify"></i> Company Details
              </div>
              <div class="form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-group">
                      <label>
                        Company name <span class="red">*</span>
                      </label>
                      <input type="text" placeholder="Company full name" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label>
                        Company Tagline (optional) <span class="red">*</span>
                      </label>
                      <input type="text" placeholder="Company tagline" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label>
                        Headquarters (optional) <span class="red">*</span>
                      </label>
                      <input type="text" placeholder="e.g. London" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label>
                        Company Website (optional) <span class="red">*</span>
                      </label>
                      <input type="text" placeholder="Company website" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="input-group">
                      <label>
                        Address <span class="red">*</span>
                      </label>
                      <input type="text" placeholder="Address " />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label>
                        Email (optional) <span class="red">*</span>
                      </label>
                      <input type="text" placeholder="you@yourdomain.com" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label>
                        Phone (optional) <span class="red">*</span>
                      </label>
                      <input type="text" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label>
                        Twitter (optional) <span class="red">*</span>
                      </label>
                      <input type="text" placeholder="Twitter page url" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label>
                        Facebook (optional) <span class="red">*</span>
                      </label>
                      <input type="text" placeholder="Facebook page url" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="input-group">
                      <label>
                        Short Description (optional) <span class="red">*</span>
                      </label>
                      <textarea></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="submit-job-form">
              <div class="title">
                <i class="far fa-images"></i> Company Logo (optional)
              </div>
              <div class="form">
                <div class="row">
                  <div class="col-md-12">
                    <div class="input-group">
                      <label>Company Logo (optional)</label>
                      <div class="file-area">
                        <input
                          type="file"
                          name="logo"
                          id="logo"
                          required="required"
                          multiple
                        />
                        <div class="file-dummy">
                          <div class="success">
                            Great, your files are selected. Keep on.
                          </div>
                          <div class="default">
                            <i class="fas fa-upload"></i>
                            <br />
                            Add Image
                          </div>
                        </div>
                      </div>
                      <p class="small">Maximum file size: 100 MB. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 submit-job text-center">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};
