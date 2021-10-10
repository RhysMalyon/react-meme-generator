import React, { Component } from 'react'

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "",
      allMemeImages: []
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data
        this.setState({ allMemeImages: memes })
      })
  }

  render() {
    return (
      <div>
        <p>Test</p>
      </div>
    )
  }
}

export default MemeGenerator
