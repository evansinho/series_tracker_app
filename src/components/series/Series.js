/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PieChart } from 'react-minimal-pie-chart';
import Footer from '../../layout/Footer';
import Spinner from '../../layout/Spinner';
import { getMovie, deleteMovie } from '../../redux/actions/movieActions';
import projectsImg from '../../images/projects.png';
import hoursImg from '../../images/hours.png';

const Series = ({
  getMovie, series, match, deleteMovie,
}) => {
  const { id } = match.params;
  useEffect(() => {
    getMovie(id);
  }, []);

  const result = (episode, goal) => {
    if (goal === 0) {
      return 100;
    }
    const percentage = (episode / goal) * 100;
    return percentage >= 100 ? 100 : Math.round(percentage);
  };

  const history = useHistory();

  const handleDelete = e => {
    e.preventDefault();
    deleteMovie(id);
    history.push('/series');
  };

  return series ? (
    <div className="h-100 d-flex flex-column">
      <div className="header-title">
        {series.name}
      </div>
      <div>
        <div className="pie-chart-ctn d-flex justify-content-around align-items-center p-5">
          <div className="d-flex flex-column align-items-center justify-content-around">
            <PieChart
              data={[{
                value: 1, color: '#8ce08a', key: `${result(series.episode, series.episode_goal)} %`,
              }]}
              reveal={result(series.episode, series.episode_goal)}
              lineWidth={20}
              animate
              className="pie-chart"
              label={({ dataEntry }) => dataEntry.key}
              labelStyle={{ fontSize: '1.6rem' }}
            />
            <p className="mt-2">Hours</p>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-around">
            <PieChart
              data={[{
                value: 1, color: '#8ce08a', key: `${result(series.season, series.season_goal)} %`,
              }]}
              reveal={result(series.season, series.season_goal)}
              lineWidth={20}
              animate
              className="pie-chart"
              label={({ dataEntry }) => dataEntry.key}
              labelStyle={{ fontSize: '1.6rem' }}
            />
            <p className="mt-2">Projects</p>
          </div>
        </div>
        <div>
          <div className="d-flex flex-column justify-content-around align-items-center">
            <div className="mt-3 d-flex justify-content-around align-items-center stats-ctn p-5">
              <img className="stack-img" src={hoursImg} alt="hours" />
              <div className="text-center ml-1">
                {series.episode}
                {' '}
                /
                {series.episode_goal}
                {' '}
                episode completed
              </div>
            </div>
            <div className="mt-3 d-flex justify-content-around align-items-center stats-ctn p-5">
              <img className="stack-img" src={projectsImg} alt="projects" />
              <div className="text-center ml-1">
                {series.season}
                {' '}
                /
                {series.season_goal}
                {' '}
                season completed
              </div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-around align-items-center mt-3 py-10 stack-buttons">
            <Link to="/series" className="btn btn-lg custom-button mb-3">
              Back to stacks
            </Link>
            <Link
              to={`/edit/${series.id}`}
              className="btn btn-lg custom-button mb-3"
              role="button"
            >
              Edit Series
            </Link>
            <button onClick={handleDelete} type="button" className="btn btn-lg custom-button delete-btn">
              Delete Series
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : <Spinner />;
};

Series.propTypes = {
  getMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  series: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  series: state.movies.movie,
});

export default connect(mapStateToProps, { getMovie, deleteMovie })(Series);
