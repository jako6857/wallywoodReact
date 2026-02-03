//her kommer useeffect som henter vores api data: 
import { useEffect, useState } from 'react';
import style from './Cards.module.scss';

type Poster = {
  id: string | number;
  name?: string;
  title?: string;
  description?: string;
  price?: number;
  image?: string | { url?: string };
  imageUrl?: string;
  image_url?: string;
};



export function Cards() {
  const [cardsData, setCardsData] = useState<Poster[]>([]);    

  
    
    useEffect(() => {
        fetch('http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,name,description,image')
            .then(response => response.json())
            .then(data => setCardsData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

  const resolveImage = (card: Poster) =>
    (typeof card.image === 'string' && card.image) ||
    (card.image && typeof card.image === 'object' && (card.image as any).url) ||
    card.imageUrl ||
    card.image_url ||
    ''

  const resolveTitle = (card: Poster) => card.name || card.title || 'Untitled'

console.log(style);

  

  return (
    
    <section className={style.cardsContainer}>  
        {cardsData.map(card => (
            <div key={card.id} className={style.card}>
                <img src={resolveImage(card)} alt={resolveTitle(card)} className={style.cardImage} />
                <h2 className={style.cardTitle}>{resolveTitle(card)}</h2>
                <p className={style.cardDescription}>{card.description}</p>
                {card.price !== undefined && <p className={style.cardPrice}>Price: ${card.price}</p>}
            </div>
        ))}
        
    </section>
  );

  
}