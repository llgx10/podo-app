import React, { useRef } from 'react';
import { View, Text, Dimensions, Image, ScrollView, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './home_style';

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
            source={require('../../../../assets/images/weather_icon/sunny.png')}
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
              source={require('../../../../assets/images/weather_icon/sunriseandset.png')}
              style={styles.cellIcon}
            />
          </View>
          <View style={styles.separator} />
          <View style={styles.separatorCell}>
            <Text style={styles.cellValue}>74%</Text>
            <Image
              source={require('../../../../assets/images/weather_icon/umbrella.png')}
              style={styles.cellIcon}
            />
          </View>
          <View style={styles.separator} />
          <View style={styles.separatorCell}>
            <Text style={styles.cellValue}>5.56 m/s</Text>
            <Image
              source={require('../../../../assets/images/weather_icon/wind.png')}
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
