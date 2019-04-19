import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {
  render() {
    return (
        <div className='menu_main_container' id='menu'>
            <div className='menu_headline_section'>
                <h1><span>MENU</span></h1>
            </div>
        
            <div className='menu_items_container'>
                <div className='superslices_menu_section'>
                    <h2 className='menu_category_titles'>2 FOOT SUPER SLICES</h2>
                    <ul className='items_list_column'>
                    <li className="list">
                        <i className='item'>Regular</i>
                        <i className="price">$12.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Stuffed Crust</i>
                        <i className="price">$18.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>1 Regular Topping</i>    
                        <i className="price">$18.00</i> 
                    </li>
                    <li className="list">
                        <i className='item fine_print'>Pepperoni, Sausage, Meatball</i>    
                        <i className="price"></i> 
                    </li>
                    <li className="list">
                        <i className='item'>1 Premium Topping</i>
                        <i className="price">$22.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Bacon, Chicken, X-Cheese</i>
                        <i className="price"></i> 
                    </li>
                    <li className="list">
                        <i className='item'>Salad</i>
                        <i className="price">$22.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>White</i>
                        <i className="price">$24.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Margherita</i>
                        <i className="price">$25.00</i>                         
                    </li>
                    <li className="list">
                        <i className='item'>Hawaiian</i>
                        <i className="price">$26.00</i>                         
                    </li>
                    <li className="list">
                        <i className='item'>BBQ or Buffalo Chicken</i>
                        <i className="price">$26.00</i>                         
                    </li>
                    <li className="list">
                        <i className='item'>White Broccoli or White Spinach</i>
                        <i className="price">$26.00</i>                         
                    </li>
                    <li className="list">
                        <i className='item'>The Prota (Corn &amp; Ham)</i>
                        <i className="price">$28.00</i>                         
                    </li>
                    <li className="list">
                        <i className='item'>Bacon, Chicken &amp; Ranch</i>
                        <i className="price">$30.00</i>                         
                    </li>
                    <li className="list">
                        <i className='item'>Supreme or Vegetarian</i>
                        <i className="price">$30.00</i>                         
                    </li>
                    <li className="list">
                        <i className='item'>Cheeseburger &amp; Fries</i>
                        <i className="price">$30.00</i>                         
                    </li>
                    <li className="list">
                        <i className='item'>Penne ala Vodka</i>
                        <i className="price">$30.00</i>                         
                    </li>
                    <li className="list">
                        <i className='item'>Mac-N-Cheese</i>
                        <i className="price">$35.00</i>                         
                    </li>
                    <li className="list">
                        <i className='item'>Lasagna</i>
                        <i className="price">$35.00</i>                         
                    </li>
                    <li className="list">
                        <i className='item'>*New* The Barn Yard: Mozzarella sticks, chicken fingers, bacon, french fries layered with mozzarella and American cheese</i>
                        <i className="price">$35.00</i>                         
                    </li>
                    <li className="list">
                        <i className='item'>Mac-N-Cheese</i>
                        <i className="price">$35.00</i>                         
                    </li>
                    </ul>
                </div>
            
                <div className='appetizers_menu_section'>
                    <h2 className='menu_category_titles'>APPETIZERS</h2>
                    <ul className='items_list_column'>
                    <li className="list">
                        <i className='item'>Buffalo Wings</i>
                        <i className='price'>$8.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>BBQ Wings</i>
                        <i className="price">$8.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Plain Wings</i>
                        <i className="price">$8.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Mozzarella sticks</i>
                        <i className="price">$8.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Chicken fingers</i>
                        <i className="price">$8.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>French Fries</i>
                        <i className="price">$5.50</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Cheese Fries</i>
                        <i className="price">$8.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Garlic Bread</i>
                        <i className="price">$8.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Chicken Roll</i>
                        <i className="price">$8.50</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Cheese Pretzel</i>
                        <i className="price">$8.50</i> 
                    </li>
                    </ul>
                </div>

                <div className='salads_menu_section'>
                    <h2 className='menu_category_titles'>SALADS</h2>
                    <ul className='items_list_column'>
                    <li className="list">
                        <i className='item'>House Salad</i>
                        <i className="price">$8.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'><span className='fine_print'>w Grilled Chicken</span></i>
                        <i className="price">$12.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Caesar Salad</i>
                        <i className="price">$8.50</i> 
                    </li>
                    <li className="list">
                        <i className='item'><span className='fine_print'>w Grilled Chicken</span></i>
                        <i className="price">$12.00</i> 
                    </li>
                    </ul>
                </div>
                <div className='desserts_menu_section'>
                    <h2 className='menu_category_titles'>DESSERTS</h2>
                    <ul>
                    <li className="list">
                        <i className='item'>XL Sicilian Cannoli</i>
                        <i className="price">$4.50</i>
                         
                    </li>
                    <li className="list">
                        <i className='item'>Filled In-House</i>
                        <i className="price"></i>
                         
                    </li>
                    <li className="list">
                        <i className='item'>Tiramisu</i>
                        <i className="price">$5.50</i> 
                    </li>                    
                    </ul>
                </div>
                <div className='pasta_entrees_menu_section'>
                    <h2 className='menu_category_titles'>PASTA &amp; ENTREES</h2>
                    <ul className='items_list_column'>
                    <li className="list">
                        <i className='item'>Baked Ziti</i>
                        <i className="price">$15.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Penne ala Vodka</i>
                        <i className="price">$15.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Mac-N-Cheese &amp; BBQ Chicken</i>
                        <i className="price">$17.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Manicotti</i>
                        <i className="price">$16.00</i> 
                    </li>
                    <li className="list">
                        <i className='item'>Rolled Eggplant Parmesan</i>
                        <i className="price">$17.00</i> 
                    </li>
                    </ul>
                </div>
                <div className='wedges_menu_section'>
                    <h2 className='menu_category_titles'>WEDGES</h2>                
                    <ul className='items_list_column'>
                        <li className="list">
                            <i className='item'>Meatball Parm</i>
                            <i className="price">$12.00</i> 
                        </li>
                        <li className="list">
                            <i className='item'>Chicken Parm</i>
                            <i className="price">$12.00</i> 
                        </li>
                        <li className="list">
                            <i className='item'>Eggplant Parm</i>
                            <i className="price">$13.00</i> 
                        </li>
                        <li className="list">
                            <i className='item'>Grilled Chicken</i>
                            <i className="price">$13.00</i> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
  }
}
