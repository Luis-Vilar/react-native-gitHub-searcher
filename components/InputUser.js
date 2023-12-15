import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';

const InputUser = (props) => {
const {text, setText} = props;
  return (
    <View>
         <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
      />
    </View>
     
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    flex: 1,
    width: 250,
    borderColor: 'white',
    padding: 10,
    color : 'white',
  },
});

export default InputUser;