import React from 'react';
import {ScrollView, Image, Text, StyleSheet, View, Linking} from 'react-native';
import MyButton from './src/button';

export default function Landing({navigation}: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Image
          source={require('./assets/photo.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Malik Abdul Wahab</Text>
        <Text style={styles.bio}>
          Full stack developer with a passion for exploring new technologies!
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.info}>MS Cyber Security from PIEAS</Text>
        <Text style={styles.info}>Computer Engineering from FAST</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.bio}>
          I'm a tech enthusiast with a love for gaming, book reading, and
          fullstack development. When I'm not leveling up in my favorite games,
          I'm immersed in gaming and book reading. As a Fullstack Developer, I
          enjoy exploring new technologies and frameworks. Curiosity is my
          driving force, and I'm always eager to learn and tackle new
          challenges. In a nutshell, I find joy in the blend of gaming, book
          adventures, coding, and satisfying my curiosity. I am a coffee lover
          too!
        </Text>
      </View>
      <View style={styles.ButtonSection}>
        <MyButton
          title="Github"
          onPress={() => Linking.openURL('https://github.com/WahabMalik414')}
        />

        <MyButton
          title="Projects"
          onPress={() => navigation.navigate('projects')}
        />

        <MyButton
          title="Contact Me"
          onPress={() => navigation.navigate('contactus')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4ec2f4',
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
  profileImage: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    fontFamily: 'Open Sans',
    marginBottom: 5,
    textAlign: 'center',
  },
  bio: {
    fontSize: 18,
    fontFamily: 'Open Sans',
    textAlign: 'center',
  },
});
