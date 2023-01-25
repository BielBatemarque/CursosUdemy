import './styles.css';

import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import {Posts} from '../../components/Posts/index'
import { Button } from '../../components/button';
import { TextInput } from '../../components/TextInput';


class Home extends Component{
      // this.handlePclick = this.handlePclick.bind(this);
        state = {
          posts: [],
          allPosts: [],
          page: 0,
          postsPerPage: 20,
          searchValue: ''
      };

    async componentDidMount(){
        await this.LoadPosts();
      } 

      LoadPosts = async () => { 
        const {page, postsPerPage} = this.state;

        const postAndPhotos = await loadPosts();
        this.setState({
           posts: postAndPhotos.slice(page, postsPerPage),
           allPosts: postAndPhotos
          });
      }

      loadMorePosts = () => {
        const{
          page,
          postsPerPage,
          allPosts,
          posts
        } = this.state;
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        this.setState({ posts, page:nextPage })
      }

      handleChange =(e) => {
          const {value} = e.target;
          this.setState({searchValue: value});
        }

  render(){
      const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
      const noMorePosts = page + postsPerPage >= allPosts.length;
      const filterdPosts = !!searchValue ? allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
      }) : posts;
    return (
      <section className='container' >
        <div className='search-container'>
        {!!searchValue && (
          <h1>Serach Value: {searchValue}</h1>
        
        )}
        <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
        </div>
        {filterdPosts.length > 0 && (
          <Posts posts={filterdPosts}/>
        )}
        {filterdPosts.length === 0 && (
          <h1>Não há posts com este nome</h1>
        )}
        <div className="button-container">
          {!searchValue && (
            <Button text="Load More Post" onClick={this.loadMorePosts} disabled={noMorePosts}/>
          )}
        </div>
      </section>

        );
    }
}

 export default Home;
