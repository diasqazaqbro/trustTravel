import React, { FC, MouseEventHandler } from 'react'
import cn from 'classnames'

import style from './Button.module.sass'

export type ButtonProps = {
  text: string;
  className: string;
  onClick?: MouseEventHandler;
  disabled: boolean
}

const Button: FC<ButtonProps> = (props) => {
  const { text, className, onClick, disabled } = props

  return (
    <button 
      className={cn(className, style.button, "button")}
      onClick={onClick}
      disabled={disabled}
    >{text}</button>
  )
}

export default Button