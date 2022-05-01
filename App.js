import React, {useState} from 'react';
import {View, SafeAreaView, Alert, FlatList} from 'react-native';

import tw from 'twrnc';
import uuid from 'react-native-uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Juice'},
  ]);

  const addItem = itemName => {
    if (itemName) {
      setItems(prevItems => {
        return [{id: uuid.v4(), text: itemName}, ...prevItems];
      });
    } else {
      Alert.alert('Error', 'Please enter the item name', {text: 'Ok'});
    }
  };

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  return (
    <View>
      <SafeAreaView>
        <Header title="My Shopping List" />
        <AddItem add={addItem} />
        <View style={tw`bg-gray-100 h-full shadow-lg`}>
          <FlatList
            data={items}
            renderItem={({item}) => (
              <ListItem item={item} delete={deleteItem} />
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
