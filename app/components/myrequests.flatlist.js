import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";


export default class FlatListMyRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }
  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    //const url = 'https://randomuser.me/api/?seed=${seed}&page=${page}&results=20';
    const url = 'http://172.18.196.1:3000/api/v1/requests';
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          //data: page === 1 ? res : [...this.state.data, ...res],
          data: res.results,
          error: res.error || null,
          loading: false,
          refreshing: false
        });
        console.debug(res);
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  
  render () {
    return (
      <View>
      <FlatList
      data={this.state.data}
      renderItem={({ item }) => (
        <ListItem
          title={`${item.room_number} ${item.status}`}
          subtitle={item.type}
          containerStyle={{ borderBottomWidth: 0 }}
        />
      )}
      keyExtractor={item => item._id}
      onRefresh={this.handleRefresh}
      refreshing={this.state.refreshing}
      onEndReached={this.handleLoadMore}
      onEndReachedThreshold={50}
      />
      </View>
    )
  }
}
