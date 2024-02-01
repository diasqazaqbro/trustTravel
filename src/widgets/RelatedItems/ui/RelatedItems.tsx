import { Card } from '@/shared/ui/Card/Card'
import './RelatedItems.scss'
import { ITour } from '@/app/attractions/[id]/page';

interface Props {
  tours: ITour;
}

export const RelatedItems = ({ tours }: Props) => {
  console.log(tours);
  
  return (
    <section className='related__items'>
      <div className='container container__related'>
        <div className='related__items-inner'>
          <Card tours={tours} id={''} image={''} />
        </div>
      </div>
    </section>
  )
}