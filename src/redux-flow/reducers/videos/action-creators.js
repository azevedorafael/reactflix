import { ADD_VIDEO } from "./actions";
import { db } from "config/firebase";

export const registerVideo = ({ id, title }) => async (dispatch) => {
    await db.ref('videos').child(id).update({ id, title })

    dispatch(addVideo({ id, title }))
}

export const addVideo = ({ id, title }) => ({
    type: ADD_VIDEO,
    payload: { id, title }
})

export const fetchVideos = () => (dispatch) => {
    // db.ref('videos').orderByChild('title').on('child_added', (child, prevKey) => {
    //     console.log(child.val())
    //     dispatch(addVideo(child.val()))
    // })
    db.ref('videos').on('value', (snapshot) => {
        const videos = snapshot.val()
        const ordered = Object.keys(videos)
            .sort((a, b) => videos[a].title < videos[b].title ? -1 : 1)
            .map((id) => ({
                id,
                title: videos[id].title
            }))
        console.log(ordered)
        ordered.forEach((video) => dispatch(addVideo(video)))
    })
}