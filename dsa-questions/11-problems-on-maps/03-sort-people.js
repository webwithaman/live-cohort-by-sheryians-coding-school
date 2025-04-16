let map = new Map();

for (let i = 0; i < heights.length; i++) map.set(heights[i], names[i]);

heights.sort((a, b) => b - a);

let ans = [];

for (let i = 0; i < heights.length; i++) ans[i] = map.get(heights[i]);

return ans;
