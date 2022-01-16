import React from 'react';
import {View, Text, Button, PermissionsAndroid, Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const App = () => {
  const download = () => {
    let dirs = RNFetchBlob.fs.dirs;
    RNFetchBlob.config({
      addAndroidDownloads: {
        // Show notification when response data transmitted
        notification: true,
        // Title of download notification
        title: 'Great ! Download Success ! :O ',
        // File description (not notification description)
        description: 'An image file.',
        mime: 'image/png',
        // Make the file scannable  by media scanner
        mediaScannable: true,
        // path: dirs.DownloadDir + '/path-to-file.anything',
      },
    })
      .fetch('GET', 'http://example.com/image1.png')
      .then(res => {
        // the path should be dirs.DocumentDir + 'path-to-file.anything'
        console.log('The file saved to ', res.path());
      });
  };
  return (
    <View>
      <Button title="Download" onPress={download} />
    </View>
  );
};

export default App;
