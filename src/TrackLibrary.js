import React from 'react';

const TrackLibrary = ({ tracks, showTrackForm, handleEdit, handleDelete }) => {
  console.log(tracks);
  return (
    <div>
      <h1>Track Library</h1>
      <div>
        <button className="btn btn-primary mb-4 mt-2" onClick={showTrackForm}>
          + Add Track
        </button>
      </div>
      <table
        className="table table-bordered table-hover"
        aria-label="simple table"
      >
        <thead>
          <tr>
            <th align="right">Id</th>
            <th>Track Name</th>
            <th align="right">Artist Name</th>
            <th align="right">Track Length</th>
            <th align="right" />
            <th align="right" />
          </tr>
        </thead>
        <tbody>
          {tracks
            // .sort(
            //   ({ id: previousID }, { id: currentID }) => previousID - currentID
            // )
            .map((track) => (
              <tr key={track.id}>
                <td component="th" scope="row">
                  {track.id}
                </td>
                <td align="right">{track.trackName}</td>
                <td align="right">{track.artistName}</td>
                <td align="right">{track.trackLength}</td>
                <td align="right">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleEdit(track.id)}
                  >
                    Edit
                  </button>
                </td>
                <td align="right">
                  <button
                    type="button"
                    value="delete"
                    className="btn btn-danger"
                    onClick={() => handleDelete(track.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackLibrary;
