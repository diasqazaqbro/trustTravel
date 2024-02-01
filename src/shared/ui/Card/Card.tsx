import styles from './Card.module.sass'
import cn from 'classnames'
import Link from 'next/link'
import { Location } from '../Icon/Icon'
import Button from '../Button/Button'
import { FC, MouseEventHandler } from 'react'
import { ReleatedRating } from '../Rating/Rating'
import { ITour } from '@/app/attractions/[id]/page'

export type CardProps = {
  id: string;
  image: string;
  onClick?: MouseEventHandler;
  tours: ITour
}

export const Card:FC<CardProps> = (props) => {
  const { id, image, onClick, tours } = props

  return (
    <>
      <li className={cn(styles.container__item, styles.card)} onClick={onClick}>
          <Link href={'#'} className={styles.card__link}>
            <div className={styles.card__item}>
              <div className={styles.img}></div>
              <div className={styles.card__item_left} >
                <h1>{tours.name}</h1>
                <h5>
                  <Location />
                  Алматы
                </h5>
                <div className={styles.card__item_desc}>
                  <div className={styles.line}></div>
                  <p>
                  {tours.description}
                  </p>
                </div>
                
                <div className={styles.card__item_info}>
                  <h2><Location /> {tours.date}</h2>
                  <div className={styles.line}></div>
                  <h2><Location /> {tours.amount_of_people} человека</h2>
                  <div className={styles.line}></div>
                  <h2><Location /> {tours.rooms} комнаты</h2>
                </div>
              </div>

              <div className={styles.card__item_right}>
                <h1>{tours.price}</h1>
                <div className={styles.card__item_btn}>
                  <Button className={styles.btn__wishlist} text='Корзина' disabled={false} />
                </div>
              </div>

              <div className={styles.card__item_grade}>
                <ReleatedRating />
              </div>
            </div>
          </Link>
      </li>

      <div className={styles.mobile}>
        <Link href={'#'} className={styles.card__link}>
          <div className={styles.card__item}>
            <div className={styles.card__item_main}>
              <div className={styles.img__block}>
                <h2><Location /> Алмата</h2>
                <ReleatedRating />
              </div>
              <div className={styles.card__item_btn}>
                <Button className={styles.btn__mobile} text='К' disabled={false} />
                <Button className={styles.btn__mobile} text='К' disabled={false} />
                <Button className={styles.btn__mobile} text='К' disabled={false} />
              </div>
            </div>
            <div className={styles.__item_info}>
              <h2>{tours.name}</h2>
              <h3>{tours.price}</h3>
            </div>
          </div>
        </Link>
      </div>
    </>
      
  )
}