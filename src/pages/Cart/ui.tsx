import { ProductCart } from 'entities/ProductCard/ui/ProductCart';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Button } from 'shared/ui/Button';

export const Cart = () => {
  return (
    <div className='flex gap-5'>
      <div className='m-5 p-5 border rounded-md border-gray-medium max-w-[880px] w-full shrink-0 bg-white '>
        <ProductCart />
        <div className='flex w-full justify-between'>
          <Button className='border rounded-md border-blue bg-blue text-white flex items-center gap-4 hover:bg-white hover:text-blue transition-all duration-500'>
            <HiOutlineArrowLeft /> Back to shop
          </Button>
          <Button className='border rounded-md border-gray-medium bg-white text-blue hover:bg-blue hover:text-white transition-all duration-500'>
            Remove all
          </Button>
        </div>
      </div>
    </div>
  );
};
