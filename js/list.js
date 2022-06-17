export class ToDoList {
  list_UnComplete = [];
  list_Complete = [];

  add(data) {
    this.list_UnComplete = [...this.list_UnComplete, data];
  }

  complete(data) {
    this.list_Complete = [...this.list_Complete, data];
  }

  remove(data) {
    this.list_UnComplete = this.list_UnComplete.filter((ele) => {
      return ele !== data;
    });
  }
  sortAtoZ() {
    this.list_UnComplete.sort();
    this.list_Complete.sort();
  }

  sortZtoA() {
    this.sortAtoZ();
    this.list_UnComplete.reverse();
    this.list_Complete.reverse();
  }
}
