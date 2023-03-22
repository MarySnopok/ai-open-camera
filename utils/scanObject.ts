import { ImageManipulator } from 'expo-image-manipulator';
import { Clarifai } from 'clarifai';

const clarifai = new Clarifai.App({
  apiKey: '<your-api-key>',
});

export const scanObject = async (uri: string): Promise<string> => {
  const compressedImage = await ImageManipulator.manipulateAsync(
    uri,
    [{ resize: { width: 800 } }],
    { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
  );
  const response = await clarifai.models.predict('General', compressedImage.base64);
  const concepts = response.outputs[0].data.concepts;
  const result = concepts[0].name;
  return result;
};