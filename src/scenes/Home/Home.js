import React, { PureComponent } from 'react';
import './styles/Home.css';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '@store/actions/users';
import {
  InputBox,
  Box,
  Title,
  Input,
  Button,
  SmallText,
  SmallThing
} from '@comps';

type PropsT = {
  actions: Object
};

class Home extends React.PureComponent {
  state = {
    searchValue: '',
    searchResults: [],
    things: []
  };

  async componentDidMount() {
    this.props.actions.getThings();
  }

  componentDidUpdate(prevProps) {
    prevProps.things !== this.props.things
      ? this.setState(state => {
          return {
            things: this.props.things,
            searchResults: this.props.things
          };
        })
      : null;
  }

  setSearchValue = ({ target: { value } }) => {
    this.setState(state => {
      return {
        searchValue: value
      };
    });
  };

  getSearchResults = () => {
    console.log('Search Results hit');
    this.setState(state => {
      return {
        searchResults: this.state.things.filter(thing => {
          console.log(thing);
          let shouldReturn = false;
          thing.name.indexOf(this.state.searchValue) > -1
            ? (shouldReturn = true)
            : null;
          thing.description.indexOf(this.state.searchValue) > -1
            ? (shouldReturn = true)
            : null;

          thing.tags.indexOf(this.state.searchValue) > -1
            ? (shouldReturn = true)
            : null;

          return shouldReturn;
        })
      };
    });
  };

  render({ props, state } = this) {
    return (
      <div styleName="Home" e2e="Home">
        <div styleName="header" e2e="header">
          <Title e2e="title">The Hub For Tooling Enthusiasts</Title>
          <Box padding="24px" width="400px" layout="column">
            <Input
              onIconClick={this.getSearchResults}
              onChange={this.setSearchValue}
              placeholder="search query"
              value={state.searchValue}
              e2e="searchInput"
              id="searchInput"
              icon="search"
              iconSize="lg"
            />
            <Link styleName="create-new" to="/submit">
              <SmallText e2e="submitLink">submit a new thing</SmallText>
            </Link>
          </Box>
        </div>
        <main styleName="body">
          <Choose>
            <When condition={state.searchResults.length}>
              <section styleName="thingBox">
                <For each="thing" of={state.searchResults} index="index">
                  <SmallThing
                    name={thing.name}
                    id={thing._id}
                    key={thing._id}
                  />
                </For>
              </section>
            </When>
            <Otherwise>
              {/* TODO: Create Loading component. */}
              <section styleName="loadingIndicator">
                <h3>Loading...</h3>
              </section>
            </Otherwise>
          </Choose>
        </main>
      </div>
    );
  }
}

export default Home;
