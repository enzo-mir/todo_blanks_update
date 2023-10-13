import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import View from "@ioc:Adonis/Core/View";
import { Todo as TodoType } from "../../types/todo.type";
import Todo from "../../Models/Todo";

export default class PostsController {
  public async getAllData(ctx: HttpContextContract) {
    return View.render("welcome", {
      data: (await Todo.all()).sort(function (a, b) {
        return a.status < b.status ? 1 : -1;
      }),
    });
  }
  public async addTodo(ctx: HttpContextContract) {
    const data: TodoType = ctx.request.all();

    if (!(await Todo.query().select("*").where("title", data.title)).length) {
      await Todo.create(data);
    }
    ctx.response.redirect().toPath("/");
  }

  public async updateTodoStatus(ctx: HttpContextContract) {
    interface ParamsSchema {
      id: number;
      status: number;
    }

    let dataParams: ParamsSchema = ctx.params;

    try {
      await Todo.query().where("id", dataParams.id).update({
        status: dataParams.status,
      });
    } catch (err) {}
    ctx.response.redirect().toPath("/");
  }

  public async deleteTodo(ctx: HttpContextContract) {
    let id: number = ctx.params.id;
    await Todo.query().delete().where("id", id);
    ctx.response.redirect().toPath("/");
  }
}
