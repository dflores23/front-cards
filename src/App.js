// Import our components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";


// import React Hooks
import { useState, useEffect } from "react";

// Import React Router Components
import { Route, Switch, Link } from "react-router-dom";

function App(props) {
 
  // ________________________
  // State & Other Variables
  // ________________________

  //api url
  const url = "https://back-cards.herokuapp.com/cards/";

  // state to hold list of todos
  const [posts, setPosts] = useState([]);

  // an object that represents a null todo
  const nullTodo = {
    question: "",
    answer: "",
  };

  // const state to hold todo to edit 
  const [targetTodo, setTargetTodo] = useState(nullTodo);

  // ___________
  // Functions
  // ___________
  const getTodos = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPosts(data)
  }

  // Function to add todo from form data
  const addTodos = async (newTodo) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    // get updated list of todos
    getTodos();
  };


  // Function to select todo to edit
  const getTargetTodo = (todo) => {
    setTargetTodo(todo);
    props.history.push("/edit");
  }

  // Function to edit todo on form submission
  const updateTodo = async (todo) => {
    const response = await fetch(url + todo.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
    getTodos();
  }

  // Function to edit todo on form submission
  const deleteTodo = async (todo) => {
    const response = await fetch(url + todo.id + "/", {
      method: "delete",
    });

    // get updated list of todos
    getTodos();
    props.history.push("/");
  };

  // ___________
  // useEffects
  // ___________
  // make the api call when the component loads only the first time
  useEffect(() => {
    getTodos()
  }, [])
  // _____________
  // Returned JSX
  // _____________
  return (
    
    <div className="App bg-zinc-300">
      <Link to="/"><h1 class="font-bold text-center italic hover:not-italic" >My Flashcard's</h1></Link>
      <Link to="/new"><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Create New Flashcard</button></Link>
      <Switch>
        {/* INDEX PAGE */}
       
        <Route
          exact
          path="/"
          render={(routerProps) => {
            return <AllPosts {...routerProps} posts={posts} />;
          }}
        />
        
        {/* SHOW PAGE */}
   
        <Route
          path="/post/:id"
          render={(routerProps) => (
            <SinglePost {...routerProps}
              posts={posts}
              edit={getTargetTodo}
              deleteTodo={deleteTodo} />
          )}
        />
         
        {/* NEW AND EDIT FORM PAGES */}
        <Route
          path="/new"
          render={(routerProps) => (
            <Form 
              {...routerProps}
              initialTodo={nullTodo}
              handleSubmit={addTodos}
              buttonLabel="create a to do"
            />
          )}
        />

        <Route
          path="/edit"
          render={(routerProps) => {
            return <Form {...routerProps}
              initialTodo={targetTodo}
              handleSubmit={updateTodo}
              buttonLabel ="update"
            />;
          }}
        />
      </Switch>
      
    </div>
  );
}

export default App;


