/**
 * Created by joshua on 17年6月28日.
 */
import React, {  Component } from 'react'
import PropTypes from 'prop-types'

export default class Posts extends Component {
    render() {
        return (
            <ul>
                {this.props.posts.map((post, i) =>
                    <li key={i}>{post.id} : {post.title}</li>
                )}
            </ul>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}