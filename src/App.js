import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Fade } from "@material-ui/core";
import LofiHeader from "./features/LofiHeader";
import { useBackgroundState } from "./providers/BackgroundProvider";
import Clock from "./components/Clock";


const useStyles = makeStyles({
  lofiBg: {
    background: (props) => `url(${props.backgroundUrl})`,
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
    height: "100% !important",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
  },
});

const App = () => {
  const bgState = useBackgroundState();
  const [playLofi, setPlayLofi] = React.useState({
    play: false,
    loading: false,
  });
  const classes = useStyles({
    backgroundUrl: bgState.url,
  });

  return (
    <div className={classes.lofiBg}>
      <LofiHeader playLofi={playLofi} setPlayLofi={setPlayLofi} />
      <main className={classes.main}>
        <Clock />
        {playLofi.play && (
          <>
            {playLofi.loading && <CircularProgress />}
            <Fade in={!playLofi.loading}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/watch?v=mmKguZohAck"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                onLoad={() =>
                  setPlayLofi((state) => ({ ...state, loading: false }))
                }
              />
            </Fade>
          </>
        )}
      </main>
      <footer>
        <Typography variant="subtitle2">
          <Link target="_blank" color="secondary" href={bgState.url}>
            Gif Source
          </Link>
        </Typography>
      </footer>
    </div>
  );
};

export default App;
