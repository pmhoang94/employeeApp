import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TextInput} from 'react-native-paper';

const CreateEmployee = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [picture, setPicture] = useState('');
  const [modal, setModal] = useState(false);
  return (
    <View>
      <TextInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
    </View>
  );
};

export default CreateEmployee;
