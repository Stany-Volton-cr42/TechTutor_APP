import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight as hp} from "react-native-responsive-dimensions";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#2467EC",
    width: responsiveWidth(88),
    height: responsiveWidth(2.5),
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotStyle: {
    backgroundColor: "#C6C7CC",
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDotStyle: {
    backgroundColor: "#2467Ec",
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: hp(3.5),
    textAlign: "center",
    color: "white",
  },
  description:{
    fontSize: hp(2),
    textAlign: "center",
    color: "white",
    marginBottom: 10,
  },
  errorContainer:{
    backgroundColor: "#FF5252",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input:{
    height: 55,
    marginHorizontal: 16,
    borderRadius: 8,
    paddingLeft: 35,
    fontSize: 16,
    backgroundColor: "white",
    color: "#A1A1A1",
  }
});



