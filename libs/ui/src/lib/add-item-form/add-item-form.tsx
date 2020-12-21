import { Button, Card, Elevation, FormGroup, InputGroup, Intent } from '@blueprintjs/core';
import React, { FormEvent, useState } from 'react';

import './add-item-form.module.css';

/* eslint-disable-next-line */
export interface AddItemFormProps {
  onAddItem: Function
}

export function AddItemForm(props: AddItemFormProps) {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const addItem = (e: FormEvent): void => {
    e.preventDefault();
    props.onAddItem(itemName, itemQuantity);
    setItemName('');
    setItemQuantity('');
  }

  return (<Card interactive={true} elevation={Elevation.TWO}>
    <form onSubmit={e => addItem(e)}>
      <FormGroup
        helperText=""
        label="Item name"
        labelFor="item-name"
      >
        <InputGroup
          id="item-name"
          type="text"
          value={itemName}
          onChange={e => setItemName(e.target.value)}
        />
      </FormGroup>
      <FormGroup
        helperText=""
        label="Quantity"
        labelFor="item-quantity"
      >
        <InputGroup
          id="item-quantity"
          type="number"
          value={itemQuantity}
          onChange={e => setItemQuantity(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" intent={Intent.PRIMARY}>Add item</Button>
    </form>
  </Card>);
}

export default AddItemForm;
