import React from 'react';
import { Comment } from '@comps';
import './styles/CommentSection.css';

const CommentSection = (props: PropsT) => {
  return (
    <div styleName="CommentSection">
      <For each="comment" index="index" of={props.comments}>
        <Comment key={index} data={comment} />
      </For>
    </div>
  );
};

export default CommentSection;
