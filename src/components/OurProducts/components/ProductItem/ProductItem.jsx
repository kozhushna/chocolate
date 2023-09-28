import {
  ItemDescr,
  ItemImage,
  ItemPrice,
  ItemTitle,
} from './ProductItem.styled';

export const ProductItem = ({ product }) => {
  const { image, retinaImage, name, description, price, altText } = product;
  return (
    <>
      <ItemImage
        srcSet={`${image} 1x, ${retinaImage} 2x`}
        src={image}
        alt={altText}
      />
      <ItemTitle>{name}</ItemTitle>
      <ItemDescr>{description}</ItemDescr>
      <ItemPrice>
        <p>{price} UAH</p>
      </ItemPrice>
    </>
  );
};
