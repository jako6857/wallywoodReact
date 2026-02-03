//her kommer min contact side 

import style from './Contact.module.scss';

export function Contact() {
  return (
    <div>
      <h1 className={style.contactHero}>Kontakt Os</h1>
        <h3>Dit navn</h3>
        <input type="text" placeholder="Indtast dit navn" />
        <h3>Din email</h3>
        <input type="email" placeholder="Indtast din email" />  
        <h3>Besked</h3>
        <textarea placeholder="Skriv din besked her"></textarea>
        <br />
        <button className={style.contactButton}>Send Besked</button>
    </div>
  )
}