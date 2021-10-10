import React, { Component } from 'react'

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "",
      allMemeImages: [],
      error: ""
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => {
        if (!response.ok) {
          throw Error('Could not fetch the data')
        }
        return response.json()
      })
      .then(response => {
        const { memes } = response.data
        this.setState({ allMemeImages: memes })
      })
      .catch(err => {
        const errorMessage = err.toString()
        this.setState({ error: errorMessage })
      })
  }

  render() {
    return (
      <div>
        <p>{this.state.error}</p>
      </div>
    )
  }
}

export default MemeGenerator
