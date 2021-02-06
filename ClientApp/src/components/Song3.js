import React, { Component } from 'react';

export class Song3 extends Component {
  static displayName = Song3.name;

  constructor(props) {
    super(props);
    this.state = { song: [], loading: true };
  }

  componentDidMount() {
    this.populateSongData();
  }

  static renderSong(song) {
    return (
      <p>{song.name}</p>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Song3.renderSong(this.state.song);

    return (
      <div>
        <h1 id="tabelLabel">Song</h1>
        {contents}
      </div>
    );
  }

  async populateSongData() {
    const response = await fetch('song');
    console.log(response);
    const data = await response.json();
    console.log(data);
    this.setState({ song: data, loading: false });
  }
}
