import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper';

const Home = ({navigation}) => {
  const data = [
    {
      id: '1',
      name: 'Tiger Nixon',
      salary: '320800',
      age: '61',
      email: 'abcd@gmail.com',
      phone: '1234567',
      picture:
        'https://images.unsplash.com/photo-1552915170-73c2330ae617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '2',
      name: 'Garrett Winters',
      salary: '170750',
      age: '63',
      email: 'abc@gmail.com',
      phone: '123456',
      picture:
        'https://images.unsplash.com/photo-1561826693-1246ed6cc0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '3',
      name: 'Ashton Cox',
      salary: '86000',
      age: '66',
      email: 'abc@gmail.com',
      phone: '123456',
      picture:
        'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '4',
      name: 'Cedric Kelly',
      salary: '433060',
      age: '22',
      email: 'abc@gmail.com',
      phone: '123456',
      picture:
        'https://images.unsplash.com/photo-1551712702-4b7335dd8706?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  ];
  const renderItemData = item => {
    return (
      <Card
        style={styles.myCard}
        key={item.id}
        onPress={() => navigation.navigate('Profile', item)}>
        <View style={styles.cardView}>
          <Image
            style={styles.avatar}
            source={{
              uri: item.picture,
            }}></Image>
          <View style={styles.ml5}>
            <Text style={styles.headerText}>{item.name}</Text>
            <Text style={styles.headerText}>Age: {item.age}</Text>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={item => {
          return renderItemData(item.item);
        }}></FlatList>
      <FAB
        onPress={() => navigation.navigate('Create')}
        style={styles.fab}
        small={false}
        icon="plus"
        theme={{colors: {accent: '#006aff'}}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  myCard: {
    margin: 5,
  },
  cardView: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  ml5: {
    marginLeft: 5,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default Home;
