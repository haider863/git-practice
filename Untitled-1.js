"
                                          0    1   2   3   4   5   6   7    8    0 1 2 3 4  5 6  7  
                                          9    8   7   6   5   4   3   2    1    9 8 7 6 4  3 2  1

  remove(index) {                            //4
    if (index > 0 && index > this.size) {    //
      return;
    }
    let current = this.head;                 //cur=9
    let previous;
    let count = 0;
    if (index === 0) {                    
      this.head = current.next;
    } else {
      while (count < index) {                //0<4                  //1<4      //2<4       //3<4      4<4 wrong
        count++;                             //1                    //2        //3         //4      
        previous = current;                  //pre=9              //pre=8     //pre=7      //pre=6
        current = current.next;              //curr=adress of 8   //cur=7     //cur=6      //cur=5
      }
      previous.next = current.next;         //adress of 4 = adress of 5 
    }
    this.size--;
  }




  insertAt(data, index) {                      444    4       
    if (index > 0 && index > this.size) {  //4>0 
      return; //return
    } 
    if (index === 0)   {                    //4!==0
      this.insert(data);
      return;
    }
    const node = new Node(data);           //node=new Node(444)
    let current, previous;                  //
    current = this.head;                    //current=100
    let count = 0;                         
    while (count < index) {                  //0<4       //1<4                  //2<4                    //3<4                 4<4(condition rong)
      previous = current;                    //prev=100  //pre=adress of 200    //pre=adress od 300      //pre=adress of 400   //
      count++;                                //1        //2                    //3                      //4
      current = current.next;  //curr=adress of 200      //300                  //400                    //adress of 500
    }
    node.next = current;                     //node.next=adress of 500?" 
    previous.next = node;                     //pre.next = 444

    this.size++;                              //
  }


  delete(index){
   let curr=this.head;   //100 da diya curr
   
  }

  "
  0    1   2   3   4   5   6   7    8    0 1 2 3 4  5 6  7  
  9    8   7   6   5   4   3   2    1    9 8 7 6 4  3 2  1

  search(index) {                       4
    let current = this.head;            cur=9
    let count = 0;                  
    while (current) {                 8             
      if (count == index) {            1==4
        console.log(current.data);
      }                                
      count++;                          2
      current = current.next;            cur=7
    }
  }