n = int(input('Please Enter a Number:'))
array =[]
count =1
for i in range(n):
    newArray = []
    for i in range(n):
        newArray.append(count)
        count+=1
    array.append(newArray)
for i in array:
    print(i)
dummy = array.copy()
count = 0
left =0
top = 0
right = n-1
bottom = n-1
count = 1
while True:
    if left>right or top>bottom:
        break
    for i in range(left,right+1):#index inclusion
        #print(array[left][i],end=" ")
        dummy[left][i]=count
        count+=1
    for j in range(top+1,bottom+1):
        #print(array[j][bottom],end=" ")
        dummy[j][bottom]=count
        count+=1
    if right-1<left or bottom-1<top or right-1<0 or bottom-1<0:
        break
    for k in range(right-1,left-1,-1):
        #print(array[bottom][k],end=" ")
        dummy[bottom][k]=count
        count+=1
    print()
    for l in range(bottom-1,top,-1):
        #print(array[l][left],end=" ")
        dummy[l][left]=count
        count+=1
    print()
    top+=1
    left+=1
    right-=1
    bottom-=1

for i in dummy:
    print(i)
