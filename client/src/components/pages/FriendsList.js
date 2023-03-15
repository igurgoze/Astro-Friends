import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_NEW_HIGHSCORE } from '../../utils/mutations';

import '../../styles/style.css';

export default function FriendsList() {
  const [friends, setFriends] = useState([
    { name: 'Leo', score: 100 },
    { name: 'Logan', score: 200 },
    { name: 'Ian', score: 300 },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [addNewHighScore, {error}] = useMutation(ADD_NEW_HIGHSCORE);

  const handleDeleteFriend = (name) => {
    const updatedFriends = friends.filter((friend) => friend.name !== name);
    setFriends(updatedFriends);
  };

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <body className="friends-list-background app-container" style={{ fontFamily: "'Press Start 2P', cursive" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="text-center fade-in-out" style={{ color: "white" }}>My Friends List</h1>
            <div className="d-flex mb-3">
              <FormControl
                type="text"
                placeholder="Search for a friend..."
                className="me-2"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", outline: "none" }}
              />
              <Link to="/" className="btn btn-primary" style={{ backgroundColor: "transparent", color: "white", border: "1px solid white" }}>
                Play
              </Link>
            </div>
            {filteredFriends.map((friend) => (
              <div
                key={friend.name}
                className="d-flex justify-content-between align-items-center"
                style={{ color: "white" }}
              >
                <span className="friend-name" style={{ fontFamily: "'Press Start 2P', cursive" }}>{friend.name}</span>
                <span className="friend-score badge bg-secondary" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                  {friend.score}
                </span>
                <butto
                  className="btn btn-danger"
                  onClick={() => handleDeleteFriend(friend.name)}
                  style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", fontFamily: "'Press Start 2P', cursive" }}
                >
                  X
                </butto>
              </div>
            ))}
          </div>
          <div className="col-lg-4">
            <h2 className="text-center" style={{ color: "white" }}>Your Highscore</h2>
            {/* insert highscore content here?? */}
          </div>
        </div>
      </div>
    </body>
  );
}
