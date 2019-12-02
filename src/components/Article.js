import React from 'react';
import PropTypes from 'prop-types';
import { getArticle } from '../api';

export default function Article(props) {
  const [article, setArticle] = React.useState(null);
  const { teamId, articleId, children } = props;

  const fetchArticle = (teamId, articleId) => {
    setArticle(() => null);
    getArticle(teamId, articleId).then(article => setArticle(() => article));
  };

  React.useEffect(() => {
    fetchArticle(teamId, articleId);
  }, [teamId, articleId]);

  return children(article);
}

Article.propTypes = {
  teamId: PropTypes.string.isRequired,
  articleId: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};
