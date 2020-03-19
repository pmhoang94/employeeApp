import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, Image, FlatList, Modal} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';

const CreateEmployee = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [picture, setPicture] = useState('');
  const [modal, setModal] = useState(false);
  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        console.log(response.uri);
        let newFile = {
          uri: response.uri,
          type: `test/${response.uri.split('.')[1]}`,
          name: `test.${response.uri.split('.')[1]}`,
        };
        handleUpload(newFile);
      }
    });
  };
  const handleChooseCamera = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchCamera(options, response => {
      if (response.uri) {
        console.log(response.uri);
        let newFile = {
          uri: response.uri,
          type: `test/${response.uri.split('.')[1]}`,
          name: `test.${response.uri.split('.')[1]}`,
        };
        handleUpload(newFile);
      }
    });
  };
  const handleUpload = image => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'employeeApp');
    data.append('cloud_name', 'employeeapp1994');
    console.log('handleUpload');
    fetch('https://api.cloudinary.com/v1_1/employeeapp1994/image/upload', {
      method: 'post',
      body: data,
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.mg6}
        label="Name"
        mode="outlined"
        theme={theme}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.mg6}
        label="Phone"
        mode="outlined"
        theme={theme}
        value={phone}
        keyboardType="number-pad"
        onChangeText={text => setPhone(text)}
      />
      <TextInput
        style={styles.mg6}
        label="Email"
        mode="outlined"
        theme={theme}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.mg6}
        label="Salary"
        mode="outlined"
        theme={theme}
        value={salary}
        onChangeText={text => setSalary(text)}
      />
      <Button
        icon={picture ? 'upload' : 'check'}
        mode="contained"
        theme={theme}
        style={styles.mg6}
        onPress={() => setModal(true)}>
        upload image
      </Button>
      <Button
        icon="content-save-outline"
        mode="contained"
        theme={theme}
        style={styles.mg6}
        onPress={() => console.log('Save')}>
        Save
      </Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}>
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <Button
              style={styles.btnUpload}
              icon="camera"
              mode="contained"
              theme={theme}
              onPress={() => handleChooseCamera()}>
              Camera
            </Button>
            <Button
              style={styles.btnUpload}
              icon="image-area"
              mode="contained"
              theme={theme}
              onPress={() => handleChoosePhoto()}>
              Galery
            </Button>
          </View>
          <Button theme={theme} onPress={() => setModal(false)}>
            Cancel
          </Button>
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
  mg6: {
    margin: 6,
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: '#b8e6ff',
  },
  btnUpload: {
    flex: 1,
    margin: 5,
  },
});
