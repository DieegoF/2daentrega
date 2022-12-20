import React from 'react';
import IMG from "../../Componentes/IMAGENES/IMG_20220713_130310ss - copia (9).jpg"

export const ProductosLista = () => {

    return (

        <>
            <h1 className='title'>Productos</h1>
            
            <div className='productos'>
                <div className='producto'>
                    <a href='#'>
                        <div className='producto__img'>
                            <img src={IMG} alt=''></img>
                        </div>
                     </a>

            <div className='producto__footer'>
                <h1>title</h1>
                    <p>categoria</p>
                        <p className='price'>$1500</p>

            <div className='buttom'></div>
                <button className='btn'>
                    Añadir
                </button>
            <div>
                <a href='#' className='btn'>Vista</a>
            </div>
        </div>
    </div>
</div>
            
        </>
    )
}