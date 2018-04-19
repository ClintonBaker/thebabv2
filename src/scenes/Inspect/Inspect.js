import React from 'react';
import { CommentSection, CommentBox } from '@comps';

import './styles/Inspect.css';

class Inspect extends React.Component {
  componentWillMount() {
    this.props.thing = {};
    this.props.actions.getThing(this.props.params.id);
  }

  render({ props } = this) {
    return (
      <div styleName="Inspect">
        <Choose>
          <When condition={!!props.thing._id}>
            <h3>{props.thing.name}</h3>
            <a href={props.thing.link}>{props.thing.link}</a>
            <p styleName="description">{props.thing.description}</p>
            <div styleName="tags">
              <small>tags: {props.thing.tags}</small>
            </div>
            <hr />
            <Choose>
              <When condition={props.thing.comments.length}>
                <CommentSection comments={props.thing.comments} />
              </When>
              <Otherwise>
                <p>
                  Currently there are no comments to display! Perhaps you could
                  be the first?
                </p>
              </Otherwise>
            </Choose>
            <Choose>
              <When condition={props.user != 'Guest'}>
                <CommentBox thing={props.thing} />
              </When>
            </Choose>
          </When>
          <Otherwise>
            <small>loading</small>
          </Otherwise>
        </Choose>
      </div>
    );
  }
}

export default Inspect;
