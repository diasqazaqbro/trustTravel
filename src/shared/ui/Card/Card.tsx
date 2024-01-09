import styles from './Card.module.sass'
import cn from 'classnames'
import Link from 'next/link'
import { Location } from '../Icon/Icon'
import Button from '../Button/Button'
import { FC, MouseEventHandler } from 'react'
import { ReleatedRating } from '../Rating/Rating'

export type CardProps = {
  id: string;
  image: string;
  onClick?: MouseEventHandler;
}

export const Card:FC<CardProps> = (props) => {
  const { id, image, onClick } = props

  return (
    <>
      <li className={cn(styles.container__item, styles.card)} onClick={onClick}>
          <Link href={'#'} className={styles.card__link}>
            <div className={styles.card__item}>
              <div className={styles.img}></div>
              <div className={styles.card__item_left} >
                <h1>Название тура</h1>
                <h5>
                  <Location />
                  Алматы
                </h5>
                <div className={styles.card__item_desc}>
                  <div className={styles.line}></div>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                  </p>
                </div>
                
                <div className={styles.card__item_info}>
                  <h2><Location /> 11/20/2023</h2>
                  <div className={styles.line}></div>
                  <h2><Location /> 3 человека</h2>
                  <div className={styles.line}></div>
                  <h2><Location /> 2 комнаты</h2>
                </div>
              </div>

              <div className={styles.card__item_right}>
                <h1>XXX KZT</h1>
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
              </div>
              <div className={styles.card__item_btn}>
                <Button className={styles.btn__mobile} text='К' disabled={false} />
                <Button className={styles.btn__mobile} text='К' disabled={false} />
                <Button className={styles.btn__mobile} text='К' disabled={false} />
              </div>
            </div>
            <div className={styles.__item_info}>
              <h2>Название тура</h2>
              <h3>XXX KZT</h3>
            </div>
          </div>
        </Link>
      </div>
    </>
      
  )
}