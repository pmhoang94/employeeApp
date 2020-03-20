import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

const Home = ({navigation}) => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(0);
  const {data, loading} = useSelector(state => {
    return state;
  });
  const dispatch = useDispatch();
  const fetchData = () => {
    fetch('http://localhost:1337/api/employee/query', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: {isDelete: false},
      }),
    })
      .then(res => res.json())
      .then(res => {
        dispatch({type: 'ADD_DATA', payload: res.data});
        dispatch({type: 'SET_LOADING', payload: false});
      })
      .catch(eer => {
        Alert.alert('Something went wrong');
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderItemData = item => {
    return (
      <Card
        style={styles.myCard}
        key={item._id}
        onPress={() => navigation.navigate('Profile', item)}>
        <View style={styles.cardView}>
          <Image
            style={styles.avatar}
            source={{
              uri: item.picture,
            }}></Image>
          <View style={styles.ml5}>
            <Text style={styles.headerText}>{item.name}</Text>
            <Text style={styles.headerText}>Postion: {item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <View style={{flex: 1}}>
      {/* {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          // onRefresh={() => fetchData()}
          data={data}
          renderItem={item => {
            return renderItemData(item.item);
          }}></FlatList>
      )} */}
      <FlatList
        refreshing={false}
        onRefresh={() => fetchData()}
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
