import React from "react";
import {
  ACTIONS,
  useBackgroundDispatch,
  useBackgroundState,
} from "../providers/BackgroundProvider";
import Header from "../components/Header";

const LofiHeader = ({ playLofi, setPlayLofi }) => {
  const bgDispatch = useBackgroundDispatch();
  const bgState = useBackgroundState();
  return (
    <Header
      shuffle={() => bgDispatch(ACTIONS.SHUFFLE_BACKGROUND())}
      toggleStar={() => bgDispatch(ACTIONS.TOGGLE_FAVORITE(bgState.url))}
      isStarred={bgState.isFavorite}
      onPlayLofi={() =>
        setPlayLofi((state) => ({ play: !state.play, loading: !state.play }))
      }
      isLofiPlaying={playLofi.play}
    />
  );
};

export default LofiHeader;
