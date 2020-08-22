function createComparisonFunction(propertyName) {
  return function (object1, object2) {
    let value1 = object1[propertyName];
    let value2 = object2[propertyName];
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
}

let data = [
  { name: "Zachary", age: 28 },
  { name: "Nicholas", age: 29 },
];
data.sort(createComparisonFunction("name"));
console.log(data[0].name); // Nicholas
data.sort(createComparisonFunction("age"));
function outer() {
  inner();
}
function inner() {
  console.log(arguments.callee.caller);
}
outer();


function endPointHandler(request,response){
    User.findById(request.userId,function(err,user){
        if (err){
            response.send(err)
        } else{
            Tasks.findById(user.tasksId,function(err,tasks){
                if (err){
                    return response.send(err);
                } else {
                    tasks.completed = true
                    tasks.save(function(err){
                        if (err){
                            return response.send(err)
                        }else{
                            response.send('Task completed')
                        }
                    });
                }
            });
        }
    })
}

function endPointHandler2(request,response){
    User.findById(request.userId)
        .then(function(user){
            return Task.findById(user.taskId);
        })
        .then(function(task){
            tasks.completed = true;
            return tasks.save();
        })
        .then(function(){
            response.send('y');
        })
        .catch(function(console.error(){
            ..
        };))
}