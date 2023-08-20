function solution(arr)
{   
    const stack = [];
    const answer = [];
    
    stack.push(arr[0]);
    answer.push(arr[0]);
    for(let i = 1; i < arr.length; i++) {
        // console.log(arr[i]);
        // console.log(`stack pop:${stack[stack.length - 1]}`);
        
        if(stack[stack.length - 1] === arr[i]) {
            continue;
        }
        // console.log(`stack push ${arr[i]}`);
        stack.push(arr[i]);
        answer.push(arr[i]);
    }
    
    return answer;
}