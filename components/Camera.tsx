import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as ImageManipulator from 'expo-image-manipulator';
import * as Permissions from 'expo-permissions';

type CameraProps = {
  onPictureTaken: (uri: string) => void;
};

export const CameraComponent: React.FC<CameraProps> = ({ onPictureTaken }) => {
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isTakingPicture, setIsTakingPicture] = useState(false);
  const [previewUri, setPreviewUri] = useState<string | null>(null);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setCameraPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef && !isTakingPicture) {
      setIsTakingPicture(true);
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.takePictureAsync(options);
      const compressedImage = await ImageManipulator.manipulateAsync(
        data.uri,
        [{ resize: { width: 800 } }],
        { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
      );
      setPreviewUri(compressedImage.uri);
      setIsPreviewing(true);
      onPictureTaken(compressedImage.uri);
      setIsTakingPicture(false);
    }
  };

  const toggleCameraType = () => {
    setCameraType(cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
  };

  const toggleFlashMode = () => {
    setFlashMode(flashMode === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off);
  };

  const cancelPreview = () => {
    setIsPreviewing(false);
    setPreviewUri(null);
  };

  return (
    <View style={styles.container}>
      {cameraPermission ? (
        <>
          {isPreviewing ? (
            <View style={styles.previewContainer}>
              <TouchableOpacity style={styles.previewCancel} onPress={cancelPreview}>
                <Ionicons name="close-outline" size={32} color="#fff" />
              </TouchableOpacity>
              <View style={styles.previewImageContainer}>
                <Image source={{ uri: previewUri }} style={styles.previewImage} />
              </View>
            </View>
          ) : (
            <Camera
              ref={(ref) => setCameraRef(ref)}
              style={styles.camera}
              type={cameraType}
              flashMode={flashMode}
              onCameraReady={() => console.log('Camera is ready')}
            >
              <View style={styles.cameraControls}>
                <TouchableOpacity style={styles.cameraControl} onPress={toggleCameraType}>
                  <Ionicons name="camera-reverse-outline" size={32} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cameraControl} onPress={toggleFlashMode}>
                  <Ionicons name="flash-outline" size={32} color="#fff" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
                <View style={styles.cameraButtonInner} />
              </TouchableOpacity>
            </Camera>
          )}
        </>
      ) : (
        <Text>No camera permission</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  cameraControl: {
    padding: 10,
  },
  cameraButton: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 50,
    height: 60,
    width: 60,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButtonInner: {
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  previewContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  previewCancel: {
    padding: 20,
  },
  previewImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});