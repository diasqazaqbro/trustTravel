import { CCarousel, CImage, CCarouselItem } from '@coreui/react'
import image from '../../../../public/images/aksu.png'

export const CarouselM = () => {
  return (
    <CCarousel controls>
      <CCarouselItem>
        <CImage className="d-block w-100" src="../images/aksu2.png" width={200} height={200} style={{ borderRadius: '10px' }} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src='../images/aksu.png' width={200} height={200} style={{ borderRadius: '10px' }} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src='../images/kanyongarmonii.png' width={200} height={200} style={{ borderRadius: '10px' }} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  )
}