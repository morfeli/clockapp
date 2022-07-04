import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  createContext,
} from "react";

type GeoData = {
  [key: string]: any;
};

type ITimeContext = {
  quotes: any[];
  geoData: GeoData;
  timeNow: number;
  error: boolean;
  loaded: boolean;
  active: boolean;
  toggleActive?: () => void;
  fetchNewQuote?: () => void;
};

type TimeProviderProps = {
  children: React.ReactNode;
};

const defaultState = {
  quotes: [],
  geoData: [],
  timeNow: 0,
  error: false,
  loaded: false,
  active: false,
};

export const TimeContext = createContext<ITimeContext>(defaultState);

export const TimeProvider = (props: TimeProviderProps) => {
  const [quotes, setQuotes] = useState<any[]>(defaultState.quotes);
  const [geoData, setGeoData] = useState<any[]>(defaultState.geoData);
  const [error, setError] = useState(defaultState.error);
  const [loaded, setLoaded] = useState(defaultState.loaded);
  const [active, setActive] = useState(defaultState.active);
  const [timeNow, setTimeNow] = useState<number>(defaultState.timeNow);

  const fetchQuotes = () => {
    setLoaded(true);

    fetch("https://api.quotable.io/random?tags=technology,famous-quotes")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoaded(false);
          setQuotes([data]);
        }
      })
      .catch((error) => setError(error));
  };

  const fetchGeoData = () => {
    setLoaded(true);

    fetch("http://ipwho.is/")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoaded(false);
          setGeoData([data]);
        }
      })
      .catch((error) => setError(error));
  };

  //   come back later and solve how to setInterval..
  useEffect(() => {
    fetchQuotes();
    fetchGeoData();
    const interval = setInterval(() => {
      fetchGeoData();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const date = new Date();
    const time = date.getHours();
    setTimeNow(time);
  }, []);

  const toggleActive = useCallback((): void => {
    setActive((current) => !current);
  }, []);

  const fetchNewQuote = (): void => {
    fetchQuotes();
  };

  const initialState = useMemo(
    () => ({
      quotes,
      geoData,
      error,
      active,
      loaded,
      toggleActive,
      fetchNewQuote,
      timeNow,
    }),
    [
      quotes,
      error,
      active,
      loaded,
      toggleActive,
      fetchNewQuote,
      geoData,
      timeNow,
    ]
  );

  return (
    <TimeContext.Provider value={initialState}>
      {props.children}
    </TimeContext.Provider>
  );
};
