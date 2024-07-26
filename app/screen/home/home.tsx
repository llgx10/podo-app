import { useRouter } from "expo-router";
import React, { useRef } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ScrollView, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

// Define an array of colors
const rectangleColors = [
  '#FFDDC1', // Light Peach
  '#FFABAB', // Light Coral
  '#FFC3A0', // Light Pink
  '#D5AAFF', // Light Purple
  '#B9FBC0', // Light Green
  '#A0E6FF', // Light Blue
];

export default function HomeScreen() {
  // Create animated value
  const scrollY = useRef(new Animated.Value(0)).current;

  // Interpolate the scroll value to control the white rectangle's position
  const whiteRectangleTranslateY = scrollY.interpolate({
    inputRange: [0, height * 0.45],
    outputRange: [0, height * 0.45 * 0.1], // Limit the upward movement (10% of the rectangle height)
    extrapolate: 'clamp',
  });

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
            source={require('../../../assets/images/weather_icon/sunny.png')}
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
              source={require('../../../assets/images/weather_icon/sunriseandset.png')}
              style={styles.cellIcon}
            />
          </View>
          <View style={styles.separator} />
          <View style={styles.separatorCell}>
            <Text style={styles.cellValue}>74%</Text>
            <Image
              source={require('../../../assets/images/weather_icon/umbrella.png')}
              style={styles.cellIcon}
            />
          </View>
          <View style={styles.separator} />
          <View style={styles.separatorCell}>
            <Text style={styles.cellValue}>5.56 m/s</Text>
            <Image
              source={require('../../../assets/images/weather_icon/wind.png')}
              style={styles.cellIcon}
            />
          </View>
        </View>
      </LinearGradient>

      <Animated.View style={[styles.whiteRectangleContainer, { transform: [{ translateY: whiteRectangleTranslateY }] }]}>
        <ScrollView
          contentContainerStyle={styles.whiteRectangleContent}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16} // Adjust for smooth scrolling
        >
          <View style={styles.whiteRectangle}>
            <View style={styles.gridContainer}>
              {Array.from({ length: 6 }).map((_, index) => (
                <View
                  key={index}
                  style={[styles.roundedRectangle, { backgroundColor: rectangleColors[index] }]}
                >
                  <Text style={styles.rectangleText}>Box {index + 1}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </Animated.View>
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
  whiteRectangleContainer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: height * 0.45, // Fixed height
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  whiteRectangleContent: {
    flexGrow: 1,
    justifyContent: 'flex-end', // Ensures content is aligned at the bottom
  },
  whiteRectangle: {
    width: width,
    height: '100%', // Fill the container height
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Align items in a 3x2 grid
    padding: 30,
    marginTop: 20,
  },
  roundedRectangle: {
    width: (width - 50) / 4, // Adjust width to make the boxes smaller
    height: (width - 50) / 4, // Ensure square shape
    borderRadius: 10,
    marginBottom: 5, // Margin between rows
    marginRight: 5, // Margin between columns
    justifyContent: 'center',
    alignItems: 'center',
    
    // Shadow properties
    elevation: 5, // Elevation for Android
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 3 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
  },
  rectangleText: {
    fontSize: 12,
    color: '#333',
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
    width: 30,
    height: 20,
  },
});
