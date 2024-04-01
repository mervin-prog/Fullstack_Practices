#include<bits/stdc++.h>
using namespace std;
int front=-1,rear=-1;
void enqueue(int n,int queue[]) 
{
    cout<<"\n Enter a element"<<endl;
    int x;
    cin>>x;
    if(rear==n-1){
        cout<<"\n Overflow"<<endl;
    }
    else if(front==-1 && rear==-1){
        front=rear=0;
    }
    else{
        rear++;
    }
    queue[rear]=x;
}
void dequeue() 
{
   if(front==-1 && rear==-1){
    cout<<"\n Underflow"<<endl;
   }
   else if(front==rear){
    front=rear=-1;
   }
   else{
    front++;
   }
}
void display(int queue[])
{
    if(front==-1 && rear==-1){
        cout<<"\n Underflow"<<endl;
    }
    else{
        cout<<"\n Queue Elements"<<endl;
    for(int i=front; i<=rear; i++){
        cout<<queue[i]<<" ";
    }
    }

}
int main()
{
    cout<<"Enter Queue Size"<<endl;
    int n;
    cin>>n;
    int queue[n];
    int choice;
   
    while(choice!=4){
        cout<<"\n 1.Insert an element into queue"<<endl;
        cout<<"\n 2.Delete an element from queue"<<endl;
        cout<<"\n 3.Display queue"<<endl;
        cin>>choice;
    switch (choice)
    {
    case 1:
       enqueue(n,queue);
        break;
    case 2:
       dequeue();
       break;
    case 3:
        display(queue);
        break;
    case 4:
        exit(0);
        break;
    }
    }
}