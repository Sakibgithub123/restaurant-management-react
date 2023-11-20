import { useEffect, useState } from "react";
import AllFood from "./AllFood";
import { useLoaderData } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";


const AllFoodPage = () => {
    const [allFoods, setAllFood] = useState([])
    const [filterFoods, setFilterFood] = useState([]);

    const {count}=useLoaderData()
    const [itemPerPage,setItemPerPage]=useState(20);
    const [currentPage,setCurrentPage]=useState(0);
    const noOfPage=Math.ceil(count/itemPerPage)
    const pages=[];
    for(let i=0; i<noOfPage; i++){
        pages.push(i)
    }
    // const pages=[...Array(noOfPage).keys()]
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
        if(currentPage > pages.length-1){
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        fetch(`https://restaurant-management-server-two.vercel.app/food?page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => setAllFood(data))
    }, [currentPage,itemPerPage])
    useEffect(() => {
        fetch(`https://restaurant-management-server-two.vercel.app/food?page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => setFilterFood(data))
    }, [currentPage,itemPerPage])
   
    const handleFilter=filter=>{
        if(filter === 'all'){
            setFilterFood(allFoods)
        }
        else if(filter==='pizza'){
            const filterPizza=allFoods.filter(food =>food.category === 'pizza')
            setFilterFood(filterPizza)
        }
        else if(filter==='burger'){
            const filterburger=allFoods.filter(food =>food.category === 'burger')
            setFilterFood(filterburger)
        }
        else if(filter==='breakfast'){
            const filterBreakfast=allFoods.filter(food =>food.category === 'breakfast')
            setFilterFood(filterBreakfast)
        }
        else if(filter==='lunch'){
            const filterlunch=allFoods.filter(food =>food.category === 'lunch')
            setFilterFood(filterlunch)
        }
        else if(filter==='drinks'){
            const filterDrinks=allFoods.filter(food =>food.category === 'drinks')
            setFilterFood(filterDrinks)
        }
        else if(filter==='desserts'){
            const filterDesserts=allFoods.filter(food =>food.category === 'desserts')
            setFilterFood(filterDesserts)
        }
    }

    return (
        <div>
            <div className="flex justify-center items-center my-5">
            <div className="md:navbar-center  lg:flex">
                <ul className="menu menu-horizontal px-1 grid grid-cols-4 md:grid-cols-7 gap-5 text-sm font-semibold">
                    <li className="bg-[#894444] text-[#fff]" onClick={()=>handleFilter('all')}><a>All</a></li>
                    <li className="bg-[#894444] text-[#fff]" onClick={()=>handleFilter('pizza')} ><a>Pizza</a></li>
                    <li className="bg-[#894444] text-[#fff]" onClick={()=>handleFilter('burger')}><a>Burger</a></li>
                    <li className="bg-[#894444] text-[#fff]" onClick={()=>handleFilter('breakfast')}><a>BreakFast</a></li>
                    <li className="bg-[#894444] text-[#fff]" onClick={()=>handleFilter('lunch')}><a>Lunch</a></li>
                    <li className="bg-[#894444] text-[#fff]" onClick={()=>handleFilter('drinks')}><a>Drinks</a></li>
                    <li className="bg-[#894444] text-[#fff]" onClick={()=>handleFilter('desserts')}><a>Desserts</a></li>
                    
                </ul>
            </div>
            </div>
            {/* ------ */}
           <div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {/* <h1>{count}</h1> */}
                {
                    filterFoods.map(allfood => <AllFood key={allfood._id} allfood={allfood}></AllFood>)
                }
            </div>
            <div className="pagination my-5">
                <button className="text-base hover:bg-[#2f2626] bg-[#894444] mx-2 p-2 rounded-lg text-[#fff] font-semibold" onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page=> <button className="text-base mx-2 hover:bg-[#2f2626] bg-[#894444] p-2 rounded-lg text-[#fff] font-semibold"  onClick={()=>setItemPerPage(page)}>{page}</button>)
                }
                <button className="text-base hover:bg-[#2f2626] mx-2 bg-[#894444] p-2 rounded-lg text-[#fff] font-semibold" onClick={handleNextPage}>Next</button>
                <select className="text-base mx-2 bg-[#894444] p-2 rounded-lg text-[#fff] font-semibold" value={itemPerPage} onChange={handleItemPerpage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
           </div>


        </div>

    );
};

export default AllFoodPage;

