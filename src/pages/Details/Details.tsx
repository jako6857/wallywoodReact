import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import type { MovieData } from '../../Types/movieType'
import style from './Details.module.scss'

export function Details() {
  const params = useParams()

  const { data, isLoading, error } = useFetch<MovieData>(
    `http://localhost:3000/posters/${params.slug}`,
  )

  if (isLoading) return <h1>Loading</h1>
  if (error) return <h1>Error....</h1>
  if (!data) return <h1>No data found</h1>

  return (
    <div className={style.details}>
      {/* Poster image */}
      <img className={style.poster} src={data.image} alt={data.name} />
      {/* Poster info */}
      <div className={style.detailsInfo}>
        <h1>{data.name}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
        <p>
          <strong>Price:</strong> {data.price} kr
        </p>
        <div>
          <strong>Genres:</strong>
          <ul>
            {data.genres.map((genre) => (
              <li key={genre.id}>{genre.title}</li>
              
            ))}
          </ul>
           <button className={style.buttonStylingPoster}>Læg i Kurv</button>
        </div>
      </div>
    </div>
  )
}
