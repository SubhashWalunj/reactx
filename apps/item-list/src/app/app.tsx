import React, { useState } from 'react';

// import blueprint css
import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

import styles from './app.module.css';

import { AddItemForm, ItemList } from '@reactx/ui';
import { IItem } from '@reactx/data';

import { Card } from '@blueprintjs/core';

export function App() {
  const [items, setItems] = useState([]);

  const addItemHandler = (itemName: string, itemQuantity: string) => {
    const newItem: IItem = {
      name: itemName,
      quantity: itemQuantity
    }
    setItems((prevItems) => [...prevItems, newItem]);
  }

  const removeItemHandler = (index: number) => {
    setItems((prevItems) => {
      const newItemList = [...prevItems];
      newItemList.splice(index, 1);
      return [...newItemList];
    });
  }

  const itemLists = items.length ? <div className={styles.showItemsContainer}>
    <ItemList items={items} onRemoveItem={removeItemHandler} />
  </div> : null

  return (
    <div className={styles.app}>
      <header>
        <Card className={styles.welcomeBanner}>
          <h1>Welcome to item-list!</h1>
        </Card>
      </header>
      <main>
        <div className={styles.addItemContainer}>
          <AddItemForm onAddItem={addItemHandler} />
        </div>
        {itemLists}
      </main>
    </div>
  );
}

export default App;
