/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../../layout/Footer';
import { getMovie, updateMovie } from '../../redux/actions/movieActions';

const EditSeries = ({
  getMovie, match, series, updateMovie, history,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    episode: '',
    episode_goal: '',
    season: '',
    season_goal: '',
  });

  const { id } = match.params;
  useEffect(() => {
    getMovie(id);
    setFormData({
      name: !series.name ? '' : series.name,
      episode: !series.episode ? '' : series.episode,
      episode_goal: !series.episode_goal ? '' : series.episode_goal,
      season: !series.season ? '' : series.season,
      season_goal: !series.season_goal ? '' : series.season_goal,
    });
  }, []);

  const {
    name, episode, episode_goal, season, season_goal,
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    updateMovie(id, {
      name, episode, episode_goal, season, season_goal,
    }, history);
  };

  return (
    <div>
      <div className="row mx-0">
        <div className="w-100 px-0">
          <div className="header-title">
            Edit
          </div>
          <form className="add-stack px-5 pt-5 py-10 mb-5" onSubmit={onSubmit}>
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
                  value={episode}
                  onChange={onChange}
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
                  value={episode_goal}
                  onChange={onChange}
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
                  value={season}
                  onChange={onChange}
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
                  value={season_goal}
                  onChange={onChange}
                />
              </label>
            </div>
            <button type="submit" className="d-block btn mt-3 custom-button mb-3">
              Save Changes
            </button>
            <Link to={`/series/${id}`} className="btn btn-lg custom-button">
              Back to series
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

EditSeries.propTypes = {
  getMovie: PropTypes.func.isRequired,
  series: PropTypes.shape({}).isRequired,
  updateMovie: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  series: state.movies.movie,
});

export default connect(mapStateToProps, { getMovie, updateMovie })(withRouter(EditSeries));
