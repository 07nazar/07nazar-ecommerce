import { IoMdClose } from 'react-icons/io'

import { Breadcrumbs } from 'shared/ui/Breadcrumbs'
import { Button } from 'shared/ui/Button'

import { ControlPanel } from './ControlPanel'
import { PaginationBox } from './PaginationBox'
import { ProductCol } from './ProductCol'
import { ProductRow } from './ProductRow'
import { Sidebar } from './Sidebar'

const items = [
    { text: 'text1' },
    { text: 'text2' },
    { text: 'text3' },
    { text: 'text4' },
    { text: 'text5' },
    { text: 'text6' },
]

export const Shop = () => {
    const productRow = true
    return (
        <div>
            <Breadcrumbs />
            <div>
                <div className={'max-w-[240px] w-full'}>
                    <Sidebar />
                </div>
                <div>
                    <ControlPanel category="Mobile accessory" itemsCount={12199} />

                    <div className="flex gap-2">
                        {items.map(({ text }) => (
                            <Button
                                className="flex items-center p-1.5 gap-2.5 border border-blue bg-white text-gray-dark"
                                key={text}>
                                {text}
                                <IoMdClose size={18} className="text-gray-hot" />
                            </Button>
                        ))}
                        <Button className="text-blue rounded-none">Clear all filter</Button>
                    </div>

                    <div className="max-w-[926px] w-full grid grid-cols-3 gap-5 bg-white">
                        {!productRow ? <ProductRow /> : <ProductCol />}
                    </div>

                    <PaginationBox />
                </div>
            </div>
        </div>
    )
}
