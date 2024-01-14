import { Card } from '@/shared/ui/Card/Card'
import './RelatedItems.scss'

export const RelatedItems = () => {
  return (
    <section className='related__items'>
      <div className='container container__related'>
        <div className='related__items-inner'>
          <Card id={''} image={''} />
        </div>
      </div>
    </section>
  )
}