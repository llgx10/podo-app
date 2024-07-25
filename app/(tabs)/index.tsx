import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#45AEFE', '#349CF4']}
        style={styles.gradientRectangle}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.locationText}>Ho Chi Minh City</Text>
        <Text style={styles.weatherText}>Sunny</Text>
        <View style={styles.temperatureWrapper}>
          <Image
            source={require('../../assets/images/weather_icon/sunny.png')}
            style={styles.icon}
          />
          <View style={styles.temperatureDetails}>
            <Text style={styles.temperatureText}>29°</Text>
            <View style={styles.tempRange}>
              <Text style={styles.maxTemp}>35°</Text>
              <Text style={styles.minTemp}>19°</Text>
            </View>
          </View>
        </View>
        <View style={styles.separatorContainer}>
          <View style={styles.separatorCell}>
            <Text style={styles.cellValue}>39</Text>
            <Text style={styles.cellText}>AIQ</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.separatorCell}>
            <View style={styles.sunTimesContainer}>
              <Text style={styles.cellValue}>5:37</Text>
              <Text style={styles.cellValue}>6:32</Text>
            </View>
            <Image
            source={require('../../assets/images/weather_icon/icon _umbrella insurance_.png')}
            style={styles.cellIcon}
          />
          </View>
          <View style={styles.separator} />
          <View style={styles.separatorCell}>
            <Text style={styles.cellValue}>74</Text>
             <Image
            source={require('../../assets/images/weather_icon/icon _umbrella insurance_.png')}
            style={styles.cellIcon}
          />
          </View>
          <View style={styles.separator} />
          <View style={styles.separatorCell}>
            <Text style={styles.cellValue}>5.56 m/s</Text>
            <Image
            source={require('../../assets/images/weather_icon/icon _strong wind_.png')}
            style={styles.cellIcon}
          />
          </View>
        </View>
      </LinearGradient>

      <View style={styles.whiteRectangle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientRectangle: {
    width: width,
    height: height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  whiteRectangle: {
    width: width,
    height: height * 0.6,
    backgroundColor: 'white',
    position: 'absolute',
    top: height * 0.5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  temperatureText: {
    fontSize: 80,
    color: 'white',
    fontFamily: 'Arial',
    textAlign: 'center',
    marginLeft: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  temperatureWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: height * 0.16, // Adjust this value to move it higher or lower
  },
  temperatureDetails: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tempRange: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maxTemp: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Arial',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 30,
  },
  minTemp: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Arial',
    textAlign: 'center',
    lineHeight: 22,
  },
  locationText: {
    position: 'absolute',
    top: height * 0.07,
    fontSize: 24,
    color: 'white',
    fontFamily: 'Arial',
    textAlign: 'center',
    zIndex: 1, // Ensures it is on top of other content
  },
  weatherText: {
    position: 'absolute',
    top: height * 0.3,
    fontSize: 24,
    color: 'white',
    fontFamily: 'Arial',
    textAlign: 'center',
    zIndex: 1, // Ensures it is on top of other content
  },
  separatorContainer: {
    position: 'absolute',
    bottom: height * 0.12, // Positioning it just below the weather text
    flexDirection: 'row',
    width: width * 0.85,
    justifyContent: 'space-between', // Ensured even spacing
    alignItems: 'center',
  },
  separator: {
    width: 1,
    height: height * 0.08, // Short height for the lines
    backgroundColor: 'white',
  },
  separatorCell: {
    width: 80, // Adjusted width to accommodate text and values
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunTimesContainer: {
    flexDirection: 'row', // Align times horizontally
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellValue: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Arial',
    marginHorizontal: 2,
    marginTop: 1, // Spacing between values
  },
  cellText: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Arial',
    marginTop: 5, // Space between value and text
  },
  cellIcon: {
    width: 20,
    height: 20 ,
    marginTop: 1,
  },
});
