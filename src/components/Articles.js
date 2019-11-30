import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Article from './Article';
import { getTeamsArticles } from '../api';
import Loading from './Loading';

function useFetch(match) {
  const [teamsArticles, setTeamsArticles] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(true);

  React.useEffect(() => {
    getTeamsArticles(match.params.teamId)
      .then(teamsArticles => {
        setTeamsArticles(teamsArticles.map(article => article.title));
        setLoading(false);
        setError(null);
      })
      .catch(e => {
        console.warn(e.message);
        setError('Error fetching data. Please try again.');
        setLoading(false);
      });
  }, [match.params.teamId]);

  return {
    teamsArticles,
    loading,
    error
  };
}

export default function Articles({ match, location }) {
  const { teamsArticles, loading, error } = useFetch((match = { ...match }));
  const { params, url } = match;
  const { teamId } = params;

  if (error) {
    return <p className='center-text error'>{error}</p>;
  }

  return loading === true ? (
    <Loading />
  ) : (
    <div className='container two-column'>
      <Sidebar
        loading={loading}
        title='Articles'
        list={teamsArticles}
        location={location}
        match={match}
      />

      <Route
        path={`${url}/:articleId`}
        render={({ match }) => (
          <Article articleId={match.params.articleId} teamId={teamId}>
            {article =>
              !article ? (
                <h1>Loading</h1>
              ) : (
                <div className='panel'>
                  <article className='article' key={article.id}>
                    <h1 className='header'>{article.title}</h1>
                    <p>{article.body}</p>
                  </article>
                </div>
              )
            }
          </Article>
        )}
      />
    </div>
  );
}
