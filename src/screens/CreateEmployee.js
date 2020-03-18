import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Button,
  Modal,
} from 'react-native';
import {TextInput} from 'react-native-paper';

const CreateEmployee = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [picture, setPicture] = useState('');
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        label="Name"
        mode="outlined"
        theme={theme}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Phone"
        mode="outlined"
        theme={theme}
        value={phone}
        keyboardType="number-pad"
        onChangeText={text => setPhone(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Email"
        mode="outlined"
        theme={theme}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Salary"
        mode="outlined"
        theme={theme}
        value={salary}
        onChangeText={text => setSalary(text)}
      />
      <Button
        icon="upload"
        mode="contained"
        title=" Press me"
        onPress={() => setModal(true)}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modal}
        onRequestClose={() => setModal(false)}>
        <View>
          <View>
            <Button
              icon="camera"
              mode="contained"
              title=" Cancel"
              onPress={() => setModal(false)}
            />
            <Button
              icon="camera"
              mode="contained"
              title=" Cancel"
              onPress={() => setModal(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateEmployee;

const theme = {
  colors: {
    primary: '#006aff',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputStyle: {
    margin: 6,
  },
});
