import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddBooks from "../containers/AddBooks"
import SearchBooks from "../containers/SearchBooks"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Root = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<AddBooks />} />
            <Route path="/search" element={<SearchBooks />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default Root
