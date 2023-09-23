import sprite from 'images/sprite.svg';

export const Svg = ({ w, h, icon }) => {
  return (
    <svg width={w} height={h} aria-hidden="true" role="presentation">
      <use href={`${sprite}#icon-${icon}`} />
    </svg>
  );
};
