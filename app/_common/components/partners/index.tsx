import React from 'react';

const items = [
  {
    id: 1,
    imgSrc: '/assets/Layers.png',
  },
  {
    id: 2,
    imgSrc: '/assets/Sisphus.png',
  },
  {
    id: 3,
    imgSrc: '/assets/Circolus.png',
  },
  {
    id: 4,
    imgSrc: '/assets/Catalog.png',
  },
  {
    id: 5,
    imgSrc: '/assets/Quoient.png',
  }
];

const ItemList = () => {
  return (
    <div className="hidden md:flex flex-row justify-center bg-partnersbgColor-500/50 gap-10 py-10 m-10">
        {items.map(item => (
            <div key={item.id} className="p-4">
            <img src={item.imgSrc}  className="object-contain rounded-lg" style={{height: '40px'}}/>
            </div>
        ))}
    </div>

  );
};

export default ItemList;
