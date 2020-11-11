import React from 'react';
import './author-card.scss';
import {Author} from '../../objectTemplates/templates'

type AuthorCardProps = {author:Author}
const AuthorCard = ({author}:AuthorCardProps) =>{

return (
        <div className="author-card">    
            <div className="author-card-profile-picture">
                <img className="author-card-profile-picture-img" alt={author.fullName} src={author.image}></img>
            </div>
            <h1 className="author-card__fullname">{author.fullName}</h1>
            <div className="author-card__status"><span>Author</span></div>
            <div className="author-card__info">Followers: <span>{author.authorFollowers}</span></div>
            <div className="author-card__info">Fans: <span>{author.fansCount}</span></div>
            <div className="author-card__info">Hometown</div>
            <span className="author-card__info-hometown">{author.hometown}</span>
        </div>

)
}

export default AuthorCard