import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

export default function Button(props: any) {
  const {onPress, title} = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#09a4e7',
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
