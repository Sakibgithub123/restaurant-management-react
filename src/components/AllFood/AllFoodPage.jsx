import { useEffect, useState } from "react";
import AllFood from "./AllFood";
import { useLoaderData } from "react-router-dom";


const AllFoodPage = () => {
    const [allFoods,setAllFood]=useState([])
    const {count}=useLoaderData()
    const [itemPerPage,setItemPerPage]=useState(10);
    const [currentPage,setCurrentPage]=useState(0);
    const noOfPage=Math.ceil(count/itemPerPage)
    // const pages=[];
    // for(let i=0; i<noOfPage; i++){
    //     pages.push(i)
    // }
    const pages=[...Array(noOfPage).keys()]
    const handleItemPerpage=(e)=>{
        const val= parseInt(e.target.value);
        setItemPerPage(val);
        setCurrentPage(0)
    }

    const handlePrevPage=()=>{
        if(currentPage > 0){
            setCurrentPage(currentPage -1)
        }
    }
    const handleNextPage=()=>{
        if(currentPage > pages.length){
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setAllFood(data))
    }, [])
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            <h1>{count}</h1>
            {
                allFoods.map(allfood=><AllFood key={allfood._id} allfood={allfood}></AllFood>)
            }
            <div className="pagination">
                <button onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page=> <button className={currentPage ===page && 'text-orange-500'} onClick={()=>setItemPerPage(page)}>{page}</button>)
                }
                <button onClick={handleNextPage}>Next</button>
                <select value={itemPerPage} onChange={handleItemPerpage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            
        </div>
    );
};

export default AllFoodPage;