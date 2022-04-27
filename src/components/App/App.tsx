import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch} from "../../store/hooks";
import {photoApi} from "../../utils/fetchData";
import {actions} from "../../store/actions";
import {CardList} from "../CardList/CardList";

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        photoApi
            .search
            .getPhotos({
                query: "cat",
                orientation: 'portrait'
            })
            .then(data => {
                dispatch({
                    type: actions.SET_CARDS_DATA,
                    payload: data.response?.results
                })
            })
            .catch(() => {
                console.log("something went wrong!");
            });
    }, []);

    return <CardList/>
}
