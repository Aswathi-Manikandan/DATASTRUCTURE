
//node class
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

//class for linked list

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }


isEmpty(){
        return this.size===0
    }

getSize(){
    return this.size
}

//adding new node at the startng of the list 

prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    }else{
        node.next = this.head
        this.head = node
    }
    this.size++
}

// add at the end

append(value)
{
 const node = new Node(value)
 if(this.isEmpty()){
    this.head = node
 }else{
    let prev = this.head
    while(prev.next){
        prev = prev.next
    }
    prev.next=node
 }
 this.size++
}

//insert at the given index

insert(value,index){
    if(index<0 || index>this.size){
        return
    }
    if(index===0){
        this.prepend(value)
    }else{
        const node = new Node(value)
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
    }

}

//remove at given index

remove(index){
    if(index<0|| index>=this.size){
        return 
    }
    let removednode
    if(index===0){
        removednode = this.head
        this.head = this.head.next
    }else{
        let prev = this.head
        for(let i = 0;i<index-1;i++){
            prev = prev.next
        }
        removednode=prev.next
        prev.next = removednode
    }
    this.size --
    return removednode.value
}


//searching

search(value){
    if(this.isEmpty()){
        return -1
    }
    let i=0
    let curr = this.head
    while(curr){
        if(curr.value === value){
            return i 
        }
        curr=curr.next
        i++
    }
    return i 
}

//reverse
reverse(){
    let prev = null
    let curr = this.head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr= next

    }
    this.head = prev
}
print(){
    if(this.isEmpty()){
        console.log('list is empty');
    }else{
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value}`
            curr= curr.next
        }
        console.log(listValues);
    }
   
}


}



const list = new LinkedList()
console.log('is Empty? ',list.isEmpty());
console.log('total size is ',list.getSize());
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.print()
list.append(100)
list.print()

list.insert(99,0)
list.print()
list.insert(188,3)
list.print()
console.log('removed',list.remove(4))
list.print()
console.log('search',list.search(100));
list.print()
console.log('reversed list',list.reverse())
list.print()