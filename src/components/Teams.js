import React from 'react';
import { Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { getTeamNames } from '../api';
import TeamLogo from './TeamLogo';
import Team from './Team';
import Loading from './Loading';

function teamReducer(state, action) {
  if (action.type === 'success') {
    return {
      teamNames: action.teamNames,
      loading: false,
      error: null
    };
  } else if (action.type === 'error') {
    return {
      ...state,
      loading: false,
      error: action.message
    };
  } else {
    throw new Error(`That action type isn't supported`);
  }
}

function useFetch() {
  const [state, dispatch] = React.useReducer(teamReducer, {
    teamNames: [],
    loading: true,
    error: null
  });
  React.useEffect(() => {
    getTeamNames()
      .then(teamNames => {
        dispatch({ type: 'success', teamNames });
      })
      .catch(({ message }) => dispatch({ type: 'error', message }));
  }, []);
  return {
    teamNames: state.teamNames,
    loading: state.loading,
    error: state.error
  };
}

export default function Teams({ match, location }) {
  const { teamNames, loading, error } = useFetch();

  if (error) {
    return <p className='center-text error'>{error}</p>;
  }

  return (
    <div className='container two-column'>
      <Sidebar
        loading={loading}
        title='Teams'
        list={teamNames}
        location={location}
        match={match}
      />

      {loading === false && location.pathname === '/teams' ? (
        <div className='sidebar-instruction'>Select a Team</div>
      ) : null}

      <Route
        path={`${match.url}/:teamId`}
        render={({ match }) => (
          <div className='panel'>
            <Team id={match.params.teamId}>
              {team =>
                team === null ? (
                  <Loading />
                ) : (
                  <div style={{ width: '100%' }}>
                    <TeamLogo id={team.id} className='center' />
                    <h1 className='medium-header'>{team.name}</h1>
                    <ul className='info-list row'>
                      <li>
                        Established<div>{team.established}</div>
                      </li>
                      <li>
                        Manager<div>{team.manager}</div>
                      </li>
                      <li>
                        Coach<div>{team.coach}</div>
                      </li>
                    </ul>
                    <Link
                      className='center btn-main'
                      to={`/${match.params.teamId}`}
                    >
                      {team.name} Team Page
                    </Link>
                  </div>
                )
              }
            </Team>
          </div>
        )}
      />
    </div>
  );
}
