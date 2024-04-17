import React, { useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Platform } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

const ScanQRHomescreen = () => {
  const scannerRef = useRef(null);

  return (
    <QRCodeScanner
      ref={scannerRef}
      reactivate={() => console.log('re')}
      reactivateTimeout={30}
      onRead={() => console.log('')}
      topContent={
        <>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <View style={styles.topView}>
            <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }} style={styles.backButton} onPress={() => {}}>
              <Text style={styles.whiteText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.whiteText}>Scan QR</Text>
          </View>
        </>
      }
      cameraStyle={styles.camera}
      showMarker
      bottomViewStyle={styles.bottomView}
      bottomContent={
        <View>
          <Text style={styles.grayText}>Align QR to scan</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  topView: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 12,
    alignItems: "center",
    backgroundColor: "#000",
    height: 65,
    zIndex: 999,
  },
  backButton: {
    zIndex: 1000,
  },
  whiteText: {
    color: "#fff",
  },
  camera: {
    height: Platform.OS === 'ios' ? 690 : 750,
    backgroundColor: "#000",
    marginTop: 90,
  },
  bottomView: {
    backgroundColor: "#000",
    height: 80,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
    bottom: 0,
  },
  grayText: {
    color: "#D5D5D5",
    textAlign: "center",
    fontSize: 20,
    fontWeight: '600',
  },
});

export default ScanQRHomescreen;