/* eslint-disable camelcase */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addMovies } from '../../redux/actions/movieActions';
import Footer from '../../layout/Footer';

const AddSeries = ({ addMovies }) => {
  const [formData, setFormData] = useState({
    name: '',
    episode: '',
    episode_goal: '',
    season: '',
    season_goal: '',
  });
  const {
    name, episode, episode_goal, season, season_goal,
  } = formData;

  const history = useHistory();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    addMovies({
      name, episode, episode_goal, season, season_goal,
    });
    history.push('/series');
  };

  return (
    <div>
      <div className="row mx-0">
        <div className="w-100 px-0">
          <div className="header-title">
            Add series
          </div>
          <form className="add-stack px-5 pt-5 py-10" onSubmit={onSubmit}>
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
                  value={name}
                  onChange={onChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label className="w-100" htmlFor="episodeHours">
                Episodes completed
                <input
                  type="number"
                  name="episode"
                  id="episodeHours"
                  pattern="[0-9]+([\.,][0-9]+)?"
                  step="0.01"
                  inputMode="numeric"
                  className="form-control"
                  placeholder="Episodes completed"
                  required
                  value={episode}
                  onChange={onChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label className="w-100" htmlFor="episodesHoursGoal">
                Episodes goal
                <input
                  type="number"
                  name="episode_goal"
                  id="stackHoursGoal"
                  pattern="[0-9]+([\.,][0-9]+)?"
                  step="0.01"
                  inputMode="numeric"
                  className="form-control"
                  placeholder="Episodes goal"
                  required
                  value={episode_goal}
                  onChange={onChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label className="w-100" htmlFor="seasons">
                Seasons completed
                <input
                  type="number"
                  name="season"
                  id="seasons"
                  pattern="[0-9]+([\.,][0-9]+)?"
                  step="0.01"
                  inputMode="numeric"
                  className="form-control"
                  placeholder="Seasons completed"
                  required
                  value={season}
                  onChange={onChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label className="w-100" htmlFor="season_Goal">
                Seasons goal
                <input
                  type="number"
                  name="season_goal"
                  id="season_Goal"
                  pattern="[0-9]+([\.,][0-9]+)?"
                  step="0.01"
                  inputMode="numeric"
                  className="form-control"
                  placeholder="seasons goal"
                  required
                  value={season_goal}
                  onChange={onChange}
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
};

AddSeries.propTypes = {
  addMovies: PropTypes.func.isRequired,
  movie: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { addMovies })(AddSeries);
