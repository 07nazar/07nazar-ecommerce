import './styles/index.css'
// import { Footer } from "widgets/Footer";
// import { Header } from "widgets/Header";

// import { Routing } from "pages";

// import { Button, InputGroup, TextGroup, Input } from 'shared/ui'
// import { Pagination } from 'shared/ui/Pagination'

import { Counter } from 'features/Counter'

import { withProviders } from './providers'

const App = () => (
  <div className="container ">
    <Counter />
    {/* <Header /> */}
    {/* <Pagination count={15} maxVisible={5} /> */}
    {/* <Button size="sm" border={"rounded-md"}>
      btn
    </Button>
    <Input border="rounded-md border-gray-medium" placeholder={"Type here"} />
    <InputGroup>
      <Input border="rounded-l-md" placeholder="Type" />
      <Button border="rounded-r-md ">Button</Button>
    </InputGroup>

    <InputGroup>
      <Input
        borderColor="border-blue"
        border="rounded-l-md border-r-0"
        placeholder="Type"
      />
      <Button>Button</Button>
      <TextGroup borderColor="border-blue" border="rounded-r-md border-l-0">
        4124
      </TextGroup>
    </InputGroup>

    <InputGroup>
      <Input
        borderColor="border-blue"
        border="rounded-l-md border-r-0"
        placeholder="Type"
      />
      <Button border="rounded-r-md border-l-0">Button</Button>
    </InputGroup> */}

    <main>{/* <Routing /> */}</main>
    {/* <Footer /> */}
  </div>
)

export default withProviders(App)
