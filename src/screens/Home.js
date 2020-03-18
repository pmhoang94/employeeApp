import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper';

class Home extends Component {
  render() {
    const data = [
      {
        id: '1',
        name: 'Tiger Nixon',
        employee_salary: '320800',
        employee_age: '61',
        profile_image:
          'https://images.unsplash.com/photo-1552915170-73c2330ae617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: '2',
        name: 'Garrett Winters',
        employee_salary: '170750',
        employee_age: '63',
        profile_image:
          'https://images.unsplash.com/photo-1561826693-1246ed6cc0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: '3',
        name: 'Ashton Cox',
        employee_salary: '86000',
        employee_age: '66',
        profile_image:
          'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: '4',
        name: 'Cedric Kelly',
        employee_salary: '433060',
        employee_age: '22',
        profile_image:
          'https://images.unsplash.com/photo-1551712702-4b7335dd8706?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: '5',
        name: 'Tiger Nixon',
        employee_salary: '320800',
        employee_age: '61',
        profile_image:
          'https://images.unsplash.com/photo-1552915170-73c2330ae617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: '6',
        name: 'Garrett Winters',
        employee_salary: '170750',
        employee_age: '63',
        profile_image:
          'https://images.unsplash.com/photo-1561826693-1246ed6cc0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: '7',
        name: 'Ashton Cox',
        employee_salary: '86000',
        employee_age: '66',
        profile_image:
          'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: '8',
        name: 'Cedric Kelly',
        employee_salary: '433060',
        employee_age: '22',
        profile_image:
          'https://images.unsplash.com/photo-1551712702-4b7335dd8706?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      },
    ];
    const renderItemData = item => {
      return (
        <Card style={styles.myCard} key={item.id}>
          <View style={styles.cardView}>
            <Image
              style={styles.avatar}
              source={{
                uri: item.profile_image,
              }}></Image>
            <View style={styles.ml5}>
              <Text style={styles.headerText}>{item.name}</Text>
              <Text style={styles.headerText}>Age: {item.employee_age}</Text>
            </View>
          </View>
        </Card>
      );
    };
    return (
      <View>
        <FlatList
          data={data}
          renderItem={item => {
            return renderItemData(item.item);
          }}></FlatList>
        <FAB
          style={styles.fab}
          small={false}
          icon="plus"
          theme={{colors: {accent: 'blue'}}}
          onPress={() => console.log('Pressed')}
        />
      </View>
    );
  }
}

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
