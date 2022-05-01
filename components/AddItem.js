import {View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({add: addItem}) => {
  const [itemName, setItemName] = useState('');

  const performAdd = () => {
    addItem(itemName);
    setItemName('');
  };

  return (
    <View style={tw`flex-row justify-between items-center my-3 px-3`}>
      <TextInput
        value={itemName}
        onChangeText={text => setItemName(text)}
        placeholder="New item name..."
        style={tw`py-3 text-lg`}
        onSubmitEditing={() => performAdd()}
      />
      <TouchableOpacity
        onPress={() => addItem(itemName)}
        style={tw`mr-1 bg-gray-700 px-3 py-2`}>
        <Icon name="plus" size={24} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
