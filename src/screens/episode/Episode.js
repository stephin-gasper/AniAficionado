import React, {useCallback, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {InteractionManager, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import EpisodeService from 'services/episode';
import {WebView} from 'react-native-webview';
import Spinner from 'components/spinner/Spinner';

const styles = StyleSheet.create({
  vidWrapper: {
    width: '100%',
    height: '56.3%',
    marginBottom: 15,
  },
});

const injectScript = `
  window.addEventListener("message", (event) => {
    window.ReactNativeWebView.postMessage(String(event.data));
  }, false);
  true; // note: this is required, or you'll sometimes get silent failures
`;

const Episode = ({route}) => {
  const {path, episodeNumber} = route.params;
  const episode = useRef();
  const webview = useRef();
  const [showLoader, setShowLoader] = useState(true);
  const [episodeDetails, setEpisodeDetails] = useState({});
  const [currentEpisodeNumber, setCurrentEpisodeNumber] =
    useState(episodeNumber);
  const [currentStreamLinks, setCurrentStreamLinks] = useState();
  const [isInternalStreamingLink, setIsInternalStreamingLink] = useState(true);

  const handleWebViewNavigationStateChange = newNavState => {
    const {url, title, loading} = newNavState;
    if (!url) return;

    if (title === 'Stream' && url.includes('plyr.link') && !loading) {
      webview.current.injectJavaScript(injectScript);
    }
  };

  const handleWebViewMessage = ({nativeEvent: {data, title}}) => {
    console.log('## message', data);
    if (title === 'Stream' && data.includes('proxy#')) {
      console.log('## set external link');
      setIsInternalStreamingLink(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        setShowLoader(true);
        episode.current = new EpisodeService();
        episode.current
          .getDetails(path)
          .then(data => {
            setEpisodeDetails(data);
            setCurrentStreamLinks(
              episode.current.getStreamingLinks({episodeNumber}),
            );
            setIsInternalStreamingLink(true);
          })
          .finally(() => {
            setShowLoader(false);
          });
      });

      return () => task.cancel();
    }, [episodeNumber, path]),
  );

  return (
    <>
      <Choose>
        <When condition={Object.keys(episodeDetails).length !== 0}>
          <View>
            <View style={styles.vidWrapper}>
              <If condition={currentStreamLinks}>
                <WebView
                  ref={webview}
                  allowsFullscreenVideo
                  allowsInlineMediaPlayback
                  domStorageEnabled
                  source={{
                    uri: isInternalStreamingLink
                      ? currentStreamLinks.internalPlayerLink
                      : currentStreamLinks.externalPlayerLink,
                  }}
                  onNavigationStateChange={handleWebViewNavigationStateChange}
                  onMessage={handleWebViewMessage}
                />
              </If>
            </View>
            <View>
              <Text>Episode: {currentEpisodeNumber}</Text>
            </View>
          </View>
        </When>
      </Choose>
      <If condition={showLoader}>
        <Spinner />
      </If>
    </>
  );
};

Episode.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      path: PropTypes.string.isRequired,
      episodeNumber: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Episode;
