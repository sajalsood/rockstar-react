import React, { Component } from 'react';

export class Song1 extends Component {
  static displayName = Song1.name;

  constructor(props) {
    super(props);
    this.state = { song: [], loading: true };
  }

  componentDidMount() {
    this.populateSongData();
  }

  static renderSong(song) {
    return (
      <div>
        <h1 id="tabelLabel">{song.name}</h1>
        <div dangerouslySetInnerHTML={{__html: song.lyrics}} />
      </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Song1.renderSong(this.state.song);

    return (
      <div>
        {contents}
      </div>
    );
  }

  async populateSongData() {
    const response = await fetch('song?id=' + 1);
    const data = await response.json();
    this.setState({ song: data, loading: false });
  }
}
