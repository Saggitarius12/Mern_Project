import React,{useEffect,useState} from "react";
import Footer from "../components/footer";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";



const Home = () => {

  const[search,setSearch] = useState('');
  const[foodCat,setfoodCat] = useState([]);
  const[foodItem,setFoodItem] = useState([]);

  const loadData = async()=>{
    let response = await fetch("http://localhost:8000/api/foodData",{
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    response = await response.json();

    setfoodCat(response[1]);
    setFoodItem(response[0]);
    
  }

  useEffect(()=>{
    loadData()
  },[]);

  return (
    <div>
      <div>        
        <Navbar />
      </div>
      <div><div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel" style={{objectFit:"contain !important"}}
      >
      <div className="carousel-caption" style={{zIndex: "10"}}>

      <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </div>

        
      </div>
        <div className="carousel-inner" id="carousel" >
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?sandwich" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?chocolate" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> </div>
      <div className='container'>{
        foodCat!==[]?
        foodCat.map((data)=>{
          
          return(
            <div className='row mb-3'>
            <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
            <hr/>
            {foodItem !== []? foodItem.filter((item)=>(item.CategoryName === data.CategoryName) && item.name.toLowerCase().includes(search.toLowerCase())).map(filterItems=>{
              return(
                <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                <Cards foodItems ={filterItems} options={filterItems.options[0]}/>
                </div>
              )
            }): <div> No Such Item </div>}
            </div>
          )

        }):""
      }

      </div>   

      <div> <Footer/> </div>

    </div>
  );
};

export default Home;
