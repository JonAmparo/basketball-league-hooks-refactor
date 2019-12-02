import React from 'react';
import TeamLogo from './TeamLogo';
import { Link } from 'react-router-dom';
import { getTeamNames } from '../api';

export default function Home() {
  const [teamNames, setTeamNames] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getTeamNames()
      .then(teams => {
        setTeamNames(teams);
      })
      .catch(e => {
        console.warn(e.message);
        setError('Error fetching data. Please try again.');
      }, []);
  });

  if (error) {
    return <p className='center-text error'>{error}</p>;
  }

  return (
    <div className='container'>
      <h1 className='large-header'>Hash History Basketball League</h1>
      <h3 className='header text-center'>Select a team</h3>
      <div className='home-grid'>
        {teamNames.map(id => (
          <Link key={id} to={`/${id}`}>
            <TeamLogo id={id} width='125px' />
          </Link>
        ))}
      </div>
    </div>
  );
}
