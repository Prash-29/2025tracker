# graph = {
#     0: [1],
#     1: [0, 2],
#     2: [1],
#     3: [4],
#     4: [3],
#     5: []
# }

# edges =[ [0,1] ,[1,0] ,[1,2] , [2,1] ,[3,4] ,[4,3] ]

# n=6

# parent = [i for i in range(n)]

# rank = [ 1 for _ in range(6)]


# def findParent(root):
#     #find root
#     start = root
#     while root!=parent[root]:
#         root = parent[root]
#     rootParent = root

#     while start!=rootParent :
#         nextNode = parent[start]
#         parent[start] = rootParent
#         start = nextNode

# visited = set()
# def dfs(node):
#     if node in visited:
#         return
#     for i in range(graph[node]):
#         dfs(node)


graph = {
    0: [1],
    1: [0, 2],
    2: [1],
    3: [4],
    4: [3],
    5: []
}
stack = []

visited = set()
ans =[]
count = 0



def dfs(node):
    stack = [node]
    while stack:
        curr = stack.pop()
        print(curr)
        if curr not in visited:
            visited.add(curr)
            stack.extend(graph[curr])

for i in range(6):
    if i not in visited:
        count+=1
        dfs(i)
print(end= '\n')
print(count)