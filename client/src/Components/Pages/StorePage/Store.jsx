import React from 'react';
import "./StoreStyles.css"
import NavBar from '../../NavBar/NavBar';
import { Product } from '../ProductPage/Product'
import  contents  from '../ProductPage/contents';

const Store = () => {
    return (
        <div>
          
            <div className="productTiles">
            {contents.map(contents => (
                    <Product 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                    />
                ))}
            </div>
           

        </div>
    );
}

export default Store;
