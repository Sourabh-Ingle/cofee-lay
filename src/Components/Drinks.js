import React from 'react';



const Drinks = ({strAlcoholic,title,search,id}) => {

    return (
        <div className="drinks-section" id={id}>
            <h2>{title} <span>({strAlcoholic.filter(items=>items.strDrink.toLowerCase().includes(search)).length} items)</span></h2>
            {
                strAlcoholic.filter(items=>items.strDrink.toLowerCase().includes(search)).map(items => {
                    const { idDrink, strDrink, strCategory, strDrinkThumb } = items;

                    return (
                        <div className="drinks-section-all" key={idDrink}>
                            <div className='flex item-top'>
                                <img src={strDrinkThumb} alt={strDrink} className="drink-img" />
                                <div className="name-drink">
                                    <h4>{strDrink}</h4>
                                    <p>{strCategory}</p>
                                </div>
                            </div>
                            <div className="btn">
                                <button className="btn-add">Add</button>
                            </div>
                        </div>
                    )
                })
            }



        </div>
    )
}

export default Drinks;