import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

export default function MyButton(props: any) {
  const {onPress, title} = props;
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        {backgroundColor: pressed ? '#007bff' : '#09a4e7'},
      ]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 6,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    color: 'white',
  },
});
