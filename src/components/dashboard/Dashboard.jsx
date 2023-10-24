import Review from '../review/Reviews'
import Navbar from '../navbar/Navbar'
import Carousels from '../carousel/Carousel'
import  Support  from '../support/Support'
import './dashboard.css'


function Dashboard() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousels />
      </div>
      <div  className="reviews">
        <Review />
      </div>
      <div  className="suport">
        <Support />
      </div>
    </>
  );
}

export default Dashboard;
