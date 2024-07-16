import React, { useReducer } from 'react';
import TrackLibrary from './TrackLibrary.js';
import TrackForm from './TrackForm.js';
import './style.css';
import { nanoid } from 'nanoid';
import {
  TOGGLE_TRACK_FORM,
  ADD_TRACK,
  DELETE_TRACK,
  UPDATE_TRACK,
  CLEAR_TRACK_DETAILS,
  SET_TRACK_DETAILS,
} from './action.js';
import reducer, { defaultState } from './reducer.js';

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const toggleTrackForm = () => {
    dispatch({ type: TOGGLE_TRACK_FORM });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const updatedTrack = { ...state.track, [name]: e.target.value };
    dispatch({ type: SET_TRACK_DETAILS, payload: { updatedTrack } });
  };

  const handleBack = () => {
    dispatch({ type: CLEAR_TRACK_DETAILS });
    dispatch({ type: TOGGLE_TRACK_FORM });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.track.id) {
      dispatch({ type: UPDATE_TRACK, payload: { track: state.track } });
    } else {
      dispatch({
        type: ADD_TRACK,
        payload: { newTrack: { ...state.track, id: nanoid() } },
      });
    }
    dispatch({ type: TOGGLE_TRACK_FORM });
    dispatch({ type: CLEAR_TRACK_DETAILS });
  };

  const handleEdit = (id) => {
    const updatedTrack = state.tracks.find((t) => t.id == id);
    dispatch({ type: SET_TRACK_DETAILS, payload: { updatedTrack } });
    dispatch({ type: TOGGLE_TRACK_FORM });
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE_TRACK, payload: { id } });
  };

  return (
    <div>
      {state.showForm ? (
        <TrackForm
          track={state.track}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
        />
      ) : (
        <TrackLibrary
          tracks={state.tracks}
          showTrackForm={toggleTrackForm}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default App;
