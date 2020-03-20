import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Modal,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';

const CreateEmployee = ({navigation, route}) => {
  const getDetails = type => {
    if (route.params) {
      switch (type) {
        case 'name':
          return route.params.name;
        case 'phone':
          return route.params.phone;
        case 'email':
          return route.params.email;
        case 'salary':
          return route.params.salary;
        case 'picture':
          return route.params.picture;
        case 'position':
          return route.params.position;
      }
    }
    return '';
  };
  const [name, setName] = useState(getDetails('name'));
  const [phone, setPhone] = useState(getDetails('phone'));
  const [email, setEmail] = useState(getDetails('email'));
  const [salary, setSalary] = useState(getDetails('salary'));
  const [picture, setPicture] = useState(getDetails('picture'));
  const [position, setPosition] = useState(getDetails('position'));
  const [age, setAge] = useState(getDetails('age'));
  const [modal, setModal] = useState(false);
  const [enableshift, setenableshift] = useState(false);
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
      .then(res => setPicture(res.url));
  };
  const submitData = () => {
    console.log('submitData');
    fetch('http://localhost:1337/api/employee/edit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: route.params._id,
        name,
        salary,
        age,
        email,
        phone,
        picture,
        position,
      }),
    })
      .then(res => res.json())
      .then(res => {
        Alert.alert(`${res.name} is saved success`);
        navigation.navigate('Home');
      });
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <View>
        <TextInput
          style={styles.mg6}
          label="Name"
          mode="outlined"
          theme={theme}
          value={name}
          onFocus = {() => setenableshift(false)}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.mg6}
          label="Phone"
          mode="outlined"
          theme={theme}
          value={phone}
          keyboardType="number-pad"
          onFocus = {() => setenableshift(false)}
          onChangeText={text => setPhone(text)}
        />
        <TextInput
          style={styles.mg6}
          label="Age"
          mode="outlined"
          theme={theme}
          value={age}
          keyboardType="number-pad"
          onFocus = {() => setenableshift(false)}
          onChangeText={text => setAge(text)}
        />
        <TextInput
          style={styles.mg6}
          label="Email"
          mode="outlined"
          theme={theme}
          value={email}
          onFocus = {() => setenableshift(false)}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.mg6}
          label="Salary"
          mode="outlined"
          theme={theme}
          value={salary}
          onFocus = {() => setenableshift(false)}
          onChangeText={text => setSalary(text)}
        />
        <TextInput
          style={styles.mg6}
          label="Position"
          mode="outlined"
          theme={theme}
          value={position}
          onFocus = {() => setenableshift(false)}
          onChangeText={text => setPosition(text)}
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
          onPress={() => submitData()}>
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
    </KeyboardAvoidingView>
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
