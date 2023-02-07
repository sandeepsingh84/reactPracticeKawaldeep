import React from 'react';
import { useParams , useNavigate } from 'react-router-dom';

const ProductCards = ({currentState,SingleProduct,setvisibleState}) => {
  const navigate =useNavigate();
    console.log('currentState', currentState)
  return (
      <div className='CardMain'>
    < div className='grid'>
        {currentState?.map((item )=>(<div className='grid-items'    onClick={()=> {
          //  SingleProduct(item?.id)
      navigate(`/profile/${item?.id}`)
      }
         } >
            <div className='fa'><i className="fa-solid fa-heart"></i></div>
            <div className='image'>
        <img src={item?.image} alt="" /></div>
{/* <div className='product-detail'> */}
        <div className='category '>
            {item?.category}
        </div>
        <div className='Product-name'>Product Short Name</div>
        <div className='price'><del className='price-del'> $99.9</del> &nbsp; ${item?.price}</div>
        <div>{item?.rating?.rate}</div>
        {/* </div> */}
        </div>))}
        </div>
    </div>
  );
};

export default ProductCards;