import React from 'react';

export const Header = () => {

    return (  
        <div>
              <header>
                    <div className='menu'>
                        <box-icon name="menu"></box-icon>
                    </div>

                    <a href="#">
                        <div className='logo'>
                        <box-icon name='color'></box-icon>
                        </div>
                    </a>

                <ul>
                    <li>
                        <a href="#">INICIO</a>
                    </li>
                    <li>
                        <a href="#">PRODUCTOS</a>
                    </li>
                </ul>
                <div className='cart'>
                     <box-icon name="cart"></box-icon>
                     <span className='item__total'>0</span>
                </div>
              </header>
        </div>
     );
}