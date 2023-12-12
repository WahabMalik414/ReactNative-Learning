import React from 'react';
import {Alert} from 'react-native';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import MyButton from './src/button';
const ContactUs = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>Contact me</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Phone no:</Text>
          <Text style={styles.value}>03365909443</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>malikwahab34@gmail.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Github:</Text>
          <Text style={styles.value}>WahabMalik414</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Your information</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput style={styles.input} placeholder="Address" multiline />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.ButtonSection}>
        <MyButton title="Home" onPress={() => navigation.navigate('main')} />

        <MyButton title="Submit" onPress={() => Alert.alert('submitted!')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ButtonSection: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    backgroundColor: '#96d2eb',
    padding: 20,
    borderRadius: 20,
  },
  value: {
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: '#4ec2f4',
    fontFamily: 'Open Sans',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    marginTop: 10,

    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  spacer: {
    margin: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  section: {
    width: 350,
    marginBottom: 20,
    backgroundColor: '#a1ddf7',
    padding: 20,
    borderRadius: 20,
  },
});

export default ContactUs;
