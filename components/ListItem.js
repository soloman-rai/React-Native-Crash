import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import tw from 'twrnc';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ListItem = ({item, delete: deleteItem}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={tw`p-5 bg-gray-800 border-b`}>
      <View style={tw`flex-row justify-between`}>
        <Text style={tw`text-gray-100 text-lg`}>{item.text}</Text>
        <FontAwesome
          onPress={() => deleteItem(item.id)}
          name="remove"
          size={24}
          color="firebrick"
        />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
