import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { getTeamNames, getTeamsArticles } from '../api';
import TeamLogo from './TeamLogo';
import Team from './Team';
import Loading from './Loading';
import slug from 'slug';

function teamPageReducer(state, action) {
  if (action.type === 'success') {
    return {
      teamNames: action.teamNames,
      articles: action.articles,
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

function useFetch({ match }) {
  const [state, dispatch] = React.useReducer(teamPageReducer, {
    teamNames: [],
    articles: [],
    loading: true,
    error: null
  });

  React.useEffect(() => {
    Promise.all([getTeamNames(), getTeamsArticles(match.params.teamId)])
      .then(([teamNames, articles]) => {
        dispatch({
          type: 'success',
          teamNames,
          articles
        });
      })
      .catch(({ message }) =>
        dispatch({
          type: 'error',
          message
        })
      );
  }, [match.params.teamId]);

  return {
    teamNames: state.teamNames,
    articles: state.articles,
    error: state.error,
    loading: state.loading
  };
}
// export default function TeamPage({ match }) {

export default function TeamPage(props) {
  const { match } = props;
  // console.log('match:', match)
  const { teamNames, articles, loading } = useFetch({match});
  const { teamId } = match.params;

  if (loading === false && teamNames.includes(teamId) === false) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <Team id={teamId}>
        {team =>
          team === null ? (
            <Loading />
          ) : (
            <div className='panel'>
              <TeamLogo id={teamId} />
              <h1 className='medium-header'>{team.name}</h1>
              <h4 style={{ margin: 5 }}>
                <Link
                  style={{ cursor: 'pointer' }}
                  to={{ pathname: '/players', search: `?teamId=${teamId}` }}
                >
                  View Roster
                </Link>
              </h4>
              <h4>Championships</h4>
              <ul className='championships'>
                {team.championships.map(ship => (
                  <li key={ship}>{ship}</li>
                ))}
              </ul>
              <ul className='info-list row' style={{ width: '100%' }}>
                <li>
                  Established<div>{team.established}</div>
                </li>
                <li>
                  Manager<div>{team.manager}</div>
                </li>
                <li>
                  Coach<div>{team.coach}</div>
                </li>
                <li>
                  Record
                  <div>
                    {team.wins}-{team.losses}
                  </div>
                </li>
              </ul>
              <h2 className='header'>Articles</h2>
              <ul className='articles'>
                {articles.map(article => (
                  <li key={article.id}>
                    <Link to={`${match.url}/articles/${slug(article.title)}`}>
                      <h4 className='article-title'>{article.title}</h4>
                      <div className='article-date'>
                        {article.date.toLocaleDateString()}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </Team>
    </div>
  );
}
