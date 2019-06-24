//import dependencies
import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0
  };

  clickFriend = id => {
    var resetGame=false;

    const friends = this.state.friends.map(friend => {
      // if id passed in is equal to friend[i].id
      if (friend.id === id) {
        // if that friend's clicked state is false, then let's make it a correct guess
        if (!friend.clicked) {
          friend.clicked = true;
          // alert("setting true");
          const { score, topScore } = this.state;
          // create a new score based on the current score + 1
          const newScore = score + 1;

          // if newScore is greater than the current topScore, newScore is the new topScore
          const newTopScore = (newScore > topScore) ? newScore : topScore;
          this.setState({
            topScore: newTopScore,
            score: newScore
          });
          // alert(this.state.score + " of " + this.state.topScore+"( newscore="+newScore+"of"+newTopScore+")");
        } else { 
          //alert("already true");
          this.setState({
            score: 0
          });
          resetGame=true;
          //alert(this.state.score + " of " + this.state.topScore);
         }
      }
      return friend;
    });
    friends.sort(() => (0.5 - Math.random()));
    this.setState({ friends });
    if(resetGame===true)
    {
      const newfriends = this.state.friends.map(friend => {

        friend.clicked = false;

        return friend;
      });
      this.setState({ friends:newfriends });

    }
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        {this.state.friends.map(friend => (
          <FriendCard
            clickFriend={this.clickFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
