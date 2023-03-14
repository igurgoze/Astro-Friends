import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, ListGroup } from 'react-bootstrap';
import '../../styles/style.css';

export default function FriendsList() {
  const [friends, setFriends] = useState([
    { name: 'Leo', score: 100 },
    { name: 'Logan', score: 200 },
    { name: 'Ian', score: 300 },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDeleteFriend = (name) => {
    const updatedFriends = friends.filter((friend) => friend.name !== name);
    setFriends(updatedFriends);
  };

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="container friends-list-background">
      <div className="row">
        <div className="col-lg-8">
          <h1 className="text-center">My Friends List</h1>
          <div className="d-flex mb-3">
            <FormControl
              type="text"
              placeholder="Search for a friend..."
              className="me-2"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <Link to="/" className="btn btn-primary">
              Play
            </Link>
          </div>
          <ListGroup>
            {filteredFriends.map((friend) => (
              <ListGroup.Item
                key={friend.name}
                className="friend-item d-flex justify-content-between align-items-center"
              >
                <span className="friend-name">{friend.name}</span>
                <span className="friend-score badge bg-secondary">
                  {friend.score}
                </span>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteFriend(friend.name)}
                >
                  X
                </button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
}
