//priority queue.
//which is implemented as a priority heap.
//It maintains elements in a partially ordered sequence, where the
//element with the highest priority is always at the front of the queue.


#include<bits/stdc++.h>
using namespace std;
int main(){
    //maxheap
    priority_queue<int> pq1;
    //minheap
    priority_queue<int, vector<int>, greater<int>> pq2;
    cout<<"Before user inputs.What to perform max-heap(press 1) or min-heap(press 2)!"<<endl;
    int userChoice;
    cin>>userChoice;
    cout<<"Enter integer numbers and -1 to stop."<<endl;
    int num;
    while(1){
        cin>>num;
        if(num!=-1){
            if(userChoice==1)
            pq1.push(num);
            else
            pq2.push(num);
        }
        else
        break;
    }

    
    if(pq1.empty()){
        while(!pq2.empty())
        {
        cout<<pq2.top()<<" ";
        pq2.pop();
        }
    }
    else{
        pq1.emplace(25); //It is used to put the element in-place.
        while(!pq1.empty())
        {
        cout<<pq1.top()<<" ";
        pq1.pop();
        }
    }
}
