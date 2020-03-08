const initState = {
  projects: [
    {
      id: "1",
      title: "First Project",
      content: "lorem impsum et srala lala bla bla blaaa"
    },
    {
      id: "2",
      title: "Second Project",
      content: "lore impsum et srala lala bla bla blaaa"
    },
    {
      id: "3",
      title: "Third Project",
      content: "lorem impsum et srala lala bla bla blaaa"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
