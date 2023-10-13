import Route from "@ioc:Adonis/Core/Route";

Route.get("/","PostsController.getAllData");
Route.post('/posts/add',"PostsController.addTodo").as('posts.add')
Route.get('/posts/updtate/:id/:status',"PostsController.updateTodoStatus")
Route.get('/posts/delete/:id',"PostsController.deleteTodo")