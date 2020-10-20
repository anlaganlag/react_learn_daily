import React, { useState } from 'react';
import axios from 'axios'; 
import ReactLoading from 'react-loading';
import { Media } from 'react-bootstrap';
export default function GitHub() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('web')
  const [isLoading, setIsLoading] = useState(false);
  const getData = async() => {
        const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);                
        console.log(res);
        setData(res.data.items)
        setIsLoading(false);
  }
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    getData();
  }
  const ListUsers = data.map((user) =>            
    <Media key={user.id}>
      <a href={user.html_url}>   
        <img
          width={100}
          height={100}
          className="mr-3"
          src={user.avatar_url}
          alt="用户头像"
        />
      </a>
      <Media.Body>
        <h5>用户名: {user.login}</h5>
        <p>Id: { user.id }</p>
      </Media.Body>
    </Media>
  );
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={e=>setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </form>
      <h3>GitHub 用户搜索结果</h3>
      { isLoading &&                            
        <ReactLoading type="spinningBubbles" color="orangered" />
      }
      {/* {kkk} */}
      {ListUsers}    

    </div>
  );
}