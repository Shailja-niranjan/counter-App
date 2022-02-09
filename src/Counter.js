import React from 'react';
import { View , Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addition , subtraction , reset} from './store/actions';

const Counter = (props) => {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
        <Button title='INCREMENT' onPress={() => dispatch(addition())} />
        <Text>{data}</Text>
        <Button title='DECREMENT' onPress={() => dispatch(subtraction())} />
    </View>
  );
};


export default Counter;
const styles = StyleSheet.create({   
  container: {    flex: 1,    justifyContent: 'center',    alignItems: 'center'  }});


