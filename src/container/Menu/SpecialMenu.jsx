import React from 'react';

import './SpecialMenu.css';

import { SubHeading, MenuItem} from '../../components'
import { images, data } from '../../constants'

const SpecialMenu = () => (
  <div className='app__specailMenu flex__center section__padding' id='menu'>

    <div className='app__specailMenu-title'>

      <SubHeading title="Menu that fits you palatte" />

      <h1 className='headtext__cormorant'>Today's Specail</h1>

    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
        <div className='app__specailMenu_menu_items'>

          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}

        </div>
      </div>

      <div className='app__specailMenu-menu_img'>

        <img src={images.menu} alt='menu img'/>

      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu_menu_heading'>Cocktails</p>
        <div className='app__specailMenu_menu_items'>

          {data.cocktails.map((cocktails, index) => (
            <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
          ))}

        </div>
      </div>

    </div>
    
  </div>
);

export default SpecialMenu;
