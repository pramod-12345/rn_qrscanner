import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';

function ScanQR() {
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'upc-a'],
    onCodeScanned: codes => {
      if (isScanning && codes.length > 0) {
        setIsScanning(false);
        const scannedCode = codes[0];
        console.log(scannedCode);
        Alert.alert('QR Code Scanned', `Value: ${scannedCode.value}`, [
          { text: 'OK', onPress: () => setIsScanning(true) },
        ]);
      }
    },
  });

  if (!hasPermission) {
    return (
      <View style={styles.center}>
        <Text>No Camera Permission Granted</Text>
        <Button title="Request Permission" onPress={requestPermission} />
      </View>
    );
  }

  if (device == null) {
    return (
      <View style={styles.center}>
        <Text>No Camera Device Found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isScanning}
        codeScanner={codeScanner}
        photoQualityBalance="speed"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScanQR;