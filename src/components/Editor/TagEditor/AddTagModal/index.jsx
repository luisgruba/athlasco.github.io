import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  withStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import {
  Autocomplete,
} from '@material-ui/lab';

import { setToggleAddModal } from '../../../../redux/actions';

import addTagModalStyles from './addTagModalStyles';

const AddTagModal = (props) => {
  const { dispatch, addModalToggle, tagList } = props;

  const handleSave = () => {
    dispatch(setToggleAddModal(false));
  };

  return (
    <Dialog open={addModalToggle}>
      <DialogTitle>Add New Tag</DialogTitle>
      <DialogContent>
        <TextField
          label='Tag Name'
          fullWidth
          required
          autoFocus/>
        <FormControlLabel control={
          <Checkbox name='selectable' color='primary'/>
        } label='Selectable' />
        <TextField
          label='Description'
          fullWidth
          multiline
          rows={4} />
        <Autocomplete
          options={tagList}
          getOptionLabel={(tag) => tag.name}
          style={{ marginTop: '10px' }}
          renderInput={ (params) => <TextField {...params} label='Parent Tag' variant='outlined' /> }
        />
        <DialogActions>
          <Button onClick={handleSave} color='primary'>Save</Button>
          <Button onClick={() => dispatch(setToggleAddModal(false))} color='primary'>Cancel</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

AddTagModal.propTypes = {
  dispatch: PropTypes.func,
  addModalToggle: PropTypes.bool,
  tagList: PropTypes.array,
};

const mapStateToProps = (state) => ({
  addModalToggle: state.tags.addModalToggle,
  tagList: state.tags.tagList,
});

export default withStyles(addTagModalStyles)(connect(mapStateToProps)(AddTagModal));