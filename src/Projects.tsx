import React from 'react';
import {Text, StyleSheet, View, Linking, ScrollView} from 'react-native';
import MyButton from './Button';

const Project = ({navigation}: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>OCR-CNIC-Tracker</Text>
        <Text style={styles.value}>
          Full stack CNIC Tracker application using ReactJs, NodeJs, TailwindCSS
          and MySQL using Prisma ORM Application scans a picture and uses OCR
          techniques to capture CNIC from the picture and save the document
          details in database. Helps in tracking documents based on CNIC of a
          customer or an employee
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>
          Full stack Finance tracker using ReactJs, ExpressJs and Mongodb with
          authentication and authorization
        </Text>
        <Text style={styles.value}>
          Full stack Finance tracker using ReactJs, ExpressJs and Mongodb with
          authentication and authorization Designed secure API end points
          including CRUD operations Finance app maintaining financial profiles
          of different people
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Backend and APIs certification</Text>
        <Text style={styles.value}>
          work extensively in ExpressJs that Included Timestamp microservice,
          Request Header Parser, URL shortener, Exercise Tracker etc.
        </Text>
      </View>
      <View style={styles.ButtonSection}>
        <MyButton title="Home" onPress={() => navigation.navigate('main')} />

        <MyButton
          title="certification"
          onPress={() =>
            Linking.openURL(
              'https://www.freecodecamp.org/certification/malikwahab34/back-end-development-and-apis',
            )
          }
        />

        <MyButton
          title="Contact Me"
          onPress={() => navigation.navigate('contactus')}
        />
      </View>
    </ScrollView>
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
  value: {
    fontFamily: 'Open Sans',

    fontSize: 18,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#4ec2f4',
    alignItems: 'center',
    padding: 16,
  },
  section: {
    width: 350,
    marginBottom: 20,
    backgroundColor: '#a1ddf7',
    padding: 20,
    borderRadius: 20,
  },
  ButtonSection: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#96d2eb',
    padding: 20,
    borderRadius: 20,
  },
  header: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Open Sans',

    fontWeight: 'bold',
    marginBottom: 16,
  },

  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default Project;
