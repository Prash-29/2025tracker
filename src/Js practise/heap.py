class Node:
    def __init__(self,value,parent):
        self.left = None
        self.right = None
        self.value = value
        self.parent = parent

class heap:
    def __init__(self):
        self.tail = None
        self.head = None

    def addNode(self,value):
        newNode = Node(value)
        if not self.head:
            self.head = newNode
            self.tail = newNode
        else:
            self.insert_at_next(newNode)

    def insert_at_next(self,node):
        queue = [self.head]
        while queue:
            root = queue.pop(0)
            if not root.left:
                root.left = node
                self.tail = node
                node.parent = root
            else:
                queue.append(root.left)
            if not root.right:
                root.right = node
            else:
                queue.append(root.right)
                self.tail = node
                node.parent = root

    def bubble_up(node):
        while node and node.parent and (node.val < node.parent.val):
            node.val,node.parent.val = node.parent.val,node.val
            node = node.parent

    def removeNode(self):
        if not self.head:
            return 'Empty'
        else:
            valuepopped = self.head.value
            #replace by bottom
            self.head.val = self.tail.val
            #remove last node
            
            # move tail 
            # use level order traversal - prev in level order is last node
    def last_node_replace(self):
        queue = [self.head]
        prev = None
        curr = None
        while queue:
            prev = curr
            curr = queue.pop(0)
            if curr.left:
                queue.append(curr.left)
            if curr.right:
                queue.append(curr.right)
        if self.tail.parent.left == self.tail:
                self.tail.parent.left = None
        if self.tail.parent.left == self.tail:
            self.tail.parent.right = None
        self.tail = prev
    
        