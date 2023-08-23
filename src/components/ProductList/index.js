import {Component} from 'react'
import UserInput from '../UserInput'
import BlogItem from '../ProductItem'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogsData: [], SearchInput: ''}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogsData: formattedData, isLoading: false})
  }

  onChangeInput = event => {
    this.setState({SearchInput: event})
  }

  render() {
    const {blogsData, isLoading, SearchInput} = this.state
    const searchResults = blogsData.filter(eachUser =>
      eachUser.author.toLowerCase().includes(SearchInput.toLowerCase()),
    )
    return (
      <div className="blogs-list-container">
        <UserInput onChangeInput={this.onChangeInput} />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <ul className="blogs-list">
            {searchResults.map(eachBlogItem => (
              <BlogItem key={eachBlogItem.id} blogItemDetails={eachBlogItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
