import {View, Text} from 'react-native';
import React from 'react';

import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Octicons';

const Header = ({title = 'Shopping Wishlist'}) => {
  return (
    <View style={tw`flex items-center bg-gray-900 py-4`}>
      <Text style={tw`text-white text-xl font-bold mb-3`}>{title}</Text>
      <Icon name="checklist" size={25} color="white" />
    </View>
  );
};

export default Header;
