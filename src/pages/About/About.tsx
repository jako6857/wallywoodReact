import style from './about.module.scss';
import stjerne from '../../Assets/Images/stjerne.png';

export function About() {
  return (
    <div className={style.AboutContainer}>
      <div className={style.AboutContent}>
        
        <div className={style.TextSection}>
          <h1 className={style.AboutHero}>Om os</h1>

          <p className={style.AboutText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, et. Ut tempora iste saepe fuga. Ex, incidunt! Quos, molestias tenetur. Quisquam enim quod eius ullam animi voluptatem est saepe numquam!
          </p>

          <p className={style.AboutText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nostrum voluptatibus in qui perspiciatis ullam provident labore nemo officia atque nam vero modi, tempore obcaecati consequuntur odio itaque velit deserunt!
          </p>
        </div>

        <div className={style.ImageSection}>
          <img src={stjerne} alt="Wallywood star" />
        </div>

      </div>
    </div>
  );
}
