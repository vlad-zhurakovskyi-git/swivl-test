import React from 'react';

const navList = [
  {
    name: 'Feed',
    link: '#feed',
    isActive: true
  }, {
    name: 'Explore',
    link: '#explore',
    isActive: false
  }, {
    name: 'Discussions',
    link: '#discussions',
    isActive: false
  }
];

const controlList = [
  {
    name: 'notifications',
  }, {
    name: 'share',
  }, {
    name: 'medium'
  }
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper header__wrapper--top">
          <a className="header-link" href="/">
            <img className="header-link__img" src="/icons/logo.svg" alt="logo"/>
          </a>

          <div className="header__inner">
            <div className="header-profile">
              <div className="header-profile__name">Arthur Wood</div>

              <button type="button" className="header-profile__info">
                <div style={{ backgroundImage: `url(/images/avatar-header.png)`}} className="header-profile__avatar"/>
                <img src="/icons/arrow-bottom.svg" className="header-profile__caret" alt="caret"/>
              </button>
            </div>

            <div className="header__controls">
              {controlList.map(({ name }) => (
                <button className="header-control" type="button" key={name}>
                  <img src={`/icons/${name}.svg`} className="header-control__item" alt={name}/>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="header__wrapper header__wrapper--bottom">
          <div className="header__nav">
            {
              navList.map(({ name, link, isActive }) => (
                <a className={`header-link ${isActive ? 'active' : ''}`} href={link} key={link}>
                  <div className="header-link__text">{name}</div>
                  <div className="header-link__border"/>
                </a>
              ))
            }
          </div>

          <button type="button" className="header-plus">
            <img className="header-plus__icon" src="/icons/plus.svg" alt="plus"/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
