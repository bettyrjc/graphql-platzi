const courses = [
  {
    _id: "anyid",
    title: "titulo",
    teacher: "Betty",
    description: "un curso muy facil",
    topic: "graphql",
  },
  {
    _id: "anyid",
    title: "titulo 2",
    teacher: "Betty",
    description: "un curso muy facil",
    topic: "graphql",
  },
  {
    _id: "anyid",
    title: "titulo 3",
    teacher: "Betty",
    description: "un curso muy facil",
    topic: "graphql",
  },
];
module.exports = {
  getCourses: () => {
    return courses;
  },
};
