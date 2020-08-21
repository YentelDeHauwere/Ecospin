import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PostEdit = ({className, children, viewModel, onSave = null, onUpdate = null}) => {
  const [postForm, setPostForm] = useState({
    txtTitle: '',
    txtAdress: '',
    txtBattery: '',
    txtBatteryDuration: '',
  });

  useEffect(() => {
    if (viewModel && viewModel.post) {
      setPostForm({
        txtTitle: viewModel.post.title,
        txtAdress: viewModel.post.adress,
        txtBattery: viewModel.post.battery,
        txtBatteryDuration: viewModel.post.batteryDuration,
      });
    }
  }, [viewModel])

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const post = {
      title: postForm.txtTitle,
      adress: postForm.txtAdress,
      battery: postForm.txtBattery,
      batteryDuration: postForm.txtBatteryDuration,
    };

    if (viewModel.post) {
      onUpdate({
        ...post,
        _id: viewModel.post._id
      });      
    } else {
      onSave(post);
    }
  }

  const handleInputChange = (ev) => {
    setPostForm({
      ...postForm,
      [ev.target.name]: ev.target.value
    });
  }

  /* const handleSelectChange = (ev) => {
    setPostForm({
      ...postForm,
      [ev.target.name]: ev.target.options[ev.target.selectedIndex].value
    });
  } */

  return (
    <div className={classnames(className)}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
  			<h6 className="m-0 font-weight-bold text-primary">{!!viewModel && !!viewModel.post ? <Fragment>Update the post: <strong className="post-edit-strong">{viewModel.post.title}</strong> </Fragment> : <Fragment>Create a new post</Fragment>}</h6>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="txtTitle">Title</label>
              <input type="text" className="form-control edit" id="txtTitle" name="txtTitle" required value={postForm['txtTitle']} onChange={handleInputChange}/>
            </div>
			<div className="form-group">
              <label htmlFor="txtAdress">Adress</label>
              <input type="text" className="form-control edit" id="txtAdress" name="txtAdress" required value={postForm['txtAdress']} onChange={handleInputChange}/>
            </div>
			<div className="form-group">
              <label htmlFor="txtBattery">Battery</label>
              <input type="text" className="form-control edit" id="txtBattery" name="txtBattery" required value={postForm['txtBattery']} onChange={handleInputChange}/>
            </div>
			<div className="form-group">
              <label htmlFor="txtBatteryDuration">Battery Duration</label>
              <input type="text" className="form-control edit" id="txtBatteryDuration" name="txtBatteryDuration" required value={postForm['txtBatteryDuration']} onChange={handleInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary">{!!viewModel && !!viewModel.post ? 'Update' : 'Save'} post</button>
          </form>          
        </div>
      </div>
    </div>
  );
};

PostEdit.prototypes = {
  className: PropTypes.string,
  viewModel: PropTypes.object
};

export default PostEdit;