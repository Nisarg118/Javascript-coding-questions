// Question Link : "https://www.kodekarma.dev/frontend/coding-problems/distribute-task-units"

function distributeTasks(tasks) {
  let ans = [];

  for (let i = 0; i < tasks.length; i++) {
    const { name, quantity } = tasks[i];
    let n = quantity;
    for (let j = 0; j < n; j++) {
      ans.push({ name, quantity: 1 });
    }
  }
  return ans;
}
module.exports = distributeTasks;
