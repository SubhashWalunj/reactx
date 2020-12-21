import { Card } from '@blueprintjs/core';
import React from 'react';

import { IItem } from '@reactx/data';

import Item from '../item/item';

import './item-list.module.css';

/* eslint-disable-next-line */
export interface ItemListProps {
  items: IItem[],
  onRemoveItem: Function
}

export function ItemList(props: ItemListProps) {

  const itemList = props.items.map((item, index) => {
    return <Item key={index} itemIndex={index} item={item} onDeleteItem={(index) => props.onRemoveItem(index)}></Item>
  });

  return (
    <Card>
      {itemList}
    </Card>
  );
}

export default ItemList;
