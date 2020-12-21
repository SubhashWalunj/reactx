import React from 'react';

import { IItem } from '@reactx/data';

import './item.module.css';
import { Button, Card, Icon, Intent } from '@blueprintjs/core';

import styles from './item.module.css';

/* eslint-disable-next-line */
export interface ItemProps {
  itemIndex: number;
  item: IItem;
  onDeleteItem: Function;
}

export function Item(props: ItemProps) {
  return (
    <Card className={styles.itemContainer}>
      <span>{props.item.name}</span>
      <span>{props.item.quantity}</span>
      <Button
        icon="delete"
        intent={Intent.DANGER}
        title="Remove item"
        onClick={e => props.onDeleteItem(props.itemIndex)}
      />
    </Card>
  );
}

export default Item;
