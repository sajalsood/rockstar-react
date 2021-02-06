import React, { Component } from 'react';

export class Song2 extends Component {
  static displayName = Song2.name;

  constructor(props) {
    super(props);
    this.state = { song: [], loading: true };
  }

  componentDidMount() {
    this.populateSongData();
  }

  static renderSong(song) {
    return (
      <div className="text-center m-10">
      <div className="card">
        <img className="card-img-top card-img-pos" src={`${process.env.PUBLIC_URL}/images/${song.imageUrl}`} alt="Card image"  />
      </div>
      <div className="pt-5">
        <h1>{song.name}</h1>
        <h3>{song.artist}</h3>
        <div dangerouslySetInnerHTML={{__html: song.lyrics}} />
      </div>
    </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Song2.renderSong(this.state.song);

    return (
      <div>
        {contents}
      </div>
    );
  }

  async populateSongData() {
    const response = await fetch('song?id=' + 2);
    const data = await response.json();
    this.setState({ song: data, loading: false });
  }
}
