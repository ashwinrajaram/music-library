import data from '../data/sample.json';
import {
  TOGGLE_TRACK_FORM,
  ADD_TRACK,
  DELETE_TRACK,
  UPDATE_TRACK,
  CLEAR_TRACK_DETAILS,
  SET_TRACK_DETAILS,
} from './action.js';

export const defaultState = {
  tracks: data,
  track: {},
  showForm: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_TRACK_FORM: {
      return { ...state, showForm: !state.showForm };
    }
    case CLEAR_TRACK_DETAILS: {
      return { ...state, track: {} };
    }
    case SET_TRACK_DETAILS: {
      const updatedTrack = action.payload.updatedTrack;
      return { ...state, track: updatedTrack };
    }
    case ADD_TRACK: {
      return {
        ...state,
        tracks: [...state.tracks, action.payload.newTrack],
      };
    }
    case UPDATE_TRACK: {
      const updatedTracks = state.tracks.map((t) => {
        if (t.id == action.payload.track.id) {
          return action.payload.track;
        } else {
          return t;
        }
      });

      return { ...state, tracks: updatedTracks };
    }
    case DELETE_TRACK: {
      const updatedTrackList = state.tracks.filter(
        (t) => action.payload.id !== t.id
      );
      return { ...state, tracks: updatedTrackList };
    }

    default: {
      throw new Error(`action not found ${action.type}`);
    }
  }
};

export default reducer;
