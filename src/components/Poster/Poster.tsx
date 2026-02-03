import { NavLink } from 'react-router'
import type { Genre } from '../../Types/movieType'
import style from './Poster.module.scss'
import parse from 'html-react-parser'

interface PosterProps {
  id: number
  imageUrl: string
  title: string
  description?: string
  genres: Array<Genre>
  price?: number
  slug: string
}

export function Poster({ id, imageUrl, title, description, genres, price, slug }: PosterProps) {
  return (
    <div key={id} className={style.posterStyle}>
      <NavLink to={`/details/${slug}`}><img src={imageUrl}></img></NavLink>
      <div className={style.posterstyling}>
        <h4>{title}</h4>
        {description && <div>{parse(description)}</div>}
        {genres &&
          genres.map((genre: Genre) => {
            return <span>{genre.title}</span>
          })}
        {price && <p>Kr: {price}</p>}
        <button className={style.buttonStylingPoster}>Læg i Kurv</button>
      </div>
    </div>
  )
}