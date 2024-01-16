import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={s.postsBlock}>
                My posts
                <div>
                    <div>
                    <textarea></textarea>
                    </div>
                    <div>
                    <button>Add posts</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post message='hi, how are you?' likesCount={7}/>
                    <Post message='its my first post' likesCount={14}/>
                </div>
            </div>
        </div>
    );
};

export default MyPosts;