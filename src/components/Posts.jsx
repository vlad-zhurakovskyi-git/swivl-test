import React from 'react';
import Checkbox from "./Checkbox";

const postsList = [
  {
    type: 0,
    title: '',
    text: 'New air routes that promise cheap flights in',
    avatar: 'avatar-profile',
    name: 'Gregory Watkins',
    link: '#share-link1',
    views: 24,
    likes: 88
  }, {
    type: 1,
    title: 'Shared to',
    text: 'New air routes that promise cheap flights in',
    avatar: 'avatar-profile',
    name: 'Gregory Watkins',
    link: '#share-link2',
    sharedTo: '#share-link2f13fsdfsfsdffdsfsdffsfsd',
    views: 24,
    likes: 88
  }, {
    type: 0,
    title: 'Shared via weblink',
    text: 'New air routes that promise cheap flights in',
    avatar: 'avatar-profile',
    name: 'Gregory Watkins',
    link: '#share-link3',
    views: 24,
    likes: 88
  }, {
    type: 1,
    title: 'Shared via weblink',
    text: 'New air routes that promise cheap flights in',
    avatar: 'avatar-profile',
    name: 'Gregory Watkins',
    link: '#share-link4',
    views: 24,
    likes: 88
  }
];

const Post = ({ item }) => {
  const {type, link, sharedTo = '', title, text, name, views, likes} = item;

  return (
    <div className="post">
      <div className="post__col">
        <div className="post-item">
          <div className="post-item__header">
            {type ? (
              <a className="post-title" href={link}>
                {sharedTo ? <>
                  <span className="post-title__text">Shared to</span>
                  <span className="post-title__shared">{sharedTo}</span>
                </> : <>
                  <img className="post-title__icon" src="/icons/link.svg" alt="link"/>
                  {title}
                </>}
              </a>
            ) : (
              <div className="post-title">{title}</div>
            )}
          </div>
          <div className="post__text">{text}</div>
          <div className="post-item__footer">
            <div className="post-profile">
              <img className="post-profile__avatar" src="/images/avatar-header.png" alt="avatar"/>
              <div className="post-profile__name">{name}</div>
            </div>

            <div className="post-nav">
              {type ? (
                <>
                  <button onClick={() => alert(views)} className="post-nav-btn" type="button">
                    <img className="post-nav-btn__icon" src="/icons/play.svg" alt="play"/>
                    {views}
                  </button>

                  <button onClick={() => alert(likes)} className="post-nav-btn" type="button">
                    <img className="post-nav-btn__icon" src="/icons/like.svg" alt="like"/>
                    {likes}
                  </button>
                </>
              ) : (
                <a href={link} className="post-nav__link">Share</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Posts = () => {
  return (
    <div className="posts">
      <Checkbox
        isChecked={true}
        textLeft="Public"
        textRight="Private"
      />

      <div className="posts__wrapper">
        {postsList.map(item => <Post key={`${item.link}`} item={item}/>)}
      </div>
    </div>
  );
};

export default Posts;
