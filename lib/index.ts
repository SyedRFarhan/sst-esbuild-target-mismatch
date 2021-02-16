import { App } from "@aws-cdk/core";
import MyStack from "./MyStack";

export default function main(app: App) {
  new MyStack(app, "my-stack");

  // Add more stacks
}
