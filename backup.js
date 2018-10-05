import React from 'react';
import {
  StyleSheet, Text, TextInput, View, Button, Image, ScrollView,
} from 'react-native';

let key = 0;

const Vai = props => (
  <View style={styles.vai}>
    <Button
      onPress={props.delete}
      title="DELETE"
    />
    <Text>{props.todo.text}</Text>
  </View>
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  add() {
    key++;
    const text = `TODO number ${key}`;
    this.setState({
      todos: [
        ...this.state.todos,
        { key, text },
      ],
    });
  }

  del(key) {
    this.setState({
      todos: this.state.todos.filter(todo => (todo.key != key)),
    });
  }

  render() {
    return (
      <View>
        <View style={styles.botao}>
          <View style={{ width: '50%' }}>
            <Button
              onPress={() => { this.add(); }}
              title="add"
            />
          </View>
          <ScrollView>
            {this.state.todos.map(todo => (
              <Vai
                delete={() => { this.del(todo.key); }}
                todo={todo}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  botao: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: 'rgb(250,250,250)',
  },
  vai: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
