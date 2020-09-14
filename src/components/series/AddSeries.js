import React from 'react';
// import PropTypes from 'prop-types';
import Footer from '../../layout/Footer';

const AddSeries = () => (
  <div>
    <div className="row mx-0">
      <div className="w-100 px-0">
        <div className="header-title">
          Add series
        </div>
        <form className="add-stack px-5 pt-5 py-10">
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
            <label className="w-100" htmlFor="episodeHours">
              Episodes completed
              <input
                type="number"
                name="episodes"
                id="episodeHours"
                pattern="[0-9]+([\.,][0-9]+)?"
                step="0.01"
                inputMode="numeric"
                className="form-control"
                placeholder="Episodes completed"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label className="w-100" htmlFor="episodesHoursGoal">
              Episodes goal
              <input
                type="number"
                name="episodesGoal"
                id="stackHoursGoal"
                pattern="[0-9]+([\.,][0-9]+)?"
                step="0.01"
                inputMode="numeric"
                className="form-control"
                placeholder="Episodes goal"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label className="w-100" htmlFor="seasons">
              Seasons completed
              <input
                type="number"
                name="seasons"
                id="seasons"
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
            <label className="w-100" htmlFor="seasonsGoal">
              Seasons goal
              <input
                type="number"
                name="seasonsGoal"
                id="seasonsGoal"
                pattern="[0-9]+([\.,][0-9]+)?"
                step="0.01"
                inputMode="numeric"
                className="form-control"
                placeholder="seasons goal"
                required
              />
            </label>
          </div>
          <button type="submit" className="btn mt-3 custom-button">
            Create Series
          </button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
);

AddSeries.propTypes = {

};

export default AddSeries;
