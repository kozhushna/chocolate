import chocolatNuts from 'images/Oder/desktop_tablet/chocolate-nuts.png';
import chocolatMilk from 'images/Oder/desktop_tablet/chocolate-bonbon-milk.png';
import chocolatDark from 'images/Oder/desktop_tablet/chocolate-dark.png';
import { Item, List, Weight } from './WeightChocolate.styled';

export const ChoiceWeight = () => {
  return (
    <List>
      <Item>
        <img src={chocolatNuts} alt="chocolat nuts" />
        <Weight>
          <p>200 g</p>
        </Weight>
      </Item>
      <Item>
        <img src={chocolatMilk} alt="chocolat milk" />
        <Weight>
          <p>300 g</p>
        </Weight>
      </Item>
      <Item>
        <img src={chocolatDark} alt="chocolate dark" />
        <Weight>
          <p>100 g</p>
        </Weight>
      </Item>
    </List>
  );
};
