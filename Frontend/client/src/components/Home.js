import { useNavigate } from 'react-router-dom';
import "./Home.css"

function Home() {
  const navigate = useNavigate();
  return (
    <div className='container'>
    <div className="home">
      <h1 id='heading'>Welcome to Our Survey</h1>
      </div>
      <div className='buttondiv'>
        <p id='para'>We truly value your opinion. Please take a moment to participate in our short survey.
</p>
      <button id='btn' onClick={() => navigate('/survey')}>Start</button>
      </div>
    
    </div>
  );
}
export default Home;