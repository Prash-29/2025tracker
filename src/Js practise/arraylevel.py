arr= [1,[4,[9]]]

ans= 0 
def dfs(arr, level):
    ans = 0
    if isinstance(arr, list):
        for i in arr:
            ans+=dfs(i,level+1)
        return ans
    else:
        return arr*level
ans1=  dfs(arr, 0)
print(ans1)
