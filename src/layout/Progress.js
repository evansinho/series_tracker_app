import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import { getProgress } from '../redux/actions/movieActions';
import Footer from './Footer';
// import Spinner from './Spinner';

const Progress = ({ getProgress, progress }) => {
  const result = (episode, goal) => {
    if (goal === 0) {
      return 100;
    }
    const percentage = (episode / goal) * 100;
    return percentage >= 100 ? 100 : Math.round(percentage);
  };

  useEffect(() => {
    getProgress();
  }, []);

  console.log(progress);

  return (
    <>
      <div className="header-title">
        Progress report
      </div>
      <div className="py-10">
        <main className="container">
          <div className="text-center">
            <div>
              <div className="d-flex flex-column justify-content-arount align-items-center">
                <div className="mb-3 p-3 d-flex flex-column align-items-center justify-content-around stats-ctn">
                  <PieChart
                    data={[{
                      value: 1, color: '#8ce08a', key: `${result(progress.total_episode, progress.total_episode_goal)} %`,
                    }]}
                    reveal={result(progress.total_episode, progress.total_episode_goal)}
                    lineWidth={20}
                    animate
                    className="pie-chart mb-3"
                    label={({ dataEntry }) => dataEntry.key}
                    labelStyle={{ fontSize: '1.6rem' }}
                  />
                  <p className="text-center">
                    {progress.total_episode}
                    {' '}
                    /
                    {' '}
                    {progress.total_episode_goal}
                    {' '}
                    episodes completed
                  </p>
                </div>
                <div className="p-3 d-flex flex-column align-items-center justify-content-around stats-ctn">
                  <PieChart
                    data={[{
                      value: 1, color: '#8ce08a', key: `${result(progress.total_season, progress.total_season_goal)} %`,
                    }]}
                    reveal={result(progress.total_season, progress.total_season_goal)}
                    lineWidth={20}
                    animate
                    className="pie-chart mb-3"
                    label={({ dataEntry }) => dataEntry.key}
                    labelStyle={{ fontSize: '1.6rem' }}
                  />
                  <p className="text-center">
                    {progress.total_season}
                    {' '}
                    /
                    {' '}
                    {progress.total_season_goal}
                    {' '}
                    seasons completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

Progress.propTypes = {
  progress: PropTypes.shape({
    total_episode: PropTypes.number.isRequired,
    total_episode_goal: PropTypes.number.isRequired,
    total_season: PropTypes.number.isRequired,
    total_season_goal: PropTypes.number.isRequired,
  }).isRequired,
  getProgress: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  progress: state.movies.progress,
});

export default connect(mapStateToProps, { getProgress })(Progress);
