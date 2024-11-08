import About from "../About/About"
import Banner from "../Banner/Banner"
import BookTable from "../BookTable/BookTable"
import Carosel from "../Carosel/Carosel"

const Home = () => {
  return (
    <div>
      <Banner />
      <About></About>
      <Carosel></Carosel>
      <BookTable />
    </div>
  )
}

export default Home
