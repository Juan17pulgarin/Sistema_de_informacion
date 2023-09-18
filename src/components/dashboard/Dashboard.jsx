import Review from '../review/Reviews'
import { Route, Routes } from 'react-router-dom'
import './dashboard.css'

function Dashboard() {
  return (
    <div  className="reviews">
      <Review />
    </div>
  );
}

export default Dashboard;
