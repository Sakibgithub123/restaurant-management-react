import Swal from 'sweetalert2'
const FoodTableItem = () => {

    const handleDelete=(_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`http://localhost:5000/food/${_id}`,{
                method:'DELETE',

              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your food item has been deleted.",
                        icon: "success"
                      });

                }
              })
            }
          });

    }
    return (
        // <div>
            <tr>
            <td> Zemlak </td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td> Zemlak, Daniel and Leannon </td>
                <td>Purple</td>
                <td> Zemlak, Daniel and Leannon </td>
                <td>Purple</td>
                <td> Zemlak, Daniel and Leannon </td>
                <td>Purple</td>
                <th>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </tr>
            
        // </div>
    );
};

export default FoodTableItem;