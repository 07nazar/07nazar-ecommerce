import './styles/index.css'

import { HeaderSearch } from 'entities/HeaderSearch'

import { withProviders } from './providers'

const App = () => (
  <div className="container">
    <HeaderSearch />
  </div>
)

export default withProviders(App)

/* <Select selectedValue={selectedItems} isOpen={isOpen} isPill={false} setOpen={setOpen}>
        {items.map((item: IItem) => (
          <MenuItem
            active={selectedItems.includes(item)}
            key={item.text}
            item={item}
            isMulti={isMulti}
            setSelectedItems={setSelectedItems}
            setOpen={setOpen}>
            {/* <span>{item.text}</span>
            <span>{item.subTitle}</span> 
            <Checkbox
              onClick={(event: MouseEvent<HTMLElement>) => {
                event.stopPropagation()
              }}
              onChange={() => setSelectedItems((prev) => [...prev, item])}
              isChecked={selectedItems.includes(item)}>
              {item.text}
            </Checkbox>
          </MenuItem>
        ))}
      </Select> */
