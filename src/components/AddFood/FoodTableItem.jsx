
const FoodTableItem = () => {
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
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            
        // </div>
    );
};

export default FoodTableItem;