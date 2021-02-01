import React from 'react';

const navList = [
  {
    icon: 'report',
    text: 'Report User'
  }, {
    icon: 'block',
    text: 'Block User'
  }
];

const dataList = [
  {
    amount: 45,
    text: 'synths'
  }, {
    amount: 110,
    text: 'followers'
  }, {
    amount: 332,
    text: 'following'
  }
];

const Profile = () => {
  return (
    <aside className="profile">
      <div className="profile__inner">
        <div className="profile__avatar" style={{ backgroundImage: `url(/images/avatar-profile.png)`}}/>
        <div className="profile__info">
          <div className="profile__header">
            <div className="profile__name">Benjamin Clementine</div>
            <div className="profile-nav">
              <button className="profile-nav-btn">
                <img src="/icons/menu-dots.svg" className="profile-nav-btn__icon" alt="menu"/>
              </button>

              <div className="profile-nav__list">
                {
                  navList.map(({ icon, text }) => (
                    <button className="profile-nav-item" key={icon} type="button">
                      <img src={`/icons/${icon}.svg`} className="profile-nav-item__icon" alt="icon"/>
                      <div className="profile-nav-item__text">{text}</div>
                    </button>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="profile__nickname">@benclementine</div>
          <button className="profile-edit">
            <img className="profile-edit__icon" src="/icons/edit.svg" alt="edit"/>
            Edit Profile
          </button>
        </div>
      </div>


      <div className="profile-data">
        {dataList.map(({amount, text}) => (
          <div className="profile-data__item" key={text}>
            <div className="profile-data__amount">
              {amount}
            </div>

            <div className="profile-data__name">
              {text}
            </div>
          </div>
        ))}
      </div>

      <div className="profile__description">
        Cryptocurrencies including Ethereum, Ripple, and Litecoin have all plunged between 20 to 30 percent each,
        according to CoinMarketCap. Here is the latest Ripple price news and live updates on XRP, bitcoin and Ethereum.
      </div>
    </aside>
  );
};

export default Profile;
