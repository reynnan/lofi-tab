import React from "react";
import {
  ACTIONS,
  useBackgroundDispatch,
  useBackgroundState,
} from "../providers/BackgroundProvider";
import Header from "../components/Header";
import mixpanel from "mixpanel-browser"

const LofiHeader = ({ playLofi, setPlayLofi }) => {
  const bgDispatch = useBackgroundDispatch();
  const bgState = useBackgroundState();

  return (
    <Header
      shuffle={() => {
        mixpanel.track('LofiHeader - Shuffle background')
        bgDispatch(ACTIONS.SHUFFLE_BACKGROUND())
      }}
      toggleStar={() => {
        mixpanel.track('LofiHeader - Toggle favorite background', {isFavorite: !bgState.isFavorite, url: bgState.url})
        bgDispatch(ACTIONS.TOGGLE_FAVORITE(bgState.url))}
      }
      isStarred={bgState.isFavorite}
      onPlayLofi={() => {
        mixpanel.track('LofiHeader - Toggle Lofi', {isPlaying: !playLofi.play})
        setPlayLofi((state) => ({ play: !state.play, loading: !state.play }))
      }}
      isLofiPlaying={playLofi.play}
    />
  );
};

export default LofiHeader;
