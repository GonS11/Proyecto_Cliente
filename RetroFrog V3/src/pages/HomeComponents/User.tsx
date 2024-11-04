import { useState } from 'react';
import '../../sass/components/user.scss';
import { Link  } from "react-router-dom";

const UserProfile = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
      <div className={`profile-card ${expanded ? 'expand' : ''}`}>
          <img className='pic'id="expand-button" onClick={toggleExpand}/>
          <div className="below-fold">
            
            {expanded && (<>
              <div className="name">{sessionStorage.getItem('username')}</div>
              <div className="about">
                <h3>Juego</h3>
                <p>descripcion juego</p>
              </div>
              <div className="row_stats">
                <div className="stat">
                  <label>Puntos</label>
                  <div className="num">{sessionStorage.getItem('score')}</div>
                </div>
              </div>
              <div className="row">
                <Link className='header__link' to={'/Modify'}>
                  <button className="button">Modificar</button>
                </Link>
                <Link className="header__link" to={'/Login'}>
                  <button className="button">Salir</button>
                </Link>
              </div>
              </>
            )}
          </div>
      </div>  
  );
};

export default UserProfile;
