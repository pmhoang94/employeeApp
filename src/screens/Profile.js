import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Platform,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Title, Card, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';

const Profile = props => {
  const {id, name, picture, phone, salary, age, email} = props.route.params;
  const openDial = () => {
    if (Platform.OS === 'android') {
      Linking.openURL(`tel:${phone}`);
    } else {
      Linking.openURL(`telpromt:${phone}`);
    }
  };
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#0033ff', '#6bc1ff']}
        style={{height: '20%'}}></LinearGradient>
      <View style={styles.imgView}>
        <Image
          style={styles.img}
          source={{
            uri: picture,
          }}></Image>
      </View>
      <View style={styles.contentHeader}>
        <Title>{name}</Title>
        <Text>Developer</Text>
      </View>
      <Card
        style={styles.myCard}
        onPress={() => {
          Linking.openURL('mailTo:abc@gmail.com');
        }}>
        <View style={styles.cardContent}>
          <Icon name="email" size={32} color="#006aff"></Icon>
          <Text style={styles.myText}>{email}</Text>
        </View>
      </Card>
      <Card style={styles.myCard} onPress={() => openDial()}>
        <View style={styles.cardContent}>
          <Icon name="cellphone" size={32} color="#006aff"></Icon>
          <Text style={styles.myText}>{phone}</Text>
        </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <MaterialIcon
            name="attach-money"
            size={32}
            color="#006aff"></MaterialIcon>
          <Text style={styles.myText}>{salary}</Text>
        </View>
      </Card>
      <View style={styles.btnView}>
        <Button
          icon="account-edit"
          mode="contained"
          theme={theme}
          onPress={() => console.log('Pressed')}>
          Edit
        </Button>
        <Button
          icon="delete"
          mode="contained"
          theme={theme}
          onPress={() => console.log('Pressed')}>
          fire emloyee
        </Button>
      </View>
    </View>
  );
};
const theme = {
  colors: {
    primary: '#006aff',
  },
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -50,
  },
  imgView: {
    alignItems: 'center',
  },
  contentHeader: {
    alignItems: 'center',
  },
  myCard: {
    margin: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myText: {
    fontSize: 18,
    marginLeft: 5,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
});

export default Profile;
