import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
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
