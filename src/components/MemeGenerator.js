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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
        this.setState({
          allMemeImages: memes,
          error: ""
        })
      })
      .catch(err => {
        const errorMessage = err.toString()
        this.setState({ error: errorMessage })
      })
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const array = this.state.allMemeImages
    const selectedImage = array[Math.floor(Math.random() * array.length)];
    this.setState({
        randomImage: selectedImage.url
    })
  }

  render() {
    return (
      <div>
        <form 
            className="meme-form"
            onSubmit={this.handleSubmit}
        >
          <input
              type="text"
              name="topText"
              placeholder="Top text"
              value={this.state.topText}
              onChange={this.handleChange}
          />
          
          <br />
          
          <input 
              type="text"
              name="bottomText"
              placeholder="Bottom text"
              value={this.state.bottomText}
              onChange={this.handleChange}
          />
          
          <br />
          
          <button>Generate</button>
        </form>
        <div className="meme">
          { this.state.error ?  <p>{this.state.error}</p> : null}
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      
      </div>
    )
  }
}

export default MemeGenerator
