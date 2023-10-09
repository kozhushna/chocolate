import chocolatNutsTabletDesctop from 'images/Oder/desktop_tablet/chocolate-nuts.png';
import chocolatMilkTabletDesctop from 'images/Oder/desktop_tablet/chocolate-bonbon-milk.png';
import chocolatDarkTabletDesctop from 'images/Oder/desktop_tablet/chocolate-dark.png';
import chocolatNutsMobile from 'images/Oder/mobile/chocolate-nuts-min.png';
import chocolatMilkMobile from 'images/Oder/mobile/chocolate-bonbon-milk-min.png';
import chocolatDarkMobile from 'images/Oder/mobile/chocolate-dark-min.png';
import { Item, List, Weight } from './WeightChocolate.styled';

const width = window.innerWidth;
const chocolatNuts =
  width < 768 ? chocolatNutsMobile : chocolatNutsTabletDesctop;
const chocolatMilk =
  width < 768 ? chocolatMilkMobile : chocolatMilkTabletDesctop;
const chocolatDark =
  width < 768 ? chocolatDarkMobile : chocolatDarkTabletDesctop;

export const ChoiceWeight = () => {
  return (
    <List>
      <Item>
        <img src={chocolatNuts} alt="chocolat nuts" />
        <Weight>
          <p>100 g</p>
        </Weight>
      </Item>
      <Item>
        <img src={chocolatMilk} alt="chocolat milk" />
        <Weight>
          <p>200 g</p>
        </Weight>
      </Item>
      <Item>
        <img src={chocolatDark} alt="chocolate dark" />
        <Weight>
          <p>300 g</p>
        </Weight>
      </Item>
    </List>
  );
};
