import { useState } from "react";
import Button from "@/shared/ui/Button/Button";
import './Switch.scss';

export const Switch = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null)

  const handleButtonClick = (buttonName: string) => {
    setActiveButton((prevActiveButton) => (prevActiveButton === buttonName ? null : buttonName));
  }

  return (
    <>
      <div className="switch__container">
        <Button
          text="Достопримечательности"
          className={`switch__container--btn ${activeButton === 'attractions' ? 'active' : ''}`}
          onClick={() => handleButtonClick('attractions')}
          disabled={activeButton === 'attractions'}
        />
        <Button
          text="Туры"
          className={`switch__container--btn ${activeButton === 'tours' ? 'active' : ''}`}
          onClick={() => handleButtonClick('tours')}
          disabled={activeButton === 'tours'}
        />
      </div>

      <div className="switch__container--mobile">
        <Button
          text="Достопримечательности"
          className={`switch__container--btn ${activeButton === 'attractions' ? 'active' : ''}`}
          onClick={() => handleButtonClick('attractions')}
          disabled={activeButton === 'attractions'}
        />
        <Button
          text="Туры"
          className={`switch__container--btn ${activeButton === 'tours' ? 'active' : ''}`}
          onClick={() => handleButtonClick('tours')}
          disabled={activeButton === 'tours'}
        />
      </div>
    </>
    
  )
}
