import React from 'react'

export default class CreateRedirectForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      url: "",
      customLink: ""
    }
    this.handleURL = this.handleURL.bind(this)
    this.handleCustomLink = this.handleURL.bind(this)
  }



  handleURL = e => {
    this.setState({url: e.target.value})
  }
  handleCustomLink = e => {
    this.setState({url: e.target.value})
  }

  componentDidMount = async () => {

  }
  render(){
    return(
      <div>

      </div>
    )
  }
}