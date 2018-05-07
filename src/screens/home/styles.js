const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 280,
    height: 100
  },
  text: {
    color: "#53515b",
    fontSize: 12,
    bottom: 6,
    marginTop: 5
  },
  pullRight: {
    textAlign:'right',
  },
  content:{
    paddingLeft: 10,
    paddingRight: 10
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'grey',
    marginRight:15,
    marginLeft:15,
  },
  radioView:{
    flex:1,
    flexDirection:'row'
  },
  buttonGroup:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center'

  },
  buttonSeparator:{
    margin:10
  },
  buttonGroupText:{
    fontSize:10
  },
  container: {
    backgroundColor: "#FFF"
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
  }
};
