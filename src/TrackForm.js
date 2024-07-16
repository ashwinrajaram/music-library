import React, { useEffect, useRef } from 'react';

const TrackForm = ({ track, handleChange, handleSubmit, handleBack }) => {
  const trackNameRef = useRef(null);

  useEffect(() => {
    trackNameRef.current.focus();
  }, []);

  return (
    <div className="formDiv">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Create a new track</h1>
        <label>Track Name :* </label>
        <br />
        <input
          type="text"
          value={track.trackName}
          onChange={(e) => handleChange(e)}
          required
          name="trackName"
          ref={trackNameRef}
        />
        <br />
        <label>Artist Name :* </label>
        <br />
        <input
          type="text"
          value={track.artistName}
          onChange={(e) => handleChange(e)}
          name="artistName"
          required
        />
        <br />
        <label>Track Length :* </label>
        <br />
        <input
          type="number"
          value={track.trackLength}
          onChange={(e) => handleChange(e)}
          step=".01"
          name="trackLength"
          required
        />
        <br />
        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <button className="btn btn-danger ml-2" onClick={handleBack}>
          Back
        </button>
      </form>
    </div>
  );
};

export default TrackForm;
