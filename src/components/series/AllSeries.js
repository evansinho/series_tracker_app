/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import { getMovies } from '../../redux/actions/movieActions';
import Footer from '../../layout/Footer';

const AllSeries = ({ getMovies, series }) => {
  useEffect(() => {
    getMovies();
  }, []);

  const result = (episode, episode_goal, season, season_goal) => {
    if (episode_goal + season_goal === 0) {
      return 100;
    }
    const percentage = ((episode + season) / (episode_goal + season_goal)) * 100;
    return percentage >= 100 ? 100 : Math.round(percentage);
  };

  const allStacks = series.map(serie => (
    <div key={serie.id} className="p-0">
      <div className="card mb-5 each-serie">
        <div className="card-body d-flex justify-content-between align-items-center">
          <PieChart
            data={[{
              value: 1, color: '#8ce08a', key: `${result(serie.episode, serie.episode_goal, serie.season, serie.season_goal)} %`,
            }]}
            reveal={result(serie.episode, serie.episode_goal, serie.season, serie.season_goal)}
            lineWidth={20}
            animate
            className="pie-chart"
            label={({ dataEntry }) => dataEntry.key}
            labelStyle={{ fontSize: '1.4rem' }}
          />
          <h5 className="card-title m-0">{serie.name}</h5>
          <Link
            to={{ pathname: `/series/${serie.id}` }}
            className="btn custom-button"
          >
            View series
          </Link>
        </div>
      </div>
    </div>
  ));

  const noSeries = (
    <div className="d-flex align-items-center justify-content-center">
      <h4>
        No series yet. Why not create one?
      </h4>
    </div>
  );

  return (
    <>
      <div className="header-title">
        Track.it
      </div>
      <div className="py-10">
        <main className="container p-0">
          <div className="m-0">
            {series.length > 0 ? allStacks : noSeries}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

AllSeries.propTypes = {
  getMovies: PropTypes.func.isRequired,
  series: PropTypes.shape([]).isRequired,
};

const mapStateToProps = state => ({
  series: state.movies.movies,
});

export default connect(mapStateToProps, { getMovies })(AllSeries);
