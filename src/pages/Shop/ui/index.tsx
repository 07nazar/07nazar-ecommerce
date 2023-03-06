import { ProductCol } from './ProductCol'
import { ProductRow } from './ProductRow'

export const Shop = () => (
  <div>
    <div className="max-w-[926px] w-full grid grid-cols-3 gap-5 bg-white">
      <ProductCol />
    </div>

    <div className="grid grid-cols-1 gap-2.5 max-w[920px] w-full">
      <ProductRow />
    </div>
  </div>
)
