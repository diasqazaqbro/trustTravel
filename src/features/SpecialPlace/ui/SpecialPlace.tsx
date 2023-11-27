import Title from '@/shared/ui/Title/Title'
import React from 'react'
import style from './SpecialPlace.module.sass'
import Image from 'next/image'

const SpecialPlace = () => {
  return (
    <div className={style.special}>
        <Title text='Специальные предложения'/>

        <div className={style.list}>
            <Image src={'/images/mountain.png'} width={360} height={202} alt='mountain'/>
            <Image src={'/images/mountain.png'} width={360} height={202} alt='mountain'/>
            <Image src={'/images/mountain.png'} width={360} height={202} alt='mountain'/>
        </div>
    </div>
  )
}

export default SpecialPlace