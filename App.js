import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

const ScanQRHomescreen = () => {
  const scannerRef = useRef(null);


  return (
    <QRCodeScanner
      ref={scannerRef}
      reactivate={() => { console.log('re') }}
      reactivateTimeout={30}
      onRead={() => console.log('')}
      // topViewStyle={{ height: 100, position: "absolute", top: Platform.OS === 'ios'? 30 : 50, zIndex:999}}
      topContent={
        <>
          <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              width: "100%",
              paddingHorizontal: 20,
              marginTop: 12,
              alignItems: "center",
              backgroundColor: "#000",
              height: 65,
              zIndex: 999,

            }}
          >
            <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }} style={{ zIndex: 1000 }} onPress={() => { }}>

              <Text style={{ color: "#fff" }}>Back</Text>

            </TouchableOpacity>
            <Text style={{ color: "#fff" }}>Scan QR</Text>

          </View>
        </>
      }
      cameraStyle={{
        height: Platform.OS === 'ios' ? 690 : 750,
        backgroundColor: "#000",
        marginTop: 90,
      }}
      showMarker

      bottomViewStyle={{
        backgroundColor: "#000",
        height: 80,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: "absolute",
        bottom: 0,
      }}
      bottomContent={
        <View>
          <Text
            style={{
              color: "#D5D5D5",
              textAlign: "center",
              fontSize: 20,
              fontWeight: '600',
            }}
          >
            Align QR to scan
          </Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)",
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScanQRHomescreen;
