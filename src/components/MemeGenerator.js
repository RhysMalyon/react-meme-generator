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
    const selectedImage = array[Math.floor(Math.random() * array.length)]
    this.setState({ randomImage: selectedImage })
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
