import React from 'react';
import s from "./Post.module.css";

type PostProps = {
    message: string,
    likesCount: number
}

const Post = (props: PostProps) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src='https://image-prod.iol.co.za/resize/650x366/SpaceX-founder-Elon-Musk-Picture-Reuters-Joe-Skipper?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/f06d89d5-c043-5a47-9037-909b8103f880&operation=CROP&offset=0x149&resize=3499x1968&webp=true'/>
                post 1
                {props.message}
                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>
        </div>
    );
};

export default Post;