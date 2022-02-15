function reducers(List = [], action) {
    switch (action.type) {
      case "DELETE":
        return List.filter((list) => list._id !== action.payload);
      case "UPDATE":
        return List.map((list) => list._id === action.payload ? action.payload : List
        );
      case "FETCH_ALL":
        return action.payload;
      case "CREATE":
        return [...List, action.payload];
      default:
        return List;
    }
  }
  
  export default reducers;
  