import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChapterContent } from "main/store/types/types-comp/chapter-type";

function Chapter() {
    const initialState: ChapterContent[] = [{
        chapter: 0,
        page: 0,
        link: ""
    }];

    const [chapters, setChapters] = useState(initialState)
    const [hasLoad, setHasLoad] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://darkarchana-backend.appspot.com/chapter?req=findChapter&title=blue_lock&chapter=1',      
        })
        .then(res => {
            console.log(res.data)
            setHasLoad(true);
        })
        .catch(err => {
            setError(err.message);
            setHasLoad(true)
        })
    }, []);

    if (hasLoad) {
        return (
            <div>
                {error ? <h2>{error}</h2> : <h2>{hasLoad}</h2>}
            </div>
        );
    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
}

export default Chapter;
