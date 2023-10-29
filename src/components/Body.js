import './Body.css';

const Body = () => {

  return (
    <>
        <ul className="body">
        <li><h1 className="title">Where creators run their business</h1></li>
        <li><button className="start">Get Started</button></li>
        <li className="imgs">
            <div className="button-overlay">
                <img src="/unsplash_tgquMvhNLc4.png" alt=""></img> 
                <div className="overlay"><p>Send invoices →</p></div>
            </div>
            <img src="/unsplash_t-UV1rZqPuY.png" alt=""></img>
            <img src="/unsplash_5OUMf1Mr5pU.png" alt=""></img>
        </li>
        </ul>
    </>
  );
}

export default Body;
