import React from 'react';
import Footer from '../../layout/Footer';
// import PropTypes from 'prop-types';

const EditSeries = () => (
  <div>
    <div className="row mx-0">
      <div className="w-100 px-0">
        <div className="header-title">
          Edit
        </div>
        <form className="add-stack px-5 pt-5 py-10 mb-5">
          <div className="form-group">
            <label className="w-100" htmlFor="seriesName">
              Series name
              <input
                type="text"
                name="name"
                id="seriesName"
                className="form-control"
                placeholder="Name"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label className="w-100" htmlFor="episode">
              Episode completed
              <input
                type="number"
                name="episode"
                id="episode"
                pattern="[0-9]+([\.,][0-9]+)?"
                step="0.01"
                inputMode="numeric"
                className="form-control"
                placeholder="Hours completed"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label className="w-100" htmlFor="episodeHoursGoal">
              Episodes goal
              <input
                type="number"
                name="episodeGoal"
                id="episodeGoal"
                pattern="[0-9]+([\.,][0-9]+)?"
                step="0.01"
                inputMode="numeric"
                className="form-control"
                placeholder="Episode goal"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label className="w-100" htmlFor="season completed">
              Seasons completed
              <input
                type="number"
                name="seasons"
                pattern="[0-9]+([\.,][0-9]+)?"
                step="0.01"
                inputMode="numeric"
                className="form-control"
                placeholder="Seasons completed"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label className="w-100" htmlFor="SeasonsGoal">
              Seasons goal
              <input
                type="number"
                name="SeasonsGoal"
                id="seasonsProjectsGoal"
                pattern="[0-9]+([\.,][0-9]+)?"
                step="0.01"
                inputMode="numeric"
                className="form-control"
                placeholder="Seasons goal"
                required
              />
            </label>
          </div>
          <button type="submit" className="d-block btn mt-3 custom-button mb-3">
            Save Changes
          </button>
          {/* <Link to={`/series/${id}`} className="btn btn-lg custom-button">
              Back to stack
            </Link> */}
        </form>
      </div>
    </div>
    <Footer />
  </div>
);

// EditSeries.propTypes = {

// };

export default EditSeries;
