import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const useGA = () => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        ReactGA.initialize("UA-129342449-2");
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, [initialized]);
};

const useRouterGA = () => {
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        ReactGA.initialize("UA-129342449-2");
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(location.pathname + location.search);
        }
    }, [initialized, location]);
};

export { useGA, useRouterGA };
